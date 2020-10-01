import React from 'react';
import Pic from "../assets/pic1.jpg"
import Pic1 from "../assets/pic5.jpg"
import Pic2 from "../assets/pic6.jpg"
import "../index.css"

const Home = () => {
    return (
        <div>
                <div className="App">
                    <div style={{position:'relative', width:'100%', textAlign:'center'}}>
                        <img src={Pic} alt='patra' width={'100%'} height={500} />
                        <div style={{position:'absolute',top: 75, color:'#c2a776',left:'10%'}}>
                            <h1 style={{fontSize:49, fontFamily:'Sofia', color:'#1b875b' }}>Welcome To Travelnji</h1>
                            <h3 style={{fontSize:20, fontFamily:'Sofia', color:'#5fd18f' }}>Is the perfect destination for sustainable tourism in Jordan.</h3>
                        </div>
        
                    </div>
                 </div>  
                  
                 <div style={{ position:'absolute' ,top:650, color:'#4d79ff',left:'9%'}}>
                 <img src={Pic1} width={400} height={400} left={70}/> </div>
                     <div style={{position:'absolute',top:700, color:'#4d79ff',left:'60%' ,right:'5%'}}>
                         <p style={{fontSize:20, fontFamily:'Sofia', color:'#1e7b1e' }}>As this website displays a variety of tourist areas in Jordan so that tourists can choose between them when they come to Jordan. It reviews the most important environmentally friendly activities that can be held in these areas.</p>
                     </div>
                     <div>
                         <div style={{ position:'absolute' ,top:1200, color:'#4d79ff',left:'60%'}}>
                 <img src={Pic2} width={500} height={400} left={70}/> </div>
                     <div style={{position:'absolute',top:1350, color:'#4d79ff',right:'50%' , left:'9%'}}>
                         <p style={{fontSize:20, fontFamily:'Sofia', color:'#1FA496' }}>As this website displays a variety of tourist areas in Jordan so that tourists can choose between them when they come to Jordan. It reviews the most important environmentally friendly activities that can be held in these areas.</p>
                     </div> 
                     </div>
                     </div>
    )
}

export default Home;