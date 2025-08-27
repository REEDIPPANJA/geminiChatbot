import React, { useState } from 'react'
import './Main.css'
import { assets } from "../../assets/assets.js"

const Main = () => {
  const url = "http://localhost:3000/"
  const [text, setText] = useState('');
  const handelchange = (e) => {
    setText(e.target.value);
  }
  const [userPrompt, setUserPrompt] = useState('')
  const [output, setOutput] = useState('')
  const handelSubmit = async (text) => {
    if (text === '') {
      return null;
    }
    setUserPrompt(text);
    setOutput('');
    setText('');
    const userInput = text.trim();
    try {
      let data = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            { "parts": [{ text: userInput }] }
          ]

        })
      });
      let dataResponse = await data.json();

      const systemResponse = dataResponse?.candidates[0].content.parts[0].text;
      setOutput(systemResponse);
    }
    catch (error) {
      setOutput(error.message);

    }
  }


  return (
    <div className="main-container">
      <div className="main-top ">
        <h2>Gemini</h2>
        <img src={assets.user_icon} alt="" />
      </div>



      <div className="main-bottom">
        <div className="output">
          {userPrompt ? <div className="user-input">
            <img src={assets.user_icon} alt="" />
            <p>{userPrompt}</p>
          </div> : null}
          {output ? <div className="system-output">
            <img src={assets.gemini_icon} alt="" />
            <p style={{ whiteSpace: "pre-wrap" }}>{output}</p>
          </div> : null
          }
        </div>



        <div className="prompt-input">
          <input type="text" value={text} onChange={handelchange} />
          <div className="prompt-icon">
            <button onClick={() => handelSubmit(text)}><img src={assets.send_icon} alt="" /></button>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />


          </div>
        </div>
      </div>
    </div>
  )
}

export default Main