const landingPage = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Tinyhead is a personal space for side projects." />
    <title>Tinyhead - Side projects</title>
    <style>
      :root {
        color-scheme: light;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        color: #18181b;
        background: #ffffff;
      }

      * { box-sizing: border-box; }

      body {
        margin: 0;
        min-height: 100vh;
      }

      main {
        width: min(calc(100% - 40px), 620px);
        margin-inline: auto;
        padding-block: 80px;
      }

      h1 {
        margin: 0;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        font-size: 24px;
        font-weight: 500;
        line-height: 1.35;
        letter-spacing: 0;
      }

      p {
        margin: 14px 0 0;
        color: #52525b;
        font-size: 15px;
        font-weight: 500;
        line-height: 1.6;
      }

      nav {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin-top: 24px;
      }

      a {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        color: #2563eb;
        font-size: 15px;
        font-weight: 500;
        text-decoration: underline;
        text-underline-offset: 3px;
      }

      a:hover { opacity: 0.76; }

      a svg {
        width: 16px;
        height: 16px;
        fill: currentColor;
      }

      section {
        margin-top: 44px;
      }

      .flow-section {
        padding: 20px;
        border: 1px solid #e4e4e7;
        border-radius: 2px;
      }

      h2 {
        margin: 0 0 20px;
        font-size: 15px;
        font-weight: 500;
        line-height: 1.5;
        text-decoration: underline;
        text-decoration-color: #d4d4d8;
        text-decoration-thickness: 1px;
        text-underline-offset: 4px;
      }

      .flow {
        display: grid;
        justify-items: center;
        margin-top: 4px;
      }

      .flow-node {
        width: min(100%, 360px);
        padding: 14px 18px;
        border: 1px solid #e4e4e7;
        border-radius: 6px;
        background: #fafafa;
        text-align: center;
      }

      .flow-node strong,
      .flow-folder strong {
        display: block;
        font-size: 15px;
        font-weight: 500;
        line-height: 1.5;
      }

      .flow-node span {
        display: block;
        margin-top: 2px;
        color: #71717a;
        font-size: 15px;
        font-weight: 500;
        line-height: 1.5;
      }

      .flow-node.tinyhead {
        border-color: #bfdbfe;
        background: #eff6ff;
      }

      .flow-link {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 68px;
        color: #71717a;
        font-size: 13px;
        font-weight: 500;
        line-height: 1.5;
        text-align: center;
      }

      .flow-link span {
        position: relative;
        z-index: 1;
        padding: 3px 9px;
        background: #ffffff;
      }

      .flow-link::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        width: 1px;
        height: calc(100% - 10px);
        background: #a1a1aa;
      }

      .flow-link::after {
        content: "";
        position: absolute;
        bottom: 4px;
        left: calc(50% - 4px);
        width: 8px;
        height: 8px;
        border-right: 1px solid #a1a1aa;
        border-bottom: 1px solid #a1a1aa;
        transform: rotate(45deg);
      }

      .flow-folders {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 10px;
        width: 100%;
      }

      .flow-folder {
        min-width: 0;
        padding: 12px 8px;
        border: 1px solid #e4e4e7;
        border-radius: 6px;
        background: #ffffff;
        text-align: center;
      }

      .flow-note {
        width: min(100%, 500px);
        margin-top: 16px;
        text-align: center;
      }

      @media (max-width: 520px) {
        main {
          width: min(calc(100% - 32px), 620px);
          padding-block: 56px;
        }

        .flow-folders {
          grid-template-columns: 1fr;
        }

        .flow-section {
          padding: 16px;
        }
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Tinyhead is a personal space for side projects.</h1>
      <p>
        A small home for experiments, tools, notes, releases, and unfinished ideas
        that are still worth keeping close.
      </p>
      <nav aria-label="Tinyhead links">
        <a href="https://github.com/xrazz">
          <svg viewBox="0 0 24 24"><path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.47.11-3.05 0 0 .96-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.06.79 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" /></svg>
          View GitHub
        </a>
      </nav>

      <section>
        <h2>How it works</h2>
        <div class="flow flow-section" role="img" aria-label="Tinyhead collects side projects, tools, writing, and experiments in one personal space.">
          <div class="flow-node">
            <strong>Ideas</strong>
            <span>Side projects, notes, and experiments</span>
          </div>
          <div class="flow-link"><span>Build, write, ship</span></div>
          <div class="flow-node tinyhead">
            <strong>Tinyhead</strong>
            <span>A simple personal shelf for work in progress</span>
          </div>
          <div class="flow-link" aria-hidden="true"></div>
          <div class="flow-folders">
            <div class="flow-folder"><strong>Projects</strong></div>
            <div class="flow-folder"><strong>Tools</strong></div>
            <div class="flow-folder"><strong>Notes</strong></div>
          </div>
          <p class="flow-note">
            Small things get a place before they become polished things.
          </p>
        </div>
      </section>

      <section>
        <h2>Keep work visible</h2>
        <p>
          Tinyhead keeps side projects from disappearing into random folders. It is
          a calm place to collect what is being built, explored, and released.
        </p>
      </section>

      <section>
        <h2>Built in public</h2>
        <p>
          The focus is small useful software, experiments, and the kind of project
          notes that make future work easier to restart.
        </p>
      </section>

      <section>
        <h2>Personal, not precious</h2>
        <p>
          It does not need to be a company page. It can just be a clean personal
          space for side projects, prototypes, and useful little releases.
        </p>
      </section>

      <section>
        <h2>What belongs here</h2>
        <p>
          Tools, repos, demos, build notes, experiments, and tiny launches that
          deserve a simple home.
        </p>
      </section>

      <section>
        <h2>What it runs on</h2>
        <p>
          This page is intentionally minimal: one JavaScript file returns a plain
          HTML document with inline CSS.
        </p>
      </section>
    </main>
  </body>
</html>`;

export default landingPage;
