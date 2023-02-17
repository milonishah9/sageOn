import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect, state, setState } from 'react';
import React, { Component } from 'react';


function App() {






var string;



  const [state, setState] = React.useState<{ firstName: string }>({
    firstName: '',
});

const fetchData = async () => {
    const response = await fetch(
        'https://api.fake-rest.refine.dev/users/1'
    );
    const result = await response.json();
    return result;
};

React.useEffect(() => {
    (async () => {
        const data = await fetchData();
        setState(data);
    })();
}, []);

 return <div>{state.firstName}</div>;

//   const [example, setExample] = useState([]);
//     useEffect(() => {
//     url()
// }, [])

// const url = async () => {
//   const r = await fetch("https://maps.googleapis.com/maps/api/distancematrix/json")
//   // setExample(await response.json(r))
//     console.log('sdf', r)

//   }
  

  
// // useEffect(() => {
// //   // POST request using axios inside useEffect React hook

// //   const headers = { 
// //     "X-Site": "webdevtestpurposeonly@gmail.com",
// //     "X-Company": "webdevtestpurposeonly@gmail.com",
// //     "ocp-apim-subscription-key": "dd59fe538242495cb4ce862fa3a74cc4",
// //     "Authorization": 'Bearer c16326d99b364286b100100ba5afac8e',
// //     "authorisation-sls-applicationClient-token": "dd59fe538242495cb4ce862fa3a74cc4" // Murano only
// //   };

// //   axios.get('https://api.columbus.sage.com/us/sageone/accounts/v3/attachmentss', { headers })

// //   .then(function (response) {
// //     console.log('sdf', response)
// //   });

// // // empty dependency array means this effect will only run once (like componentDidMount in classes)
// // }, []);

//   return (
//     <div className="App">

//         <div>
//           {example.map((data) => {
//             return(
//               <li className="Name" key={data.id} title={data.title} />
//             );
//           })}
//         </div>

//     </div>
//   );

















}

export default App;
