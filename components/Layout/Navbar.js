import { Dropdown, Avatar, Row, Button, TreeSelect, Layout, Col } from "antd";
const { Header, Content, Sider } = Layout;
import Image from "next/image";
import Footer from "./Footer";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "../../firebase/useFireBaseAuth";
export default function Navbar(props) {
  const [value, setValue] = useState(false);
  const { user, loading, logOut } = useAuth();
  console.log(user, "iusers");

  const burger = () => {
    setValue(true);
    console.log(value, "this is click");
  };

  const items = [
    {
      label: <p>{user?.username}</p>,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: <p onClick={logOut}>Гарах</p>,
      key: "1",
    },
  ];
  return (
    <Layout>
      <header>
        {/* <input type="checkbox" name="hbr" id="hbr" class="hbr peer" hidden aria-hidden="true"> */}
        <nav class="fixed z-20 w-full bg-white/80  backdrop-blur navbar shadow-md shadow-gray-600/5 peer-checked:navbar-active md:relative md:bg-transparent ">
          <div class="xl:container m-auto px-6 md:px-12">
            <div class="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
              <div class="w-full flex justify-between lg:w-auto">
                <a
                  href="#"
                  aria-label="logo"
                  class="flex space-x-2 items-center"
                >
                  <div aria-hidden="true" class="flex space-x-1">
                    <Image
                      src="/image/logo/menu_logo.png"
                      alt="Picture of the author"
                      width={40}
                      height={50}
                    />
                    <div class="h-6  bg-primary "></div>
                  </div>
                  <span class="text-base font-bold text-gray-600 ">
                    <Image
                      src="/image/logo/menu_logo_02.png"
                      alt="Picture of the author"
                      width={120}
                      height={50}
                    />
                  </span>
                </a>
                <button onClick={burger}>
                  <label
                    for="hbr"
                    class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                  >
                    <div
                      aria-hidden="true"
                      class="m-auto h-0.5 w-6 rounded bg-gray-900   transition duration-300"
                    ></div>
                    <div
                      aria-hidden="true"
                      class="m-auto mt-2 h-0.5 w-6 rounded bg-gray-900   transition duration-300"
                    ></div>
                  </label>
                </button>
              </div>
              <div class="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white   lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none     lg:border-0">
                <div class="text-gray-600   lg:pr-4">
                  <ul class="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                    <li>
                      <Link
                        href=""
                        class="block md:px-4 transition hover:text-primary   font-thin "
                      >
                        <span>Нүүр</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        class="block md:px-4 transition hover:text-primary   font-thin "
                      >
                        <span>Амьтад</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        class="block md:px-4 transition hover:text-primary   font-thin "
                      >
                        <span>Мэдээ</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        class="block md:px-4 transition hover:text-primary   font-thin "
                      >
                        <span>Блог</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/organization"
                        class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight font-thin "
                      >
                        <span>Байгууллагууд</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        class="block md:px-4  font-thin transition hover:text-primary  "
                      >
                        <span>Зар </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        class="block md:px-4 transition hover:text-primary   font-thin "
                      >
                        <span className="flex flex-nowrap"> Tусламж </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div class="w-full space-y-2 border-primary/10   flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                  <Link
                    href="/"
                    class="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-primary/10   before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                  >
                    <span class="relative text-sm font-semibold text-primary  ">
                      Дэлгүүр
                    </span>
                  </Link>
                  {user ? (
                    <Dropdown
                      menu={{
                        items,
                      }}
                    >
                      <Avatar
                        className=""
                        size="default"
                        src={user?.photoURL}
                      />
                    </Dropdown>
                  ) : (
                    <Link
                      href="/login"
                      className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary   before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <span className="relative text-sm font-semibold text-black  ">
                        Нэвтрэх{" "}
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <Content>
        <Row justify="center" style={{ minHeight: "100vh" }}>
          <Col className="content">{props.children}</Col>
        </Row>
      </Content>
      <Footer />
    </Layout>
  );
}
