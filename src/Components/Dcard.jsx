import React from 'react'
import Card from './Card';
import Scard from './Scard'


function ncard(val){
    return(
      <Card 
      img_src={val.img_src}
      title={val.title}
      sname={val.sname}
      link={val.links}
      />
  
    )
  }

function Dcard() {
    return (
      <>
     <center><h1>List of Top Netflix Series</h1></center> <hr/>
     { Scard.map(ncard)}
      </>
    )
}

export default Dcard
