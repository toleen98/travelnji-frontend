import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/image/areas.jpg"
import img2 from "../assets/image/example.jpg"
import img3 from "../assets/image/example1.jpg"
import img4 from "../assets/image/how.jpg"
import img5 from "../assets/image/what.jpg"
import img6 from "../assets/image/uns.jpg"
export default function SlideShow() {
    return (
        <div className="slider-container">
            <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                className="carousel-style"
            >
                <div className="slider-item-div">
                    <img src={img5} />
                </div>
                <div className="slider-item-div">
                    <img src={img4} />
                </div>
                <div className="slider-item-div">
                    <img src={img1} />
                </div>
                <div className="slider-item-div">
                    <img src={img6} />
                </div>
                <div className="slider-item-div">
                    <img src={img2} />
                </div>
                <div className="slider-item-div">
                    <img src={img3} />
                </div>
            </Carousel>
        </div>
    );
}