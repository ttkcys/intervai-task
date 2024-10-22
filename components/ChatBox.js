"use client";

import React, { useState } from 'react';
import Header from '../components/headers/Header'; 
import Footer from '../components/footers/Footer';
import MessageBubble from './MessageBubble'; 

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');


  const botResponses = [
    'Merhaba! Bu bir yanıt örneğidir.',
    'Nasılsınız? Size nasıl yardımcı olabilirim?',
    'Bugün hava nasıl orada?',
    'Size başka nasıl yardımcı olabilirim?',
    'Lütfen başka bir sorunuz varsa sormaktan çekinmeyin!'
  ];

  const getRandomBotResponse = () => {
    const randomIndex = Math.floor(Math.random() * botResponses.length);
    return botResponses[randomIndex];
  };

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user', timestamp: new Date() };
      setMessages([...messages, userMessage]);
      setInput('');

      setTimeout(() => {
        const botResponse = { text: getRandomBotResponse(), sender: 'bot', timestamp: new Date() };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="chatbox">
        <div className="message-history">
          {messages.map((message, index) => (
            <MessageBubble key={index} message={message} />
          ))}
        </div>
        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Mesajınızı yazın..."
          />
          <button onClick={handleSend}>Gönder</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChatBox;
