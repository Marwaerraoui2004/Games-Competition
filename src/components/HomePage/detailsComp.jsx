import React from 'react';
import './DetailsComp.css';

export default function DetailsComp() {
  return (
    <div className="details-comp-container">
      <header className="details-header">
        <h1>Règlement de la Compétition</h1>
        <p className="comp-title">Compétition 2025 - Défi des Jeux</p>
      </header>

      <section className="comp-rules">
        <h2>Règles de la compétition</h2>
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
          <li>1<sup>er</sup> Prix : Trophée et carte-cadeau de 5000 MAD</li>
          <li>2<sup>ème</sup> Prix : Carte-cadeau de 3000 MAD</li>
          <li>3<sup>ème</sup> Prix : Carte-cadeau de 1000 MAD</li>
        </ul>
      </section>

      
    </div>
  );
}
