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

            <Link className="" href="/organization/news">
              {" "}
              <div class="lg:w-3/4 xl:w-2/4 lg:mx-auto my-32">
                <div class="group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white  border border-transparent hover:border-gray-100   shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10">
                  <div class="sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
                    <Image
                      className="hidden lg:flex lg:visible bg-cover  bg-top bg-fixed"
                      alt="postbg"
                      src="/image/partners/pro_official3.png"
                      width={1900}
                      height={1000}
                    />
                  </div>
                  <div class="sm:p-2 sm:pl-0 sm:w-4/6">
                    <span class="mt-4 mb-2 inline-block font-medium text-gray-400   sm:mt-0">
                      Mar 27 2023
                    </span>
                    <h2 class="text-2xl font-semibold text-gray-800 ">
                      Сайн санаа амьтдад ТББ
                    </h2>
                    <p class="my-6 text-gray-600  ">
                      Сайн санаа амьтдад ТББ нь 2017 онд амьтанд хайртай залуус
                      золбин гэх тодотголтой зовж шаналсан амьтдыг аварч
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
