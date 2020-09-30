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
            <div>
            <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={Places[place].imges[0]}
                              width={500}
                              height={200}
                            />
                            <img
                              alt="..."
                              src={Places[place].imges[1]}
                              width={500}
                              height={200}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={Places[place].imges[2]}
                              width={500}
                              height={400}
                            />
                            
                          </GridItem>
                        </GridContainer>
            </div>
            <div>
            <h3>About {place}</h3>
            {(Places[place].info.map(para => {
                return (
                    <p>{para}</p>
                )
            }))}
            </div>
            <div>
                <h3>Things To Do</h3>
                <ImgesSlideshow place={place}/>
               
            </div>


        </div>
    )
}

export default Place;