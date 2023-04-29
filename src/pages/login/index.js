import Image from "next/image";
import {
  UserOutlined,
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Input, Space } from "antd";

export default function Login(second) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <>
      <div class="m-auto xl:container px-12 sm:px-0 mx-auto">
        <div class="mx-auto h-full sm:w-max">
          <div class="m-auto  py-12">
            <div class="space-y-4">
              <a href="" className="flex">
                <Image
                  src="/image/logo/menu_logo.png"
                  alt="Picture of the author"
                  width={60}
                  height={50}
                />
                <Image
                  className="ml-4"
                  src="/image/logo/menu_logo_02.png"
                  alt="Picture of the author"
                  width={200}
                  height={20}
                />
              </a>
            </div>
            <div class="mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
              <h3 class="text-2xl font-semibold  text-AboutTitle dark:text-white">
                Basar.mn нэвтрэх
              </h3>
              <div class="mt-12 flex flex-wrap sm:grid gap-6 grid-cols-2">
                <button class="w-full h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700">
                  <div class="w-max mx-auto flex items-center justify-center space-x-4">
                    <Image
                      src="/image/basar/google_logo.png"
                      class="w-5"
                      alt="Picture of the author"
                      width={60}
                      height={50}
                    />
                    <span class="block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white">
                      Gmail -ээр нэвтрэх
                    </span>
                  </div>
                </button>
                <button class="w-full h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700">
                  <div class="w-max mx-auto flex items-center justify-center space-x-4 text-white">
                    <Image
                      src="/image/basar/facebook.png"
                      class="w-5"
                      alt="Picture of the author"
                      width={60}
                      height={50}
                    />
                    <span class="block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white">
                      Facebook-ээр нэвтрэх
                    </span>
                  </div>
                </button>
              </div>

              <form action="" class="mt-10 space-y-8 dark:text-white">
                <div>
                  <Input
                    size="large"
                    placeholder="Нэвтрэх нэр"
                    prefix={<UserOutlined />}
                  />
                </div>

                <div class="flex flex-col items-end">
                  <Input.Password
                    size="large"
                    prefix={<LockOutlined />}
                    placeholder="нууц үг"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                  <button type="reset" class="-mr-3 w-max p-3">
                    <span class="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                      Нууц үг мартсан?
                    </span>
                  </button>
                </div>

                <div>
                  <button class="w-full rounded-full  bg-btnOrange  h-11 flex items-center justify-center px-6 py-3 transition hover:bg-btnOrange/80 ">
                    <span class="text-base font-semibold text-white dark:text-gray-900">
                      Нэвтрэх
                    </span>
                  </button>
                  <button href="#" type="reset" class="-ml-3 w-max p-3">
                    <span class="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                      Бүртгүүлэх
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div class="border-t pt-12 text-gray-500 dark:border-gray-800">
              <div class="space-x-4 text-center">
                <span>&copy; Basar.mn</span>
                <a
                  href="#"
                  class="text-sm hover:text-sky-900 dark:hover:text-gray-300"
                >
                  Холбоо барих
                </a>
                <a
                  href="#"
                  class="text-sm hover:text-sky-900 dark:hover:text-gray-300"
                >
                  Privacy & Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
