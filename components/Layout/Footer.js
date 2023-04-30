import React from "react";
// import playShrefre from "../../assets/images/footer_img/playshrefre.png";
// import appShrefre from "../../assets/images/footer_img/appshrefre.png";
// import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import Link from "next/link";
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai' 
import {TfiHeadphoneAlt} from 'react-icons/tfi'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className="h-32rem  w-full hidden lg:block font-Robohref text-xs">
      <div className="flex justify-center items-center space-x-12 h-32 w-full bg-gradient-to-r  from-[#EFAB3E] to-[#ff834f] text-white">
        <div className="text-xl font-light">
          ЦАГ АЛДАЛГҮЙ МЭДЭЭЛЭЛ{" "}
          <span className="font-bold">ХҮЛЭЭЖ АВААРАЙ</span>
        </div>
        <div className="flex justify-between border border-l-bgServiceColor h-12 w-[30rem] rounded-full">
          <span className="flex justify-start items-center ml-8">
            Мэйл хаяг
          </span>
          <buthrefn className="bg-white rounded-full text-black h-12 w-28 flex justify-center items-center text-base cursor-pointer">
            Хайх
          </buthrefn>
        </div>
      </div>
      <div className="h-full p-8 mx-auto mx-auhref max-w-7xl flex justify-center items-center">
        <div className="grid grid-cols-6 xl:pl-14 py-6 text-[#2B363F] ">
          <div className="w-52">
            <div className="font-medium border-orange-500 border-l-2 pl-1 mb-2">
              АНГИЛАЛ
            </div>
            <ul className="leading-6">
              <li>
                <Link href="/">Нохой </Link>
              </li>
              <li>
                <Link href="/">Муур</Link>
              </li>
              <li>
                <Link href="/"> Туулай</Link>
              </li>
              <li>
                <Link href="/"> Шувуу</Link>
              </li>
              <li>
                <Link href="/"> Зараа</Link>
              </li>
              <li>
                <Link href="/"> Загас</Link>
              </li>
              <li>
                <Link href="/"> Гүрвэл</Link>
              </li>
              <li>
                <Link href="/"> Яст мэлхий</Link>
              </li>
              <li>
                <Link href="/"> Орог зусаг</Link>
              </li>
              <li>
                <Link href="/"> Фирм</Link>
              </li>
              <li>
                <Link href="/"> Таван хошуу</Link>
              </li>
              <li>
                <Link href="/"> Бусад</Link>
              </li>
            </ul>
          </div>
          <div className="w-52">
            <div className="font-medium border-orange-500 border-l-2 pl-1 mb-2">
              МЭДЭЭ
            </div>
            <ul className="leading-6 mb-8">
              <li>
                <Link href="/">Байгууллага </Link>
              </li>
              <li>
                <Link href="/"> Төрийн бус</Link>
              </li>
              <li>
                <Link href="/">Дэлхий дахинд</Link>
              </li>
            </ul>
            <div className="font-medium border-orange-500 border-l-2 pl-1 mb-2">
              БЛОГ
            </div>
            <Link className="" href="/">
              Нийтлэл
            </Link>
            <div className="font-medium border-orange-500 border-l-2 pl-1 mb-2 mt-8">
              ҮРЧИЛГЭЭ ЗАР
            </div>
            <ul className="leading-6">
              <li>
                <Link href="/">Үрчлүүлнэ </Link>
              </li>
              <li>
                <Link href="/">Хайж байна</Link>
              </li>
              <li>
                <Link href="/"> Зарна</Link>
              </li>
            </ul>
          </div>
          <div className="w-52">
            <div className="font-medium border-orange-500 border-l-2 pl-1 mb-2">
              ҮЙЛЧИЛГЭЭ
            </div>
            <ul className="leading-6 mb-5">
              <li>
                <Link href="/">Байгууллага </Link>
              </li>
              <li>
                <Link href="/"> Төрийн бус</Link>
              </li>
              <li>
                <Link href="/"> Мал эмнэлэг</Link>
              </li>
              <li>
                <Link href="/"> Сургалтын газар</Link>
              </li>
              <li>
                <Link href="/"> Гоо сайхны газар</Link>
              </li>
              <li>
                <Link href="/"> Үрчлүүлгын газар</Link>
              </li>
              <li>
                <Link href="/"> Төсөл хөтөлбөр</Link>
              </li>
            </ul>
            <div className="font-medium border-orange-500 border-l-2 pl-1 mb-2">
              АНХНЫ ТУСЛАМЖ
            </div>
            <ul className="leading-6">
              <li>
                <Link href="/">Халуурах </Link>
              </li>
              <li>
                <Link href="/"> Яс хугарах</Link>
              </li>
              <li>
                <Link href="/"> Хахах</Link>
              </li>
              <li>
                <Link href="/"> Ухаан алдах</Link>
              </li>
              <li>
                <Link href="/"> Шархдах</Link>
              </li>
              <li>
                <Link href="/"> Цахилгаанд цохиулах</Link>
              </li>
              <li>
                <Link href="/">Хоолонд хордох</Link>
              </li>
              <li>
                <Link href="/">Бөөстөх</Link>
              </li>
            </ul>
          </div>
          <div className="w-52">
            <div className="font-medium border-orange-500 border-l-2 pl-1 mb-2">
              ОНЛАЙН ДЭЛГҮҮР
            </div>
            <ul className="leading-6">
              <li>
                <Link href="/">Хоол тэжээл </Link>
              </li>
              <li>
                <Link href="/">Гоо сайхан </Link>
              </li>
              <li>
                <Link href="/"> Хувцас</Link>
              </li>
              <li>
                <Link href="/">Тоглоом</Link>
              </li>
              <li>
                <Link href="/"> Гоёл </Link>
              </li>
              <li>
                <Link href="/">Ахуйн хэрэгсэл</Link>
              </li>
              <li>
                <Link href="/">Дагалдах хэрэгсэл </Link>
              </li>
              <li>
                <Link href="/">Бусад</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 border-slate-400 border-l-2 xl:pl-14 pl-8  w-[330px]">
            <div className="flex items-center justify-between inline-flex pl-3">
              {/* <FontAwesomeIcon icon={solid("headset")} size="3x" /> */}
              <a><TfiHeadphoneAlt size='2rem'/></a>
              <p className="text-lg font-medium mx-4 font-Montserrat ">
                7211-0737
              </p>
              <buthrefn className="lg:px-9 py-2 border text-[#9B9B9B] rounded-lg font-Montserrat">
                Чатлах
              </buthrefn>
              
            </div>
            < div className="inline-flex  pt-10 pl-2" >
              
                <a href="/"><AiFillFacebook size='3rem'  /></a>
              
            </div>
            <div className="inline-flex pl-6">
                         
                <a href="/"><AiFillInstagram size='3rem' /></a>
             
            </div>
            <div className="inline-flex pl-6">
                         
                <a href="/"><AiFillTwitterCircle size='3rem' /></a>
             
            </div>
            <div className="inline-flex pl-6 ">
                         
                <a href="/"><AiFillYoutube size='3rem' /></a>
             
            </div>
            <div className="inline-flex pt-6">
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              class="h-12 w-35 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
              alt="..." />
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              class="h-12 w-35 pl-7 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
              alt="..." />
            </div>
            {/* <div className="mt-12 mb-8">
              <ul className="flex justify-between">
                <li>
                  <Link href="#" target="_blanck">
                    <div className="py-3 rounded-lg">
                      <FontAwesomeIcon
                        icon={brands("Facebook")}
                        size="3x"
                        className="hover:text-[#3b5998]"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <div className="p-3 rounded-lg">
                    <FontAwesomeIcon
                      icon={brands("Instagram")}
                      size="3x"
                      className="hover:text-[#bc2a8d]"
                    />
                  </div>
                </li>
                <li>
                  <Link href="/">
                    <div className="p-3 rounded-lg">
                      <FontAwesomeIcon
                        icon={brands("Twitter")}
                        size="3x"
                        className="hover:text-[#00acee]"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <div className="py-3 rounded-lg">
                      <FontAwesomeIcon
                        icon={brands("Youtube")}
                        size="3x"
                        className="hover:text-[#FF0000]"
                      />
                    </div>
                  </Link>
                </li>
              </ul>
            </div> */}
            <div className="flex justify-between">
              {/* <img className="h-10" src={playShrefre} alt="playshrefre" />
              <img className="h-10" src={appShrefre} alt="appshrefre" /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="h-11 w-full bg-[#657C93] text-white text-[12px]  ">
        <div className="flex max-w-7xl  mx-auto items-center justify-between mx-auhref py-1 p-4">
          <p>All reserved by @basarmn</p>
          <ul className="flex">
            <li className="mx-6 my-2">
              <Link href="/about" className="hover:text-slate-800 duration-400">
                БИДНИЙ ТУХАЙ
              </Link>
            </li>
            <li className="mx-6 my-2">
              <Link href="/" className="hover:text-slate-800 duration-400">
                DONATE VOLUNTEER
              </Link>
            </li>
            <li className="mx-6 my-2">
              <Link href="/" className="hover:text-slate-800 duration-400">
                ХАМТРАН АЖИЛЛАХ
              </Link>
            </li>
            <li className="ml-8 my-2">
              <Link href="/" className="hover:text-slate-800 duration-400">
                ХОЛБОО БАРИХ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;