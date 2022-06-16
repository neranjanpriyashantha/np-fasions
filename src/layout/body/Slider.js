import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Image01 from './slider/images/1.jpg'
import Image02 from './slider/images/2.png'


export default function Slider(pops) {
    var items = [
        {
            // name: "Random Name #1",
            // description: "Probably the most random thing you have ever seen!",
            images: Image01,

        },
        {
            // name: "Random Name #2",
            // description: "Hello World!",
            images: Image02,
        }
    ]

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}
function Item(props) {
    return (
        <Paper>
            {/* <h2>{props.item.name}</h2>
            <p>{props.item.description}</p> */}
            <div style={{ justifyContent: 'center', display: 'flex', height: '250px',marginTop:'10px' }}><img src={props.item.images} /></div>
        </Paper>
    )
}