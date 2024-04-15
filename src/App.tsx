import React, { useState } from 'react';
import './App.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {MCQs} from './components/MCQs';
import { generateDetailed } from './components/ChatGPT';
//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [result, setResult] = useState<string>("");
  const [detailedAnswers, setDetailedAnswers] = useState<string[]>(["","","","","","",""]);  const [key, setKey] = useState<string>(keyData); //for api key input
  const [page, setPage] = useState<string>("Home");
  const [index,setIndex] = useState<number>(0);
  
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
  async function changePageResults() {
    setPage("Results");
    generateDetailed(detailedAnswers).then(resolvedValue => {
      setResult(resolvedValue || ""); // Provide a default value for setResult
    });
    console.log(result);
  }
  function addAnswer(answer: React.ChangeEvent<HTMLInputElement>){
    setDetailedAnswers(prevDetailedAnswers => {
      const newDetailedAnswers = [...prevDetailedAnswers]; // Make a copy of the previous state
      newDetailedAnswers[index] = answer.target.value; // Update the copy with the new answer
      return newDetailedAnswers; // Return the new state
    });
  }
  function updateIndex(qindex: number){
    setIndex(qindex);
    console.log("Index Updated");
    console.log(detailedAnswers);
  }
  return (
    <div>
      <Button variant= "danger" onClick={changePageHome}>Home</Button>
      <img className = "logo" src="https://i.imgur.com/wnwq3pn.png" alt="Logo of UNC" />
      {page === 'Basic' && (
        <div className="Basic">
          <MCQs></MCQs>
        </div>
      )}
      {page === 'Detail' && (
        <div className="Detail">
          <Form>
            <Form.Label className = "Bold">Consider the role of failure in career growth. How do you approach setbacks and challenges, and what strategies do you employ to bounce back and persevere?</Form.Label>
            <Form.Control placeholder="Answer" onChange={addAnswer} onClick={() => updateIndex(0)}></Form.Control>            <br></br>
          </Form>
          <Form>
            <Form.Label className = "Bold">Reflect on the impact you want to have on your community or society through your career. </Form.Label>
            <Form.Control placeholder="Answer" onChange={addAnswer} onClick={() => updateIndex(1)}></Form.Control>            <br></br>
            <br></br>
          </Form>
          <Form>
            <Form.Label className = "Bold">Reflect on a moment in your life when you felt completely immersed and engaged in what you were doing. What were you doing, and how can you incorporate similar elements into your future career?</Form.Label>
            <Form.Control placeholder="Answer" onChange={addAnswer} onClick={() => updateIndex(2)}></Form.Control>            <br></br>
            <br></br>
          </Form>
          <Form>
            <Form.Label className = "Bold">Consider the lifestyle you envision for yourself in the future. How does your ideal work-life balance look, and which career paths align with your desired lifestyle?</Form.Label>
            <Form.Control placeholder="Answer" onChange={addAnswer} onClick={() => updateIndex(3)}></Form.Control>            <br></br>
            <br></br>
          </Form>
          <Form>
            <Form.Label className = "Bold">Consider the future of work and emerging industries. Which trends or technologies do you find most exciting, and how could you position yourself to capitalize on these opportunities?</Form.Label>
            <Form.Control placeholder="Answer" onChange={addAnswer} onClick={() => updateIndex(4)}></Form.Control>            <br></br>
            <br></br>
          </Form>
          <Form>
            <Form.Label className = "Bold">Reflect on a moment when you felt deeply fulfilled and energized by your work, regardless of whether it was a paid job or a volunteer opportunity. What aspects of that experience can you identify as key drivers for your career satisfaction?</Form.Label>
            <Form.Control placeholder="Answer" onChange={addAnswer} onClick={() => updateIndex(5)}></Form.Control>            <br></br>
            <br></br>
          </Form>
          <Form>
            <Form.Label className = "Bold">Reflect on your preferred work style and environment. Are you more drawn to structured routines, flexibility, or a mix of both?</Form.Label>
            <Form.Control placeholder="Answer" onChange={addAnswer} onClick={() => updateIndex(6)}></Form.Control>            <br></br>
            <br></br>
          </Form>
          <Button className="Submit-Button" variant = "danger" onClick = {changePageResults}>Submit</Button>
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
          <Button className = "lightButton" variant= "danger" onClick={changePageBasic}>Basic Questions</Button>
          </div>           
        </Col>
        <Col>
          <div className="App-rect2">Detailed Questions
          <p>This Button will take you to some detailed questions</p>
          <Button className = "lightButton" variant= "danger" onClick={changePageDetail}>Detailed Questions</Button>
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
          <Button variant = "danger" onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default App;
