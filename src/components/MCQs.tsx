import React, { useState } from "react";
import { Form } from "react-bootstrap";
export{}
export function MCQs(): JSX.Element{
    /** */
    const [selected, setSelected] = useState<string>('');
    function updateSelected(event: React.ChangeEvent<HTMLSelectElement>){
        setSelected(event.target.value);

    }
    const [selected2, setSelected1] = useState<string>('');
    function updateSelected1(event: React.ChangeEvent<HTMLSelectElement>){
        setSelected1(event.target.value);

    }
    const [selected3, setSelected2] = useState<string>('');
    function updateSelected2(event: React.ChangeEvent<HTMLSelectElement>){
        setSelected2(event.target.value);

    }
    const [selected4, setSelected3] = useState<string>('');
    function updateSelected3(event: React.ChangeEvent<HTMLSelectElement>){
        setSelected3(event.target.value);

    }
    const [selected5, setSelected4] = useState<string>('');
    function updateSelected4(event: React.ChangeEvent<HTMLSelectElement>){
        setSelected4(event.target.value);

    }
    const [selected6, setSelected5] = useState<string>('');
    function updateSelected5(event: React.ChangeEvent<HTMLSelectElement>){
        setSelected5(event.target.value);

    }
    const [selected7, setSelected6] = useState<string>('');
    function updateSelected6(event: React.ChangeEvent<HTMLSelectElement>){
        setSelected6(event.target.value);

    }
    let options:string[] = ["Select an Option","Creativity and innovation ",
        "Analytical thinking and problem-solving ",
        "Communication and interpersonal skills ",
        "Attention to detail and organization "
        ];
    let options1:string[] = ["Select an Option","Embrace them as opportunities for growth",
        "Analyze the situation and devise a strategic solution",
        "Seek support and advice from others",
        "Stay focused and determined until the issue is resolved"
        ];
    let options2:string[] = ["Select an Option","Coming up with new ideas and brainstorming",
        "Solving complex puzzles or problems",
       "Working closely with others to achieve a common goal",
        "Following step-by-step instructions to complete a task"
       ];
    let options3:string[] = ["Select an Option","Making a positive impact on others or society",
        "Challenging yourself and reaching new goals",
        "Building strong relationships with colleagues or clients",
        "Maintaining stability and security in your career"
        ];
    let options4:string[] = ["Select an Option","Experimenting and trying things out on your own",
        "Reading books or articles",
        "Participating in workshops or group discussions",
        "Watching tutorials or receiving hands-on training"
        ];
    let options5:string[] = ["Select an Option","Technology and innovation",
        "Finance and business",
        "Healthcare and social services",
        "Arts and entertainment"
        ];

    return(
        <div>
           <Form.Group controlId="MCQs">
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
                    
                </Form.Group>
        </div>
    );
}
