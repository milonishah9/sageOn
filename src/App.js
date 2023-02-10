import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  
useEffect(() => {
  // POST request using axios inside useEffect React hook

  const headers = { 
    "X-Site": "webdevtestpurposeonly@gmail.com",
    "X-Company": "webdevtestpurposeonly@gmail.com",
    "ocp-apim-subscription-key": "dd59fe538242495cb4ce862fa3a74cc4",
    "Authorization": 'Bearer c16326d99b364286b100100ba5afac8e',
    "authorisation-sls-applicationClient-token": "dd59fe538242495cb4ce862fa3a74cc4" // Murano only
  };

  axios.get('https://api.columbus.sage.com/us/sageone/accounts/v3/attachmentss', { headers })

  .then(function (response) {
    console.log('sdf', response)
  });

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
