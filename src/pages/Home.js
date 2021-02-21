import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import TrendingGifs from '../components/TrendingGifs'
const Home = () => {
    return (
        <>
            <Header/>
            <Search />
            <TrendingGifs/>
        </>
    )
}

export default Home