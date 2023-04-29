import Link from "next/link";
import Navbar from "../../../components/Layout/Navbar";

export default function Organization(second) {
  return (
    <>
      <Navbar>
        <div class="py-12">
          <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div class="mb-12 space-y-2 text-center">
              <h2 class="text-3xl font-bold text-gray-800 md:text-4xl  ">
                Бидинтэй хамтран ажилдаг байгууллагууд
              </h2>
              <p class="text-gray-600   lg:mx-auto lg:w-6/12">
                Quam hic dolore cumque voluptate rerum beatae et quae, tempore
                sunt, debitis dolorum officia aliquid explicabo? Excepturi,
                voluptate?
              </p>
            </div>

            <Link className="" href="#">
              {" "}
              <div class="lg:w-3/4 xl:w-2/4 lg:mx-auto my-32">
                <div class="group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white  border border-transparent hover:border-gray-100   shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10">
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
                    <span class="mt-4 mb-2 inline-block font-medium text-gray-400   sm:mt-0">
                      Jul 27 2022
                    </span>
                    <h3 class="text-2xl font-semibold text-gray-800  ">
                      "Сайн санаа амьтдад" ТББ
                    </h3>
                    <p class="my-6 text-gray-600  ">
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
