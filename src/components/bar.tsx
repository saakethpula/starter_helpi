import React, { useState, useEffect } from 'react';

interface ProgressBarProps {
    value: number;
    maxValue: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, maxValue }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const calculateProgress = () => {
            const calculatedProgress = (value / maxValue) * 100;
            setProgress(calculatedProgress);
        };

        calculateProgress();
    }, [value, maxValue]);

    return (
        <div>
            <div style={{ backgroundColor: '#f0f0f0', height: '20px', marginBottom: '-1.7%'}}></div>
            <div style={{ width: `${progress}%`, height: '20px', backgroundColor: 'green' }}></div>
        </div>
    );
};

export default ProgressBar;