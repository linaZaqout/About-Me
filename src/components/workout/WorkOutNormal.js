import React from 'react';
import './WorkOutNormal.css';
import {Grid}from '@material-ui/core';
import Workout from '../../assets/workout.jpg';

function WorkOutNormal() {
    return (
      <div className="App">

        <header className="App-header">
            <h1 className='Title'>
                Based on your BMI , this workout page will be useful for you to stay in shape
            </h1>
            <div className="Intro">

                <div className="P">
                <h2>
                    Working out 
                </h2>
                <p>
                    Working out is really great for your health.
                    If you are planning to be a really healthy person, with a fitness body ,
                    you absaulotly need to follow a workout routine . It's important to build muscles and get rid of all the extra fats in your body
                    . It will also get out all the negative energy you have 
                </p>
                </div>
                <img src = {Workout}/>
                </div>
                
                <div className="Normal-routine">
                    <h2>
                        Work out exersices
                    </h2>

                    <ul>
                        <li>30 sec jumping jacks</li>
                        <li>30 sec knee to elbow</li>
                        <li>30 squat jumps </li>
                        <li>30 sec shoulder taps</li>
                        <li>30 sec sit up to tricep bridge </li>
                        <li>30 sec burpee</li>
                        <li>30 sec sumo squat punches</li>
                        <li>30 sec lateral squat</li>
                        <li>30 sec knee drives</li>
                        <li>30 sec sprint</li>
                        
                    </ul>

                    <h3>
                        This is your 5 mins work out ! keep up to have a good results!
                    </h3>

                </div>
                <div className="video">
                    <p>This video presents the previous workout exercises</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/AHVLT18Z1XI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              
          </header>
      

      </div>
    );
  }
  

export default WorkOutNormal;