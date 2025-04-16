import { NextResponse, NextRequest } from "next/server";

// --------------------------------------
// title="Open Recrutment Anggota Pers Mahasiswa"
// date="12 Mar 2024"
// participant={44}
// eventPicture="./image/baksos.png"
// --------------------------------------

const eventsData = [
  {
    id: 1,
    title: "Open Recruitment for Student Press Members",
    participants: 44,
    eventPicture:
      "https://news.unimal.ac.id/vic_image/post/unimal-1387201613-IMG-20221104-WA0014.jpg",
    location: "Aula Anwar UIN Kampus 1",
    benefits: ["Relasi", "Sertifikat", "Pengalaman"],
    requirements: ["Beriman", "smt > 4", "Udah itu aja"],
    category: "Kepanitiaan & Kepengurusan", // Kepanitiaan & Kepengurusan, Pelatihan & Seminar, Kompetisi & Sosial, Lainnya
    contact: "083271828443",
    cost: 20000,
    organizer: "DEMA FST",
    numberOfParticipants: 22,
    eventDate: "19 Maret 2024 - 22 April 2024",
    registrationDeadline: "2024-03-11",
    created: "10 Februari 2024",
    edited: "13 Februari 2024",
    uploaderName: "Arif Saefullah",
    status: "upcoming", //upcoming, ongoing, completed. canceled
    description:
      "Bergabunglah dengan Pers Mahasiswa Universitas XYZ dan menjadi bagian dari tim yang berperan penting dalam menyampaikan informasi yang berkualitas kepada seluruh civitas akademika! Kami membuka kesempatan bagi mahasiswa yang memiliki minat dan keterampilan dalam menulis, fotografi, desain grafis, serta jurnalisme. Sebagai anggota, kamu akan terlibat langsung dalam pembuatan konten, peliputan berita kampus, serta pengelolaan media kampus baik dalam bentuk cetak maupun online.",
  },
  {
    id: 2,
    title: "Pelatihan Desain Grafis untuk Mahasiswa",
    participants: 30,
    eventPicture:
      "https://www.liputangampongnews.id/assets/img/berita/IMG-20230224-WA0002.jpg",
    location: "Lab Komputer Universitas ABC",
    benefits: ["Sertifikat", "Skill Baru", "Networking"],
    requirements: [
      "Mahasiswa aktif",
      "Membawa laptop pribadi",
      "Memiliki software desain terinstal",
    ],
    category: "Pelatihan & Seminar",
    contact: "081234567890",
    cost: 50000,
    organizer: "Himpunan Mahasiswa Desain",
    numberOfParticipants: 30,
    eventDate: "5 April 2024",
    registrationDeadline: "2024-04-11",
    created: "15 Maret 2024",
    edited: "20 Maret 2024",
    uploaderName: "Budi Santoso",
    status: "upcoming",
    description:
      "Ikuti pelatihan desain grafis untuk meningkatkan keterampilan Anda dalam bidang desain. Pelatihan ini akan membahas dasar-dasar desain hingga teknik lanjutan.",
  },
  {
    id: 3,
    title: "Seminar Nasional Teknologi Informasi",
    participants: 150,
    eventPicture:
      "https://cdn-2.tstatic.net/pontianak/foto/bank/images/gotong-royong-bersama-santri.jpg",
    location: "Auditorium Universitas DEF",
    benefits: ["E-sertifikat", "Ilmu terbaru", "Doorprize"],
    requirements: ["Terbuka untuk umum", "Registrasi online"],
    category: "Pelatihan & Seminar",
    contact: "082345678901",
    cost: 0,
    organizer: "Fakultas Teknologi Informasi",
    numberOfParticipants: 150,
    eventDate: "12 Mei 2024",
    registrationDeadline: "2024-05-10",
    created: "1 April 2024",
    edited: "5 April 2024",
    uploaderName: "Siti Aminah",
    status: "upcoming",
    description:
      "Seminar nasional yang membahas perkembangan terbaru di bidang teknologi informasi dengan pembicara ahli dari industri dan akademisi.",
  },
  {
    id: 4,
    title: "Kompetisi Debat Mahasiswa Tingkat Nasional",
    participants: 20,
    eventPicture:
      "https://miro.medium.com/v2/resize:fit:1200/1*xeAuH5uucoEQSjv4ImW0dQ.jpeg",
    location: "Ruang Seminar Universitas GHI",
    benefits: ["Hadiah uang tunai", "Trophy", "Sertifikat"],
    requirements: ["Tim terdiri dari 3 orang", "Mahasiswa aktif S1"],
    category: "Kompetisi & Sosial",
    contact: "083456789012",
    cost: 100000,
    organizer: "UKM Debat Universitas GHI",
    numberOfParticipants: 20,
    eventDate: "25 Juni 2024",
    registrationDeadline: "2024-06-20",
    created: "10 Mei 2024",
    edited: "15 Mei 2024",
    uploaderName: "Ahmad Fauzi",
    status: "upcoming",
    description:
      "Kompetisi debat antar mahasiswa se-Indonesia dengan tema-tema aktual dan menarik. Tunjukkan kemampuan argumentasi dan berpikir kritis Anda!",
  },
  {
    id: 5,
    title: "Workshop Kewirausahaan untuk Mahasiswa",
    participants: 50,
    eventPicture:
      "https://4.bp.blogspot.com/-sAlxwXPZtHM/XDx382z-QAI/AAAAAAAAACw/_U9e8yC3IbouAyi4rTD-kSp9e5DWf-kIwCLcBGAs/s1600/Gotong.jpg",
    location: "Aula Fakultas Ekonomi Universitas JKL",
    benefits: ["Sertifikat", "Materi workshop", "Makan siang"],
    requirements: ["Mahasiswa aktif", "Minat di bidang wirausaha"],
    category: "Pelatihan & Seminar",
    contact: "084567890123",
    cost: 75000,
    organizer: "Himpunan Mahasiswa Manajemen",
    numberOfParticipants: 50,
    eventDate: "10 Juli 2024",
    registrationDeadline: "2024-05-11",
    created: "20 Juni 2024",
    edited: "25 Juni 2024",
    uploaderName: "Dewi Lestari",
    status: "upcoming",
    description:
      "Workshop intensif yang dirancang untuk membekali mahasiswa dengan keterampilan dan pengetahuan dasar dalam memulai dan mengelola usaha sendiri.",
  },
  {
    id: 6,
    title: "Bakti Sosial Mahasiswa Peduli Lingkungan",
    participants: 100,
    eventPicture:
      "https://www.caruy.desa.id/wp-content/uploads/images/budaya-gotong-royong-mahasiswa-dan-peran-aktif-dalam-masyarakat-desa-caruy.webp",
    location: "Desa Maju Jaya",
    benefits: ["Pengalaman", "Relasi", "Sertifikat"],
    requirements: ["Mahasiswa aktif", "Peduli lingkungan"],
    category: "Kompetisi & Sosial",
    contact: "085678901234",
    cost: 0,
    organizer: "Komunitas Mahasiswa Pecinta Alam",
    numberOfParticipants: 100,
    eventDate: "15 Agustus 2024",
    registrationDeadline: "2024-08-10",
    created: "1 Juli 2024",
    edited: "5 Juli 2024",
    uploaderName: "Rina Kurniawati",
    status: "upcoming",
    description:
      "Kegiatan bakti sosial yang bertujuan untuk membersihkan dan menghijaukan kembali area desa dengan melibatkan masyarakat dan mahasiswa.",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const event = eventsData.find((item) => item.id === Number(id));
    if (event) {
      return NextResponse.json({
        status: 200,
        data: event,
      });
    }
  }
  console.log(new URL(request.url));
  const data = eventsData;
  return NextResponse.json({ status: 200, data });
}
