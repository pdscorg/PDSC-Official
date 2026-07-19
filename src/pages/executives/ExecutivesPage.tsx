import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './ExecutivesPage.css';
import ExecutivesData from '../../assets/data/executives_pages.json';

type ExecutiveProfile = {
  name: string;
  post: string;
  img: string;
  department: string;
  batch: string;
  slug: string;
  linkedin: string;
  github: string;
  portfolio: string;
  facebook: string;
  email: string;
  quote: string;
};

const socials = [
  { key: 'linkedin', label: 'LinkedIn', icon: 'fab fa-linkedin-in' },
  { key: 'github', label: 'GitHub', icon: 'fab fa-github' },
  { key: 'portfolio', label: 'Portfolio', icon: 'fa fa-globe' },
  { key: 'facebook', label: 'Facebook', icon: 'fab fa-facebook-f' },
] as const;

const isValidLink = (value: string) => value && value !== '-';

export default function ExecutivesPage() {
  const { slug } = useParams();
  const executive = ExecutivesData.find(
    (person) => person.slug === slug,
  ) as ExecutiveProfile | undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <>
      <div className="executive-page-shell">
        <Navbar />
        <main className="executive-page">
          {executive ? (
            <section className="executive-profile-shell">
              <div className="executive-hero">
                <div className="executive-badge">PDSC Executive</div>
                <h1>{executive.name}</h1>
                <p className="executive-post">{executive.post}</p>
              </div>

              <div className="executive-card">
                <div className="executive-photo-wrap">
                  <img src={`/executives/${executive.img}`} alt={executive.name} />
                </div>

                <div className="executive-content">
                  <p className="executive-quote">“{executive.quote}”</p>

                  <div className="executive-meta-grid">
                    <div>
                      <span className="meta-label">Department</span>
                      <span className="meta-value">{executive.department}</span>
                    </div>
                    <div>
                      <span className="meta-label">Batch</span>
                      <span className="meta-value">{executive.batch}</span>
                    </div>
                    <div>
                      <span className="meta-label">Role</span>
                      <span className="meta-value">{executive.post}</span>
                    </div>
                  </div>

                  <div className="executive-socials">
                    {socials.map((social) => {
                      const href = executive[social.key];
                      if (!isValidLink(href)) {
                        return null;
                      }

                      return (
                        <a key={social.key} href={href} target="_blank" rel="noreferrer">
                          <i className={social.icon}></i>
                          <span>{social.label}</span>
                        </a>
                      );
                    })}
                  </div>

                  <div className="executive-actions">
                    <a className="primary-action" href={`mailto:${executive.email}`}>
                      Contact via email
                    </a>
                    <Link className="secondary-action" to="/" state={{ scrollTo: 'team' }}>
                      Back to home
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <section className="executive-profile-shell executive-not-found">
              <div className="executive-hero">
                <div className="executive-badge">PDSC Executive</div>
                <h1>Executive not found</h1>
                <p className="executive-summary">
                  No executive profile matched this slug.
                </p>
                <Link className="primary-action" to="/" state={{ scrollTo: 'team' }}>
                  Return to home
                </Link>
              </div>
            </section>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}