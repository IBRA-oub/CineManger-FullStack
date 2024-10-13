import React from 'react'
import HeroSection from '../components/home/HeroSection'
import SearchSection from '../components/home/SearchSection'
import FilmSectiom from '../components/home/FilmSectiom'
import SessionSection from '../components/home/SessionSection'
import FooterSection from '../components/home/footerSection'

export default function Home() {
    return (
        <>
            <HeroSection/>
            <SearchSection/>
            <FilmSectiom/>
            <SessionSection/>
            <FooterSection/>

        </>
    )
}
