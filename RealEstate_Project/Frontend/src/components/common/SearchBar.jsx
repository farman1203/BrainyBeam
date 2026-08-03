import React from 'react'
import { Search } from 'lucide-react'
import '../common/style/SearchBar.css'

export default function SearchBar({ value, onChange, placeholder = 'Search by title, city or locality...' }) {
  return (
    <div className="search-bar-wrap">
      <Search size={18} className="search-bar-icon" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="search-bar-input"
      />
    </div>
  )
}
