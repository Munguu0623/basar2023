import Image from "next/image";
import {
  UserOutlined,
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Input, message } from "antd";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth } from "../../../firebase/useFireBaseAuth";

export default function Login(second) {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const { setAuthUser, user } = useAuth();

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const fbProvider = new FacebookAuthProvider();
  const router = useRouter();
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("An error occured", error);
    }
  };
  const signInWithFacebook = async () => {
    try {
      await signInWithPopup(auth, fbProvider);
    } catch (error) {
      console.error("An error occured", error);
    }
  };
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const signUpHandler = async () => {
    if (!email) return message.warning("И-мейл хаягаа оруулна уу");
    if (!isValidEmail(email)) return message.warning("Зөв и-мейл оруулна уу");
    if (!password) return message.warning("Нууц үг ээ оруулна уу");
    if (password != rePassword)
      return message.warning("Нууц үг хоорондоо таарахгүй байна");
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: username,
      });
      setAuthUser({ ...user, username });
    } catch (error) {
      <alert>{error}</alert>;
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
                Basar.mn бүртгүүлэх
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
                    type="email"
                    size="large"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Нэвтрэх нэрээ оруулна уу"
                    prefix={<UserOutlined />}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    size="large"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="И-мейл хаягаа оруулна уу"
                    prefix={<UserOutlined />}
                  />
                </div>

                <div class="flex flex-col items-end">
                  <Input.Password
                    size="large"
                    prefix={<LockOutlined />}
                    placeholder="Нууц үг ээ оруулна уу"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </div>
                <div class="flex flex-col items-end">
                  <Input.Password
                    required
                    size="large"
                    prefix={<LockOutlined />}
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                    placeholder="Нууц үг ээ дахин оруулна уу"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </div>

                <div>
                  <button class="w-full rounded-full  bg-btnOrange  h-11 flex items-center justify-center px-6 py-3 transition hover:bg-btnOrange/80 ">
                    <span
                      onClick={() => signUpHandler()}
                      class="text-base font-semibold text-white "
                    >
                      Бүртгүүлэх
                    </span>
                  </button>
                  <Link href="/login" class="-ml-3 w-max p-3">
                    <span class="text-sm tracking-wide text-sky-600 ">
                      Нэвтрэх
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
