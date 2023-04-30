import HomeNews from "../../../components/HomeNews";
import axios from "axios";
import Navbar from "../../../components/Layout/Navbar";
export default function Post({ post }) {
  return (
    <Navbar>
      <div className=" mt-10 md:mx-96 mx-10">
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
        <h1 className=" md:text-5xl text-2xl text-gray-800 mt-10">
          {post.data.attributes.title}
        </h1>
        <p className=" leading-relaxed mt-36"> {post.data.attributes.data}</p>
      </div>
    </Navbar>
  );
}

export const getStaticProps = async ({ params }) => {
  console.log(params.slug, "slug");
  const { data } = await axios.get(
    `http://103.168.56.133:1337/api/news/${params.slug}`
  );
  console.log(data, "dataaaaaaqa");
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
  // var dsa = slug.toString()
  console.log(slug, "this is slug");
  return {
    paths: slug,
    fallback: false,
  };
};
