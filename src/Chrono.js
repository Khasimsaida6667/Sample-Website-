import React from 'react';
import './Chrono.css'; 

const Chrono = () => {
    const events = [
        {
          "title": "Sample Title 1",
          "description": "Sample description for the first entry.",
          "date": "2024-04-24"
        },
        {
          "title": "Sample Title 2",
          "description": "Sample description for the second entry.",
          "date": "2024-04-23"
        },
        {
          "title": "Sample Title 3",
          "description": "Sample description for the third entry.",
          "date": "2024-04-22"
        },
        {
          "title": "Sample Title 4",
          "description": "Sample description for the fourth entry.",
          "date": "2024-04-21"
        }
      ]
      

    return (
        <div className="chrono-container">
            <h1 className="chrono-title">Vertical Chronological Timeline</h1>
            <div className="chrono">
                {events.map((event, index) => (
                    <div key={index} className="event">
                        <div className="event-date">{event.date}</div>
                        <div className="event-content">
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chrono;