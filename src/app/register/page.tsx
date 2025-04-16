"use client";
import Link from "next/link";
import "./register-page.scss";
import { useRouter } from "next/navigation";
function registerPage() {
  const router = useRouter();
  const handleregister = () => {
    return 1;
  };
  return (
    <div className="register-page">
      <div className="register-illustration-container">
        <img src="./image/jrm-logo-long.png" alt="logo" className="logo" />
        <img
          src="./image/jrm-login.png"
          alt="illustration"
          className="illustration"
        />
      </div>
      <div className="register-form-background">
        <div className="register-form-container">
          <form onSubmit={handleregister}>
            <p className="title-form">Daftar</p>
            <div className="field-container">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" />
              </div>
              <div className="field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <div className="field">
                <label htmlFor="no-telp">No Telp</label>
                <input type="number" id="no-telp" />
              </div>
              <div className="field">
                <label htmlFor="nim">Nim</label>
                <input type="number" id="nim" />
              </div>
            </div>
            <div className="flow-container">
              <div
                className="flow"
                style={{ backgroundColor: "#007eeb" }}
              ></div>
              <div className="flow"></div>
            </div>
            <div className="button-container">
              <Link
                href="/login"
                style={{
                  flex: 4,
                  backgroundColor: "transparent",
                  color: "#003360",
                  border: "1px solid rgb(18, 164, 255)",
                }}
                className="button"
              >
                Kembali
              </Link>
              <Link href="/register/step-2" className="button">
                Selanjutnya
                <div>
                  <img src="../icons/back-arrow-icon.svg" alt="" />
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default registerPage;
