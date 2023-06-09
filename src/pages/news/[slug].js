import axios from "axios";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import Navbar from "../../../components/Layout/Navbar";
import dayjs from "dayjs";

export default function News({ post }) {
  const router = useRouter();

  return (
    <Navbar>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mt-20">
          <div className="flex items-center">
            <h1 className="text-blue-500 text-lg">Мэдээ</h1>
            <h1 className=" text-gray-500 ml-4  text-base  font-light">
              {dayjs(post.attributes.publishedAt).format("YYYY-MM-DD")}
            </h1>
          </div>
          <div>
            <div className=" w-14 h-14 rounded-full  flex items-center justify-center border-2  border-blue-500 ">
              <img src="/image/logo/menu_logo.png" width={45} />
            </div>
            <h1 className=" text-center text-xs mt-1 text-gray-500">
              Basar.mn
            </h1>
          </div>
        </div>
        <h1 className=" md:text-5xl text-2xl text-gray-800 mt-10 mb-20">
          {post.attributes.title}
        </h1>

        <ReactMarkdown
          className="mb-16"
          children={post.attributes.data.replaceAll(
            "](/",
            "](//103.168.56.133:1337/"
          )}
        />
      </div>
    </Navbar>
  );
}

export const getStaticProps = async ({ params }) => {
  const { data } = await axios.get(
    `http://103.168.56.133:1337/api/blogs/${params.slug}`
  );
  return {
    props: {
      post: data.data,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await axios.get("http://103.168.56.133:1337/api/blogs/");

  const slug = data.data?.map((post) => ({
    params: {
      slug: post.id.toString(),
    },
  }));
  // var dsa = slug.toString()
  return {
    paths: slug,
    fallback: false,
  };
};
