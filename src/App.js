
/////##*************Text Processor*********#### ///////

//  import React, {useState} from "react";
//  import "./App.css";
 

// function App () {
//   const [inputText, setInputText] = useState('');
//   const [outputText, setOutputText] = useState('');
//   const [wordCount, setWordCount] = useState(0);
//   const [theme, setTheme] = useState('light');

//   const handleInputChange = (e) => {
//     const text = e.target.value;
//     setInputText(text);
//     setWordCount(text.trim().split(/\s+/).length);
//   };

//   const convertToUpperCase = () => {
//     setOutputText(inputText.toUpperCase())
//   };

//   const convertToLowerCase = () => {
//     setOutputText(inputText.toLowerCase())
//   };

//   const clearText = () => {
//     setInputText('');
//     setOutputText('');
//     setWordCount('');

//   };

//   const removeSpaces = () => {
//     setOutputText(inputText.replace(/\s+/g, ''));
//   }

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };


//   return <div className={`App ${theme}`}>
//               <h1>Text Processor</h1>
//               <div className="input-section">
//                 <textarea 
//                 placeholder="Enter Text Here"
//                 value={inputText}
//                 onChange={handleInputChange}
//                 rows={5}
                
//                 />
//                 <div className="button-group">
//                   <button onClick={convertToUpperCase}>Convert To Uppercase</button>
//                   <button onClick={convertToLowerCase}>Convert To Lowercase</button>
//                   <button onClick={clearText}>Clear Text</button>
//                   <button onClick={removeSpaces}>Remove Space</button>
//                 </div>
//               </div>
//               <div className="output-section">
//                 <h2>Output : </h2>
//                 <p>{outputText}</p>
//                 <p>Word Count: {wordCount}</p>
//               </div>
//               <div className="theam-switch">
//                 <button onClick={toggleTheme}>Togle Theam</button>
//               </div>
//           </div>
// }

// export default App;

// src/App.js

import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`} style={{ textAlign: 'center'   }}>
      <h1 >React Login Form</h1>
      <LoginForm theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default App;
