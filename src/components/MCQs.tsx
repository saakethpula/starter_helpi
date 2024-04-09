import React, { useState } from "react";
import { Form } from "react-bootstrap";
export{}
export function MCQs(): JSX.Element{
    const [selected, setSelected] = useState<string>();
    function updateSelected(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected(event.target.value);

    }
    let options:string[] = ["Creativity and innovation",
        "Analytical thinking and problem-solving",
        "Communication and interpersonal skills",
        "Attention to detail and organization"
        ];
    let options1:string[] = ["Embrace them as opportunities for growth",
        "Analyze the situation and devise a strategic solution",
        "Seek support and advice from others",
        "Stay focused and determined until the issue is resolved"
        ];
    let options2:string[] = ["Coming up with new ideas and brainstorming",
        "Solving complex puzzles or problems",
       "Working closely with others to achieve a common goal",
        "Following step-by-step instructions to complete a task"
       ];
    let options3:string[] = ["Making a positive impact on others or society",
        "Challenging yourself and reaching new goals",
        "Building strong relationships with colleagues or clients",
        "Maintaining stability and security in your career"
        ];
    let options4:string[] = ["Experimenting and trying things out on your own",
        "Reading books or articles",
        "Participating in workshops or group discussions",
        "Watching tutorials or receiving hands-on training"
        ];
    let options5:string[] = ["Technology and innovation",
        "Finance and business",
        "Healthcare and social services",
        "Arts and entertainment"
        ];

    return(
        <div>
            <Form.Group controlId="MCQs">
                    <Form.Label>1.What type of work environment do you prefer?</Form.Label>
                    <Form.Select value={selected} onChange={updateSelected}>
                            <option key="Fast-paced and dynamic" value="Fast-paced and dynamic">
                    Fast-paced and dynamic
                            </option>
                            <option key="Quiet and structured" value="FQuiet and structured">
                            Quiet and structured
                            </option>
                            <option key="Collaborative and team-oriented" value="Collaborative and team-oriented">
                            Collaborative and team-oriented
                            </option>
                            <option key="independent and self-directed" value="independent and self-directed">
                            independent and self-directed
                            </option>
                    </Form.Select>


                    <Form.Label>2.What skill are you most proud of?</Form.Label>
                    <Form.Select value={selected} onChange={updateSelected}>
                    {options.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>


                    <Form.Label>1.What type of work environment do you prefer?</Form.Label>
                    <Form.Select value={selected} onChange={updateSelected}>
                    {options1.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>


                    <Form.Label>1.What type of work environment do you prefer?</Form.Label>
                    <Form.Select value={selected} onChange={updateSelected}>
                    {options2.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>


                    <Form.Label>1.What type of work environment do you prefer?</Form.Label>
                    <Form.Select value={selected} onChange={updateSelected}>
                    {options3.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>


                    <Form.Label>1.What type of work environment do you prefer?</Form.Label>
                    <Form.Select value={selected} onChange={updateSelected}>
                    {options4.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>


                    <Form.Label>1.What type of work environment do you prefer?</Form.Label>
                    <Form.Select value={selected} onChange={updateSelected}>
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
