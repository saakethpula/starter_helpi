import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import ProgressBar from './bar';

export function DetailedQs(): JSX.Element {
    const [index,setIndex] = useState<number>(0);
    const [detailedAnswers, setDetailedAnswers] = useState<string[]>(["","","","","","",""]); // Initialize the state with an array of 7 empty strings
    function addAnswer(answer: React.ChangeEvent<HTMLInputElement>){
        setDetailedAnswers(prevDetailedAnswers => {
          const newDetailedAnswers = [...prevDetailedAnswers]; // Make a copy of the previous state
          newDetailedAnswers[index] = answer.target.value; // Update the copy with the new answer
          return newDetailedAnswers; // Return the new state
        });
      }
    function updateIndex(qindex: number){ // Update the index when the user clicks on a question
      setIndex(qindex);
      console.log("Index Updated");
      console.log(detailedAnswers);
    }

    return ( // Return the JSX for the Detailed Questions
        <div className="Detail">
          <div className="Progress">{Math.round((index/6)*100)} % </div>
          <div className='Space'><ProgressBar value={index} maxValue={6}/></div>
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
        </div>
    )
}