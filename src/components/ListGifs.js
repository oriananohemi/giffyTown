import React, { useEffect, useState } from 'react'
import Gif from './Gif'
import getGifs from '../services/getGifs'

const ListGifs = ({ keyword }) => {
    const [ gifs, setGifs ] =  useState([])
    
    useEffect(() => {
      getGifs({ keyword })
        .then(gifs => setGifs(gifs))
    }, [keyword])

    return gifs.map(singleGif => <Gif key={singleGif.id} title={singleGif.title} url={singleGif.url} id={singleGif.id}/> )
}

export default ListGifs