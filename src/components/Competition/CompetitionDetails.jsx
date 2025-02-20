import React, { useState, useEffect } from 'react';
import './DetailsComp.css';

export default function DetailsComp() {
  const [competition, setCompetition] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/competitions') 
      .then(response => response.json())
      .then(data => setCompetition(data[0])) 
      .catch(error => console.error('Erreur lors de la récupération des données', error));
    
    
  }, []);

  if (!competition) {
    return <div>Loading...</div>; 
  }

  const startDate = new Date(competition.start_date).toLocaleString();
  const endDate = new Date(competition.end_date).toLocaleString();

  return (
    <div className='divParent'>
    <div className='container' id='Details'>
    <div className="details-comp-container">
    <img src="https://cdn2.unrealengine.com/fortnite-crew-featured-outfit-1518x1546-cd216fad3f2e.png?resize=1&w=512 512w, https://cdn2.unrealengine.com/fortnite-crew-featured-outfit-1518x1546-cd216fad3f2e.png?resize=1&w=768 768w, https://cdn2.unrealengine.com/fortnite-crew-featured-outfit-1518x1546-cd216fad3f2e.png?resize=1&w=1024 1024w, https://cdn2.unrealengine.com/fortnite-crew-featured-outfit-1518x1546-cd216fad3f2e.png?resize=1&w=1280 1280w, https://cdn2.unrealengine.com/fortnite-crew-featured-outfit-1518x1546-cd216fad3f2e.png?resize=1&w=1600 1600w, https://cdn2.unrealengine.com/fortnite-crew-featured-outfit-1518x1546-cd216fad3f2e.png?resize=1&w=1920 1920w, https://cdn2.unrealengine.com/fortnite-crew-featured-outfit-1518x1546-cd216fad3f2e.png?resize=1&w=2560 2560w" alt="" />
    <header className="details-header">
        <h1>Règlement de la Compétition</h1>
        <p className="comp-title">{competition.title}</p>
      </header>

      <section className="comp-dates">
        <h2>Dates de la compétition</h2>
        <p>Début: {startDate}</p>
        <p>Fin: {endDate}</p>
      </section>
<center>
      <section className="comp-rules">
        <h2>Règles du compétition</h2>
        
        <ul className='list'>
          <li>1. La compétition est ouverte à tous les joueurs âgés de 18 ans et plus.</li>
          <li>2. Chaque joueur doit s'inscrire avant la date limite du 30 janvier 2025.</li>
          <li>3. Les participants doivent respecter le code de conduite pendant l'événement.</li>
          <li>4. Aucune triche n'est autorisée. Les joueurs seront disqualifiés en cas de comportement inapproprié.</li>
          <li>5. Les gagnants seront sélectionnés en fonction de leurs performances dans chaque épreuve.</li>
        </ul>
      </section>

      <section className="comp-prizes">
        <h2>Prix à Gagner</h2>
        <p>Les gagnants de chaque catégorie recevront des prix incroyables, dont des cartes-cadeaux, des trophées et des billets pour des événements exclusifs.</p>
        <ul className='list'>
          <li>1<sup>er</sup> Prix : Trophée et carte-cadeau de 10 000 MAD</li>
          <li>2<sup>ème</sup> Prix : Carte-cadeau de 5000 MAD</li>
          <li>3<sup>ème</sup> Prix : Carte-cadeau de 2000 MAD</li>
        </ul>
      </section>
      </center>
      
    </div>
    </div>
    </div>
  );
}
