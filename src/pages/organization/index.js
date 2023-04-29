import Link from "next/link";
import Navbar from "../../../components/Layout/Navbar";
import Image from "next/image";
export default function Organization(second) {
  return (
    <>
      <Navbar>
        <div class="mt-16 md:mt-0">
          <Image
            className="hidden lg:flex lg:visible bg-cover  bg-top bg-fixed"
            src="/image/partners/page_bigs.png"
            width={1900}
            height={100}
          />
          <Image
            className="lg:hidden bg-cover bg-top bg-fixed"
            src="/image/partners/page_smalls.png"
            width={1900}
            height={100}
          />
          <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div class="mb-12 space-y-2 text-center"></div>

            <Link className="" href="#">
              {" "}
              <div class="lg:w-3/4 xl:w-2/4 lg:mx-auto my-32">
                <div class="group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10">
                  <div class="sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                      alt="art cover"
                      loading="lazy"
                      width="1000"
                      height="667"
                      class="h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div class="sm:p-2 sm:pl-0 sm:w-4/6">
                    <span class="mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">
                      Mar 27 2023
                    </span>
                    <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                      "Сайн санаа амьтдад" ТББ
                    </h3>
                    <p class="my-6 text-gray-600 dark:text-gray-300">
                      "Сайн санаа амьтдад" ТББ нь 2017 онд амьтанд хайртай
                      залуус золбин гэх тодотголтой зовж шаналсан амьтдыг аварч
                      хамгаалан, нийгэмд тэдний дуу хоолой болж хүн амьтанд
                      ээлтэй эерэг нийгмийг цогцлооход хувь нэмрээ оруулах
                      зорилгоор үүсгэн байгуулагдсан ашгийн бус нийгэмд үйлчлэх
                      төрийн бус байгууллага юм.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Navbar>
    </>
  );
}
