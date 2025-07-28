import { useState, useRef } from "react";
import CvTr from "./CvTr";
import CvEn from "./CvEn";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CVWrapper = () => {
  const [lang, setLang] = useState("tr");
  const cvRef = useRef();

  const handleDownload = async () => {
    const canvas = await html2canvas(cvRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save(`asim_ozcan_cv_${lang}.pdf`);
  };

  return (
    <>
      <div className="flex justify-center gap-4 p-4">
        <button
          onClick={() => setLang("tr")}
          className={`px-4 py-2 rounded ${
            lang === "tr" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Türkçe CV
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-4 py-2 rounded ${
            lang === "en" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          English CV
        </button>
        <button
          onClick={handleDownload}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
        >
          PDF Olarak İndir
        </button>
      </div>

      <div ref={cvRef}>{lang === "tr" ? <CvTr /> : <CvEn />}</div>
    </>
  );
};

export default CVWrapper;
