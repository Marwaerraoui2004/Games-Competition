import React, { useEffect, useState } from 'react';

const CompetitionList = () => {
    const [competitions, setCompetitions] = useState([]);
    
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/competitions')
            .then(response => response.json())
            .then(data => setCompetitions(data))
            .catch(error => console.error('Error fetching competitions:', error));
    }, []);
    
    return (
        <div>
            <h2>Competitions</h2>
            <ul>
                {competitions.length > 0 ? (
                    competitions.map(competition => (
                        <li key={competition.id}>
                            {competition.title} - {competition.start_date} to {competition.end_date}
                        </li>
                    ))
                ) : (
                    <p>No competitions found.</p>
                )}
            </ul>
        </div>
    );
};

export default CompetitionList;
