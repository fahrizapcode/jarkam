"use client";
import Link from "next/link";
import "./login-page.scss";
function LoginPage() {
  const handleLogin = () => {
    return 1;
  };
  return (
    <div className="login-page">
      <div className="login-illustration-container">
        <img src="./image/jrm-logo-long.png" alt="logo" className="logo" />
        <img
          src="./image/jrm-login.png"
          alt="illustration"
          className="illustration"
        />
      </div>
      <div className="login-form-background">
        <div className="login-form-container">
          <form onSubmit={handleLogin}>
            <p className="title-form">Login</p>
            <div className="field-container">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" />
              </div>
              <div className="field">
                <label htmlFor="password">Password</label>
                <input type="text" id="password" />
              </div>
            </div>
            <Link className="button" href="/" type="submit">
              Login
            </Link>
            <p className="reg-title">Belum punya akun?</p>
            <Link
              className="button"
              href="/register"
              style={{
                backgroundColor: "white",
                color: "#003360",
                marginTop: 10,
              }}
            >
              Daftar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
