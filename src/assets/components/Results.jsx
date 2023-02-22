import React from 'react';
import './Results.css'
import Button from './Button/Button';
import Data from './Data/Data';

function Results() {
    return (
        <div className='ResultsContainer'>

            <div className='TopContainer'>
                <div className='TopWrapper'></div>


                <h1>Your Result</h1>
                <div className='Circle'>

                    <h2>76</h2>
                    <span>of 100</span>
                </div>
                <div>
                    <h3>Great</h3>
                    <p className='FirstP'>Your performance exceed 65% of the people conducting the test here!</p>
                </div>
            </div>


            <div className='BottomContainer'>
                <h4>Summary</h4>


                <Data />
                <Button />

            </div>

        </div>
    );
}


export default Results