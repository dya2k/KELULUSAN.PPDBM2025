import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchForm from '../components/SearchForm';
import ResultDisplay from '../components/ResultDisplay';
import { searchStudent } from '../utils/dataService';
import type { Student } from '../utils/dataService';

const CheckResultsPage: React.FC = () => {
  const [searchResult, setSearchResult] = useState<Student | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (registrationNumber: string) => {
    setIsLoading(true);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    const result = searchStudent(registrationNumber);
    setSearchResult(result);
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-teal-50 to-white pt-8 pb-4"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8"
          >
            Cek Hasil Kelulusan
          </motion.h1>
          
          <SearchForm onSearch={handleSearch} isLoading={isLoading} />          
          <AnimatePresence mode="wait">
            {searchResult && (
              <motion.div
                key={searchResult.registrationNumber}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ResultDisplay student={searchResult} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CheckResultsPage;