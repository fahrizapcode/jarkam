"use client";
import ProfileTitle from "@/components/fragments/ProfileTitle";
import "../admin.scss";
import "./event.scss";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function Event() {
  const { data, error } = useSWR(`http://localhost:3000/api/event`, fetcher);
  if (!data) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching data</div>;
  }
  const eventData = data.data;
  return (
    <div className="event-page">
      <ProfileTitle
        textContent="Kegiatan"
        titleIcon="../../icons/calendar-icon-blue.svg"
      />
      <div className="header">
        <input type="text" placeholder="Cari" />
        <button>
          <p className="add">+</p>
          <p>Tambah Kegiatan</p>
        </button>
      </div>
      <div className="content">
        <div className="header-content">
          <p className="id">Id kegiatan</p>
          <p className="name">Nama kegiatan</p>
          <p className="status"> Status</p>
          <p className="publication-time">Waktu publikasi</p>
          <p className="participants">Jumlah pendaftar</p>
        </div>
        {eventData.map((event: any, index: number) => (
          <div className="event-element" key={index}>
            <p className="id">{event.id}</p>
            <p className="name">{event.title}</p>
            <p className="status">{event.status}</p>
            <p className="publication-time">{event.created}</p>
            <p className="participants">{event.participants}</p>
            <button>
              <img src="../../icons/edit-pencil-icon-blue.svg" alt="edit" />
            </button>
          </div>
        ))}
        {eventData.map((event: any, index: number) => (
          <div className="event-element" key={index}>
            <p className="id">{event.id}</p>
            <p className="name">{event.title}</p>
            <p className="status">{event.status}</p>
            <p className="publication-time">{event.created}</p>
            <p className="participants">{event.participants}</p>
            <Link
              href={`http://localhost:3000/admin/dashboard/detail/${event.id}`}
              key={index}
            >
              <button>
                <img src="../../icons/edit-pencil-icon-blue.svg" alt="edit" />
              </button>
            </Link>
          </div>
        ))}
        {eventData.map((event: any, index: number) => (
          <div className="event-element" key={index}>
            <p className="id">{event.id}</p>
            <p className="name">{event.title}</p>
            <p className="status">{event.status}</p>
            <p className="publication-time">{event.created}</p>
            <p className="participants">{event.participants}</p>
            <button>
              <img src="../../icons/edit-pencil-icon-blue.svg" alt="edit" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
