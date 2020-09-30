import React, {Component} from 'react';
import Places from '../data/places';
import Card from './ImgCard'

class ImgesSlideshow extends Component {
    constructor(props){
        super(props);
        this.state = {
          activity:Places[this.props.place].activities,
          indexImg:0,
          index:0
        }
    }

    nextImg = () => {
      let {activity, indexImg, index} = this.state;
      let length = activity[index].imgs.length;

      if (index === activity.length -1 && indexImg + 1 === length) {
        return;
      }

      if (indexImg + 1 === length) {
        this.setState({
          index: index + 1,
          indexImg: 0
        })
      }
      else{
        this.setState({
          indexImg: indexImg + 1,
        })
      }  
        
    }
    
    prevImg = () => {
      let {activity, indexImg, index} = this.state;
      

      if (index === 0 && indexImg === 0) {
        return ;
      }

      if (indexImg  === 0 && index !== 0) {
        let length = activity[index - 1].imgs.length;
        this.setState({
          index: index - 1,
          indexImg: length - 1
        })
      }
      else{
        this.setState({
          indexImg: indexImg - 1,
        })
      }
        
    }

    render(){
        return (
            <div >
                <button onClick={this.nextImg}>Next</button>
                    <div className='cards-slider'>
                      <div className='cards-slider-wrapper'>
                      {Places[this.props.place].activities.map(active => {
                       return  (
                           active.imgs.map(img => {
                                let property = {img : img, text: active.name}
                                return (
                                  <Card  property={property} />
                                )
                            })

                        )
                    })}
                      </div>
                    </div>

                    <button onClick={this.prevImg}>Prev</button>
            </div>
        )
    }
        
    
}

export default ImgesSlideshow;