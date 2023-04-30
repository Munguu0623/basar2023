import Image from "next/image";
import Navbar from "../../../components/Layout/Navbar";
export default function Shop(second) {
  return (
    <Navbar>
      <Image src="/image/pages/shop.png" height={100} width={1900} />
    </Navbar>
  );
}
