import React, { useState } from 'react';
import './App.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {MCQs} from './components/MCQs';
import { generateDetailed } from './components/ChatGPT';
import {DetailedQs} from './components/DetailedQs';
//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [result, setResult] = useState<string>("");
  const [detailedAnswers] = useState<string[]>(["","","","","","",""]); 
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [page, setPage] = useState<string>("Home");
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }
  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  function changePageHome() {
    setPage("Home");
    console.log("changed")
  }
  function changePageBasic() {
    setPage("Basic");
    console.log("changed")
  }
  function changePageDetail() {
    setPage("Detail");
    console.log("changed")
  }
  async function changePageResultsD() {
    setPage("Results");
    generateDetailed(detailedAnswers).then(resolvedValue => {
      setResult(resolvedValue || ""); // Provide a default value for setResult
    });
    console.log(result);
  }
  function changePageResultsB() {
    setPage("Results");
    setResult("Basic Results");
  }
  
  return (
    <div className='background'>
        <Button className="homeButton" variant= "primary" onClick={changePageHome} >Home</Button>
        <img className = "logo" src="https://i.imgur.com/wnwq3pn.png" alt="Logo of UNC" />
      {page === 'Basic' && (
        <div className="Basic">
          <MCQs></MCQs>
          <Button className="Submit-Button" variant = "primary" onClick = {changePageResultsB}>Submit</Button>
        </div>
      )}
      {page === 'Detail' && (
        <div className="Detail">
          <DetailedQs></DetailedQs>
          <Button className="Submit-Button" variant = "primary" onClick = {changePageResultsD}>Submit</Button>
        </div>
      )}

      {page === 'Results' && (
        <div className="Results">
          <p> {result} </p>
        </div>
      )}
      {page === 'Home' && (
        <div className="Home">
        <header className="Home-header">
        Use these quizzes to help you find a career you love!
        </header>
        <p className="Description"> We use AI to analyze your answers to help you find the perfect career based on your interests and qualities</p>
        <Container>
      <Row className='col'>
        <Col>
          <div className="App-rect1">Basic Questions
          <p> This Button will take you to some basic questions</p> 
          <Button className = "lightButton" variant= "primary" onClick={changePageBasic}>Basic Questions</Button>
          </div>           
        </Col>
        <Col>
          <div className="App-rect2">Detailed Questions
          <p>This Button will take you to some detailed questions</p>
          <Button className = "lightButton" variant= "primary" onClick={changePageDetail}>Detailed Questions</Button>
          </div>
        </Col>
      </Row>
    </Container>
      </div>)}
        <footer className="Home-footer">
      These quizzes should not be used as the sole decision when considering a career
        </footer>
      <Form>
          <Form.Label>API Key:</Form.Label>
          <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
          <br></br>
          <Button variant = "primary" onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default App;
