import HomeNews from "../../../components/HomeNews";
import axios from "axios";
import Navbar from "../../../components/Layout/Navbar";
import ReactMarkdown from "react-markdown";
export default function Post({ post }) {
  return (
    <Navbar>
      <div className=" mt-10  max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-blue-500 text-lg">Мэдээ</h1>
            <h1 className=" text-gray-500 ml-4  text-base  font-light">
              4 сарын 30, 2023
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
          {post.data.attributes.title}
        </h1>
        <ReactMarkdown
          children={post.data.attributes.data.replaceAll(
            "](/",
            "](http://103.168.56.133:1337/"
          )}
        />
      </div>
    </Navbar>
  );
}

export const getStaticProps = async ({ params }) => {
  const { data } = await axios.get(
    `http://103.168.56.133:1337/api/news/${params.slug}`
  );
  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await axios.get("http://103.168.56.133:1337/api/news/");

  const slug = data.data?.map((post) => ({
    params: {
      slug: post.id.toString(),
    },
  }));
  return {
    paths: slug,
    fallback: false,
  };
};
