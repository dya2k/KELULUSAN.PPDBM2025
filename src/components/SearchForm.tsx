import React, { useState } from 'react';
import { Search, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

interface SearchFormProps {
  onSearch: (registrationNumber: string) => void;
  isLoading?: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, isLoading = false }) => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!registrationNumber.trim()) {
      setError('Nomor pendaftaran tidak boleh kosong');
      return;
    }
    
    if (!/^2025-\d{7}$/i.test(registrationNumber.trim())) {
      setError('Format nomor pendaftaran tidak valid. Gunakan format: 2025-XXXXXXX');
      return;
    }
    
    setError('');
    onSearch(registrationNumber.trim());
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <motion.label
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          htmlFor="registrationNumber" 
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Nomor Pendaftaran
        </motion.label>
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          id="registrationNumber"
          placeholder="Contoh: 2025-0010239"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          className={`w-full px-4 py-2 border ${error ? 'border-red-500' : 'border-slate-300'} 
            rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500`}
        />
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-600"
          >
            {error}
          </motion.p>
        )}
      </div>
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isLoading}
        className={`w-full flex items-center justify-center py-2 px-4 border border-transparent 
          rounded-md shadow-sm text-white font-medium 
          ${isLoading ? 'bg-teal-400 cursor-not-allowed' : 'bg-teal-700 hover:bg-teal-800'} 
          transition-colors duration-200`}
      >
        {isLoading ? (
          <>
            <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
            Mencari...
          </>
        ) : (
          <>
            <Search className="h-5 w-5 mr-2" />
            Cek Kelulusan
          </>
        )}
      </motion.button>
    </motion.form>
  );
};

export default SearchForm;