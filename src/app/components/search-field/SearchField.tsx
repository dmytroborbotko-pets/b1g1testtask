'use client';

import { SearchIcon } from '../Icons';

interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchField = ({ value, onChange, placeholder = 'Search city by name' }: SearchFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <SearchIcon />
      </div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="w-full pl-10 pr-4 py-3 rounded-[10px] bg-white text-[16px] text-[#202020] font-['Red_Hat_Display'] font-[600] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        placeholder={placeholder}
        aria-label="Search cities"
      />
    </div>
  );
};

export default SearchField; 