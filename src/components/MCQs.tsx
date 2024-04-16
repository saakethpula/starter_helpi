import React, { useState } from "react";
import { Form } from "react-bootstrap";
<<<<<<< HEAD
import "./MCQs.css";
export{}
export function MCQs(): JSX.Element{
    /** <Form.Group controlId="MCQs">
                    <Form.Label className = "Bold">1. What type of work environment do you prefer?</Form.Label>
                    <Form.Select className = "Space" value={selected} onChange={updateSelected}>
                            <option value="">
                            Select an Option
                            </option>
                            <option key="Fast paced and dynamic" value="fast-paced and dynamic">
                            Fast-paced and dynamic
                            </option>
                            <option key="Quiet and structured" value="quiet and structured">
                            Quiet and structured
                            </option>
                            <option key="Collaborative and team oriented" value="collaborative and team-oriented">
                            Collaborative and team-oriented
                            </option>
                            <option key="independent and self directed" value="independent and self-directed">
                            independent and self-directed
                            </option>
                    </Form.Select>
                    <Form.Label className = "Bold">2. What skill are you most proud of?</Form.Label>
                    <Form.Select className = "Space" value={selected2} onChange={updateSelected1}>
                    {options.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                    <Form.Label className = "Bold">3. How do you handle challenges or setbacks?</Form.Label>
                    <Form.Select className = "Space" value={selected3} onChange={updateSelected2}>
                    {options1.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>


                    <Form.Label className = "Bold">4. Which of the following activities do you enjoy the most?</Form.Label>
                    <Form.Select className = "Space" value={selected4} onChange={updateSelected3}>
                    {options2.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>


                    <Form.Label className = "Bold">5. What motivates you in your work?</Form.Label>
                    <Form.Select className = "Space" value={selected5} onChange={updateSelected4}>
                    {options3.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>


                    <Form.Label className = "Bold">6. How do you prefer to learn new skills or information?</Form.Label>
                    <Form.Select className = "Space" value={selected6} onChange={updateSelected5}>
                    {options4.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>


                    <Form.Label className = "Bold">7. What industry or field interests you the most?</Form.Label>
                    <Form.Select className = "Space" value={selected7} onChange={updateSelected6}>
                    {options5.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                    
                </Form.Group>*/
    const [selected, setSelected] = useState<string>('');
    function updateSelected(event: React.ChangeEvent<HTMLInputElement>){
        setSelected(event.target.value);
=======
>>>>>>> 3dcf62e9216dbe1d8a10bba6b136b05d4d699013

export function MCQs(): JSX.Element {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(7).fill(''));
    function handleAnswerSelection(index: number, value: string) {
        setSelectedAnswers(prevAnswers => {
            const newAnswers = [...prevAnswers];
            newAnswers[index] = value;
            console.log(newAnswers);
            return newAnswers;
        });
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

    return (
        <div className="Center">
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
                                    onChange={() => handleAnswerSelection(index, option)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </Form.Group>
        </div>
    );
}
