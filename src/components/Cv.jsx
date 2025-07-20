import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const Cv = () => {
  const cvRef = useRef();
  const handleDownloadPDF = async () => {
    const input = cvRef.current;
    const canvas = await html2canvas(input, {
      scale: 2,
      useCORS: true,
      logging: true,
      allowTaint: false,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    let heightLeft = pdfHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
    heightLeft -= pdf.internal.pageSize.getHeight();

    while (heightLeft > 0) {
      position = heightLeft - pdfHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();
    }

    pdf.save("Asim_Ozcan_CV.pdf");
  };
  const skills = [
    {
      title: "UX | UI",
      width: "97",
    },
    {
      title: "HTML5",
      width: "98",
    },
    {
      title: "CSS3",
      width: "98",
    },
    {
      title: "JS",
      width: " 85",
    },
    {
      title: "React",
      width: "80",
    },
    {
      title: "Tailwind CSS",
      width: "95",
    },
    {
      title: "Github",
      width: "85",
    },
  ];
  return (
    <>
      <div className="flex justify-center py-4">
        <button
          onClick={handleDownloadPDF}
          className="bg-[#253847] hover:bg-[#1b2934] text-white font-semibold px-6 py-2 rounded"
        >
          PDF Olarak İndir
        </button>
      </div>
      <div
        ref={cvRef}
        className=" flex p-10 justify-center mx-auto w-full max-w-[1200px]  h-auto "
      >
        <div className="left bg-[#253847] w-[380px] py-10 pr-6">
          <img
            className="w-40 h-40 p-1 object-cover bg-[#E3E3E3] mx-auto  border rounded-full "
            src="/profile.png"
            alt="Profil Fotoğrafı"
          />
          <div className="pl-6 mt-6 text-[#E6E6E4]">
            <div className="inline-block">
              <h1 className=" text-2xl ">İLETİŞİM</h1>
              <div className="h-0.5 bg-white mt-1"></div>
            </div>

            <div className=" mt-4 leading-8 text-white">
              <p className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:asim_ozcan@outlook.com">
                  asim_ozcan@outlook.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} />
                0537 216 4986
              </p>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon icon={faLocationDot} />
                Kayıhan Mah.,Pamukkale,Denizli
              </p>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon icon={faGithub} />
                <a target="_blank" href="https://github.com/asimozcann">
                  github.com/asimozcann
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon icon={faLinkedinIn} />
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/asimozcan/"
                >
                  linkedin.com/in/asimozcan/
                </a>
              </p>
            </div>
            <div className="inline-block mt-6">
              <h1 className=" text-2xl ">BECERİLER</h1>
              <div className="h-0.5 bg-white mt-1"></div>
            </div>

            <ul className="mt-4">
              {skills.map((skill) => (
                <li className=" mb-2">
                  <h2 className="mb-2">{skill.title}</h2>
                  <div className="h-3 relative bg-[#E6E6E4]">
                    <div
                      style={{ width: `${skill.width}%` }}
                      className="relative bg-[#65969B] h-3"
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="inline-block mt-6">
              <h1 className=" text-2xl ">DİLLER</h1>
              <div className="h-0.5 bg-white mt-1"></div>
            </div>
            <div className="flex items-center justify-between ">
              <h2 className="mt-2">İngilizce</h2>
              <div className="flex gap-2">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 rounded-full ${
                      i < 3 ? "bg-[#65969B]" : "bg-[#E6E6E4]"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="inline-block mt-6">
              <h1 className=" text-2xl ">EĞİTİM</h1>
              <div className="h-0.5 bg-white mt-1"></div>
            </div>
            <div className="mt-2">
              <strong>Bilgisayar Programcılığı</strong>
              <p>2021-2023</p>
              <h2 className="font-semibold">
                Isparta Uygulamalı Bilimler Üniversitesi
              </h2>
            </div>
          </div>
        </div>
        <div className=" flex-1 bg-[#FFFFFF] p-6">
          <div className="bg-[#F5F5F5] flex justify-center items-center text-center p-6">
            <div className="inline-block space-y-4">
              <h1 className="text-4xl font-bold">ASIM ÖZCAN</h1>
              <div className="h-0.5 bg-black w-48 mx-auto"></div>
              <h2 className="uppercase font-semibold">Front-End Developer</h2>
            </div>
          </div>
          <div className="right mt-10 pl-4">
            <div className="inline-block mt-2">
              <h1 className=" text-2xl ">HAKKIMDA</h1>
              <div className="h-0.5 bg-[#253847] mt-1"></div>
            </div>
            <p>
              Merhaba, ben Asım Özcan. Web geliştirme alanına ilgi duyan ve
              kendini bu alanda sürekli geliştiren bir Junior Front-End
              Developer’ım. HTML, CSS, JavaScript ve React konularında iyi bir
              temele sahibim. Kullanıcı dostu arayüzler tasarlamayı, sade ve
              okunabilir kod yazmayı önemsiyorum. Öğrenmeye açık yapım sayesinde
              yeni teknolojilere hızla adapte olabiliyorum. Amacım; kullanıcı
              deneyimini ön planda tutan, modern ve responsive web projeleri
              geliştirmek ve yazılım dünyasında kalıcı bir iz bırakmak.
            </p>
            <div className="inline-block mt-2">
              <h1 className=" text-2xl ">PROJELER</h1>
              <div className="h-0.5 bg-[#253847] mt-1"></div>
            </div>
            <div>
              <h2>AI Life Coach – Yapay Zekâ Destekli Dijital Yaşam Koçu</h2>
              <p>
                AI Life Coach, kullanıcıların duygusal destek alabileceği, stil
                önerileri keşfedebileceği ve kendini geliştirme yolculuğuna
                rehberlik eden yapay zekâ tabanlı bir yaşam koçu uygulamasıdır.
                Uygulama; React, Firebase ve OpenAI teknolojileriyle
                geliştirilmiştir. Gerçek zamanlı sohbet sistemi, yüz analizi ile
                kişiye özel stil önerileri (saç, sakal, gözlük), kullanıcı
                girişi, sohbet geçmişi gibi özellikler sunar. Amaç, dijital bir
                asistan aracılığıyla kullanıcılara daha iyi hissetmeleri ve
                kendilerini geliştirmeleri için kişiselleştirilmiş rehberlik
                sağlamaktır.
              </p>
              <h2>React Blog Site – Modern ve Responsive Blog Uygulaması</h2>
              <p>
                React ile geliştirilmiş, kullanıcı dostu ve responsive tasarıma
                sahip modern bir blog uygulamasıdır. Proje, bileşen tabanlı yapı
                ile oluşturulmuş olup kullanıcıların blog yazılarını
                görüntüleyebileceği, gezinme yapabileceği ve sayfa geçişleriyle
                birlikte akıcı bir deneyim yaşayabileceği şekilde
                tasarlanmıştır. React Router ile sayfa yapısı yönetilmiş, sade
                ve okunabilir bir tasarım için Tailwind CSS kullanılmıştır.
                UI/UX prensiplerine uygun geliştirilmiş bu proje, Front-End
                geliştirme becerilerini yansıtan temiz bir örnektir.
              </p>
              <h2>
                React Portfolio Site – Kişisel ve Modern Web Geliştirici
                Portföyü
              </h2>
              <p>
                React ile geliştirilmiş, modern ve duyarlı (responsive) bir
                kişisel portföy sitesi. Proje, Front-End becerilerini ve
                projelerini sergilemek isteyen geliştiriciler için
                tasarlanmıştır. React Router ile sayfa yönetimi sağlanmış,
                Tailwind CSS kullanılarak hızlı ve estetik bir tasarım
                oluşturulmuştur. Portfolio, iletişim bilgileri, projeler ve
                hakkımda bölümleriyle profesyonel bir görünüm sunar.
              </p>
              <h2>
                React Notebook App – Kategorili Not Alma ve Yönetim Uygulaması
              </h2>
              <p>
                React ile geliştirilen bu uygulama, kullanıcıların farklı
                kategoriler altında not ekleyip düzenleyip silebileceği işlevsel
                bir not alma aracıdır. Notlar kart formatında sunulur,
                kullanıcılar notları kolayca oluşturabilir, düzenleyebilir ve
                silebilir. Kategori seçimi sayesinde notlar daha düzenli ve
                erişilebilir olur. Proje, temel CRUD işlemlerini ve kategori
                yönetimini öğrenmek isteyenler için ideal bir uygulamadır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cv;
