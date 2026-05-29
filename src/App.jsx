import {
  about,
  careerDirections,
  photos,
  profile,
  researchExperiences,
  skills,
} from './data/profile.js';

const navItems = [
  { label: '首页', href: '#home' },
  { label: '关于我', href: '#about' },
  { label: '科研经历', href: '#research' },
  { label: '实验技能', href: '#skills' },
  { label: '职业方向', href: '#career' },
  { label: '摄影作品', href: '#photography' },
  { label: '联系方式', href: '#contact' },
];

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="回到首页">
          <span className="brand-mark">ZL</span>
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.englishName}</small>
          </span>
        </a>
        <nav aria-label="主导航">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="home" className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">{profile.location}</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href="#research">
              查看科研经历
            </a>
            <a className="button secondary" href="#photography">
              浏览摄影作品
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="个人概览">
          {profile.highlights.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section about-grid">
        <div>
          <p className="section-kicker">About</p>
          <h2>关于我</h2>
        </div>
        <div className="prose">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section id="research" className="section">
        <div className="section-heading">
          <p className="section-kicker">Research</p>
          <h2>科研经历</h2>
        </div>
        <div className="timeline">
          {researchExperiences.map((item) => (
            <article className="timeline-item" key={item.title}>
              <time>{item.period}</time>
              <div>
                <h3>{item.title}</h3>
                <p className="muted">{item.lab}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section soft-band">
        <div className="section-heading">
          <p className="section-kicker">Skills</p>
          <h2>实验技能</h2>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.group}>
              <h3>{skill.group}</h3>
              <div className="tags">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="career" className="section">
        <div className="section-heading">
          <p className="section-kicker">Direction</p>
          <h2>职业方向</h2>
        </div>
        <div className="direction-grid">
          {careerDirections.map((direction) => (
            <article className="direction-card" key={direction.title}>
              <h3>{direction.title}</h3>
              <p>{direction.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="photography" className="section photography">
        <div className="section-heading">
          <p className="section-kicker">Photography</p>
          <h2>摄影作品</h2>
        </div>
        <div className="photo-grid">
          {photos.map((photo) => (
            <figure className="photo-card" key={photo.title}>
              <img src={photo.src} alt={photo.alt} />
              <figcaption>
                <strong>{photo.title}</strong>
                <span>
                  {photo.year} · {photo.film}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>联系方式</h2>
          <p className="intro">欢迎交流科研合作、实验助理机会、作品拍摄与学术视觉表达。</p>
        </div>
        <div className="contact-list">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          {profile.links.map((link) => (
            <span key={link.label}>
              {link.label}: {link.value}
            </span>
          ))}
        </div>
      </section>

      <footer>
        <span>© 2026 {profile.englishName}</span>
        <span>Research notes, film light, and quiet evidence.</span>
      </footer>
    </main>
  );
}

export default App;
