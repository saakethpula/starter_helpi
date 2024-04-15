import React, { useState } from "react";
import { Form } from "react-bootstrap";

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
