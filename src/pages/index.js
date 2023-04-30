// import { Inter } from "next/font/google";
import Navbar from "../../components/Layout/Navbar";
import Cover from "../../components/Cover";
// import Services from "../../components/Uilchilgee";
import { useAuth } from "../../firebase/useFireBaseAuth";
import HomeNews from "../../components/HomeNews";
import HomeBlog from "../../components/HomeBlog";
import BasarZar from "../../components/BasarZar";
import AppBanner from "../../components/AppBanner";
import Animals from "../../components/Animals";

import { AiFillCustomerService, AiFillHeart } from "react-icons/ai";
import { BsScissors, BsFillCalendarWeekFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

export default function Home() {
  const { user, loading } = useAuth();

  return (
    <>
      <Navbar>
        <Cover />
        <HomeNews />
        <Animals />
        <section
          className="mt-36 w-full h-[30rem] sm:h-96 bg-bgServiceColor flex flex-col justify-center
   "
        >
          <h1 className="uppercase italic font-Roboto text-blue-700 text-4xl font-extrabold text-center pb-4 sm:pt-10">
            #Үйлчилгээ
          </h1>
          <div className="flex   flex-wrap lg:flex-nowrap wrapper justify-center items-center  h-60   gap-14">
            <div
              className={`w-20 h-20 bg-green-500 rounded-md hover:bg-green-600 transition-all ease-in-out duration-500 cursor-pointer`}
            >
              <div className="flex justify-center items-center h-20">
                <AiFillCustomerService className="text-white text-5xl" />
              </div>
              <h2 className="mt-2 mr-2 text-sm inline-block w-20 text-center">
                Үйлчилгээ
              </h2>
            </div>

            <div
              className={`w-20 h-20 bg-orange-500 rounded-md hover:bg-orange-600 transition-all ease-in-out duration-500 cursor-pointer`}
            >
              <div className="flex justify-center items-center h-20">
                <BsScissors className="text-white text-5xl" />
              </div>
              <h2 className="mt-2 mr-2 text-sm inline-block w-20 text-center">
                Гоо сайхан
              </h2>
            </div>

            <div
              className={`w-20 h-20 bg-red-500 rounded-md hover:bg-red-600 transition-all ease-in-out duration-500 cursor-pointer`}
            >
              <div className="flex justify-center items-center h-20">
                <AiFillHeart className="text-white text-5xl" />
              </div>
              <h2 className="mt-2 mr-2 text-sm inline-block w-20 text-center">
                Тусламж
              </h2>
            </div>

            <div
              className={`w-20 h-20 bg-yellow-400 rounded-md hover:bg-yellow-500 transition-all ease-in-out duration-500 cursor-pointer`}
            >
              <div className="flex justify-center items-center h-20">
                <FaShoppingCart className="text-white text-5xl" />
              </div>
              <h2 className="mt-2 mr-2 text-sm inline-block w-20 text-center">
                Дэлгүүр
              </h2>
            </div>

            <div
              className={`w-20 h-20 bg-violet-800 rounded-md hover:bg-violet-900 transition-all ease-in-out duration-500 cursor-pointer`}
            >
              <div className="flex justify-center items-center h-20">
                <IoEyeSharp className="text-white text-5xl" />
              </div>
              <h2 className="mt-2 mr-2 text-sm inline-block w-20 text-center">
                Асрах
              </h2>
            </div>

            <div
              className={`w-20 h-20 bg-fuchsia-700 rounded-md hover:bg-fuchsia-800 transition-all ease-in-out duration-500 cursor-pointer`}
            >
              <div className="flex justify-center items-center h-20">
                <BsFillCalendarWeekFill className="text-white text-5xl" />
              </div>
              <h2 className="mt-2 mr-2 text-sm inline-block w-20 text-center">
                Арга хэмжээ
              </h2>
            </div>
          </div>
        </section>
        <HomeBlog />
        <BasarZar />
        <AppBanner />
      </Navbar>
    </>
  );
}
