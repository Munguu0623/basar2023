import Image from "next/image";
import { Row, Col } from "antd";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillFacebook, AiFillPhone, AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import Navbar from "../../../components/Layout/Navbar";

export default function Partners() {
  return (
    <>
      <Navbar>
        <div className="  relative">
          <div className="w-full h-96  absolute flex justify-center items-end mt-10">
            <div className="w-44 h-44 rounded-full bg-blue-500 z-50 absolute hidden lg:flex lg:visible bg-cover  bg-top bg-fixed">
              <Image
                src="/image/partners/pro_official3.png"
                width={1900}
                height={100}
                className="  "
              />
            </div>
          </div>
          <Image
            src="/image/partners/cover.png"
            width={1900}
            height={100}
            className="  "
          />
        </div>
        <div className="my-16 md:mx-44  mx-4">
          <div>
            <h1 className=" text-AboutTitle font-bold text-2xl">UB shelter</h1>
            <h1 className=" font-thin text-base">Амьтан асрах төв</h1>
          </div>
          <Row className="mt-10 flex-wrap hidden md:flex md:visible">
            <Col className="gutter-row flex" span={8}>
              <AiFillPhone className=" text-green-500  text-lg" />
              <div className=" font-thin ml-2">80005718, 89910707</div>
            </Col>
            <Col className="gutter-row flex" span={8}>
              <AiFillFacebook className=" text-blue-500  text-lg" />
              <div className=" font-thin ml-2">
                UB shelter- Амьтан асрах төв
              </div>
            </Col>
            <Col className="gutter-row flex" span={8}>
              <HiLocationMarker className=" text-orange-500  text-lg" />
              <div className=" font-thin ml-2">БЗД, 1-р хороо, Гачууртын </div>
            </Col>
            <Col className="gutter-row mt-4 flex" span={8}>
              <SiGmail className=" text-red-500  text-lg" />
              <div className=" font-thin ml-2">
                ubshelter.mongolia@gmail.com
              </div>
            </Col>
            <Col className="gutter-row mt-4 flex" span={8}>
              <AiFillInstagram className=" text-purple-500  text-lg" />
              <div className=" font-thin ml-2">ubshelter</div>
            </Col>
          </Row>
        </div>
        <div className=" md:mx-72 m-16">
          <div className=" text-lg font-semibold">Танилцуулга:</div>
          <p className=" font-thin mt-10  tracking-tighter  leading-loose">
            Сайн санаа амьтдад ТББ нь 2017 онд амьтанд хайртай залуус золбин гэх
            тодотголтой зовж шаналсан амьтдыг аварч хамгаалан, нийгэмд тэдний
            дуу хоолой болж хүн амьтанд ээлтэй эерэг нийгмийг цогцлооход хувь
            нэмрээ оруулах зорилгоор үүсгэн байгуулагдсан ашгийн бус нийгэмд
            үйлчлэх төрийн бус байгууллага юм. Бид энэхүү зорилгынхоо хүрээнд UB
            SHELTER амьтан асрах төвийг Монголд анх удаа үүсгэн байгуулж,
            эзэндээ гологдож хаягдсан, харгислалд өртөн амь тэмцэж явсан амьтдыг
            авран хамгаалж, эмнэлэгийн тусламж, асаргаа үзүүлж, хайр халамжаар
            тэтгэн сайн эздийн гарт хүлээлгэн өгөх үйлсийг эхлүүлээд байна.
          </p>
          <Image
            src="/image/partners/nohoi.jpeg"
            width={1900}
            height={100}
            className="my-20"
          />
          <div className=" text-lg font-semibold">Танилцуулга:</div>
          <p className=" font-thin mt-10  tracking-tighter  leading-loose">
            Сайн санаа амьтдад ТББ нь 2017 онд амьтанд хайртай залуус золбин гэх
            тодотголтой зовж шаналсан амьтдыг аварч хамгаалан, нийгэмд тэдний
            дуу хоолой болж хүн амьтанд ээлтэй эерэг нийгмийг цогцлооход хувь
            нэмрээ оруулах зорилгоор үүсгэн байгуулагдсан ашгийн бус нийгэмд
            үйлчлэх төрийн бус байгууллага юм. Бид энэхүү зорилгынхоо хүрээнд UB
            SHELTER амьтан асрах төвийг Монголд анх удаа үүсгэн байгуулж,
            эзэндээ гологдож хаягдсан, харгислалд өртөн амь тэмцэж явсан амьтдыг
            авран хамгаалж, эмнэлэгийн тусламж, асаргаа үзүүлж, хайр халамжаар
            тэтгэн сайн эздийн гарт хүлээлгэн өгөх үйлсийг эхлүүлээд байна.
          </p>

          <Image
            src="/image/partners/zar.png"
            width={1200}
            height={100}
            className="my-20"
          />
        </div>
      </Navbar>
    </>
  );
}
