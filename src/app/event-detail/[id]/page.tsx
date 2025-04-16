"use client";

import EventFieldArray from "@/components/fragments/event-detail/EventFieldArray";
import { useState, useEffect } from "react";

import "./event-detail.scss";
import EventField from "@/components/fragments/event-detail/EventField";
import Button from "@/components/fragments/Button";
import ButtonSubmit from "@/components/fragments/ButtonSubmit";
import BackButton from "@/components/fragments/BackButton";
import Link from "next/link";
``;
interface DetailEventProps {
  params: { id: string } | Promise<{ id: string }>;
}

function DetailEvent({ params }: DetailEventProps) {
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Fungsi untuk mengambil data secara asynchronous
  const fetchEventData = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/event?id=${id}`);
      const data = await response.json();
      setEvent(data.data);
      setLoading(false); // Set loading to false after data is fetched
    } catch (err: any) {
      console.error("Error fetching event:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      if (params instanceof Promise) {
        const resolvedParams = await params; // Unwrap the Promise
        fetchEventData(resolvedParams.id); // Fetch data using the unwrapped id
      } else {
        fetchEventData(params.id); // Directly use params if already resolved
      }
    };
    loadData();
  }, [params]); // Re-run whenever `params` changes

  if (loading) return <div>Loading...</div>;

  return (
    <div className="event-content">
      <Link href="/" className="back-button">
        <BackButton />
      </Link>
      <div className="content">
        <div className="main">
          <div className="event-picture">
            <img src={event.eventPicture} alt="picture" />
          </div>
          <div className="title">
            <h1>{event.title}</h1>
            <p>{event.description}</p>
          </div>
        </div>
        <div className="info">
          <div className="detail">
            {/* <h2>Detail Kegiatan</h2> */}
            <EventField
              val={event.location}
              property="Lokasi"
              icon="../../icons/location-icon-blue.svg"
            />
            <EventField
              val={event.contact}
              property="Kontak"
              icon="../../icons/whatsapp-icon-blue.svg"
            />
            <EventField
              val={"Rp" + event.cost}
              property="Biaya"
              icon="../../icons/money-dollar-icon-blue.svg"
            />
            <EventField
              val={event.organizer}
              property="Penyelenggara"
              icon="../../icons/group-icon-blue.svg"
            />
            <EventField
              val={event.eventDate}
              property="Tanggal Pelaksanaan"
              icon="../../icons/calendar-icon-blue.svg"
            />
            <EventField
              val={event.registrationDeadline}
              property="Batas Pendaftaran"
              icon="../../icons/time-progress-blue-icon.svg"
            />
            <EventFieldArray
              val={event.benefits}
              property="Benefit"
              icon="../../icons/trophy-icon-blue.svg"
            />
            <EventFieldArray
              val={event.requirements}
              property="Syarat"
              icon="../../icons/requirement-blue.svg"
            />
          </div>
          <div className="join-button">
            <button>Daftar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailEvent;
