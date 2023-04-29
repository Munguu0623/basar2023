import Image from "next/image";
export default function BasarZar(second) {
  return (
    <div>
      <div className=" lg:flex">
        <div className=" lg:w-1/2 md:h-96 bg-gradient-to-r from-Zaryellow1 to-Zaryellow2 relative ">
          <h1 className=" text-BigTextColor text-3xl xl:text-6xl md:text-6xl sm:text-5xl lg:text-5xl absolute font-medium w-44 lg:ml-24 sm:mt-16 sm:ml-96 ml-10 mt-9">
            ҮРЧИЛГЭЭ & ЗАР
          </h1>
          <Image
            src="/image/basar/bumbug.png"
            alt="basar1"
            width={300}
            height={200}
            className="h-44 sm:h-80 xl:h-80 lg:h-64 inline-block ml-36 sm:ml-6 lg:mt-28 lg:ml-72 md:mt-16 md:ml-10 xl:ml-80  xl:mt-20 2xl:ml-120 sm:mt-24 mt-16"
          />
        </div>
        <div className=" w-full lg:w-1/2 md:h-96 bg-gradient-to-r from-ZarGreen1 to-ZarGreen2 relative overflow-hidden">
          <h1 className=" text-3xl lg:text-5xl xl:text-6xl md:text-6xl sm:text-5xl text-BigTextColor absolute font-medium w-44 lg:ml-24 sm:mt-16 sm:ml-20 ml-10 mt-9">
            ОНЛАЙН ХУДАЛДАА
          </h1>
          <Image
            src="/image/basar/uya.png"
            width={300}
            height={200}
            alt="basar2"
            className="h-44 sm:h-80 lg:h-64 xl:h-80 inline-block ml-36 sm:ml-96 xl:ml-96 lg:mt-32 lg:ml-72 sm:mt-20 2xl:ml-120 mt-24 xl:mt-20 "
          />
        </div>
      </div>
    </div>
  );
}
