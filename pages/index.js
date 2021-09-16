import Script from 'next/script';

export default function Home() {
  return (
    <>
      <section>
        <div className="section-header">
          <h2 className="h2-decor">WELCOME</h2>
        </div>
        <p>Digital garden</p>
        <ul>
          <li>me@fluidself.org</li>
          <li>
            <a href="https://github.com/fluidself">https://github.com/fluidself</a>
          </li>
        </ul>
      </section>
      <section className="project-section" id="projects">
        <div className="section-header">
          <h2 className="h2-decor">PROJECTS</h2>
        </div>
        <p>
          Some things I built.
        </p>
      </section>
      <Script src="https://www.googletagmanager.com/gtag/js?id=UA-92834152-1" />
      <Script>
        {`window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-92834152-1');`}
      </Script>
    </>
  );
}
