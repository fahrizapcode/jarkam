"use client";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import ProfileTitle from "@/components/fragments/ProfileTitle";
import { Bar } from "react-chartjs-2";

// Daftarkan komponen Chart.js yang akan digunakan
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import Layout from "../layout";
import "./participation.scss";
import TitleCardEvent from "@/components/fragments/landing-page/TitleCardEvent";
import EventCard from "@/components/fragments/landing-page/EventCard";

export default function Participation() {
  // Registrasi komponen
  ChartJS.register(ArcElement, Tooltip, Legend);

  const dataPie = {
    labels: [
      "Kepengurusan & Kepanitiaan",
      "Pelatihan & Seminar",
      "Kompetisi & Sosial",
      "Lainnya",
    ],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        borderWidth: 0.6,
      },
    ],
  };
  const optionsPie = {
    responsive: false,
    // maintainAspectRatio: false,
    // cutout: "30%", // Mengubah diagram pie menjadi donut
    // rotation: -Math.PI / 2, // Memutar chart 90 derajat
    // circumference: Math.PI, // Hanya menampilkan setengah lingkaran
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "#fff",
        // warna nama data
        titleColor: "black",
        // warna angka %
        bodyColor: "#000",
      },
      legend: {
        position: "right" as const, // Menempatkan legenda di posisi kanan
        labels: {
          padding: 10, // jarak antar label
          // width: 130,
          font: {
            size: 9,
            width: 100,
          },
          boxWidth: 20,
        },
      },
    },

    layout: {
      padding: {
        right: 0,
      },
    },
  };
  const dataBar = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], // Label sumbu X
    datasets: [
      {
        label: "kegiatan diselesaikan", // Label dataset
        data: [3, 4, 1, 2, 3, 2, 0, 2, 5, 1, 0, 4], // Data untuk batang
        backgroundColor: "rgb(0, 140, 255)", // Warna latar belakang batang
        borderColor: "rgb(0, 140, 255)", // Warna border batang
        borderWidth: 1, // Ketebalan border
        barThickness: 18, // ketebalan border
      },
    ],
  };

  // Opsi untuk chart
  const optionsBar = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, // Posisi legend
        boxWidth: 0,
        display: false,
      },
      tooltip: {
        enabled: true, // Menampilkan tooltip saat hover
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Nonaktifkan grid sumbu X
        },
        ticks: {
          font: {
            size: 10, // Ukuran font untuk label sumbu X
            family: "Arial, sans-serif", // Font untuk label sumbu X
          },
        },
      },
      y: {
        grid: {
          display: false, // Nonaktifkan grid sumbu Y
        },
        ticks: {
          font: {
            size: 13, // Ukuran font untuk label sumbu Y
            family: "Arial, sans-serif", // Font untuk label sumbu Y
          },
          callback: function (value: any) {
            return value % 1 === 0 ? value : value.toFixed(0); // Hanya menampilkan angka bulat
          },
        },
      },
    },
  };

  return (
    <div className="participation-page">
      <ProfileTitle
        textContent="Partisipasi"
        titleIcon="./icons/analytics-icon-blue.svg"
      />
      <div className="stats-container">
        <div className="count-stats-container">
          <div className="count-stats" style={{ color: "#008C1A" }}>
            <p className="count">2</p>
            <p className="label">Kegiatan yang diikuti</p>
          </div>
          <div className="count-stats" style={{ color: "#005197" }}>
            <p className="count">32</p>
            <p className="label">Kegiatan yang diselesaikan</p>
          </div>
        </div>
        <div className="stats">
          <Pie data={dataPie} options={optionsPie} width={340} height={160} />
        </div>
        <div className="stats" style={{ padding: 12 }}>
          <Bar data={dataBar} options={optionsBar} width={310} height={160} />
        </div>
      </div>
      <div className="event-card-container">
        <TitleCardEvent
          image="./icons/time-progress-blue-icon.svg"
          textContent="Riwayat"
        />
        <div className="event-card-inner">
          <EventCard
            title="Open Recrutment IT Fair XIV"
            publisher="Teknik Informatika"
            publisherPicture="./image/ifuin.png"
            deadline="27 Jan"
            eventPicture="./image/baksos.png"
          />
          <EventCard
            title="Open Recrutment IT Fair XIV"
            publisher="Teknik Informatika"
            publisherPicture="./image/ifuin.png"
            deadline="27 Jan"
            eventPicture="./image/baksos.png"
          />
          <EventCard
            title="Open Recrutment IT Fair XIV"
            publisher="Teknik Informatika"
            publisherPicture="./image/ifuin.png"
            deadline="27 Jan"
            eventPicture="./image/baksos.png"
          />
          <EventCard
            title="Open Recrutment IT Fair XIV"
            publisher="Teknik Informatika"
            publisherPicture="./image/ifuin.png"
            deadline="27 Jan"
            eventPicture="./image/baksos.png"
          />
          <EventCard
            title="Open Recrutment IT Fair XIV"
            publisher="Teknik Informatika"
            publisherPicture="./image/ifuin.png"
            deadline="27 Jan"
            eventPicture="./image/baksos.png"
          />
        </div>
      </div>
    </div>
  );
}
