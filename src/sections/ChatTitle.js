import React from 'react';
import ReactDOM from 'react-dom';
import trash from "../svgs/trash-can-with-cover-from-side-view-svgrepo-com.svg";

function ChatTitle(props){
    
return(
            <div id="chat-title">
                 
            <span>Tom Squarepusher</span>
            <img src={trash} alt="Delete Conversation" /> 
           
            </div>
        )

}

export default ChatTitle;