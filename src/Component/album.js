import { useState, useEffect } from 'react'
import {
    Card,
    Container,
    ImageList,
    ImageListItem,
    
} from '@mui/material';

export const Album = ({ props }) => {

    const [images, setImages] = useState([])

    const fetchApi = () => {
        fetch('https://api.thecatapi.com/v1/images/search?limit=20&page=1&mime_types=png')
            .then(res => res.json())
            .then(data => setImages(data))
            .then(json => console.log(json))
    }


    useEffect(() => {
        (
            fetchApi()
        )
    }, [])



    return (

       /*  <Container>
            <ImageList
                gap={12}
                sx={{
                    mb: 8,
                    gridTemplateColumns:
                        'repeat(auto-fill, minmax(280px, 1fr))!important',
                    
                }}

                cols={3} 
                rowHeight={164}
            >
                {images.map((image) => (
                    <Card key={image.url}>
                        <ImageListItem sx={{ height: '100% !important' }}>

                            <img
                                src={image.url}
                                alt={image.id}
                                loading="lazy"
                                style={{ cursor: 'pointer' }}
                            />

                        </ImageListItem>
                    </Card>
                ))}
            </ImageList>
        </Container> */



        <>
        <ImageList sx={{ width: 1000, height: 1200, margin: "30px" }} cols={3} rowHeight={164} xs={{ margin: 0 }}>
            {images.map((item) => (
                <ImageListItem key={item.url}>
                    <img
                        src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.i}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
        
        </>

    );
}
