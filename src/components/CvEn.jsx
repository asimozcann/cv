import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CvEn = () => {
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
     
      <div className=" flex p-10 justify-center mx-auto w-full max-w-[1200px]  h-auto ">
        <div className="left bg-[#253847] w-[380px] py-10 pr-6">
          <img
            className="w-40 h-40 p-1 object-cover bg-[#E3E3E3] mx-auto  border rounded-full "
            src="/profile.png"
            alt="Profil Fotoğrafı"
          />
          <div className="pl-6 mt-6 text-[#E6E6E4]">
            <div className="inline-block">
              <h1 className=" text-2xl ">CONTACT</h1>
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
              <h1 className=" text-2xl ">SKİLLS</h1>
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
              <h1 className=" text-2xl ">LANGUAGES</h1>
              <div className="h-0.5 bg-white mt-1"></div>
            </div>
            <div className="flex items-center justify-between ">
              <h2 className="mt-2">English</h2>
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
              <h1 className=" text-2xl ">EDUCATION</h1>
              <div className="h-0.5 bg-white mt-1"></div>
            </div>
            <div className="mt-2">
              <strong>Computer Programming</strong>
              <p>2021-2023</p>
              <h2 className="font-semibold">
                Isparta University of Applied Sciences
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
              <h1 className=" text-2xl ">ABOUT ME</h1>
              <div className="h-0.5 bg-[#253847] mt-1"></div>
            </div>
            <p>
              I’m a self-motivated Front-End Developer with a passion for
              creating clean, user-friendly web interfaces. I focus on
              responsive design, usability, and performance using modern tools
              like React, Firebase, and Tailwind CSS. I enjoy learning new
              technologies and building accessible digital experiences that make
              a difference. I'm seeking remote opportunities where I can
              contribute and grow as a developer.
            </p>
            <div className="inline-block mt-2">
              <h1 className=" text-2xl ">PROJELER</h1>
              <div className="h-0.5 bg-[#253847] mt-1"></div>
            </div>
            <div>
              <h2>AI Life Coach – AI-Powered Lifestyle App</h2>
              <p>
                A React + Firebase app that supports users emotionally through
                chat, style advice, and personal growth suggestions powered by
                OpenAI. Features include real-time chat, facial analysis for
                style tips (beard, glasses), voice response, and Google
                authentication.
              </p>
              <h2>React Blog Site – Modern & Responsive</h2>
              <p>
                A sleek, fully responsive blog system using React Router and
                component-based architecture. Users can add posts, view by
                category, and manage content. Focuses on UI/UX and
                mobile-friendly structure.
              </p>
              <h2>React Portfolio – Personal Developer Portfolio</h2>
              <p>
                A responsive and minimalist portfolio site showcasing my skills
                and projects. Built with React and TailwindCSS, this project
                includes a contact form, about me, and project listings. Ideal
                for job applications.
              </p>
              <h2>React Notes App – CRUD Note Management</h2>
              <p>
                A full CRUD app to create, update, and delete categorized notes.
                Built with React, the app displays notes in card format,
                supports filtering by tags, and is mobile-optimized.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CvEn;
