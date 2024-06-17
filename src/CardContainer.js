import React, { useState } from 'react';
import './CardContainer.css'; 

const CardContainer = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [visibleCards, setVisibleCards] = useState(10); 

    const cardData =[
        {
          "id": 1,
          "image": "https://i.postimg.cc/8PMMxQWZ/pexels-goumbik-590041.jpg",
          "title": "Sample Title 1",
          "paragraph": "Zauba Corp is India's leading provider of commercial information and insight on businesses."
        },
        {
          "id": 2,
          "image": "https://i.postimg.cc/C5DnykZR/pexels-leeloothefirst-5561911.jpg",
          "title": "Sample Title 2",
          "paragraph": "The team behind Zauba Corp have one goal"
        },
        {
          "id": 3,
          "image": "https://i.postimg.cc/1RNqNhWy/pexels-rdne-8068695.jpg",
          "title": "Sample Title 3",
          "paragraph": "to be your sole resource for critical information"
        },
        {
          "id": 4,
          "image": "https://i.postimg.cc/1RNqNhWy/pexels-rdne-8068695.jpg",
          "title": "Sample Title 4",
          "paragraph": "We gather data from a number of official sources and third parties"
        },
        {
          "id": 5,
          "image": "https://i.postimg.cc/T1p1GmpV/pexels-olia-danilevich-8145352.jpg",
          "title": "Sample Title 5",
          "paragraph": "to give you all the information you need"
        },
        {
          "id": 6,
          "image": "https://i.postimg.cc/mZ5hjd58/pexels-antonio-batinic-2573434-4164418.jpg",
          "title": "Sample Title 6",
          "paragraph": "in one easy to use website"
        },
        {
          "id": 7,
          "image": "https://i.postimg.cc/kgFn0wTr/pexels-realtoughcandy-11035471.jpg",
          "title": "Sample Title 7",
          "paragraph": "Sample paragraph text for the seventh entry."
        },
        {
          "id": 8,
          "image": "https://i.postimg.cc/rsJBhY8g/pexels-fauxels-3184465.jpg",
          "title": "Sample Title 8",
          "paragraph": "Sample paragraph text for the eighth entry."
        },
        {
          "id": 9,
          "image": "https://i.postimg.cc/NfGqyY4n/pexels-energepic-com-27411-159888.jpg",
          "title": "Sample Title 9",
          "paragraph": "Sample paragraph text for the ninth entry."
        },
        {
          "id": 10,
          "image": "https://i.postimg.cc/JztfqqSc/pexels-tima-miroshnichenko-7567554.jpg",
          "title": "Sample Title 10",
          "paragraph": "Sample paragraph text for the tenth entry."
        },
        {
          "id": 11,
          "image": "https://i.postimg.cc/cJw595hY/pexels-pixabay-260024.jpg",
          "title": "Sample Title 11",
          "paragraph": "Sample paragraph text for the eleventh entry."
        },
        {
          "id": 12,
          "image": "https://i.postimg.cc/MTw3hb3L/pexels-savvas-stavrinos-270619-814544.jpg",
          "title": "Sample Title 12",
          "paragraph": "Sample paragraph text for the twelfth entry."
        },
        {
          "id": 13,
          "image": "https://i.postimg.cc/7PmtWz3B/pexels-shvetsa-4672717.jpg",
          "title": "Sample Title 13",
          "paragraph": "Sample paragraph text for the thirteenth entry."
        },
        {
          "id": 14,
          "image": "https://i.postimg.cc/W1J9zfQK/pexels-alexasfotos-2315712.jpg",
          "title": "Sample Title 14",
          "paragraph": "Sample paragraph text for the fourteenth entry."
        },
        {
          "id": 15,
          "image": "https://i.postimg.cc/CKGmHnMs/pexels-vlada-karpovich-3958213.jpg",
          "title": "Sample Title 15",
          "paragraph": "Sample paragraph text for the fifteenth entry."
        }
      ]
      
      

    const nextSlide = () => {
        setCurrentPage((prevPage) => (prevPage === cardData.length - 1 ? 0 : prevPage + 1));
    };

    const prevSlide = () => {
        setCurrentPage((prevPage) => (prevPage === 0 ? cardData.length - 1 : prevPage - 1));
    };


    const loadMore = () => {
        setVisibleCards((prevVisibleCards) => prevVisibleCards + 5); // Increase the number of visible cards
    };

    return (
        <div className="card-container">

            <div className="arrow arrow-left" onClick={prevSlide}>
                {'<'} 
            </div>

            <div className="cards" style={{ transform: `translateX(-${currentPage * 110}px)` }}>
                        {cardData.slice(0, visibleCards).map((card, index) => (
                        <div key={card.id} className={`card ${index===currentPage ? 'active' : '' }`}>
                            <div className='con3'>
                            <img src={card.image} alt={card.id} className='images'/>
                            <h3>{card.title}</h3>
                            <p>{card.paragraph}</p>
                            </div>
                        </div>
                        ))}
                    </div>

            <div className="arrow arrow-right" onClick={nextSlide}>
                {'>'}
            </div>


            

            <button className="load-more-button" onClick={loadMore}>
                Load More
            </button>
        </div>
    );
};

export default CardContainer;

