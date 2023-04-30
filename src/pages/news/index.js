import { useRouter } from "next/router";
import Navbar from "../../../components/Layout/Navbar";
import { Col, Row } from "antd";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
export default function News({ allBlogs }) {
  const router = useRouter();
  const [data, setData] = useState([]);
  useEffect(() => {
    // getBlogs();
  }, []);
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
              href={`/news/${allBlogs[0].id}`}
              className="hover:text-white transform hover:scale-105 transition-all duration-500 ease-in-out flex flex-col"
            >
              <div className="h-64 w-112">
                <Image
                  className="h-72 w-120 rounded-2xl"
                  //   src={this.props.news.photo}
                  alt="cover_Image_01"
                />
                <button className="my-6 text-sm uppercase z-10 px-2 py-1 bg-btnSmColor rounded-full">
                  МЭДЭЭ
                </button>
              </div>

              <div className="w-96 mt-24">
                <h2 className="text-[#252641] font-bold leading-7">
                  {allBlogs[0].attributes.title}
                </h2>
                <p className="text-[#696984]  text-sm mt-3">
                  {allBlogs[0].attributes.description}
                </p>
                <p className="text-[#696984] underline hover:underline-offset-4 text-sm mt-3">
                  Унших
                </p>
              </div>
            </Link>
          </div>
        </Col>
        <Col className="space-y-3" lg={12} xs={24}>
          {allBlogs?.map((el, i) => {
            if (i !== 0)
              return (
                <Link
                  href={`/news/${el.id}`}
                  className="transform hover:scale-105 transition-all duration-500 ease-in-out flex flex-row hover:text-white"
                >
                  <div className="relative md:h-36 md:w-44  h-28 w-36">
                    <Image
                      className="md:h-36 md:w-44 h-24 w-32 rounded-2xl"
                      //  src={this.props.news.photo} alt="cover_Image_01"
                    />
                    <button className="absolute  lg:text-sm hover:text-white text-xs md:bottom-2 md:right-2 bottom-5 right-5 uppercase z-10 md:px-2 md:py-1 p-1 bg-btnSmColor rounded-full">
                      МЭДЭЭ
                    </button>
                  </div>

                  <div className="lg:ml-8 md:w-80 md:ml-3 ">
                    <h2 className="text-[#252641] md:text-base text-sm w-44  md:selection md:w-80  font-medium   md:pt-2">
                      {el.attributes.title.substring(0, 60).concat("...")}
                    </h2>
                    <p className="text-[#696984]  text-sm hidden md:block">
                      {el.attributes.description
                        .substring(0, 200)
                        .concat("...")}
                    </p>
                  </div>
                </Link>
              );
          })}
        </Col>
      </Row>
    </Navbar>
  );
}
export const getStaticProps = async () => {
  const res = await axios.get("http://103.168.56.133:1337/api/blogs/");
  return { props: { allBlogs: res.data.data } };
};
