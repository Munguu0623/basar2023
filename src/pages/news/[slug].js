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
        <div className="text-[#2F327D] md:text-3xl text-2xl font-bold text-center my-10">
          {post.attributes.title}
        </div>
        <div className="flex justify-end mb-3">
          {dayjs(post.attributes.publishedAt).format("YYYY-MM-DD")}
        </div>
        <ReactMarkdown
          className="mb-16"
          children={post.attributes.data.replaceAll(
            "](/",
            "](http://103.168.56.133:1337/"
          )}
        />
      </div>
    </Navbar>
  );
}

export const getStaticProps = async ({ params }) => {
  console.log(params.slug, "slug");
  const { data } = await axios.get(
    `http://103.168.56.133:1337/api/blogs/${params.slug}`
  );
  console.log(data, "dataaaaaaqa");
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
  console.log(slug, "this is slug");
  return {
    paths: slug,
    fallback: false,
  };
};
