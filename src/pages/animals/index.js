import Image from "next/image";
import Navbar from "../../../components/Layout/Navbar";
export default function Animal(second) {
  return (
    <Navbar>
      <Image src="/image/pages/animals.png" height={100} width={1900} />
    </Navbar>
  );
}
