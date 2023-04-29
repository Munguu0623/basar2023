import Image from "next/image";
import {
  UserOutlined,
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Input, Space, message } from "antd";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useRouter } from "next/router";
import Link from "next/link";

export default function Login(second) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const fbProvider = new FacebookAuthProvider();
  const router = useRouter();
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (error) {
      console.error("An error occured", error);
    }
  };
  const signInWithFacebook = async () => {
    try {
      await signInWithPopup(auth, fbProvider);
      router.push("/");
    } catch (error) {
      console.error("An error occured", error);
    }
  };

  const loginHandler = async () => {
    if (!email || !password)
      return message.warning("И-мейл нууц үгээ оруулна уу");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error) {
      console.log(JSON.stringify(error));
      if (
        error.code == "auth/invalid-email" ||
        error.code == "auth/wrong-password"
      ) {
        message.error("Нэвтрэх нэр нууц үг буруу байна");
        // Display the modal
      }
      console.error("An error occured", error);
    }
  };
  return (
    <>
      <div class="m-auto xl:container px-12 sm:px-0 mx-auto">
        <div class="mx-auto h-full sm:w-max">
          <div class="m-auto  py-12">
            <div class="space-y-4">
              <a href="" className="flex">
                <Image
                  src="/image/logo/menu_logo.png"
                  alt="Picture of the author"
                  width={60}
                  height={50}
                />
                <Image
                  className="ml-4"
                  src="/image/logo/menu_logo_02.png"
                  alt="Picture of the author"
                  width={200}
                  height={20}
                />
              </a>
            </div>
            <div class="mt-12 rounded-3xl border bg-gray-50  -mx-6 sm:-mx-10 p-8 sm:p-10">
              <h3 class="text-2xl font-semibold  text-AboutTitle  ">
                Basar.mn нэвтрэх
              </h3>
              <div class="mt-12 flex flex-wrap sm:grid gap-6 grid-cols-2">
                <button class="w-full h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 ">
                  <div class="w-max mx-auto flex items-center justify-center space-x-4">
                    <Image
                      src="/image/basar/google_logo.png"
                      class="w-5"
                      alt="Picture of the author"
                      width={60}
                      height={50}
                    />
                    <span
                      onClick={signInWithGoogle}
                      class="block w-max text-sm font-semibold tracking-wide text-cyan-700  "
                    >
                      Gmail -ээр нэвтрэх
                    </span>
                  </div>
                </button>
                <button class="w-full h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 ">
                  <div class="w-max mx-auto flex items-center justify-center space-x-4 text-white">
                    <Image
                      src="/image/basar/facebook.png"
                      class="w-5"
                      alt="Picture of the author"
                      width={60}
                      height={50}
                    />
                    <span
                      onClick={signInWithFacebook}
                      class="block w-max text-sm font-semibold tracking-wide text-cyan-700  "
                    >
                      Facebook-ээр нэвтрэх
                    </span>
                  </div>
                </button>
              </div>

              <div action="" class="mt-10 space-y-8 ">
                <div>
                  <Input
                    size="large"
                    placeholder="И-мейл"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    prefix={<UserOutlined />}
                  />
                </div>

                <div class="flex flex-col items-end">
                  <Input.Password
                    size="large"
                    prefix={<LockOutlined />}
                    placeholder="Нууц үг"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                  <button class="-mr-3 w-max p-3">
                    <span class="text-sm tracking-wide text-sky-600 ">
                      Нууц үг мартсан?
                    </span>
                  </button>
                </div>

                <div>
                  <button class="w-full rounded-full  bg-btnOrange  h-11 flex items-center justify-center px-6 py-3 transition hover:bg-btnOrange/80 ">
                    <span
                      onClick={loginHandler}
                      class="text-base font-semibold text-white "
                    >
                      Нэвтрэх
                    </span>
                  </button>
                  <Link href="/register" type="reset" class="-ml-3 w-max p-3">
                    <span class="text-sm tracking-wide text-sky-600 ">
                      Бүртгүүлэх
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div class="border-t pt-12 text-gray-500 ">
              <div class="space-x-4 text-center">
                <span>&copy; Basar.mn</span>
                <Link href="/" class="text-sm hover:text-sky-900 ">
                  Холбоо барих
                </Link>
                <Link href="/" class="text-sm hover:text-sky-900 ">
                  Privacy & Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
