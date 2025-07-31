import React from 'react';
import Boy from "../Main/images/boy.png";
import CountUp from 'react-countup';
import "./Main.css";

const Main = () => {
    return (
        <div className='main'>
            <div className='container'>
                <div className='main__box'>
                    <div className='main__box-one'>
                        <h2 className='main__title'>Welcome to Smart Academy</h2>
                        <p className='main__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor</p>
                        <button className='main__btn'>Read More</button>
                    </div>
                    
                    <div className='main__box-two'>
                        <div className='main__image-container'>
                            <img className='main__boy' src={Boy} alt="Student" />
                        </div>
                    </div>
                    
                    <div className='main__box-three'>
                        <h2 className='main__title'>Our Mission</h2>
                        <p className='main__text-name'>Lorem ipsum dolor sit amet, consectetur elit. Etiam condimentum leo sed nisi vehicula, fringilla ante tincidunt.</p>
                        <div className='inner__box'>
                            <div className='main__span'>
                                <CountUp end={10} className="countup-number" />
                                <span className='countup-text'>Years Experience</span>
                            </div>
                            <div className='main__span'>
                                <CountUp end={29} className="countup-number" />
                                <span className='countup-text'>Expert Teachers</span>
                            </div>
                            <div className='main__span'>
                                <CountUp end={50} className="countup-number" />
                                <span className='countup-text'>Courses Offered</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;