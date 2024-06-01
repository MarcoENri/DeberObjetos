import React, { useState, ChangeEvent } from 'react';

const HeyComponent: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const hey = (message: string): string => {
    let msg = message.trim();
    let isQuestion = msg.endsWith('?');
    msg = msg.replace(/[^0-9a-z]/gi, '');

    if (msg.length === 0) {
      return 'Fine. Be that way!';
    }

    if (/[a-z]/i.test(msg) && msg === msg.toUpperCase()) {
      if (isQuestion) {
        return "Calm down, I know what I'm doing!";
      }
      return 'Whoa, chill out!';
    }

    if (isQuestion) {
      return 'Sure.';
    }

    return 'Whatever.';
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
    setResponse(hey(newMessage));
  };

  return (
    <div>
      <textarea
        value={message}
        onChange={handleMessageChange}
        rows={4}
        cols={50}
        placeholder="Enter your message here"
      />
      <div>
        <h3>Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default HeyComponent;
