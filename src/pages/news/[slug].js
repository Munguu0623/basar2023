import axios from "axios";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import Navbar from "../../../components/Layout/Navbar";

export default function News({ post }) {
  const router = useRouter();

  return (
    <Navbar>
      <div className="max-w-5xl mx-auto">
        <ReactMarkdown
          children={post.attributes.data.replace(
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
