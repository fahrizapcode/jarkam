"use client";
import { useEffect, useState } from "react";
import "./admin.scss";
import BackButton from "@/components/fragments/BackButton";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [activeSidebar, setActiveSidebar] = useState("account-page");
  //   const path = router.pathname;
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/admin/dashboard/account") {
      setActiveSidebar("account");
    } else if (pathname === "/admin/dashboard/event") {
      setActiveSidebar("event");
    } else if (pathname === "/admin/dashboard/management") {
      setActiveSidebar("management");
    } else {
      setActiveSidebar("account");
    }
  });
  return (
    <div className="admin-page-container">
      <div className="admin-page">
        <div className="sidebar">
          <img src="/image/jrm-logo-short.png" alt="" className="logo-jrm" />
          <div className="button-container">
            <button
              className="account-page button"
              style={{
                backgroundColor:
                  activeSidebar === "account" ? "#7fceff" : "transparent",
              }}
              onClick={() => {
                router.push("/admin/dashboard");
              }}
            >
              <img src="/icons/user-icon-blue.svg" alt="" />
              <p>Akun</p>
            </button>
            <button
              className="event button"
              onClick={() => {
                router.push("/admin/dashboard/event");
              }}
              style={{
                backgroundColor:
                  activeSidebar === "event" ? "#7fceff" : "transparent",
              }}
            >
              <img src="/icons/calendar-icon-blue.svg" alt="" />
              <p>Kegiatan</p>
            </button>
            <button
              className="account button"
              onClick={() => {
                router.push("/admin/dashboard/management");
              }}
              style={{
                backgroundColor:
                  activeSidebar === "management" ? "#7fceff" : "transparent",
              }}
            >
              <img src="/icons/user-setting-icon-blue.svg" alt="" />
              <p>Manajemen Admin</p>
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
                <img src="/icons/logout-blue.svg" alt="" />
                <p>Logout</p>
              </button>
            </Link>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
