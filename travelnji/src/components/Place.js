import React from 'react';
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "./GridContainer.js";
import GridItem from "./GridItem.js";
import Places from '../data/places'
import ImgesSlideshow from './ImageSlideshow'

const Place = ({place}) => {
    if (!place) return null
    
    return (

        <div>
            <h2>{place}</h2>
            <div style={{backgroundColor:'#e0daca',}}>
            <GridContainer justify="center" style={{backgroundColor:'white'}}>
                          <GridItem xs={12} sm={12} md={4}>
                            <img style={{margin:10}}
                              alt="..."
                              src={Places[place].imges[0]}
                              width={400}
                              height={200}
                            />
                            <img style={{margin:10}}
                              alt="..."
                              src={Places[place].imges[1]}
                              width={400}
                              height={200}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img style={{margin:10}}
                              alt="..."
                              src={Places[place].imges[2]}
                              width={400}
                              height={430}
                            />
                            
                          </GridItem>
                        </GridContainer>
            </div>
            <div style={{padding:20, backgroundColor:'#e0daca'}}>
            <h3>About {place}</h3>
            {(Places[place].info.map(para => {
                return (
                    <p>{para}</p>
                )
            }))}
            </div>
            <div style={{position: 'relative'}} >
                <h3 style={{padding:20}}>Things To Do</h3>
                <ImgesSlideshow place={place} />
               
            </div>


        </div>
    )
}

export default Place;