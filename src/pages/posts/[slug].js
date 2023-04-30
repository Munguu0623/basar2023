import HomeNews from "../../../components/HomeNews";
import axios from "axios";
export default function Post({ post }) {
  return (
    <>
      <pre>{JSON.stringify(post)}</pre>
      <div>sain uu</div>
      {/* <HomeNews slug={post} /> */}
    </>
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
