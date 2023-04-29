import { Inter } from "next/font/google";
import Navbar from "../../components/Layout/Navbar";
import Cover from "../../components/Cover";
import Service from "../../components/service";
import { useAuth } from "../../firebase/useFireBaseAuth";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user, loading } = useAuth();

  return (
    <>
      <Navbar>
        <Cover />
        <Service />
      </Navbar>
    </>
  );
}
