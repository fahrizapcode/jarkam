import Button from "@/components/fragments/Button";
import { Roboto } from "next/font/google";
import "./landingpage.scss";

const roboto = Roboto({
  weight: ["400", "700"], // Bisa pilih varian font
  subsets: ["latin"], // Bisa pilih subset, misalnya "latin", "cyrillic", dll.
});
function LandingPage() {
  return (
    <div className="landing-page">
      <nav className="nav-landing-page">
        <img src="./image/jrm-logo-short.png" alt="" height={50} />
        <Button
          textContent="Login"
          width={120}
          buttonColor="#0084D6"
          buttonColorActive="#DCF2FF"
        />
      </nav>
      <div className="landing-page-top">
        <div className="title">
          <h1>Cari Kegiatan Mahasiswa yang Tepat untukmu</h1>
          <p>
            Temukan Peluang Baru untuk Belajar, Berkembang, dan Berkolaborasi!
          </p>
        </div>
        <div className="image">
          <img src="./image/jrm-landingpage.png" alt="landing-image" />
        </div>
      </div>
      <div className="searching-part">
        <input type="text" />
      </div>
      <div className="content">
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
      </div>
    </div>
  );
}

export default LandingPage;
