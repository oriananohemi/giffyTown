import React, { useEffect, useState } from 'react'
import Gif from './Gif'
import { getGifs } from '../services/getGifs'
import { Link } from 'wouter'

const ListGifs = ({ params }) => {
    const { keyword } = params
    const [ gifs, setGifs ] =  useState([])
    
    useEffect(() => {
      getGifs({ keyword })
        .then(gifs => setGifs(gifs))
    }, [keyword])

    return <div>
            <Link className="listGif__button"  href="/">Volver</Link>
            <h2 className="treanding__title">Resultados para: { keyword }</h2>
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
        </div>
}

export default ListGifs