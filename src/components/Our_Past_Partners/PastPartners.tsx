// PastPartners.tsx
import React from 'react';
import styles from './PastPartners.module.css';

interface Partner {
  id: number;
  name: string;
  imgSrc: string;
}

const partners: Partner[] = [
  { id: 1, name: 'Partner 1', imgSrc: '/past_partners_logos/5.png' },
  { id: 2, name: 'Partner 2', imgSrc: '/past_partners_logos/hyperce.png' },
  { id: 3, name: 'Partner 3', imgSrc: '/past_partners_logos/aleo.png' },
  { id: 4, name: 'Partner 4', imgSrc: '/past_partners_logos/2.png' },
  { id: 5, name: 'Partner 5', imgSrc: '/past_partners_logos/classic_tech.png' },
  // ...add more when ready
];

export const PastPartners: React.FC = () => {
  // Duplicate the array so the scroll can loop seamlessly
  const looped = [...partners, ...partners];

return (
  <section className={styles.wrapper}>
      <section className="section events" data-section="section46">
        <div className="section-heading">
          <h2 className={styles.title}>Our Past Partners</h2>
        </div>
        <div className={styles.greenLine}></div>
        <div className={styles.marquee}>
          <div className={styles.marqueeContent}>
            {looped.map((p, idx) => (
              <div key={`${p.id}-${idx}`} className={styles.item}>
                <img src={p.imgSrc} alt={p.name} className={styles.logo} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.greenSquare}></div>
      </section>
    </section>
);

  
};



export default PastPartners;
