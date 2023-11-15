import React from 'react'
import LPFaq from '@/landing-page/sections/faq'
import LPHero from '@/landing-page/sections/hero'
import LPTeam from '@/landing-page/sections/team'
import AppHead from '@/components/common/app-head'
import LPAbout from '@/landing-page/sections/about'
import LPCases from '@/landing-page/sections/cases'
import LPHeader from '@/landing-page/components/header'
import LPFooter from '@/landing-page/components/footer'
import LPMethodology from '@/landing-page/sections/methodology'
import LPDifferentials from '@/landing-page/sections/differentials'

const Home: React.FC = () => {
    return (
        <>
            <AppHead title="Organic Leads" />
            <LPHeader openModal={() => {}} />

            <LPHero openModal={() => {}} />
            <LPTeam />
            <LPAbout />
            <LPMethodology />
            <LPCases openContact={() => {}} />
            <LPDifferentials />
            <LPFaq />

            <LPFooter openModal={() => {}} openModalContact={() => {}} />
        </>
    )
}

export default Home
