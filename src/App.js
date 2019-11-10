import React, { useState, useEffect } from 'react';
//import styled from 'styled-components';
//import Container from '../components/Container';
import Header from '../src/components/Header';
import ReleaseCard from '../src/components/ReleaseCard';
import Category from '../src/components/Category';
import Entry from '../src/components/Entry';
import './App.css';

function App() {

  const [hasErrors, setHasErrors]= useState(false);
  const [jiraData, setJiraData] = useState({});
  //ebbaBYC2er515AQoSAwwF1BF
  

  async function fetchData() {
    //let headers = {"Content-Type": "application/json"};
    // const response = await fetch("https://vgregionit.atlassian.net/rest/agile/latest/board/91/sprint");
    // response.json()
    // .then(response => setJiraData(response))
    // .catch(err => setHasErrors(err));
    
    //http://jiraproxy.us-e2.cloudhub.io/agile/1.0/board/91/sprint
    //https://vgregionit.atlassian.net/rest/agile/1.0/board/91/sprint
      fetch('http://jiraproxy.us-e2.cloudhub.io/agile/1.0/board/91/sprint', {
        method: 'GET',
        mode: 'cors',
        //Host: 'https://vgregionit.atlassian.net',
        //Origin: 'http://localhost:3000/',
      // cache: 'no-cache',
      // credentials: 'include',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Basic dmluY2VudC5saWRlYm8ua2plbGxtYW5AZ21haWwuY29tOmViYmFCWUMyZXI1MTVBUW9TQXd3RjFCRg==",
                    },
      })
      .then(response => response.json())
      .then(console.log);
};

useEffect(()=>{
    fetchData();
}, []);


  return (
    <div className="App">
      <Header></Header>
      {/* mapping jira data into components */}

      {/* {jiraData.map(releaseCard => (
        <ReleaseCard>
          {jiraData.map(category =>(
            <Category>
              {jiraData.map(entry => (
                <Entry></Entry>
              ))}
            </Category>
            ))};                
        </ReleaseCard>
      ))}; */}

      {/* End, below is an example */}

      <ReleaseCard version="1.1" release="2019 Q4" >
        {/* Here be printed out loop(array) */}
        <Category categoryTitle="Security" amountStatus="2 in development" entryAmount="Entries: 2" >
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
          <ReleaseCard version="1.2" release="2020 Q1" />
    </div>
  );
}

export default App;
