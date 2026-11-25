export default function Page() {
  return (
    <main className="bc">
      <style>{`
        .bc{--charcoal:#202329;--charcoal-soft:#2c3038;--night:#15171c;--cream:#fff8ec;--cream-soft:#fffdf8;--cream-deep:#f3e7cf;--gold:#e6b84c;--gold-light:#f6d67c;--gold-ink:#8a6414;--muted:#5a6068;--muted-dark:#ddd6c8;background:var(--night);color:var(--cream);font-family:Georgia,'Times New Roman',serif;overflow-x:hidden}
        .bc *{box-sizing:border-box}
        .bc a{text-decoration:none}
        .bc-sans{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif}
        .bc-header{position:absolute;top:0;left:0;right:0;z-index:5;display:flex;align-items:center;justify-content:space-between;padding:28px clamp(20px,5vw,56px)}
        .bc-logo{display:flex;align-items:center;gap:10px;color:var(--cream);font-size:26px;font-weight:600;letter-spacing:.01em}
        .bc-dot{width:11px;height:11px;border-radius:50%;background:var(--gold);box-shadow:0 0 14px 3px rgba(230,184,76,.55)}
        .bc-jobs{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:var(--cream);border:1px solid rgba(255,248,236,.45);border-radius:999px;padding:11px 22px;font-size:15px}
        .bc-hero{position:relative;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:150px 24px 110px;background:radial-gradient(ellipse 95% 52% at 50% 112%,rgba(230,184,76,.30),rgba(230,184,76,0) 62%),linear-gradient(180deg,var(--night) 0%,var(--charcoal) 58%,var(--night) 100%)}
        .bc-hero::before{content:'';position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 2 54 17v30L28 62 2 47V17Z' fill='none' stroke='%23e6b84c' stroke-opacity='0.10'/%3E%3Cpath d='M28 52 54 67v30L28 112 2 97V67Z' fill='none' stroke='%23e6b84c' stroke-opacity='0.07'/%3E%3C/svg%3E");background-size:56px 100px;pointer-events:none}
        .bc-hero>*{position:relative;z-index:2}
        .bc-bee-path{position:absolute;right:3%;top:15%;width:min(340px,62vw);z-index:1;pointer-events:none}
        .bc-eyebrow{display:flex;align-items:center;gap:16px;color:var(--gold-light);font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;font-weight:700;letter-spacing:.42em;text-transform:uppercase}
        .bc-eyebrow::before,.bc-eyebrow::after{content:'';width:44px;height:1px;background:var(--gold);opacity:.75}
        .bc-h1{margin:26px 0 0;font-size:clamp(3.2rem,9.5vw,8rem);line-height:1.02;font-weight:500;color:var(--cream);letter-spacing:-.015em}
        .bc-h1 em{color:var(--gold-light);font-style:italic}
        .bc-sub{margin:34px auto 0;max-width:640px;font-size:clamp(1.15rem,2.4vw,1.55rem);line-height:1.55;color:var(--muted-dark)}
        .bc-sub strong{color:var(--cream);font-weight:700}
        .bc-ctas{display:flex;flex-wrap:wrap;gap:16px;justify-content:center;margin-top:44px}
        .bc-btn-gold{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;background:linear-gradient(180deg,var(--gold-light),var(--gold));color:#241a05;font-weight:700;font-size:16px;border-radius:999px;padding:18px 34px;box-shadow:0 10px 34px rgba(230,184,76,.35)}
        .bc-btn-outline{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:var(--cream);border:1px solid rgba(255,248,236,.5);font-weight:600;font-size:16px;border-radius:999px;padding:18px 34px;background:rgba(21,23,28,.35)}
        .bc-proof{position:relative;text-align:center;padding:90px 24px 30px;background:linear-gradient(180deg,var(--night),var(--charcoal))}
        .bc-proof-eyebrow{color:var(--gold-light);font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:.42em;text-transform:uppercase}
        .bc-proof-text{margin:22px auto 0;max-width:900px;font-size:clamp(2rem,5.5vw,4rem);line-height:1.15;color:var(--cream)}
        .bc-proof-text em{color:var(--gold-light);font-style:italic}
        .bc-cards-wrap{background:linear-gradient(180deg,var(--charcoal) 0%,var(--cream-soft) 22%);padding:70px 24px 100px}
        .bc-cards-head{text-align:center;margin-bottom:48px}
        .bc-cards-eyebrow{color:var(--gold-ink);font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:.42em;text-transform:uppercase}
        .bc-cards-title{margin:16px 0 0;font-size:clamp(2rem,4.5vw,3.2rem);color:var(--charcoal);font-weight:500}
        .bc-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1120px;margin:0 auto}
        .bc-card{background:var(--cream-soft);border:1px solid var(--cream-deep);border-top:3px solid var(--gold);border-radius:20px;padding:34px 30px;box-shadow:0 18px 44px rgba(21,23,28,.12)}
        .bc-card-num{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:var(--gold-ink);font-weight:700;font-size:14px;letter-spacing:.2em}
        .bc-card-label{margin-top:10px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:var(--gold-ink);font-size:11px;font-weight:700;letter-spacing:.34em;text-transform:uppercase}
        .bc-card h3{margin:16px 0 0;font-size:1.55rem;line-height:1.25;color:var(--charcoal);font-weight:600}
        .bc-card p{margin:14px 0 0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:1.02rem;line-height:1.65;color:var(--muted)}
        .bc-why{background:var(--cream-soft);padding:20px 24px 110px;text-align:center}
        .bc-why-inner{max-width:720px;margin:0 auto}
        .bc-why h2{margin:16px 0 0;font-size:clamp(2rem,4.5vw,3.2rem);color:var(--charcoal);font-weight:500}
        .bc-why p{margin:26px 0 0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:1.12rem;line-height:1.75;color:var(--muted)}
        .bc-signoff{margin-top:30px;font-style:italic;color:var(--gold-ink);font-size:1.15rem}
        .bc-final{position:relative;text-align:center;padding:110px 24px;background:radial-gradient(ellipse 90% 60% at 50% 118%,rgba(230,184,76,.26),rgba(230,184,76,0) 62%),linear-gradient(180deg,var(--charcoal),var(--night))}
        .bc-final h2{margin:20px 0 0;font-size:clamp(2.2rem,5.5vw,4rem);color:var(--cream);font-weight:500}
        .bc-final p{margin:22px auto 0;max-width:560px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:1.12rem;line-height:1.65;color:var(--muted-dark)}
        .bc-footer{background:var(--night);padding:34px 24px;text-align:center;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;color:var(--muted-dark)}
        .bc-footer a{color:var(--gold-light)}
        @media (max-width:860px){.bc-cards{grid-template-columns:1fr}.bc-bee-path{top:9%;right:0;width:250px}.bc-hero{padding-top:130px}}
      `}</style>
      <header className="bc-header">
        <a className="bc-logo" href="https://www.beecome.me"><span className="bc-dot" />Beecome</a>
        <a className="bc-jobs" href="https://www.beecome.me/jobs">Browse jobs</a>
      </header>
      <section className="bc-hero">
        <svg className="bc-bee-path" viewBox="0 0 340 150" aria-hidden="true">
          <path d="M12 118 C 90 34, 210 22, 318 76" fill="none" stroke="#e6b84c" strokeOpacity="0.55" strokeWidth="2" strokeDasharray="2 7" strokeLinecap="round" />
          <polygon points="0,-7 6,-3.5 6,3.5 0,7 -6,3.5 -6,-3.5" transform="translate(72 74)" fill="none" stroke="#e6b84c" strokeOpacity="0.7" />
          <polygon points="0,-7 6,-3.5 6,3.5 0,7 -6,3.5 -6,-3.5" transform="translate(142 45)" fill="none" stroke="#e6b84c" strokeOpacity="0.7" />
          <polygon points="0,-7 6,-3.5 6,3.5 0,7 -6,3.5 -6,-3.5" transform="translate(216 39)" fill="none" stroke="#e6b84c" strokeOpacity="0.7" />
          <g transform="translate(296 58) rotate(16) scale(0.95)">
            <ellipse cx="-13" cy="-12" rx="13" ry="6.5" transform="rotate(-28 -13 -12)" fill="rgba(255,248,236,0.14)" stroke="#f6d67c" strokeWidth="1.6" />
            <ellipse cx="13" cy="-12" rx="13" ry="6.5" transform="rotate(28 13 -12)" fill="rgba(255,248,236,0.14)" stroke="#f6d67c" strokeWidth="1.6" />
            <ellipse cx="0" cy="4" rx="11" ry="15" fill="rgba(230,184,76,0.12)" stroke="#e6b84c" strokeWidth="2" />
            <path d="M-9 0 Q0 4 9 0" fill="none" stroke="#e6b84c" strokeWidth="1.8" />
            <path d="M-10 8 Q0 12 10 8" fill="none" stroke="#e6b84c" strokeWidth="1.8" />
            <circle cx="0" cy="-14" r="6" fill="none" stroke="#e6b84c" strokeWidth="2" />
            <path d="M-3 -19 Q-7 -26 -12 -27" fill="none" stroke="#f6d67c" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M3 -19 Q7 -26 12 -27" fill="none" stroke="#f6d67c" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M-3 18 L0 24 L3 18" fill="#e6b84c" fillOpacity="0.85" />
          </g>
        </svg>
        <div className="bc-eyebrow">Beecome</div>
        <h1 className="bc-h1">Who are you <em>becoming?</em></h1>
        <p className="bc-sub bc-sans">Beecome turns a resume into a <strong>Career Record</strong> that proves what you can do — for people who want proof of what they can do.</p>
        <div className="bc-ctas">
          <a className="bc-btn-gold" href="https://www.beecome.me">Start your Career Record →</a>
          <a className="bc-btn-outline" href="https://www.beecome.me/jobs">Explore jobs</a>
        </div>
      </section>
      <section className="bc-proof">
        <div className="bc-proof-eyebrow">The Proof Rule</div>
        <p className="bc-proof-text">Nothing is assumed. <em>Nothing is invented.</em></p>
      </section>
      <section className="bc-cards-wrap">
        <div className="bc-cards-head">
          <div className="bc-cards-eyebrow">What It Does</div>
          <h2 className="bc-cards-title">Three things Beecome can do</h2>
        </div>
        <div className="bc-cards">
          <article className="bc-card">
            <div className="bc-card-num">01</div>
            <div className="bc-card-label">Record</div>
            <h3>Turn a resume into a Career Record</h3>
            <p>Bring the resume you already have. Beecome reshapes it into a clear, structured record of your work.</p>
          </article>
          <article className="bc-card">
            <div className="bc-card-num">02</div>
            <div className="bc-card-label">Proof</div>
            <h3>Prove what you can do</h3>
            <p>Your skills are backed by what you’ve actually done, so others can see the proof for themselves.</p>
          </article>
          <article className="bc-card">
            <div className="bc-card-num">03</div>
            <div className="bc-card-label">Rule</div>
            <h3>Follow the proof rule</h3>
            <p>Nothing is assumed. Nothing is invented. Only what your record supports makes it in.</p>
          </article>
        </div>
      </section>
      <section className="bc-why">
        <div className="bc-why-inner">
          <div className="bc-cards-eyebrow">The Story</div>
          <h2>Why I built this</h2>
          <p>A resume asks you to describe yourself, then asks everyone else to take your word for it. Good people get overlooked because their real ability gets lost between bullet points and buzzwords.</p>
          <p>I built Beecome so your experience can speak with evidence. Every line in a Career Record traces back to something real — so you can show who you are, and who you’re becoming, with confidence.</p>
          <div className="bc-signoff">The founder of Beecome</div>
        </div>
      </section>
      <section className="bc-final">
        <div className="bc-proof-eyebrow">Begin</div>
        <h2>Show what you can do.</h2>
        <p>Build your Career Record, then find work that fits who you’re becoming.</p>
        <div className="bc-ctas">
          <a className="bc-btn-gold" href="https://www.beecome.me">Go to Beecome →</a>
          <a className="bc-btn-outline" href="https://www.beecome.me/jobs">See open jobs</a>
        </div>
      </section>
      <footer className="bc-footer">© 2026 Beecome · <a href="https://www.beecome.me">beecome.me</a> · <a href="https://www.beecome.me/jobs">beecome.me/jobs</a></footer>
    </main>
  )
}
