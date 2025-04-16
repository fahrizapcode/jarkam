// import "./profile.scss";

"use client";
import Button from "@/components/fragments/Button";
import ProfileTitle from "@/components/fragments/ProfileTitle";
import Link from "next/link";
import { useState } from "react";
function AccountPage() {
  const [hidePassword, setHidePassword] = useState(110);

  return (
    <div className="account-page" style={{}}>
      <div className="profile">
        <label htmlFor="upload-profile-picture" className="profile-picture">
          <img src="../icons/user-icon.svg" alt="" className="picture" />
          <div className="change-photo">
            <img src="../icons/camera-icon.svg" alt="" />
          </div>
        </label>
        <input
          type="file"
          name="upload-profile-picture"
          id="upload-profile-picture"
          style={{ display: "none" }}
        />

        <div className="info">
          <h2 className="name">Dema FST</h2>
          <p className="email">demafst@gmail.com</p>
          <p className="role">Admin Fakultas</p>
        </div>
      </div>
      <div className="fields-container">
        <div className="field">
          <label htmlFor="username">
            Username <img src="../icons/edit-pencil-icon-blue.svg" alt="edit" />
          </label>
          <input type="text" id="username" placeholder="DEMA FST " />
        </div>
        <div className="field">
          <label htmlFor="email">
            Email <img src="../icons/edit-pencil-icon-blue.svg" alt="edit" />
          </label>
          <input type="text" id="email" placeholder="@demafst@gmail.com" />
        </div>
        <div className="field">
          <label htmlFor="telephone">
            No Telp <img src="../icons/edit-pencil-icon-blue.svg" alt="edit" />
          </label>
          <input type="text" id="telephone" placeholder="08472819292" />
        </div>

        <div className="button-container">
          <button>Simpan</button>
        </div>
      </div>
      <div
        className="password-field-container"
        style={{
          height: hidePassword,
        }}
      >
        <div className="password-field-main">
          <div className="title-container">
            <div className="title">
              <img src="../icons/lock-icon-blue.svg" alt="" width={20} />
              <p>Password</p>
            </div>
            <button
              onClick={() => setHidePassword(110)}
              style={{ display: hidePassword === 110 ? "none" : "flex" }}
            >
              <img src="../icons/down-icon.svg" alt="" />
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
export default AccountPage;
