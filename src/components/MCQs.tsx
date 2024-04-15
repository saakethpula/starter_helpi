import React, { useState } from "react";
import { Form } from "react-bootstrap";
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

    }
    const [selected2, setSelected1] = useState<string>('');
    function updateSelected1(event: React.ChangeEvent<HTMLInputElement>){
        setSelected1(event.target.value);

    }
    const [selected3, setSelected2] = useState<string>('');
    function updateSelected2(event: React.ChangeEvent<HTMLInputElement>){
        setSelected2(event.target.value);

    }
    const [selected4, setSelected3] = useState<string>('');
    function updateSelected3(event: React.ChangeEvent<HTMLInputElement>){
        setSelected3(event.target.value);

    }
    const [selected5, setSelected4] = useState<string>('');
    function updateSelected4(event: React.ChangeEvent<HTMLInputElement>){
        setSelected4(event.target.value);

    }
    const [selected6, setSelected5] = useState<string>('');
    function updateSelected5(event: React.ChangeEvent<HTMLInputElement>){
        setSelected5(event.target.value);

    }
    const [selected7, setSelected6] = useState<string>('');
    function updateSelected6(event: React.ChangeEvent<HTMLInputElement>){
        setSelected6(event.target.value);

    }
    let options:string[] = ["Creativity and innovation ",
        "Analytical thinking and problem-solving ",
        "Communication and interpersonal skills ",
        "Attention to detail and organization "
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
        <div className="Center">
           <Form.Group controlId="MCQs">
    <Form.Label className="Bold">1. What type of work environment do you prefer?</Form.Label>
    <div className="Space">
        <Form.Check
            type="radio"
            label="Fast-paced and dynamic"
            name="workEnvironment"
            value="fast-paced and dynamic"
            checked={selected === "fast-paced and dynamic"}
            onChange={updateSelected}
        />
        <Form.Check
            type="radio"
            label="Quiet and structured"
            name="workEnvironment"
            value="quiet and structured"
            checked={selected === "quiet and structured"}
            onChange={updateSelected}
        />
        <Form.Check
            type="radio"
            label="Collaborative and team-oriented"
            name="workEnvironment"
            value="collaborative and team-oriented"
            checked={selected === "collaborative and team-oriented"}
            onChange={updateSelected}
        />
        <Form.Check
            type="radio"
            label="Independent and self-directed"
            name="workEnvironment"
            value="independent and self-directed"
            checked={selected === "independent and self-directed"}
            onChange={updateSelected}
        />
    </div>

    <Form.Label className="Bold">2. What skill are you most proud of?</Form.Label>
    <div className="Space">
        {options.map((option: string) => (
            <Form.Check
                key={option}
                type="radio"
                label={option}
                name="skillProudOf"
                value={option}
                checked={selected2 === option}
                onChange={updateSelected1}
            />
        ))}
    </div>

    <Form.Label className="Bold">3. How do you handle challenges or setbacks?</Form.Label>
    <div className="Space">
        {options1.map((option: string) => (
            <Form.Check
                key={option}
                type="radio"
                label={option}
                name="handlingChallenges"
                value={option}
                checked={selected3 === option}
                onChange={updateSelected2}
            />
        ))}
    </div>

    <Form.Label className="Bold">4. Which of the following activities do you enjoy the most?</Form.Label>
    <div className="Space">
        {options2.map((option: string) => (
            <Form.Check
                key={option}
                type="radio"
                label={option}
                name="enjoyedActivities"
                value={option}
                checked={selected4 === option}
                onChange={updateSelected3}
            />
        ))}
    </div>

    <Form.Label className="Bold">5. What motivates you in your work?</Form.Label>
    <div className="Space">
        {options3.map((option: string) => (
            <Form.Check
                key={option}
                type="radio"
                label={option}
                name="workMotivation"
                value={option}
                checked={selected5 === option}
                onChange={updateSelected4}
            />
        ))}
    </div>

    <Form.Label className="Bold">6. How do you prefer to learn new skills or information?</Form.Label>
    <div className="Space">
        {options4.map((option: string) => (
            <Form.Check className="Space"
                key={option}
                type="radio"
                label={option}
                name="learningPreference"
                value={option}
                checked={selected6 === option}
                onChange={updateSelected5}
            />
        ))}
    </div>

    <Form.Label className="Bold">7. What industry or field interests you the most?</Form.Label>
    <div className="Space">
        {options5.map((option: string) => (
            <Form.Check
                key={option}
                type="radio"
                label={option}
                name="interestedIndustry"
                value={option}
                checked={selected7 === option}
                onChange={updateSelected6}
            />
        ))}
    </div>
</Form.Group>
        </div>
    );
}
