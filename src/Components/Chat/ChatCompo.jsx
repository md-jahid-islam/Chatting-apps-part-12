// import React, { useState } from 'react';

// const ChatCompo = () => {
//   // State to hold the input message and the list of sent messages
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   // Handle input change
//   const handleInputChange = (e) => {
//     setMessage(e.target.value);
//   };

//   // Handle sending a message
//   const sendMessage = () => {
//     if (message.trim()) {
//       // Add the new message to the messages list
//       setMessages([...messages, message]);
//       // Clear the input field after sending
//       setMessage('');
//     }
//   };

//   // Handle "Enter" key to send message
//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       sendMessage();
//     }
//   };

//   return (
//     <div style={styles.chatContainer}>
//       <div style={styles.messagesContainer}>
//         {messages.map((msg, index) => (
//           <div key={index} style={styles.message}>
//             {msg}
//           </div>
//         ))}
//       </div>

//       <div style={styles.inputContainer}>
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={message}
//           onChange={handleInputChange}
//           onKeyPress={handleKeyPress}
//           style={styles.input}
//         />
//         <button onClick={sendMessage} style={styles.button}>Send</button>
//       </div>
//     </div>
//   );
// };

// // Basic styles
// const styles = {
//   chatContainer: {
//     width: '400px',
//     height: '500px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     padding: '10px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   },
//   messagesContainer: {
//     flex: 1,
//     overflowY: 'auto',
//     marginBottom: '10px',
//   },
//   message: {
//     padding: '10px',
//     borderBottom: '1px solid #eee',
//   },
//   inputContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
//   input: {
//     flex: 1,
//     padding: '10px',
//     fontSize: '16px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     marginRight: '10px',
//   },
//   button: {
//     padding: '10px 20px',
//     backgroundColor: '#007BFF',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
// };

// export default ChatCompo;
import React, { useState } from 'react';

const ChatCompo = () => {
  // State to hold the input message and the list of sent messages
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // Maximum number of messages
  const maxMessages = 20;

  // Handle input change
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  // Handle sending a message
  const sendMessage = () => {
    if (message.trim()) {
      // Ensure the list doesn't exceed 20 messages
      if (messages.length >= maxMessages) {
        setMessages((prevMessages) => [...prevMessages.slice(1), message]);
      } else {
        setMessages([...messages, message]);
      }
      // Clear the input field after sending
      setMessage('');
    }
  };

  // Handle "Enter" key to send message
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <div key={index} style={styles.message}>
            {msg}
          </div>
        ))}
      </div>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          style={styles.input}
        />
        <button onClick={sendMessage} style={styles.button}>Send</button>
      </div>
    </div>
  );
};

// Basic styles
const styles = {
  chatContainer: {
    width: '90%',
    maxWidth: '600px',
    height: '80vh',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '20px auto',
  },
  messagesContainer: {
    flex: 1,
    overflowY: 'auto',
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #eee',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  message: {
    padding: '10px',
    borderBottom: '1px solid #eee',
    wordWrap: 'break-word',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginRight: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

// Making the chat container responsive
styles.chatContainer['@media (max-width: 768px)'] = {
  width: '100%',
  height: '60vh',
};

export default ChatCompo;
