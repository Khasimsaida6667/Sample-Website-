
import React, { useState, useEffect } from 'react';
import './App.css'; 
import CardContainer from './CardContainer';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Chrono from './Chrono'; 

// HorizontalCard component
const HorizontalCard = ({ title, description, image }) => {
  return (
    <div className="horizontal-card">
      <img src={image} alt={title} />
      <div className="horizontal-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};


const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
      setCurrentDateTime(now.toLocaleString(undefined, options));
      setGreeting(getGreeting(now.getHours()));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const getGreeting = (hour) => {
    if (hour >= 5 && hour < 12) { return 'Good morning'; } else if (hour >= 12 && hour < 18) { return 'Good afternoon'; } else { return 'Good evening'; }
  }; return (<div className="app">

    <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>

      <h2>Sidebar</h2>
    
      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
    </div>
    <div className="main-content">
      <button onClick={toggleSidebar}>{sidebarOpen ? 'Collapse' : 'Expand'}</button>
    

      <div className='con1'>
        <div className="greeting">{greeting} Sir/Madam</div>
        <div className="current-datetime con2">{currentDateTime}</div>
      </div>



      

      <div className="horizontal-cards">
        <HorizontalCard title="Card 1" description="Description for Card 1" image="https://i.postimg.cc/C5ZdGDCv/pexels-pixabay-48195.jpg" />
        <HorizontalCard title="Card 2" description="Description for Card 2" image="https://i.postimg.cc/QxTHVQdC/pexels-egonshotsphotos-2229894.jpg" />
        <HorizontalCard title="Card 3" description="Description for Card 3" image="https://i.postimg.cc/dVR3jJdK/pexels-goumbik-317353.jpg" />
        <HorizontalCard title="Card 4" description="Description for Card 4" image="https://i.postimg.cc/gJj0pR7Y/pexels-pixabay-534216.jpg" />
        <HorizontalCard title="Card 5" description="Description for Card 5" image="https://i.postimg.cc/Bt9Z2zn6/pexels-davidmcbee-730547.jpg" />
      </div>
      <div className='k1'>
        <CardContainer />
        <Chrono />

      </div>

    </div>
  </div>
  );
};

export default App;

