import React from 'react';
import './WorkOutUnder.css';
import {Grid}from '@material-ui/core';
import Workout from '../../assets/workout.jpg';

function WorkOutUnder() {
    return (
      <div className="App">

        <header className="App-header">
            <h1 className='Title'>
                Based on your BMI , this workout page will be useful for you to gain weight
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
                
                <div className="Under-routine">
                    <h2>
                        Work out exersices
                    </h2>

                    <ul>
                        <li>20 sec jumping jacks</li>
                        <li>20 sec squats</li>
                        <li>20 sec lunges</li>
                        <li>20 sec jumping jacks</li>
                        <li>20 sec squats</li>
                        <li>20 sec lunges</li>
                        <li>30 sec double squat lift</li>
                        <li>30 arnold press</li>
                        <li>30 sec forward-side lunge(L)</li>
                        <li>30 sec forward-side lunge(R)</li>
                        <li>30 sec tricep dips</li>
                        <li>30 sec bridge holdfly</li>
                        <li>laydown pushup</li>
                        <li>rest</li>
                        <li>30 sec laydown pushup</li>
                        <li>30 sec bridge holdfly</li>
                        <li>30 sec tricep dips</li>
                        <li>30 sec forwar-side lunge(L)</li>
                        <li>30 sec forwar-side lunge(R)</li>
                        <li>30 arnold press</li>
                        <li>30 sec double squat lift</li>



                        
                        
                    </ul>

                    <h3>
                        This is your 8 mins work out ! keep up to have a good results!
                    </h3>

                </div>
     
                <div className="video">
                    <p>This video presents the previous workout exercises</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/W7mN-i0J7M0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

              
          </header>
      

      </div>
    );
  }
  

export default WorkOutUnder;