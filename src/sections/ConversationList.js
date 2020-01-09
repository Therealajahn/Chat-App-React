import React from 'react';
import ReactDOM from 'react-dom';

function ConversationList(props){
    
return(
            <div id="conversation-list">
                <div class="conversation active">
                <img src="https://loremflickr.com/320/240/dog" alt="Tom Conner" />
                <div class='title-text'>
                    Tom Conner senior project manager
                </div>
                <div class='created-date'>
                     2 weeks ago
                </div>
                <div class='conversation-message'>
                        No I have not seen Terminator. Yes that joke is getting old.
                </div>
            </div>
            
            <div class="conversation">
                <img src="https://loremflickr.com/320/240/dog" alt="What man" />
                <div class='title-text'>
                    What Man 
                </div>
                <div class='created-date'>
                     2 months ago
                </div>
                <div class='conversation-message'>
                        Excuse me what?
                </div>
            </div>    
            
            <div class="conversation">
                <img src="https://loremflickr.com/320/240/dog/" alt="Jess Endless" />
                <div class='title-text'>
                    Jess Endless
                </div>
                <div class='created-date'>
                    1 year ago
                </div>
                <div class='conversation-message'>
                        The best amount of jess is an endless amount
                </div>
            </div>    
            
            <div class="conversation">
                <img src="https://loremflickr.com/320/240/dog" alt="Timothy Totts" />
                <div class='title-text'>
                    Timothy Totts
                </div>
                <div class='created-date'>
                    4 days ago
                </div>
                <div class='conversation-message'>
                        Hello? HELLOO!
                </div>
            </div>    
            
            <div class="conversation">
                <img src="https://loremflickr.com/320/240/dog" alt="Man God" />
                <div class='title-text'>
                    Man God Tamer of Nebulas and destroyer of stars 
                </div>
                <div class='created-date'>
                     6 days ago
                </div>
                <div class='conversation-message'>
                       I am not a man nor a god
                </div>
            </div>    
            
        
            </div>
        )

}

export default ConversationList;