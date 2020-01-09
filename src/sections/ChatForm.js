import React from 'react';
import ReactDOM from 'react-dom';
import clip from "../svgs/iconfinder_clip_115756.svg";

function ChatForm(props){
    
        return(
            <div id="chat-form">
                 <img src={clip} alt="add-attachment"/>
                <input type="text"
                placeholder=
                "type a message" />
            </div>
        )
    
}

export default ChatForm;