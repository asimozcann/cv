import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CvTr = () => {
  const skills = [
    { title: "UX | UI", width: "97" },
    { title: "HTML5", width: "98" },
    { title: "CSS3", width: "98" },
    { title: "JavaScript", width: "85" },
    { title: "React", width: "80" },
    { title: "Tailwind CSS", width: "95" },
    { title: "GitHub", width: "85" },
  ];

  return (
    <div className="flex p-10 justify-center mx-auto w-full max-w-[1200px] h-auto">
      <div className="left bg-[#253847] w-[380px] py-10 pr-6">
        <img
          className="w-40 h-40 p-1 object-cover bg-[#E3E3E3] mx-auto border rounded-full"
          src="/profile.png"
          alt="Profil Fotoğrafı"
        />
        <div className="pl-6 mt-6 text-[#E6E6E4]">
          <div className="inline-block">
            <h1 className="text-2xl">İLETİŞİM</h1>
            <div className="h-0.5 bg-white mt-1"></div>
          </div>

          <div className="mt-4 leading-8 text-white">
            <p className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:asim_ozcan@outlook.com">asim_ozcan@outlook.com</a>
            </p>
            <p className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} />
              0537 216 4986
            </p>
            <p className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} />
              Kayıhan Mah., Pamukkale, Denizli
            </p>
            <p className="flex items-center gap-2">
              <FontAwesomeIcon icon={faGithub} />
              <a target="_blank" href="https://github.com/asimozcann">
                github.com/asimozcann
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLinkedinIn} />
              <a target="_blank" href="https://www.linkedin.com/in/asimozcan/">
                linkedin.com/in/asimozcan/
              </a>
            </p>
          </div>

          <div className="inline-block mt-6">
            <h1 className="text-2xl">YETENEKLER</h1>
            <div className="h-0.5 bg-white mt-1"></div>
          </div>

          <ul className="mt-4">
            {skills.map((skill) => (
              <li key={skill.title} className="mb-2">
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
            <h1 className="text-2xl">DİLLER</h1>
            <div className="h-0.5 bg-white mt-1"></div>
          </div>
          <div className="flex items-center justify-between">
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
            <h1 className="text-2xl">EĞİTİM</h1>
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

      <div className="flex-1 bg-[#FFFFFF] p-6">
        <div className="bg-[#F5F5F5] flex justify-center items-center text-center p-6">
          <div className="inline-block space-y-4">
            <h1 className="text-4xl font-bold">ASIM ÖZCAN</h1>
            <div className="h-0.5 bg-black w-48 mx-auto"></div>
            <h2 className="uppercase font-semibold">Front-End Developer</h2>
          </div>
        </div>

        <div className="right mt-10 pl-4">
          <div className="inline-block mt-2">
            <h1 className="text-2xl">HAKKIMDA</h1>
            <div className="h-0.5 bg-[#253847] mt-1"></div>
          </div>
          <p>
            Temiz, kullanıcı dostu web arayüzleri oluşturma tutkusu olan
            öz-motivasyonlu bir Front-End geliştiricisiyim. React, Firebase ve
            Tailwind CSS gibi modern araçları kullanarak mobil uyumlu ve hızlı
            arayüzler geliştiriyorum. Öğrenmeye açıktayım ve erişilebilir
            dijital deneyimler oluşturmaktan keyif alıyorum. Uzaktan
            çalışabileceğim ve katkı sağlayabileceğim fırsatlar arıyorum.
          </p>

          <div className="inline-block mt-2">
            <h1 className="text-2xl">PROJELER</h1>
            <div className="h-0.5 bg-[#253847] mt-1"></div>
          </div>

          <div>
            <h2>AI Yaşam Koçu – Yapay Zeka Destekli Uygulama</h2>
            <p>
              React + Firebase ile geliştirilen bu uygulama, kullanıcıların
              ruhsal destek, stil önerileri ve gelişim alanlarında rehberlik
              almasını sağlar. Gerçek zamanlı sohbet, yüz analizi, sesli yanıt
              ve Google girişi gibi özellikleri içerir.
            </p>

            <h2>React Blog Sitesi – Modern & Mobil Uyumlu</h2>
            <p>
              React Router ile oluşturulmuş tam sayfa geçişli, modern bir blog
              sistemi. Kategoriye göre filtreleme, içerik ekleme ve yönetim
              özellikleri içerir. UI/UX'e önem verilmiştir.
            </p>

            <h2>Kişisel Portföy – Front-End Geliştirici</h2>
            <p>
              Kendi yeteneklerimi ve projelerimi sergilediğim mobil uyumlu,
              minimalist portföy sitesi. İletişim formu ve proje listesi içerir.
              React + Tailwind CSS ile yapılmıştır.
            </p>

            <h2>React Notlar Uygulaması – CRUD İşlemleri</h2>
            <p>
              Not ekleme, silme ve güncelleme işlevlerine sahip tam özellikli
              bir uygulama. Notlar kategoriye göre filtrelenebilir, kart yapısı
              ile listelenir ve mobil uyumludur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvTr;
