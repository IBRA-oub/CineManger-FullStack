import React, { useState } from 'react'
import HeroSection from '../components/home/HeroSection'
import SearchSection from '../components/home/SearchSection'
import FilmSectiom from '../components/home/FilmSectiom'
import SessionSection from '../components/home/SessionSection'
import FooterSection from '../components/home/footerSection'

export default function Home() {
    const [filters, setFilters] = useState(null);

    const handleSearch = (searchFilters) => {
        setFilters(searchFilters);
    };

    const handleReset = () => {
        setFilters(null);
    };
    return (
        <>
            <HeroSection/>
            <SearchSection onSearch={handleSearch} onReset={handleReset} />
            <FilmSectiom filters={filters} />
            <SessionSection/>
            <FooterSection/>

        </>
    )
}
