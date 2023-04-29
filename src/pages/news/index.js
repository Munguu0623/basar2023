import { useRouter } from "next/router";
import Navbar from "../../../components/Layout/Navbar";
import { Col, Row } from "antd";
import Link from "next/link";
import Image from "next/image";
export default function News(params) {
  const router = useRouter();
  console.log(router);
  return (
    <Navbar>
      <div className="text-[#2F327D] md:text-3xl text-2xl font-bold text-center mt-10">
        МЭДЭЭ МЭДЭЭЛЭЛ
        <p className="text-[#696983] md:text-lg text-base leading-8  font-normal">
          Амьтдын тухай бүх мэдээллийг эндээс
        </p>
      </div>

      <Row className=" mt-6 max-w-7xl mx-auto flex justify-center " gutter={16}>
        <Col className="" lg={12} xs={24}>
          <div>
            <Link
              href="/"
              className=" transform hover:scale-105 transition-all duration-500 ease-in-out flex flex-col"
            >
              <div className="h-64 w-112">
                <Image
                  className="h-72 w-120 rounded-2xl"
                  //   src={this.props.news.photo}
                  alt="cover_Image_01"
                />
                <button className="my-6 text-sm uppercase z-10 px-2 py-1 bg-btnSmColor rounded-full">
                  categoryName
                </button>
              </div>

              <div className="w-96 mt-24">
                <h2 className="text-[#252641] font-bold leading-7">
                  news.title
                </h2>
                <p className="text-[#696984]  text-sm mt-3">news.description</p>
                <p className="text-[#696984] underline hover:underline-offset-4 text-sm mt-3">
                  Унших
                </p>
              </div>
            </Link>
          </div>
        </Col>
        <Col className="space-y-3" lg={12} xs={24}>
          <Link
            href="/"
            className="transform hover:scale-105 transition-all duration-500 ease-in-out flex flex-row"
          >
            <div className="relative md:h-36 md:w-44  h-28 w-36">
              <Image
                className="md:h-36 md:w-44 h-24 w-32 rounded-2xl"
                //  src={this.props.news.photo} alt="cover_Image_01"
              />
              <button className="absolute  lg:text-sm text-xs md:bottom-2 md:right-2 bottom-5 right-5 uppercase z-10 md:px-2 md:py-1 p-1 bg-btnSmColor rounded-full">
                categoryName
              </button>
            </div>

            <div className="lg:ml-8 md:w-80 md:ml-3 ">
              <h2 className="text-[#252641] md:text-base text-sm w-44 h-32 md:selection md:w-80 leading-5 font-medium md:leading-7  md:pt-2">
                news.title
              </h2>
              <p className="text-[#696984]  text-sm mt-3 hidden md:block">
                news.description
              </p>
            </div>
          </Link>
          <Link
            href="/"
            className="transform hover:scale-105 transition-all duration-500 ease-in-out flex flex-row"
          >
            <div className="relative md:h-36 md:w-44  h-28 w-36">
              <Image
                className="md:h-36 md:w-44 h-24 w-32 rounded-2xl"
                //  src={this.props.news.photo} alt="cover_Image_01"
              />
              <button className="absolute  lg:text-sm text-xs md:bottom-2 md:right-2 bottom-5 right-5 uppercase z-10 md:px-2 md:py-1 p-1 bg-btnSmColor rounded-full">
                categoryName
              </button>
            </div>

            <div className="lg:ml-8 md:w-80 md:ml-3 ">
              <h2 className="text-[#252641] md:text-base text-sm w-44 h-32 md:selection md:w-80 leading-5 font-medium md:leading-7  md:pt-2">
                news.title
              </h2>
              <p className="text-[#696984]  text-sm mt-3 hidden md:block">
                news.description
              </p>
            </div>
          </Link>
          <Link
            href="/"
            className="transform hover:scale-105 transition-all duration-500 ease-in-out flex flex-row"
          >
            <div className="relative md:h-36 md:w-44  h-28 w-36">
              <Image
                className="md:h-36 md:w-44 h-24 w-32 rounded-2xl"
                //  src={this.props.news.photo} alt="cover_Image_01"
              />
              <button className="absolute  lg:text-sm text-xs md:bottom-2 md:right-2 bottom-5 right-5 uppercase z-10 md:px-2 md:py-1 p-1 bg-btnSmColor rounded-full">
                categoryName
              </button>
            </div>

            <div className="lg:ml-8 md:w-80 md:ml-3 ">
              <h2 className="text-[#252641] md:text-base text-sm w-44 h-32 md:selection md:w-80 leading-5 font-medium md:leading-7  md:pt-2">
                news.title
              </h2>
              <p className="text-[#696984]  text-sm mt-3 hidden md:block">
                news.description
              </p>
            </div>
          </Link>
        </Col>
      </Row>
    </Navbar>
  );
}
