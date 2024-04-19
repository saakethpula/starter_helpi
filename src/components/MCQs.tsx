import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ProgressBar from "./bar";

export function MCQs(): JSX.Element {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(7).fill(''));
    const[progress,setProgress] = useState<number>(0);
    const[isSelected1,setIsSelected] = useState<boolean>(false);
    const[isSelected2,setIsSelected2] = useState<boolean>(false);
    const[isSelected3,setIsSelected3] = useState<boolean>(false);
    const[isSelected4,setIsSelected4] = useState<boolean>(false);
    const[isSelected5,setIsSelected5] = useState<boolean>(false);
    const[isSelected6,setIsSelected6] = useState<boolean>(false);
    const[isSelected7,setIsSelected7] = useState<boolean>(false);

    function updateProgress(){
        if(!isSelected1){
            setProgress(1);
            setIsSelected(true);

        }
        
    }
    function updateProgress2(){
        if(!isSelected2){
            setProgress(2);
            setIsSelected2(true);

        }
    }
    function updateProgress3(){
        if(!isSelected3){
            setProgress(3);
            setIsSelected3(true);

        }
    }
    function updateProgress4(){
        if(!isSelected4){
            setProgress(4);
            setIsSelected4(true);

        }
    }
    function updateProgress5(){
        if(!isSelected5){
            setProgress(5);
            setIsSelected5(true);

        }
    }
    function updateProgress6(){
        if(!isSelected6){
            setProgress(6);
            setIsSelected6(true);
        }
    }
    function updateProgress7(){
        if(!isSelected7){
            setProgress(7);
            setIsSelected7(true);

        }
    }
    function handleAnswerSelection(index: number, value: string) {
        setSelectedAnswers(prevAnswers => {
            const newAnswers = [...prevAnswers];
            newAnswers[index] = value;
            console.log(newAnswers);
            return newAnswers;
        });
        if(index === 0){
            updateProgress();
        }
        else if(index === 1){
            updateProgress2();
        }
        else if(index === 2){
            updateProgress3();
        }
        else if(index === 3){
            updateProgress4();
        }
        else if(index === 4){
            updateProgress5();
        }
        else if(index === 5){
            updateProgress6();
        }
        else if(index === 6){
            updateProgress7();
        }
    }

    let questions = [
        "What type of work environment do you prefer?",
        "What skill are you most proud of?",
        "How do you handle challenges or setbacks?",
        "Which of the following activities do you enjoy the most?",
        "What motivates you in your work?",
        "How do you prefer to learn new skills or information?",
        "What industry or field interests you the most?"
    ];

    let options = [
        ["Fast-paced and dynamic", "Quiet and structured", "Collaborative and team-oriented", "Independent and self-directed"],
        ["Creativity and innovation", "Analytical thinking and problem-solving", "Communication and interpersonal skills", "Attention to detail and organization"],
        ["Embrace them as opportunities for growth", "Analyze the situation and devise a strategic solution", "Seek support and advice from others", "Stay focused and determined until the issue is resolved"],
        ["Coming up with new ideas and brainstorming", "Solving complex puzzles or problems", "Working closely with others to achieve a common goal", "Following step-by-step instructions to complete a task"],
        ["Making a positive impact on others or society", "Challenging yourself and reaching new goals", "Building strong relationships with colleagues or clients", "Maintaining stability and security in your career"],
        ["Experimenting and trying things out on your own", "Reading books or articles", "Participating in workshops or group discussions", "Watching tutorials or receiving hands-on training"],
        ["Technology and innovation", "Finance and business", "Healthcare and social services", "Arts and entertainment"]
    ];
    let moreQuestions = [["a"], ["b"], ["c"], ["d"], ["e"], ["f"], ["g"]];
    let moreOptions = [["a"], ["b"], ["c"], ["d"], ["e"], ["f"], ["g"]];
    const [page, setPage] = useState<string>("");
    function generateQ(){
        setPage("moreBasic");
    }

    return (
        <><div className="Progress-Bar">
            <div className="Progress">{Math.round((progress/7)*100)}% </div>
            <ProgressBar value={progress} maxValue={7} />
        </div>
            <><div className="Center">
                    <Form.Group controlId="MCQs">
                        {questions.map((question, index) => (
                            <div key={index}>
                                <Form.Label className="Bold">{`${index + 1}. ${question}`}</Form.Label>
                                <div className="Space">
                                    {options[index].map((option: string, optionIndex: number) => (
                                        <Form.Check
                                            key={option}
                                            type="radio"
                                            label={option}
                                            name={`question-${index}`}
                                            value={option}
                                            checked={selectedAnswers[index] === option}
                                            onChange={() => handleAnswerSelection(index, option)} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </Form.Group>
        

            <div>
                {page === 'moreBasic' && (
                    <> 
                    <div className="Center">
                <Form.Group controlId="MCQs">
                    {moreQuestions.map((question, index) => (
                        <div key={index}>
                            <Form.Label className="Bold">{`${index + 1}. ${question}`}</Form.Label>
                            <div className="Space">
                                {moreOptions[index].map((option: string, optionIndex: number) => (
                                    <Form.Check
                                        key={option}
                                        type="radio"
                                        label={option}
                                        name={`question-${index}`}
                                        value={option}
                                        checked={selectedAnswers[index] === option}
                                        onChange={() => handleAnswerSelection(index, option)} />
                                ))}
                            </div>
                        </div>
                    ))}
                </Form.Group>
            </div>
                    </>
                    )}
            </div>
            </div><Button className="Submit-Button" variant="primary" onClick={generateQ}>Generate more questions</Button></>
</>
    );
}
