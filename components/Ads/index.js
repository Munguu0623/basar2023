import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Form,
  Spin,
  Modal,
  Row,
  Input,
  Select,
  Upload,
  message,
  Card,
} from "antd";
import { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { db, storage } from "../../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  addDoc,
  collection,
  getDocs,
  or,
  query,
  where,
} from "firebase/firestore";
import dayjs from "dayjs";
import { useAuth } from "../../firebase/useFireBaseAuth";
import { useRouter } from "next/router";

export default function Ads(second) {
  const { user } = useAuth();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [form] = Form.useForm();
  useEffect(() => {
    fetchService(false);
  }, []);

  const handleChange = (info) => {
    const file = info.file.originFileObj;
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      return message.error("You can only upload JPG/PNG file!");
    }
    if (info.file.status == "done") {
      setLoading(true);
      const imageRef = ref(storage, file.name);
      uploadBytes(imageRef, file)
        .then(() => {
          getDownloadURL(imageRef)
            .then((url) => {
              setLoading(false);
              setUrl(url);
              console.log(url);
              message.success("Амжилттай хадгалагдлаа");
            })
            .catch((err) => {
              console.log(err);
              setLoading(false);
            });
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  const onCreate = async (fieldValues) => {
    const values = {
      ...fieldValues,
      image: url,
      date: dayjs().format("YYYY-MM-DD"),
      username: user?.username,
    };
    try {
      const docRef = await addDoc(collection(db, "service"), values);
      message.success("Амжилттай хадгалагдлаа");
      fetchService(false);
      setOpen(false);
      form.resetFields();
    } catch (error) {
      console.error("An error occured", error);
    }
  };

  const fetchService = async (filter) => {
    try {
      // Create a Firestore query to fetch all the todos for the user with the given ID.
      const serviceRef = collection(db, "service");
      const init = query(serviceRef);
      const filtered = query(
        serviceRef,
        or(where("title", "==", searchValue), where("note", "==", searchValue))
      );

      // Execute the query and get a snapshot of the results.
      let querySnapshot;
      if (filter && searchValue) querySnapshot = await getDocs(filtered);
      else querySnapshot = await getDocs(init);

      let data = [];
      querySnapshot.forEach((order) => {
        data.push({ ...order.data(), id: order.id });
      });
      console.log(data);
      setDataSource(data.reverse());
    } catch (error) {
      console.error("An error occured", error);
    }
  };
  const category = (type) => {
    const temp = { dog: "Нохой", cat: "Муур", fish: "Загас", bird: "Шувуу" };
    return temp[type];
  };
  return (
    <>
      {open ? (
        <Card className="w-full ">
          <div className="text-center font-medium text-lg mt-3">Зар нэмэх</div>
          <Form
            form={form}
            layout="vertical"
            name="form_in_modal"
            className="formmm w-full"
            onFinish={onCreate}
          >
            <Form.Item
              name="title"
              label="Зарын гарчиг"
              className="sm:w-96 w-full"
              style={{ marginBottom: 8 }}
              rules={[
                {
                  required: true,
                  message: "Гарчиг оруулна уу",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="type"
              label="Сонгох"
              rules={[
                {
                  required: true,
                  message: "Сонгоно уу",
                },
              ]}
              style={{ marginBottom: 8 }}
            >
              <Select
                style={{ width: "100%" }}
                options={[
                  { value: "ad", label: "Зар" },
                  { value: "adoption", label: "Үрчилгээ" },
                ]}
              />
            </Form.Item>

            <Form.Item
              name="category"
              label="Ангилал"
              rules={[
                {
                  required: true,
                  message: "Ангилал сонгоно уу!",
                },
              ]}
              style={{ marginBottom: 8 }}
            >
              <Select
                style={{ width: "100%" }}
                options={[
                  { value: "dog", label: "Нохой" },
                  { value: "cat", label: "Муур" },
                  { value: "fish", label: "Загас" },
                  { value: "bird", label: "Шувуу" },
                ]}
              />
            </Form.Item>
            <Form.Item
              name={"phone"}
              label="Утас"
              style={{ width: "100%", marginBottom: 8 }}
              rules={[
                {
                  required: true,
                  message: "Утас оруулна уу!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item label={"Зураг"}>
              <Upload onChange={handleChange}>
                <Button icon={<UploadOutlined />}>Зураг оруулах</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              name={"location"}
              label="Байршил"
              style={{ width: "100%", marginBottom: 8 }}
              rules={[
                {
                  required: true,
                  message: "Байршил оруулна уу!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={"note"}
              label="Тайлбар"
              style={{ width: "100%", marginBottom: 8 }}
              rules={[
                {
                  required: true,
                  message: "Тайлбар оруулна уу!",
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
            <Row className="flex justify-between">
              <Button
                disabled={loading}
                className="bg-blue-500 text-white hover:text-white"
                onClick={() => form.submit()}
              >
                Хадгалах
              </Button>
              <Button onClick={() => setOpen(false)}>Буцах</Button>
            </Row>
          </Form>
        </Card>
      ) : (
        <div className="py-12">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="mb-12 space-y-2 text-center ">
              <div className="md:mx-40 flex justify-center">
                <button className="bg-gray-400 px-6 rounded-l-xl text-white border border-solid border-gray-400">
                  Бүгд
                </button>
                <button className=" px-6  text-gray-700 border border-solid border-gray-200">
                  Шинэ
                </button>

                <div className="md:w-6/12 mt-10 md:mt-0 ">
                  <label
                    for="хайх утгаа оруулна уу"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only  "
                  >
                    хайх утгаа оруулна уу
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500  "
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="хайх утгаа оруулна уу"
                      id="search"
                      value={searchValue}
                      className="block w-full p-3 pl-10 text-sm text-gray-900 border rounded-r-xl  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="хайх утгаа оруулна уу"
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button
                      onClick={() => fetchService(true)}
                      className="text-white absolute right-2.5 bottom-1.5 bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
                    >
                      хайх
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (!user) router.push("/login");
                    else setOpen(true);
                  }}
                  className="py-2 px-6 bg-blue-500 text-white rounded-lg md:ml-20
              "
                >
                  Зар нэмэх
                </button>
              </div>
            </div>

            {dataSource?.map((item, i) => {
              return (
                <div key={i}>
                  <div className="lg:w-3/4 xl:w-2/4 lg:mx-auto mb-4">
                    <div className="group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white   border border-transparent hover:border-gray-100    shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10">
                      <div className="sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
                        <img
                          src={item.image}
                          alt="art cover"
                          width="800"
                          height="467"
                          className="h-52 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="sm:p-2 sm:pl-0 sm:w-4/6">
                        <span className="mt-4 mb-2 inline-block font-medium text-gray-400   sm:mt-0">
                          {dayjs(item.date).format("YYYY-MM-DD")}
                        </span>
                        <h2 className="text-2xl font-semibold text-gray-800 hover:text-gray-800">
                          {item.title}
                        </h2>
                        <p className="my-6 text-gray-600  ">{item.note}</p>
                        <p className="my-1 text-gray-600  ">{item.phone}</p>
                        <div className="flex gap-4">
                          <Link
                            href="/"
                            className="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-gray    "
                          >
                            {category(item.category)}
                          </Link>
                          {i % 2 == 0 && (
                            <Link
                              href="/"
                              className="px-3 py-1  bg-red-500 text-white hover:text-white rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary  "
                            >
                              VIP
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
