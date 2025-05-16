import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-teal-50 to-white flex flex-col items-center py-16 px-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8 flex justify-center"
        >
          <GraduationCap className="w-20 h-20 text-teal-600" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          Pengumuman Kelulusan
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-gray-600 mb-12"
        >
          PPDBM MTsN 9 Jombang 2025
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/check">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-600 text-white px-8 py-3 rounded-lg text-lg font-semibold 
                hover:bg-teal-700 transition-colors shadow-lg"
            >
              Cek Hasil Kelulusan
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-16 max-w-3xl mx-auto text-left bg-white p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-teal-800 mb-6">Informasi Penting</h2>
          
          <div className="prose prose-teal">
            <p className="text-gray-700 mb-6">
              Pengumuman kelulusan untuk Calon Peserta Didik Baru MTsN 9 Jombang
              Tahun Ajaran 2025/2026 telah resmi dirilis. Anda dapat mengecek status
              kelulusan dengan memasukkan nomor pendaftaran pada halaman cek
              kelulusan.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-teal-700 mb-4">Jadwal Penting</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Pengumuman Kelulusan: 16 Mei 2025</li>
                <li>Pengumpulan Berkas: 19-23 Mei 2025</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-teal-700 mb-4">Persyaratan Pengumpulan Berkas</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Formulir Pendaftaran</li>
                <li>Fotokopi Akta Kelahiran (2 lembar)</li>
                <li>Fotokopi Kartu Keluarga (2 lembar)</li>
                <li>Pas foto berwarna ukuran 3x4 (4 lembar)</li>
                <li>Berkas NISN</li>
                <li>Fotocopy Raport Mulai Kelas 4 (Semester 1 dan 2) sampai kelas 5 Semester 1 dan 2) Kelas 6 Semester 1</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-yellow-800">
                <span className="font-bold">Penting:</span> Bagi calon peserta didik yang dinyatakan <span className="font-bold">LULUS</span>, harap
                melakukan pengumpulan berkas sesuai jadwal yang telah ditentukan.
                Keterlambatan dapat mengakibatkan gugurnya hak sebagai calon peserta
                didik.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;