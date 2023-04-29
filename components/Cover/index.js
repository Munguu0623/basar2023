import Image from "next/image";

import { AudioOutlined } from "@ant-design/icons";
import { Input, Space, Form } from "antd";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
export default function Cover(second) {
  const onSearch = (value) => console.log(value);

  return (
    <>
      <div class="pt-32 md:py-12 xl:container m-auto px-6 md:px-12">
        <div
          aria-hidden="true"
          class="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 "
        ></div>
        <div class="relative lg:flex lg:items-center lg:gap-12">
          <div class="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
            <h1 class=" text-AboutTitle font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl ">
              Амьтад хайртай бүх хүнд зориулагдсан
              <div class="  text-btnOrange">цогц флатпорм</div>
            </h1>
            <div className="mt-20">
              <Form action="" class="w-full mt-8">
                <Search
                  placeholder="хайх утгаа оруулна уу"
                  enterButton="хайх"
                  // className=" hover:bg-btnOrange/80"
                  style={{
                    backgroundColor: "#33A0FF",
                    color: "white",
                    borderRadius: "8px",
                  }}
                  size="large"
                  onSearch={onSearch}
                  enterButtonStyle={{ ":hover": { backgroundColor: "red" } }}
                />
              </Form>
            </div>
          </div>
          <div class="overflow-hidden w-full lg:w-7/12  relative">
            {/* <div className="bg-blue-500">
              <Image
                src="/image/basar/about_answer.png"
                width={200}
                height={300}
              />
            </div> */}
            <div className=" overflow-hidden">
              <Image
                src="/image/basar/cover_basar.png"
                alt="Picture of the author"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
