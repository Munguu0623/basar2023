import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
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
              <form className="  md:mt-0 ">
                <label
                  for="хайх утгаа оруулна уу"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only  "
                >
                  хайх утгаа оруулна уу
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500  "
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
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-full  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="хайх утгаа оруулна уу"
                    required
                  />
                  <button
                    type="submit"
                    class="text-white absolute right-2.5 bottom-1.5 bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full   text-sm p-3  "
                  >
                    <AiOutlineArrowRight className="text-lg" />
                  </button>
                </div>
              </form>
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
