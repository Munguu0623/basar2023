import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
export default function MobileFooter(second) {
  return (
    <>
      <footer className="md:h-43 w-full font-Roboto lg:hidden">
        <div className="px-4 flex justify-center box-border items-center sm:h-24 h-20 w-full bg-gradient-to-r from-footerTop1 to-[#FF834F] text-white">
          <div className="text-[10px] font-light mr-2 ">
            ЦАГ АЛДАЛГҮЙ МЭДЭЭЛЭЛ
            <span className="font-bold"> ХҮЛЭЭЖ АВААРАЙ</span>
          </div>
          <div className="flex justify-between border border-l-bgServiceColor h-9 w-80 rounded-full">
            <span className="flex justify-start text-[10px] items-center leading-4 ml-2">
              Мэйл хаяг
            </span>
            <button className="bg-white rounded-full text-black h-auto md:w-24 w-16 text-[10px] font-bold">
              Илгээх
            </button>
          </div>
        </div>
        <div className="h-full m-12 max-w-md mx-auto">
          <div className="">
            <div className="flex items-center justify-around">
              {/* <FontAwesomeIcon icon={solid("headset")} size="2x" /> */}
              <span className="text-baseg font-medium font-Montserrat ml-2 mr-6 ">
                72110737
              </span>
              <button className="px-9 py-2 border font-Montserrat rounded-lg text-sm text-[#9B9B9B] ">
                Чатлах
              </button>
            </div>{" "}
          </div>

          <div className="mt-10 mb-6">
            <ul className="flex justify-around">
              <li>
                <Link href="/">
                  <div className="p-3 rounded-lg">
                    <AiFillFacebook className=" text-5xl text-gray-800" />
                  </div>
                </Link>
              </li>

              <li>
                <div className="p-3 rounded-lg">
                  <AiFillInstagram className=" text-5xl text-gray-800" />
                </div>
              </li>

              <li>
                <Link href="/">
                  <div className="p-3 rounded-lg">
                    <AiFillTwitterCircle className=" text-5xl text-gray-800" />
                  </div>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <div className="p-3 rounded-lg">
                    <AiFillYoutube className=" text-5xl text-gray-800" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-around ">
            <Image
              src="/image/footerImage/playstore.png"
              alt="..."
              width={800}
              height={600}
              layout="responsive"
              sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 900px"
            />
            <Image
              src="/image/footerImage/appstore.png"
              alt="..."
              width={800}
              height={600}
              layout="responsive"
              sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 800px"
              className="ml-8"
            />
          </div>
        </div>

        <div className="h-7 sm:h-9 sm:text-xs w-full bg-[#657C93] text-white text-[9px]  ">
          <div className="flex items-center justify-around  ">
            <p>All reserved by @basarmn</p>
            <ul className="flex justify-between items-center my-2">
              <li className=" ">
                <Link href="/" className="hover:text-slate-800 duration-400">
                  Хамтран ажиллах
                </Link>
              </li>
              <li className=" ml-5">
                <Link href="/" className="hover:text-slate-800 duration-400">
                  Холбоо барих
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
