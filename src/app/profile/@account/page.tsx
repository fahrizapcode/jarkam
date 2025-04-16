"use client";
import ProfileTitle from "@/components/fragments/ProfileTitle";
import "./account.scss";
import { useState } from "react";
export default function Account() {
  const [hidePassword, setHidePassword] = useState(110);
  return (
    <div className="account-page">
      <ProfileTitle
        textContent="Akun"
        titleIcon="./icons/user-setting-icon-blue.svg"
      />
      <div
        className="password-field-container"
        style={{
          height: hidePassword,
        }}
      >
        <div className="password-field-main">
          <div className="title-container">
            <div className="title">
              <img src="./icons/lock-icon-blue.svg" alt="" width={20} />
              <p>Password</p>
            </div>
            <button
              onClick={() => setHidePassword(110)}
              style={{ display: hidePassword === 110 ? "none" : "flex" }}
            >
              <img src="./icons/down-icon.svg" alt="" />
            </button>
          </div>
          <div className="current-password-field">
            <input type="text" />
            <button
              className="change-password"
              onClick={() =>
                hidePassword === 110
                  ? setHidePassword(420)
                  : setHidePassword(110)
              }
            >
              {" "}
              Ubah Password
            </button>
          </div>
        </div>
        <div className="password-field">
          <p>Masukkan password lama</p>
          <input type="password" />
        </div>
        <div className="password-field">
          <p>Masukkan password baru</p>
          <input type="password" />
        </div>
        <div className="password-field">
          <p>Konfirmasi password baru</p>
          <input type="password" />
        </div>
        <button className="saveChanges">Simpan Perubahan</button>
      </div>
    </div>
  );
}
