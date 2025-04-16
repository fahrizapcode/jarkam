"use client";
import Link from "next/link";
import "./step-2.scss";
function RegisterS2Page() {
  const handleRegister = () => {
    return 1;
  };
  const handleFileChange = () => {
    return 0;
  };
  return (
    <div className="register-s2-page">
      <div className="register-s2-illustration-container">
        <img src="../image/jrm-logo-long.png" alt="logo" className="logo" />
        <img
          src="../image/jrm-login.png"
          alt="illustration"
          className="illustration"
        />
      </div>
      <div className="register-s2-form-background">
        <div className="register-s2-form-container">
          <form onSubmit={handleRegister}>
            <p className="title-form">Daftar</p>
            <label htmlFor="profile-picture" className="profile-picture">
              <img src="../icons/user-icon.svg" alt="" height={66} />
              <div className="camera">
                <img src="../icons/camera-icon.svg" alt="" height={18} />
              </div>
            </label>
            <input
              type="file"
              id="profile-picture"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <div className="field-container">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="contoh@example.com"
                />
              </div>
              <div className="field">
                <label htmlFor="jurusan">Jurusan</label>
                <input
                  type="text"
                  id="jurusan"
                  placeholder="Contoh: Sastra Mesin"
                />
              </div>
              <div className="field">
                <label htmlFor="angkatan">Angkatan</label>
                <input type="number" id="angkatan" placeholder="Contoh: 1999" />
              </div>
            </div>
            <div className="flow-container">
              <div className="flow"></div>
              <div className="flow"></div>
            </div>
            <div className="button-container">
              <Link
                href="/register"
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
              <Link type="submit" href="/" className="button">
                Daftar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterS2Page;
