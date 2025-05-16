import React, { useEffect, useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Student } from '../utils/dataService';
import confetti from 'canvas-confetti';

interface ResultDisplayProps {
  student: Student | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ student }) => {
  const [, setShowAnimation] = useState(false);

  useEffect(() => {
    if (student?.isAccepted) {
      setShowAnimation(true);
      const duration = 3 * 1000;
      const end = Date.now() + duration;

      const runConfetti = () => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0F766E', '#EAB308', '#0D9488'],
        });

        if (Date.now() < end) {
          requestAnimationFrame(runConfetti);
        }
      };

      runConfetti();
    } else {
      setShowAnimation(false);
    }
  }, [student]);

  if (!student) {
    return (
      <div className="text-center py-6">
        <XCircle className="h-16 w-16 text-red-500 mx-auto mb-3" />
        <h3 className="text-xl font-bold text-red-700 mb-2">Tidak Ditemukan</h3>
        <p className="text-slate-600">
          Nomor pendaftaran tidak ditemukan dalam database. 
          Mohon periksa kembali nomor pendaftaran Anda.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`mt-8 p-6 rounded-lg shadow-lg ${
        student.isAccepted ? 'bg-green-50' : 'bg-red-50'
      }`}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center mb-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.3 }}
          >
            {student.isAccepted ? (
              <CheckCircle2 className="w-8 h-8 text-green-500 mr-3" />
            ) : (
              <XCircle className="w-8 h-8 text-red-500 mr-3" />
            )}
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-800">
            {student.name}
          </h2>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-3"
        >
          <p className="text-gray-700">
            <span className="font-semibold">No. Registrasi:</span> {student.registrationNumber}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">NISN:</span> {student.nisn}
          </p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`text-lg font-bold mt-4 ${
              student.isAccepted ? 'text-green-700' : 'text-red-700'
            }`}
          >
            {student.isAccepted ? 'Selamat anda LULUS di MTsN 9 Jombang' : 'Mohon Maaf anda tidak LULUS'}
          </motion.p>

          {student.isAccepted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded"
            >
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Informasi Penting Pengumpulan Berkas</h3>
              
              <div className="mb-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Jadwal Penting:</h4>
                <ul className="list-disc list-inside space-y-1 text-yellow-800">
                  <li>Pengumuman Kelulusan: 16 Mei 2025</li>
                  <li>Pengumpulan Berkas: 19-23 Mei 2025</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Persyaratan Berkas:</h4>
                <ul className="list-disc list-inside space-y-1 text-yellow-800">
                  <li>Formulir Pendaftaran</li>
                  <li>Fotokopi Akta Kelahiran (2 lembar)</li>
                  <li>Fotokopi Kartu Keluarga (2 lembar)</li>
                  <li>Pas foto berwarna ukuran 3x4 (4 lembar)</li>
                  <li>Berkas NISN</li>
                  <li>Fotocopy Raport Mulai Kelas 4 (Semester 1 dan 2) sampai kelas 5 Semester 1 dan 2) Kelas 6 Semester 1</li>
                </ul>
              </div>

              <p className="text-yellow-800 font-semibold">
                Harap melakukan pengumpulan berkas sesuai jadwal yang telah ditentukan. 
                Keterlambatan dapat mengakibatkan gugurnya hak sebagai calon peserta didik.
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ResultDisplay;
