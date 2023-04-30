import {
  Dropdown,
  Avatar,
  Row,
  Button,
  TreeSelect,
  Layout,
  Col,
  Drawer,
} from "antd";
const { Header, Content, Sider } = Layout;
import Image from "next/image";
import Footer from "./Footer";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "../../firebase/useFireBaseAuth";
import { FiMenu } from "react-icons/fi";
export default function Navbar(props) {
  const { user, loading, logOut } = useAuth();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Layout>
      <header>
        {/* <input type="checkbox" name="hbr" id="hbr" class="hbr peer" hidden aria-hidden="true"> */}
        <nav class="fixed z-20 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur navbar shadow-md shadow-gray-600/5 peer-checked:navbar-active md:relative md:bg-transparent dark:shadow-none">
          <div class="xl:container m-auto px-6 md:px-12">
            <div class="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
              <div class="w-full flex justify-between lg:w-auto">
                <Link
                  href="/"
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
                    <div class="h-6  bg-primary dark:bg-primaryLight"></div>
                  </div>
                  <span class="text-base font-bold text-gray-600 dark:text-white">
                    <Image
                      src="/image/logo/menu_logo_02.png"
                      alt="Picture of the author"
                      width={120}
                      height={50}
                    />
                  </span>
                </Link>
                <FiMenu
                  onClick={showDrawer}
                  size={25}
                  className=" mt-2 cursor-pointer lg:hidden"
                />
              </div>
              <div class="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                <div class="text-gray-600 dark:text-gray-300 lg:pr-4">
                  <ul class="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                    <li>
                      <Link
                        href="/"
                        class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight font-thin "
                      >
                        <span>Нүүр</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight font-thin "
                      >
                        <span>Амьтад</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/news"
                        class="block md:px-4 transition hover:text-primary   font-thin "
                      >
                        <span>Мэдээ</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLigh font-thin "
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
                        href="/ads"
                        class="block md:px-4  font-thin transition hover:text-primary dark:hover:text-primaryLight"
                      >
                        <span>Зар </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight font-thin "
                      >
                        <span className="flex flex-nowrap"> Үйлчилгээ </span>
                      </Link>
                    </li>
                  </ul>
                </div>

<<<<<<< HEAD
                <div class="w-full space-y-2 border-primary/10  flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                  <Link 
                    href="/"
                    class="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-primary/10   before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 rounded-full bg-white " 
=======
                <div class="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                  <Link
                    href="/shop"
                    class="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-primary/10 dark:focus:before:bg-primaryLight/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
>>>>>>> 8e3753afdcf27d08e61431ea59a327d11aeb0ced
                  >
                    <span class="relative text-sm font-semibold text-primary dark:text-primaryLight">
                      Дэлгүүр
                    </span>
                  </Link>
<<<<<<< HEAD
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
                      className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary   before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 rounded-full bg-white"
                    >
                      <span className="relative text-sm font-semibold text-black  ">
                        Нэвтрэх{" "}
                      </span>
                    </Link>
                  )}
=======
                  <Link
                    href="/"
                    class="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                  >
                    <span class="relative text-sm font-semibold text-black dark:text-gray-900">
                      Нэвтрэх
                    </span>
                  </Link>
>>>>>>> 8e3753afdcf27d08e61431ea59a327d11aeb0ced
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Drawer
        title={user?.username}
        placement="right"
        onClose={onClose}
        open={open}
      >
        <ul class="space-y-6 tracking-wide font-medium text-base   pl-8">
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
              href="/news"
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
              class="block md:px-4 transition hover:text-primary   font-thin "
            >
              <span>Байгууллагууд</span>
            </Link>
          </li>
          <li>
            <Link
              href="/ads"
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
              <span className="flex flex-nowrap"> Үйлчилгээ </span>
            </Link>
          </li>
          <li class="block md:px-4 transition hover:text-primary   font-thin ">
            <span onClick={logOut} className="flex flex-nowrap">
              Гарах
            </span>
          </li>
        </ul>
      </Drawer>
      <Content>
        <Row
          justify="center"
          // className="max-w-7xl mx-auto "
          style={{ minHeight: "100vh" }}
        >
          <Col className="content">{props.children}</Col>
        </Row>
      </Content>
      <Footer />
    </Layout>
  );
}
