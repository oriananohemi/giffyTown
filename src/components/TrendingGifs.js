import React, { useEffect, useState } from 'react';
import { getGifsTrending } from '../services/getGifs'
import Gif from '../components/Gif'
import Footer from './components/Footer'

const TrendingGifs = () => {
    const [ gifs, setGifs ] =  useState([])
    
    useEffect(() => {
      getGifsTrending()
        .then(gifs => setGifs(gifs))
    }, [])
    return (
        <div>
            <h2 className="treanding__title">Los más top</h2>
            <div className="gifs-container">
                {
                    gifs.map(({id, title, url}) => 
                        <Gif
                            key={id} 
                            title={title} 
                            url={url} 
                            id={id}
                        /> 
                    )
                }
            </div>
            <Footer/>
        </div>
    )
}

export default TrendingGifs