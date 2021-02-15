import React, {useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category}) => {

    // const [state, setstate] = useState(0)
    const [images, setimages] = useState([])


    useEffect( () => {
        getGifs();
    }, [])
    // Se ejecuta el componente una vez cuando el componente se ejecuta por primera vez

    const getGifs = async() => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=K77G4c01PK5d19M6A14J0uJEumSQyNPy`;
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized.url,
            }
        })
        console.log(gifs)
        setimages( gifs)

    }

    // getGifs();
    return (
        <>
            <h3> {category}</h3>
        <div className="card-grid">
            
                {
                    images.map( img => (
                        <GifGridItem 
                        key={ img.id }
                        { ...img } />
                    ))
                }
        </div>
        </>
    )
}
