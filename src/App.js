import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//import Container from '../components/Container';
import Header from '../src/components/Header';
import ReleaseCard from '../src/components/ReleaseCard';
import Category from '../src/components/Category';
import Entry from '../src/components/Entry';
import './App.css';

const StyledApp = styled.div`

.cards-container{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  // flex-flow: row wrap;
}

` 

function App() {

  //const [hasErrors, setHasErrors]= useState(false);
  const [jiraData, setJiraData] = useState([]);
  //ebbaBYC2er515AQoSAwwF1BF

  
  

  async function fetchData() {
    //let headers = {"Content-Type": "application/json"};
    // const response = await fetch("https://vgregionit.atlassian.net/rest/agile/latest/board/91/sprint");
    // response.json()
    // .then(response => setJiraData(response))
    // .catch(err => setHasErrors(err));
    
    //http://jiraproxy.us-e2.cloudhub.io/agile/1.0/board/91/sprint
    //http://jiraproxy2.us-e2.cloudhub.io/agile/1.0/board/91/sprint
    //https://vgregionit.atlassian.net/rest/agile/1.0/board/91/sprint
    //https://cors-anywhere.herokuapp.com/https://vgregionit.atlassian.net/rest/agile/1.0/board/91/sprint WORKS (not secure)
      fetch('http://127.0.0.1:8080/https://vgregionit.atlassian.net/rest/agile/1.0/board/91/sprint', {
        method: 'GET',
        //mode: 'cors',
        //Host: 'https://vgregionit.atlassian.net',
        //Origin: 'http://localhost:3000/',
        // cache: 'no-cache',
        // credentials: 'include',
        headers: {
            //"Origin":"localhost/3000",
            //"Host":"https://vgregionit.atlassian.net",
            //"Content-Type": "application/json",
            //"Accept": "application/json",
            // "Access-Control-Allow-Origin":"*",
            "Authorization": "Basic ",
                    },
      })
      .then(response => response.json())
      .then(data => setJiraData(data.values))
      // .then(console.log);
};

useEffect(()=>{
  fetchData();
}, []);

//Push API data into array to be able to use Map
// console.log(jiraData);
// let jiraDataArray = [];
// Object.keys(jiraData).forEach(function(key){
//   jiraDataArray.push(jiraData.values[key]);
// });
// jiraDataArray.push(jiraData);

// console.log(jiraData.values);

// if(!jiraData.value === )
// jiraDataArray.map(item => {
//   return console.log(item);
// })
// console.log(jiraDataArray.values)
//console.log(jiraData.values[0] && jiraData.values[0].name );
//console.log(products[0] && products[0].images[0].src);

console.log(jiraData);


  return (
    <StyledApp>
      <div className="App">
        <Header></Header>
        {/* mapping jira data into components */}
        <div className="cards-container">
        {jiraData.map(releaseCard => (
          <ReleaseCard key={releaseCard.id} version={releaseCard.name} release={releaseCard.state}>
            {/* {jiraData.map(category =>(
              <Category>
                {jiraData.map(entry => (
                  <Entry></Entry>
                ))}
              </Category>
              ))};                 */}
          </ReleaseCard>
        ))}
        </div>


        {/* End, below is an example */}

        {/* <ReleaseCard version="1.1" release="2019 Q4" > */}
          {/* Here be printed out loop(array) */}
          {/* <Category categoryTitle="Security" amountStatus="2 in development" entryAmount="Entries: 2" >
            <Entry
              entryHeader="Add firewalls"
              tasksCompleted="2/7 Tasks completed"
              status="In Development"
              entrySummary="Setting up and applying firewalls to all VGR-IT servers."
            />
            <Entry
              entryHeader="Program Security measures"
              tasksCompleted="5/10 Tasks completed"
              status="In Development"
              entrySummary="Setting up and applying firewalls to all VGR-IT servers."
            />
            </Category>
            <Category categoryTitle="Servers" amountStatus="2 in development" entryAmount="Entries: 2" >
            </Category>
            </ReleaseCard>
            <ReleaseCard version="1.2" release="2020 Q1" /> */}
      </div>
    </StyledApp>
  );
}

export default App;
