import { Inter } from "next/font/google";
import Navbar from "../../components/Layout/Navbar";
import Cover from "../../components/Cover";
import Service from "../../components/service";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar>
        <Cover />
        <Service />
      </Navbar>
    </>
  );
}
