import { Inter } from "next/font/google";
import Navbar from "../../components/Layout/Navbar";
import Cover from "../../components/Cover";
import Service from "../../components/Service";
import HomeNews from "../../components/HomeNews";
import HomeBlog from "../../components/HomeBlog";
import BasarZar from "../../components/BasarZar";
import AppBanner from "../../components/AppBanner";
import Animals from "../../components/Animals";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar>
        <Cover />
        <HomeNews />
        <Animals />
        <Service />
        <HomeBlog />
        <BasarZar />
        <AppBanner />
      </Navbar>
    </>
  );
}
