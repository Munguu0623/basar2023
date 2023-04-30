import Navbar from "../../components/Layout/Navbar";
import Cover from "../../components/Cover";
import Services from "../../components/Service";
import { useAuth } from "../../firebase/useFireBaseAuth";
import HomeNews from "../../components/HomeNews";
import HomeBlog from "../../components/HomeBlog";
import BasarZar from "../../components/BasarZar";
import AppBanner from "../../components/AppBanner";
import Animals from "../../components/Animals";

export default function Home() {
  const { user, loading } = useAuth();

  return (
    <>
      <Navbar>
        <Cover />
        <HomeNews />
        <Animals />
        <Services />
        <HomeBlog />
        <BasarZar />
        <AppBanner />
      </Navbar>
    </>
  );
}
