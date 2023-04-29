import Image from "next/image";
export default function AppBanner(second) {
  return (
    <>
      <Image
        src="/image/zarBig.png"
        width={1900}
        height={200}
        className="hidden lg:flex lg:visible bg-cover  bg-top bg-fixed"
      />
      <Image
        src="/image/zar_small.png"
        width={1200}
        height={200}
        className="lg:hidden bg-cover bg-top bg-fixed"
      />
    </>
  );
}
