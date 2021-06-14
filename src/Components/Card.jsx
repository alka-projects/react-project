import React from 'react'
import "./Card.css"
import Button from '@material-ui/core/Button';

function Card(props) {
    return (
        <>
            <div className="card">
                <img src={props.img_src}
                    alt="Avatar" className="img_style" />
                <div class="container">
                    <h2><b>{props.title}</b></h2><hr />
                    <p>{props.sname}</p>
                    <a href={props.link}><Button variant="contained" color="primary">
                        Watch Now</Button></a><br/>
                </div>
            </div>
        </>
    )
}

export default Card
