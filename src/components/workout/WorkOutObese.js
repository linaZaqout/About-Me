import React from 'react';
import './WorkOutObese.css';
import {Grid}from '@material-ui/core';
import Workout from '../../assets/workout.jpg';

function WorkOutObese() {
    return (
      <div className="App">

        <header className="App-header">
            <h1 className='Title'>
                Based on your BMI , this workout page will be useful for you to lose weight ASAP
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
               
                <div className="Obese-routine">
                    <h2>
                        Work out exersices
                    </h2>

                    <ul>
                        <li>30 sec Bouncing high knee</li>
                        <li>20 sec wide arm butt kick (L)</li>
                        <li>20 sec bouncing high knee </li>
                        <li>20 sec wide arm butt kick (R)</li>
                        <li>30 sec lateral step clab </li>
                        <li>20 sec squat reach</li>
                        <li>20 sec squat pulse</li>
                        <li>20 sec scissor circling arms</li>
                        <li>20 sec lateral step clap</li>
                        <li>20 sec burpees box</li>
                        <li>rest</li>
                        <li>20 sec high knee variation(L)</li>
                        <li>20 sec lateral bound reach</li>
                        <li>20 sec high knee variation (R)</li>
                        <li>20 sec squat overhead punch</li>
                        <li>20 sec back squeeze</li>
                        <li>20 sec lateral step jacks</li>
                        <li>20 sec overhead reach twice</li>
                        <li>20 sec lateral lunges</li>
                        <li>rest</li>
                        <li>30 sec high knee</li>
                        <li>30 sec lunge</li>
                        <li>20 sec jumping jacks</li>
                        <li>30 sec squat overhead punch</li>
                        <li>20 sec high knee twist (L)</li>
                        <li>20 sec high knee twist (R)</li>
                        <li>30 sec purbpees box</li>
                        <li>20 squat pulse</li>
                    </ul>

                    <h3>
                        This is your 10 mins work out ! keep up to have a good results!
                    </h3>

                </div>
                <div className="video">
                    <p>This video presents the previous workout exercises</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/fUJjsUn9bCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
     
              
          </header>
      

      </div>
    );
  }
  

export default WorkOutObese;