import React, { useEffect, useState } from 'react'
import Gif from './Gif'
import { getGifs } from '../services/getGifs'
import { Link } from 'wouter'

import icon from '../assets/images/not.jpg'

const ListGifs = ({ params }) => {
    const { keyword } = params
    const [ gifs, setGifs ] =  useState([])
    
    useEffect(() => {
      getGifs({ keyword })
        .then(gifs => setGifs(gifs))
    }, [keyword])

    return <div>
        <section className="search__hero">
            <Link className="listGif__button"  href="/giffyTown">Volver</Link>
            <h2 className="search__title">Resultados para: { keyword }</h2>
        </section>
        {
            gifs.length > 0  ? 
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
                :
                <div>
                    <img className="responsive-image" src={icon} />
                    <h2> No se encontraron resultados, intenta de nuevo </h2>
                </div>
        }
        </div>
}

export default ListGifs