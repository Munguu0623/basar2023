import { useRouter } from "next/router";

export default function News(params) {
  const router = useRouter();
  const { slug } = router.query;
  console.log(router);
  return <>{slug} hhe</>;
}
