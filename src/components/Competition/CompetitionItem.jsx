import React from 'react';
import { Link } from 'react-router-dom';

const CompetitionItem = ({ competition }) => {
  return (
    <li>
      <Link to={`/competitions/${competition.id}`}>
        <h3>{competition.title}</h3>
        <p>{competition.start_date} - {competition.end_date}</p>
      </Link>
    </li>
  );
};

export default CompetitionItem;
