import React from 'react';
import ReactDOM from 'react-dom';


function ChatMessageList(props){
   
        return(
            <div id="chat-message-list">
               <div class="message-content">
               
               <div class="message-row other-message">
                           <div class="message-content">    
                               <img src="https://loremflickr.com/40/40/dog" />  
                               <div class="message-text">Oh, I typed that up on my phone in a drunken stupor in the back of an Uber.It worked when I tried it though.</div>
                               <div class="message-time">Jan 10</div>
                           </div>    
               </div>    
               </div>
                
               <div class="message-row you-message">
                   <div class="message-content">  
                           <div class="message-text">Lol. Seriously though, all my tests are passing except one and its breaking on the code you wrote.</div>
                           <div class="message-time">Jan 10</div>
                   </div>    
               </div>
            
               <div class="message-content">
               
               <div class="message-row other-message">
                           <div class="message-content">    
                               <img src="https://loremflickr.com/40/40/dog" />  
                               <div class="message-text">I'm only on my tenth beer. I'm ready for work yet.</div>
                               <div class="message-time">Jan 10</div>
                           </div>    
               </div>    
               </div>
                
               <div class="message-row you-message">
                   <div class="message-content">  
                           <div class="message-text">Hey, it's been about two hours, can i ask a favor?</div>
                           <div class="message-time">Jan 10</div>
                   </div>    
               </div>

               <div class="message-content">
               
               <div class="message-row you-message">
                   <div class="message-content">  
                           <div class="message-text">Hi, are you free right now?</div>
                           <div class="message-time">Jan 10</div>
                   </div>    
               </div> 
               
               <div class="message-row other-message">
                           <div class="message-content">    
                               <img src="https://loremflickr.com/40/40/dog" />  
                               <div class="message-text">Sorry about the delay. What can i do for you.</div>
                               <div class="message-time">Jan 10</div>
                           </div>    
               </div> 

              
            
            
            </div>
        </div>
        )
    
}

export default ChatMessageList;