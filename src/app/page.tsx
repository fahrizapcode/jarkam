"use client";
import Button from "@/components/fragments/Button";
import { Roboto } from "next/font/google";
import "./landingpage.scss";
import { useEffect, useRef, useState } from "react";
import FilterItemContainer from "@/components/fragments/landing-page/FilterItemContainer";
import TitleCardEvent from "@/components/fragments/landing-page/TitleCardEvent";
import EventCard from "@/components/fragments/landing-page/EventCard";
import HeroCard from "@/components/fragments/landing-page/HeroCard";
import Link from "next/link";
const roboto = Roboto({
  weight: ["400", "700"], // Bisa pilih varian font
  subsets: ["latin"], // Bisa pilih subset, misalnya "latin", "cyrillic", dll.
});

import ButtonSubmit from "@/components/fragments/ButtonSubmit";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
function LandingPage() {
  const modalRef = useRef<HTMLDivElement>(null);
  const filterbtnRef = useRef<HTMLButtonElement>(null);
  const filterItemsOrganizer = [
    "FST",
    "FTK",
    "FU",
    "FEBI",
    "FAH",
    "FDK",
    "FPsi",
    "FSH",
    "UKM",
    "Semua",
  ];
  const filterItemsStatus = ["Berlangsung", "Selesai", "Semua"];
  const filterItemsCategory = [
    "Seminar",
    "Kepengurusan",
    "Kepanitiaan",
    "Pelatihan",
    " Kompetisi",
    "Semua",
  ];
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showFilter, setShowFilter] = useState(-440);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // modalref= div yang diberi label ref = modal ref
      if (
        // apakah modalRefnya ada?
        modalRef.current &&
        // apakah modalRef TIDAK mengandung titik yang di klik (artinya kliknya diluar modal)
        !modalRef.current.contains(event.target as Node) &&
        // ketika kita mengupdate state, otomatis akan merender ulang useEffect, jadi saat kita klik filter button untuk menutup modal, itu akan memanggil kembali handleClickOutside useEffect karena filter button juga termasuk overlay nya
        // jadi disini digunakan agar filter button jadi tidak termasuk overlay
        filterbtnRef.current &&
        !filterbtnRef.current.contains(event.target as Node)
      ) {
        console.log("Event: " + event.target);
        setShowFilter(-440);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Menambahkan event listener untuk menangkap perubahan scroll
    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener saat komponen tidak digunakan lagi
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Menggunakan window.scrollY untuk mendapatkan posisi scroll vertikal
    setScrollPosition(window.scrollY);
  };

  const setScroll = () => {
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
    console.log("scroll");
  };

  const { data, error } = useSWR(`http://localhost:3000/api/event`, fetcher);
  if (!data) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching data</div>;
  }
  const eventData = data.data;

  return (
    <div>
      <nav className="nav-landing-page">
        {/* <p>{scrollPosition}</p> */}
        <img src="./image/jrm-logo-short.png" alt="logo" />
        {/* <Button
          textContent="Login"
          width={84}
          fontSize={16}
          height={32}
          buttonColor="#0084D6"
          buttonColorActive="#DCF2FF"
        /> */}
        <Link href="/profile" className="profile-button">
          <img src="./icons/user-icon-blue.svg" alt="" width={24} />
        </Link>
      </nav>
      <div className="landing-page-top-container">
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
      </div>
      {/* ini digunakan karena div searchingpart adalah div paling atas, karena nav dan landing page positionnya fixed dan absolute, jadi untuk yang position fixed akan mengikuti div pertama (paling atas) yaitu searching part, jadi upaya menggunakan margin top pada searching top sticky akan mempengaruhi nav landing page yang fixed yang otomatis akan ter margin top juga*/}
      {/* margin topnya udah dihapus karena kita sudah tempatkan yaitu landing page container */}
      <div className="nav-background">
        <div className="bg-nav"></div>
      </div>
      <div className="filter-part" style={{ right: showFilter }} ref={modalRef}>
        <h1>Penyelenggara</h1>
        <FilterItemContainer
          items={filterItemsOrganizer}
          width={70}
          fontWeight={600}
        />
        <h1>Status</h1>
        <FilterItemContainer
          items={filterItemsStatus}
          width={120}
          fontWeight={500}
        />
        <h1>Kategori</h1>
        <FilterItemContainer
          items={filterItemsCategory}
          width={120}
          fontWeight={500}
        />
        <div style={{ height: 6 }}>{/* Space */}</div>
        <ButtonSubmit
          textContent="Terapkan"
          width={120}
          fontSize={16}
          height={30}
          buttonColor="#0084D6"
          buttonColorActive="#DCF2FF"
        />
      </div>
      <div className="searching-part">
        <input type="search" placeholder="Cari Kegiatan" />
        <button
          ref={filterbtnRef}
          onClick={() => {
            if (showFilter === -440) {
              setShowFilter(25);
            } else {
              setShowFilter(-440);
            }
          }}
        >
          <img
            src="./icons/filter-icon.svg"
            alt="
          filter"
          />
        </button>
      </div>
      <div className="content">
        <div className="event-card-container">
          <TitleCardEvent
            image="./icons/time-progress-icon.svg"
            textContent="Kegiatan Berlangsung"
          />
          <div className="event-card-inner">
            {eventData.map((event: any, index: number) => (
              <div key={index}>
                <Link
                  href={`http://localhost:3000/event-detail/${event.id}`}
                  key={index}
                >
                  <EventCard
                    title={event.title}
                    publisher={event.organizer}
                    publisherPicture={event.eventPicture}
                    deadline={event.registrationDeadline}
                    eventPicture={event.eventPicture}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-card-container">
          {eventData.map((event: any, index: number) => (
            <div key={index}>
              <HeroCard
                title={event.title}
                date={event.registrationDeadline}
                participant={event.participants}
                eventPicture={event.eventPicture}
              />
            </div>
          ))}
        </div>
        <div className="event-card-container">
          <TitleCardEvent
            image="./icons/group-icon.svg"
            textContent="Kepanitiaan & Kepengurusan"
          />
          <div className="event-card-inner">
            {eventData.map((event: any, index: number) => (
              <Link
                href={`http://localhost:3000/event-detail/${event.id}`}
                key={index}
              >
                <EventCard
                  title={event.title}
                  publisher={event.organizer}
                  publisherPicture={event.eventPicture}
                  deadline={event.registrationDeadline}
                  eventPicture={event.eventPicture}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="event-card-container">
          <TitleCardEvent
            image="./icons/user-presentation-icon.svg"
            textContent="Seminar & Pelatihan"
          />
          <div className="event-card-inner">
            {eventData.map((event: any, index: number) => (
              <div key={index}>
                <Link
                  href={`http://localhost:3000/event-detail/${event.id}`}
                  key={index}
                >
                  <EventCard
                    title={event.title}
                    publisher={event.organizer}
                    publisherPicture={event.eventPicture}
                    deadline={event.registrationDeadline}
                    eventPicture={event.eventPicture}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="event-card-container">
          <TitleCardEvent
            image="./icons/trophy-icon.svg"
            textContent="Kompetisi & Sosial"
          />
          <div className="event-card-inner">
            {eventData.map((event: any, index: number) => (
              <div key={index}>
                <Link
                  href={`http://localhost:3000/event-detail/${event.id}`}
                  key={index}
                >
                  <EventCard
                    title={event.title}
                    publisher={event.organizer}
                    publisherPicture={event.eventPicture}
                    deadline={event.registrationDeadline}
                    eventPicture={event.eventPicture}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div style={{ height: 500 }}></div>
      </div>
    </div>
  );
}

export default LandingPage;
