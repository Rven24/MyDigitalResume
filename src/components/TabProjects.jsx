import { useState, useEffect } from 'react';

export default function TabProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const projectList = [
    {
      title: 'EINusa',
      desc: 'Landing page modern, responsif, dan siap pakai untuk perusahaan jasa ekspor impor, freight forwarding, dan PPJK resmi di Indonesia.',
      tech: 'HTML5, CSS3, JavaScript',
      link: 'https://einusa.iann.my.id',
      linkLabel: '[demo]',
      details: {
        problem: 'Perusahaan logistik dan PPJK membutuhkan presence online yang bersih, terpercaya, dan cepat diakses oleh klien tanpa beban loading yang berat.',
        solution: 'Membangun landing page berkinerja tinggi menggunakan HTML, CSS, dan JS murni untuk memastikan keandalan SEO dan kecepatan rendering maksimal.',
        highlights: [
          'Desain tata letak yang responsif di seluruh perangkat',
          'Struktur informasi kepabeanan & ekspor-impor yang terstruktur',
          'Optimasi beban aset media untuk akses cepat'
        ]
      }
    },
    {
      title: 'Digital Edupage',
      desc: 'Frontend website profil resmi institusi pendidikan dengan desain modern, minimalis monokrom, serta siap diintegrasikan dengan backend CMS.',
      tech: 'React.js (Vite), Tailwind CSS',
      link: 'https://github.com/Rven24/DigitalEdupage',
      linkLabel: '[source]',
      soonfeature: '(In Production) Pengembangan saat ini berfokus pada penambahan sistem manajemen konten dinamis, fitur pencarian global, dan pengoptimalan Dark Mode.',
      details: {
        problem: 'Banyak web sekolah memiliki antarmuka yang sangat ramai visual dan lambat, menyulitkan penyampaian informasi penting kepada siswa dan wali murid.',
        solution: 'Mengembangkan arsitektur komponen React yang terisolasi dengan skema monokrom ultra-minimalis, siap dihubungkan ke Supabase CMS.',
        highlights: [
          'Navigasi portal informasi & direktori sekolah',
          'Sistem komponen reusable berbasis React & Tailwind',
          'Rencana integrasi Supabase CMS untuk manajemen konten'
        ]
      }
    },
    {
      title: 'Kotakin App',
      desc: 'Sistem manajemen inventaris gudang berbasis Laravel & Filament v5 dengan proteksi stok anti-minus otomatis, hak akses bertingkat, dan generator QR Code SKU instan.',
      tech: 'Laravel, Alpine.js, Blade, Tailwind CSS, SQLite, Filament v5',
      link: 'https://github.com/Rven24/Kotakin',
      linkLabel: '[source]',
      details: {
        problem: 'Pengelolaan stok barang gudang skala kecil-menengah sering mengalami human error seperti stok minus dan pencatatan manual yang lambat.',
        solution: 'Membangun dashboard operasional presisi tinggi dengan validasi otomatis transaksi barang masuk/keluar serta integrasi QR Code SKU.',
        highlights: [
          'Proteksi stok anti-minus pada level database/validation',
          'Dasbor analitik real-time & role-based access control',
          'Generator dan pemindai QR Code SKU instan'
        ]
      }
    },
    {
      title: '1D1W (1 Day 1 Website)',
      desc: 'Aplikasi web pengacak kategori otomatis berbasis React 19 dan Tailwind CSS v4 untuk mengatasi decision fatigue pada tantangan 1 Day 1 Website melalui 100 kategori terkurasi, algoritma tanpa repetisi, dan antarmuka monokromik yang fluid.',
      tech: 'React.js (Vite), Tailwind CSS, Framer Motion',
      link: 'https://github.com/Rven24/1Day1Website',
      linkLabel: '[source]',
      details: {
        problem: 'Kelelahan mengambil keputusan (decision fatigue) saat memilih ide atau kategori website harian sering kali menghambat konsistensi dalam menjalankan tantangan 1 Day 1 Website.',
        solution: 'Membangun aplikasi web pengacak otomatis berbasis React 19 dan Tailwind CSS v4 dengan sistem distribusi seragam 100 kategori tanpa repetisi berurutan.',
        highlights: [
          '100 kategori website terkurasi dengan pengacakan adil 1%',
          'Mikro-interaksi fluid motion dan transisi teks sinematik',
          'Integrasi Clipboard API untuk salin teks kategori cepat'
        ]
      }
    },
    {
      title: 'KasirKu POS',
      desc: 'Sistem Kasir & Manajemen Inventaris modern berkecepatan tinggi dengan arsitektur split-screen cashier UX, pencetakan struk thermal 58/80mm, QRIS dinamis real-time, antrean gantung transaksi, serta analitik penjualan komprehensif.',
      tech: 'Laravel 13, Vue.js 3, Pinia, Tailwind CSS v4',
      link: 'https://github.com/Rven24/kasir-pos',
      linkLabel: '[source]',
      details: {
        problem: 'Efisiensi transaksi kasir ritel/F&B yang lambat serta pencatatan stok dan laporan omzet harian yang sering tidak akurat atau terpisah-pisah.',
        solution: 'Mengembangkan sistem POS full-stack modern berbasis RESTful API Laravel 13 dan Vue 3 Composition API yang responsif, dilengkapi pintasan keyboard instan dan manajemen antrean multi-tab.',
        highlights: [
          'Split-Screen Cashier UX dengan integrasi Hardware Barcode Scanner & Quick Keys (F2, F4, F8, ESC)',
          'Cetak Struk Thermal 58mm/80mm instan & Generator QRIS Dinamis standar EMVCo dengan timer countdown',
          'Manajemen Stok Opname, Peringatan Stok Menipis (Low Stock Alert), dan Grafik Analitik Omzet Real-time'
        ]
      }
    }
  ];

  return (
    <div className="space-y-6 sm:space-y-8 text-left">
      {projectList.map((project, index) => (
        <div
          key={index}
          className="pb-5 sm:pb-6 border-b border-neutral-100 dark:border-neutral-900 last:border-none"
        >
          <div className="flex justify-between items-baseline mb-1.5">
            <h3 className="text-xs sm:text-sm font-medium text-black dark:text-white">
              {project.title}
            </h3>
            <div className="flex items-center space-x-3 font-mono text-[10px] sm:text-xs">
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors underline underline-offset-2 cursor-pointer"
              >
                [details]
              </button>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
              >
                {project.linkLabel || '[source]'}
              </a>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-2 font-sans max-w-xl leading-relaxed">
            {project.desc}
          </p>
          <div className="space-y-1">
            <span className="block text-[10px] sm:text-xs font-mono text-neutral-400 dark:text-neutral-500">
              {project.tech}
            </span>
            {project.soonfeature && (
              <span className="block text-[10px] sm:text-xs font-mono text-neutral-400 dark:text-neutral-500 italic">
                {project.soonfeature}
              </span>
            )}
          </div>
        </div>
      ))}

      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-none max-w-lg w-full p-6 text-left shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b border-neutral-100 dark:border-neutral-900 pb-3">
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-black dark:text-white">
                  {selectedProject.title}
                </h4>
                <p className="text-[10px] sm:text-xs font-mono text-neutral-400">
                  {selectedProject.tech}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="text-xs font-mono text-neutral-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              >
                [close]
              </button>
            </div>

            {selectedProject.details && (
              <div className="space-y-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-sans">
                <div>
                  <span className="font-mono text-[10px] uppercase text-neutral-400 tracking-wider block mb-1">
                    // Problem & Context
                  </span>
                  <p className="leading-relaxed">{selectedProject.details.problem}</p>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase text-neutral-400 tracking-wider block mb-1">
                    // Solution Approach
                  </span>
                  <p className="leading-relaxed">{selectedProject.details.solution}</p>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase text-neutral-400 tracking-wider block mb-1">
                    // Key Highlights
                  </span>
                  <ul className="list-disc list-inside space-y-1 font-mono text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400">
                    {selectedProject.details.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className="pt-3 border-t border-neutral-100 dark:border-neutral-900 flex justify-between items-center text-xs font-mono">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                className="text-black dark:text-white hover:underline underline-offset-4"
              >
                Open Project {selectedProject.linkLabel || '[source]'} &rarr;
              </a>
              <span className="text-[10px] text-neutral-400">
                press [esc] to close
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}