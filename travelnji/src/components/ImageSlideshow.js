import React, {Component} from 'react';
import Places from '../data/places';
import Card from './ImgCard'
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
class ImgesSlideshow extends Component {
    constructor(props){
        super(props);
        this.state = {
          activity:Places[this.props.place].activities,
          indexImg:0,
          index:0,
          i:0,
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
      
      this.setState({ i: this.state.i + 1})
        
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
      this.setState({ i: this.state.i - 1})
    }

    render(){
      let {index, indexImg, activity, i} = this.state
        return (
         
            <div style={{textAlign:'center',}} >
              <div style={{display:'flex', marginLeft:'50%',marginBottom:20}}>
                <button onClick={this.prevImg} className='btn'><GrFormPrevious size='30' color='white'/></button>
                <button onClick={this.nextImg} className='btn'><GrFormNext size='30' color='white'/></button>
              </div>
                
                <div style={{backgroundColor:'#060b5c'}}>
                <div className='cards-slider'  >
                      <div className='cards-slider-wrapper' style={{
                  'transform': `translateX(-${ i   *(100/ activity.length * 7 ) }%)`, 
                }}>
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
                </div>
            </div>
        )
    }
        
    
}

export default ImgesSlideshow;