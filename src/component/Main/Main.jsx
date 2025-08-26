import React from 'react'
import './Main.css'
import { assets } from "../../assets/assets.js"

const Main = () => {
  return (
    <div className="main-container">
        <div className="main-top ">
          <h2>Gemini</h2>
          <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-bottom">
            <div className="output">
                 <div className="user-input">
                   <img src={assets.user_icon} alt="" />
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus quaerat commodi ex iure amet officiis, aliquid ipsa architecto. Ut est esse dolorem excepturi natus doloribus nisi illum sunt magni itaque!</p>
                 </div>
                 <div className="system-output">
                   <img src={assets.gemini_icon} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus quaerat commodi ex iure amet officiis, aliquid ipsa architecto. Ut est esse dolorem excepturi natus doloribus nisi illum sunt magni itaque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur magnam, repellat molestias sit nihil ipsum voluptas? Quos ex qui ratione, vero, repellendus expedita perferendis eum ab, assumenda nemo animi nihil.
                    Tempora sit optio voluptates commodi, et autem non corrupti iure. Accusantium laudantium nam a sed velit nobis. Nulla distinctio, quam, id in et sed, eius saepe eum sequi ullam fugit.
                    Sint nisi omnis nulla facilis aliquam veniam voluptatibus, officiis dolorem dolor dignissimos magni, ut dolore dicta magnam. Molestias fugiat voluptates harum illum omnis dolores, distinctio exercitationem obcaecati vero autem neque?
                    Vel aspernatur aliquam neque, ea velit voluptatum labore modi nulla excepturi qui reiciendis provident quae dignissimos porro dolorum quis nihil doloribus fuga in eligendi et voluptas minima aut? Consectetur, atque!
                    Nostrum beatae rem ducimus quod explicabo blanditiis, minus suscipit magnam maiores, ad ipsam esse in itaque vel iusto nesciunt nulla amet voluptatibus repellendus dolorum! Reiciendis harum delectus voluptatum repellat tempora!</p>
                 
                 </div>
            </div>
            <div className="prompt-input">
                <input type="text" />
                <div className="prompt-icon">
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main