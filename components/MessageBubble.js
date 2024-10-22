const MessageBubble = ({ message }) => {
  const { text, sender, timestamp } = message;
  const isUser = sender === "user"; 
  return (
    <div className={'message-bubble-container'}>
      <div className={`message-bubble ${isUser ? "user" : "bot"}`}>
        <p>{text}</p>
        <span>{timestamp.toLocaleTimeString()}</span>
      </div>
    </div>
  );
};

export default MessageBubble;
