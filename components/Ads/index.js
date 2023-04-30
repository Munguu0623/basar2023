import Image from "next/image";
import Link from "next/link";
import { Button, Divider, Radio, Space } from "antd";
import { useState } from "react";
export default function Ads(second) {
  return (
    <>
      <div class="py-12">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="mb-12 space-y-2 text-center ">
            <div className="md:mx-40 flex justify-center">
              <button className="bg-gray-400 px-6 rounded-l-xl text-white border border-solid border-gray-400">
                Бүгд
              </button>
              <button className=" px-6  text-gray-700 border border-solid border-gray-200">
                Шинэ
              </button>

              <form className="md:w-6/12 mt-10 md:mt-0 ">
                <label
                  for="хайх утгаа оруулна уу"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  хайх утгаа оруулна уу
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                    class="block w-full p-3 pl-10 text-sm text-gray-900 border rounded-r-xl  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="хайх утгаа оруулна уу"
                    required
                  />
                  <button
                    type="submit"
                    class="text-white absolute right-2.5 bottom-1.5 bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
                  >
                    хайх
                  </button>
                </div>
              </form>

              <button
                className="py-2 px-6 bg-blue-500 text-white rounded-lg md:ml-20
              "
              >
                <Link href="/ads/add"> зар нэмэх</Link>
              </button>
            </div>
          </div>

          <div>
            <div class="lg:w-3/4 xl:w-2/4 lg:mx-auto">
              <div class="group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10">
                <div class="sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
                  <Image
                    src="/image/news/cute.webp"
                    alt="art cover"
                    width="1000"
                    height="667"
                    className="h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div class="sm:p-2 sm:pl-0 sm:w-4/6">
                  <span class="mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">
                    2023-04-29
                  </span>
                  <h2 class="text-2xl font-semibold text-gray-800 hover:text-gray-800">
                    Нохой
                  </h2>
                  <p class="my-6 text-gray-600 dark:text-gray-300">
                    Гадаад явах болсон тул сайн эзэн хайж байна. Засалгаа
                    хийлгээд, вакцин туулгадаа хамрагдсан Удмын бичигтэй эр
                    гөлөг зарна. Утсаар дэлгэрэнгүй мэдээлэл авах боломжтой.
                  </p>
                  <div class="flex gap-4">
                    <Link
                      href="#"
                      class="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-gray dark:border-gray-700 dark:text-gray-300"
                    >
                      Нохой
                    </Link>
                    <Link
                      href="#"
                      class="px-3 py-1  bg-red-500 text-white hover:text-white rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary  "
                    >
                      VIP
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
