import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
import { Image, } from "react-bootstrap";

/**
 * This component creates card containers for 
 * each Pokemon card.
 */
class DisplayCard extends Component{

  render(){
    const {
      imageLink,
    }=this.props

    return(
      <Card style={{ margin:'0.5em'}}>  
        <Image
        src={imageLink}
        alt="pokemon card"/>
      </Card>
    )
  }
}

export default DisplayCard;
