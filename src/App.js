import React from 'react';
import './App.css';
import hinata from "./assets/Hinata.jpeg";
import eren from "./assets/eren.jpeg";
import deku from "./assets/deku.jpeg";

function App() {
  return (
    <div className="App">
      <div className="App-header">
    
        <h1>
          About Lina Zaqout
        </h1>

    
    
        <p className="paragraph">
          Lina Zaqout is a 16 y.o girl . She's basically an INTP person.
          She does so many things but also nothing : she can draw , play violin and 
          cook . However , she stays in her room 24/7 enjoing her "otaku" life which is 
          watching anime and playing her favorite game. 
        </p>
        <p className="paragraph">
          she used to read books last summer, to be specific, she used to read novels.
          Her favorite type of novels is the political ones, she reads for Agatha Christie.
          Her BEST novel for Agatha Christie is "And then there were none". It's mind blowing.
          Lina really likes music, but she feels that her taste in music is a bit weird so She
          doesn't share it with people. 
        </p>
        <p className="paragraph">
         Another thing about lina is that she really likes learning languages. She's 
         learning Japanese and Spanish. Her Japanese is better than her Spanish , but 
         she can at least introduce her self and say some simple stuff.<br></br>
         Oh , Lina really wanted to share these pictures of her sketches, you can critique
         or giver her your honest opinion . She'll like it. 
        </p>
        <h6>
          Lina doesn't have social media but here is her 
          <a href="https://www.facebook.com/lina.zaqout.9">Facebook</a> account
        </h6>

   
      <div className="img">
      <img src={hinata}/>
      <img src={eren} />
      <img src={deku} />
      
      </div>
      </div>
      </div>

  );
}

export default App;
