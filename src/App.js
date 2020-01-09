import React, { Component } from 'react';
import './App.css';
import SearchContainer from './sections/SearchContainer';
import NewMessageContainer from'./sections/NewMessageContainer';
import ConversationList from './sections/ConversationList';
import ChatForm from './sections/ChatForm';
import ChatTitle from './sections/ChatTitle';
import ChatMessageList from './sections/ChatMessageList';

class App extends React.Component {
  render(){  
    return (
      <div className="App">
        <div id="chat-container">
          <SearchContainer />
          <NewMessageContainer />
          <ConversationList />
          <ChatTitle />
          <ChatForm />
          <ChatMessageList />
        </div>
      </div>
    );
  }
}

export default App;
