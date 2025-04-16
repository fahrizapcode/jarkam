"use client";
import { useState } from "react";
import "./profile.scss";
import BackButton from "@/components/fragments/BackButton";
import Link from "next/link";

function Layout({
  children,
  participation,
  account,
  blank,
}: {
  children: React.ReactNode;
  participation: React.ReactNode;
  account: React.ReactNode;
  blank: React.ReactNode;
}) {
  const [activeSidebar, setActiveSidebar] = useState("personal-information");
  return (
    <div className="profile-page-container">
      <div className="profile-page">
        <div className="sidebar">
          <Link href="/">
            <BackButton />
          </Link>
          <div className="profile">
            <label htmlFor="profile-picture">
              <img src="" alt="" />
            </label>
            <input
              type="file"
              id="profile-picture"
              style={{ display: "none" }}
            />
            <p>John Doe</p>
          </div>
          <div className="button-container">
            <button
              className="personal-information button"
              style={{
                backgroundColor:
                  activeSidebar === "personal-information"
                    ? "#7fceff"
                    : "transparent",
              }}
              onClick={() => setActiveSidebar("personal-information")}
            >
              <img src="./icons/user-icon-blue.svg" alt="" />
              <p>Informasi Pribadi</p>
            </button>
            <button
              className="partisipation button"
              onClick={() => setActiveSidebar("partisipation")}
              style={{
                backgroundColor:
                  activeSidebar === "partisipation" ? "#7fceff" : "transparent",
              }}
            >
              <img src="./icons/analytics-icon-blue.svg" alt="" />
              <p>Partisipasi</p>
            </button>
            <button
              className="account button"
              onClick={() => setActiveSidebar("account")}
              style={{
                backgroundColor:
                  activeSidebar === "account" ? "#7fceff" : "transparent",
              }}
            >
              <img src="./icons/user-setting-icon-blue.svg" alt="" />
              <p>Akun</p>
            </button>
            <Link href="/register">
              <button
                className="logout button"
                onClick={() => setActiveSidebar("logout")}
                style={{
                  backgroundColor:
                    activeSidebar === "logout" ? "#7fceff" : "transparent",
                  width: "100%",
                }}
              >
                <img src="./icons/logout-blue.svg" alt="" />
                <p>Logout</p>
              </button>
            </Link>
          </div>
        </div>
        {activeSidebar === "account"
          ? account
          : activeSidebar === "partisipation"
          ? participation
          : activeSidebar === "logout"
          ? blank
          : children}
      </div>
    </div>
  );
}

export default Layout;
