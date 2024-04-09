import * as React from 'react';
import { Reference } from '../types/portfolio';
import { usePortfolioStore } from '../store/portfolioStore';

type ReferenceProps = {
  reference: Reference;
};

const Ingress = (props: ReferenceProps) => {
  const { reference } = props;
  
  return (

    <article className="referenceContent">
      <div className="referenceText">
      <h1> {reference.title}</h1>
      <blockquote>{reference.description}</blockquote>
      </div>
    </article>
  
  );
};


const ReferenceCard = (props: ReferenceProps) => {
  const { reference } = props;
  const { getImage } = usePortfolioStore();

  return (

    <article className="referenceContent">
      <img src={getImage(reference.img)} />
      <div className="referenceText">
      <h3> {reference.title}</h3>
      <a href={reference.codeUrl} target="_blank" rel="noopener noreferrer">Code</a> 
      { !!reference.liveUrl &&
      <>
       {" / "} <a href={reference.liveUrl} target="_blank" rel="noopener noreferrer">Live</a>
      </>
      }
      <p>{reference.description}</p>
      </div>
    </article>
  
  );
};

export default function Portfolio() {
  const { portfolio, ingress } = usePortfolioStore();

  return (
    <main className="portfolio">
      <Ingress reference={ingress} />
        {portfolio.map((reference, index) => (
          <ReferenceCard
              reference={reference}
              key={index}
          />
        ))}
    </main>
  );
}
