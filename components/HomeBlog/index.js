import Image from "next/image";
import Link from "next/link";
export default function HomeBlog(second) {
  return (
    <>
      <section className=" w-full font-Roboto">
        <div className=" relative ">
          <div className=" absolute w-44 text-white font-bold text-xl mt-8 ml-4 sm:hidden">
            Бид амьтанд хайртай{" "}
          </div>

          <div
            className="flex sm:justify-center sm:items-center w-full h-full  absolute   
         "
          >
            <h1 className=" w-full absolute text-white invisible sm:visible sm:text-xl  md:text-3xl text-center font-medium italic   lg:text-4xl lg:font-bold  sm:mb-40 md:mb-52">
              #Блог
            </h1>
            <h1 className="w-full absolute text-center text-white invisible sm:visible sm:text-2xl sm:mb-28 font-bold  md:text-3xl lg:text-5xl ">
              Бид Амьтанд Хайртай
            </h1>

            <button className=" rounded-full md:py-2 md:px-4 px-2 py-1 text-sm md:text-base bg-btnOrange text-white absolute mt-28 sm:mt-0 ml-4 hover:bg-orange-500 transition-all ease-in-out duration-300 sm:mr-52">
              Нийтлэл
            </button>
            <Link
              href={{ pathname: "https://www.youtube.com/watch?v=D_Rx4qZ8QRc" }}
              target="_blanck"
              className={`hidden lg:flex justify-center items-center cursor-pointer `}
            >
              {/* <FontAwesomeIcon
                  icon={solid("play")}
                  size="1x"
                  className="text-btnOrange hidden sm:flex
               md:visible"
                /> */}
            </Link>

            <div className="sm:flex absolute text-white hidden sm:visible sm:ml-48">
              Бичлэг үзэх
            </div>
          </div>
          {/* sm дэлэгцнээс дээш style */}

          <Image
            className="hidden lg:flex lg:visible bg-cover  bg-top bg-fixed"
            alt="postbg"
            src="/image/niitlel_big.png"
            width={1900}
            height={1000}
          />
          <Image
            width={1200}
            height={100}
            className="  lg:hidden bg-cover bg-top bg-fixed"
            alt="postbgg"
            src="/image/niitlel_small.png"
          />
        </div>
      </section>
    </>
  );
}
