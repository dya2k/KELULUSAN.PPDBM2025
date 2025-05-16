import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">MTsN 9 Jombang</h3>
            <p className="text-sm text-teal-100">
              Madrasah Tsanawiyah Negeri 9 Jombang adalah lembaga pendidikan Islam di bawah naungan Kementerian Agama Republik Indonesia.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Kontak</h3>
            <ul className="space-y-2 text-sm text-teal-100">
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-yellow-400" />
                <span>Jl. Cukir Mojowarno No. 1 Tanjunganom</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-yellow-400" />
                <span>+62 878-2558-0490</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-yellow-400" />
                <span>info@mtsn9jombang.sch.id</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Jam Operasional</h3>
            <ul className="space-y-2 text-sm text-teal-100">
              <li>Senin - Kamis: 07:00 - 15:30</li>
              <li>Sabtu-Minggu: Tutup</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-teal-700 text-center text-sm text-teal-200">
          &copy; {new Date().getFullYear()} MTsN 9 Jombang. Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;