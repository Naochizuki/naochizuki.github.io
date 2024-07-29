'use client'

import { Link } from '@chakra-ui/react'

export type Company = 'Meiwa' | 'SC' | 'Risnov'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url?: string
  position: string
  start: string
  startYear: string
  end: string
  endYear: string
  logo: {
    light: string
    dark?: string
  }
  roles?: {
    id: JSX.Element[]
  }
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Meiwa: {
    name: 'Meiwa Industry Co., Ltd.',
    longName: 'Meiwa Industry Co., Ltd.',
    subDetail: 'Internship',
    url: 'https://www.meiwa-industry.co.jp',
    position: 'position.softwareEngineer',
    start: 'June',
    startYear: '2023',
    end: 'May',
    endYear: '2024',
    logo: {
      light: '/worked_at_logos/meiwa/Meiwa_logo.png',
      dark: '/worked_at_logos/meiwa/Meiwa_logo_black.png',
    },
    roles: {
      id: [
        <>
          Membangun website internal untuk memantau pekerjaan di pabrik dan mempermudah pegawai
          dalam mengakses informasi. Website ini dirancang untuk menyatukan berbagai aplikasi
          perusahaan yang sebelumnya memiliki tampilan dan tautan yang berbeda-beda, sehingga
          menciptakan pengalaman yang lebih konsisten dan efisien bagi pengguna.
        </>,
        <>
          Membuat komponen inti UI seperti form input, tombol, tab, dan lainnya dengan menggunakan{' '}
          <Link href="https://primevue.org/" target="_blank" rel="noreferrer">
            PrimeVue
          </Link>{' '}
          (Framework UI). Komponen-komponen ini memastikan konsistensi tampilan di seluruh website,
          sehingga desain dan fungsionalitasnya selalu seragam.
        </>,
        <>
          Mengembangkan fitur untuk memantau status barang produksi yang sedang dalam proses
          pengecatan.
        </>,
        <>
          Mengembangkan fitur FMEA (Failure Mode and Effects Analysis) untuk mengidentifikasi dan
          mencegah potensi kegagalan atau cacat dalam proses produksi. Fitur ini membantu memastikan
          kualitas produk tetap tinggi dan meminimalkan risiko kesalahan.
        </>,
      ],
    },
  },
  SC: {
    name: 'Startup Campus',
    longName: 'Scentregroup Limited AU',
    subDetail: 'MSIB Kampus Merdeka',
    url: 'https://startupcampus.id/studi-independen',
    position: 'position.backendTrackParticipants',
    start: 'August',
    startYear: '2022',
    end: 'December',
    endYear: '2022',
    logo: {
      light: '/worked_at_logos/startupcampus/Startup_campus_logo.png',
      dark: '/worked_at_logos/startupcampus/Startup_campus_logo_black.png',
    },
    roles: {
      id: [
        <>
          Mengikuti pelatihan intensif dalam bidang backend development menggunakan bahasa
          pemrograman Python dan framework Django. Pelatihan ini mencakup teknik-teknik pengembangan
          backend yang efisien dan best practices dalam penggunaan Django.
        </>,
        <>
          Membangun sistem backend berbasis API yang dapat diintegrasikan dengan UI yang disiapkan
          oleh Startup Campus. Setelah menyelesaikan pelatihan ini, saya menerima sertifikat sebagai
          bukti partisipasi dan pencapaian.
        </>,
      ],
    },
  },
  Risnov: {
    name: 'LPPM',
    longName: 'LPPM Universitas Sebelas Maret',
    subDetail: 'Universitas Sebelas Maret',
    url: 'https://risnov.uns.ac.id/id',
    position: 'position.juniorSoftwareEngineer',
    start: 'July',
    startYear: '2022',
    end: 'December',
    endYear: '2022',
    logo: {
      light: '/worked_at_logos/lppm/lppm_logo.PNG',
      dark: '/worked_at_logos/lppm/lppm_logo.PNG',
    },
    roles: {
      id: [
        <>
          Membuat ulang website menggunakan framework Laravel dan memenuhi requirement terbaru,
          termasuk update versi PHP yang digunakan.
        </>,
        <>
          Membangun Homepage yang menampilkan preview artikel terbaru, serta halaman khusus untuk
          membaca artikel secara lengkap.
        </>,
        <>
          Menampilkan data{' '}
          <Link
            aria-label="RIDA"
            href="https://risnov.uns.ac.id/id/rida"
            target="_blank"
            rel="noreferrer"
          >
            RIDA
          </Link>{' '}
          (Riset dan Inovasi dalam Data) dengan visualisasi dalam bentuk chart.
        </>,
      ],
    },
  },
}

export const ExperiencesList = [Experiences.Meiwa, Experiences.SC, Experiences.Risnov]
