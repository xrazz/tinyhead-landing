const styles = `
  :root {
    color-scheme: light;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: #18181b;
    background: #ffffff;
  }

  * { box-sizing: border-box; }

  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    min-height: 100vh;
    padding-bottom: 98px;
  }

  main,
  footer {
    width: min(calc(100% - 40px), 620px);
    margin-inline: auto;
  }

  main {
    flex: 1;
    padding-block: 80px 64px;
  }

  footer {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    margin-inline: 0;
    padding-block: 28px 48px;
    border-top: 1px solid #f4f4f5;
    background: rgba(255, 255, 255, 0.94);
    color: #71717a;
    font-size: 13px;
    font-weight: 500;
  }

  footer nav {
    width: min(calc(100% - 40px), 620px);
    margin: 0 auto;
  }

  h1 {
    margin: 0;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.35;
    letter-spacing: 0;
  }

  h2 {
    margin: 0 0 14px;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.5;
    text-decoration: underline;
    text-decoration-color: #d4d4d8;
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
  }

  p,
  li {
    color: #52525b;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.6;
  }

  p { margin: 14px 0 0; }

  ul {
    margin: 14px 0 0;
    padding-left: 20px;
  }

  nav,
  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    margin-top: 24px;
  }

  a {
    color: #2563eb;
    font-size: 15px;
    font-weight: 500;
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  a:hover { opacity: 0.76; }

  section { margin-top: 44px; }

  .home-main {
    padding-top: 30px;
    text-align: center;
  }

  .home-main p {
    margin-inline: auto;
  }

  .site-logo {
    display: block;
    width: 76px;
    height: 76px;
    margin: 0 auto 44px;
    object-fit: contain;
    -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 68%, rgba(0, 0, 0, 0) 100%);
    mask-image: linear-gradient(to bottom, #000 0%, #000 68%, rgba(0, 0, 0, 0) 100%);
  }

  .cursor-badge {
    position: fixed;
    z-index: 10;
    left: var(--cursor-x, 0);
    top: var(--cursor-y, 0);
    padding: 6px 11px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.92);
    color: #18181b;
    font-size: 13px;
    font-weight: 500;
    line-height: 1;
    pointer-events: none;
    opacity: 0;
    transform: translate(12px, 12px);
    transition: opacity 120ms ease;
  }

  .cursor-badge.is-visible {
    opacity: 1;
  }

  .app-card {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-top: 24px;
    padding: 18px;
    border: 1px dotted #a1a1aa;
    border-radius: 6px;
    background: transparent;
    color: inherit;
    text-decoration: none;
  }

  .app-icon {
    flex: 0 0 auto;
    width: 44px;
    height: 44px;
    border-radius: 0;
    object-fit: cover;
  }

  .app-card strong {
    display: block;
    color: #18181b;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.5;
  }

  .app-card .app-copy span {
    display: block;
    margin-top: 4px;
    color: #71717a;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.5;
  }

  .meta {
    color: #71717a;
    font-size: 13px;
  }

  .hero {
    margin-top: 18px;
    padding: 8px 0 0;
  }

  .hero-subtitle {
    margin-top: 14px;
    color: #3f3f46;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.6;
  }

  .hero-brand {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 18px;
  }

  .hero-logo {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    object-fit: cover;
    border: 1px solid #e4e4e7;
    box-shadow: 0 1px 2px rgba(24, 24, 27, 0.05);
  }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 26px;
  }

  .primary-link,
  .secondary-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 42px;
    padding: 10px 16px;
    border-radius: 999px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
  }

  .primary-link {
    background: #18181b;
    color: #ffffff;
  }

  .secondary-link {
    border: 1px solid #d4d4d8;
    color: #18181b;
    background: #ffffff;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 16px;
    margin-top: 28px;
  }

  .feature-card {
    padding: 18px;
    border: 1px solid #e4e4e7;
    border-radius: 16px;
    background: #fafafa;
  }

  .feature-card h3 {
    margin: 0 0 8px;
    color: #18181b;
    font-size: 15px;
    font-weight: 600;
  }

  .feature-card p {
    margin: 0;
    font-size: 14px;
    line-height: 1.55;
  }

  @media (max-width: 520px) {
    main,
    footer {
      width: min(calc(100% - 32px), 620px);
    }

    footer {
      width: 100%;
    }

    footer nav {
      width: min(calc(100% - 32px), 620px);
    }

    main { padding-block: 56px 48px; }
  }
`;

function page({ title, description, body }) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="${description}" />
    <title>${title}</title>
    <style>${styles}</style>
  </head>
  <body>
    ${body}
  </body>
</html>`;
}

function myboxFooter(currentPath) {
  const links = [
    ['/', 'Home'],
    ['/mybox', 'Mybox'],
    ['/mybox/privacy', 'Privacy Policy'],
    ['/mybox/terms', 'Terms'],
    ['/mybox/contact', 'Contact'],
  ]
    .filter(([href]) => href !== currentPath)
    .map(([href, label]) => `<a href="${href}">${label}</a>`)
    .join('\n        ');

  return `<footer>
      <nav aria-label="Mybox pages">
        ${links}
      </nav>
    </footer>`;
}

const tinyheadFooter = `<footer>
      <nav aria-label="Tinyhead pages">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
        <a href="https://github.com/xrazz" rel="noopener noreferrer">GitHub</a>
      </nav>
    </footer>`;

export const landingPage = page({
  title: 'Tinyhead - App pages',
  description: 'Tinyhead hosts simple pages for small apps and side projects.',
  body: `<main class="home-main">
      <img class="site-logo" src="/assets/tinyhead-logo.webp" alt="Tinyhead logo" width="76" height="76" data-cursor-badge-target />
      <span class="cursor-badge" data-cursor-badge>Tinyhead</span>
      <h1>Tiny personal project desk.</h1>
      <p>
        A quiet place for app landing pages, privacy policies, terms, and the
        small details that need a stable home.
      </p>

    </main>
    ${tinyheadFooter}
    <script>
      const logo = document.querySelector('[data-cursor-badge-target]');
      const badge = document.querySelector('[data-cursor-badge]');

      logo?.addEventListener('pointermove', (event) => {
        document.documentElement.style.setProperty('--cursor-x', event.clientX + 'px');
        document.documentElement.style.setProperty('--cursor-y', event.clientY + 'px');
        badge?.classList.add('is-visible');
      });

      logo?.addEventListener('pointerleave', () => {
        badge?.classList.remove('is-visible');
      });
    </script>`,
});

export const contactPage = page({
  title: 'Contact - Tinyhead',
  description: 'Contact Tinyhead.',
  body: `<main>
      <h1>Contact Tinyhead</h1>
      <p>
        For Tinyhead, app page, or project questions, email
        <a href="mailto:raj@tinyhead.space">raj@tinyhead.space</a>.
      </p>
    </main>
    <footer>
      <nav aria-label="Tinyhead pages">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="https://github.com/xrazz" rel="noopener noreferrer">GitHub</a>
      </nav>
    </footer>`,
});

export const projectsPage = page({
  title: 'Projects - Tinyhead',
  description: 'A directory of Tinyhead projects and apps.',
  body: `<main>
      <h1>Projects</h1>
      <p>
        A small collection of apps and experiments built by Tinyhead.
      </p>

      <a class="app-card" href="/mybox">
        <img class="app-icon" src="/assets/mybox-logo.webp" alt="" width="42" height="42" />
        <span class="app-copy">
          <strong>Mybox</strong>
          <span>A private place for notes, logs, and small records that stay on your device.</span>
        </span>
      </a>
    </main>
    ${tinyheadFooter}`,
});

export const myboxPage = page({
  title: 'Mybox - Tinyhead',
  description: 'Mybox is a private inbox for saving links, text, images, and personal items locally.',
  body: `<main>
      <div class="hero">
        <div class="hero-brand">
          <img class="hero-logo" src="/assets/mybox-logo.webp" alt="Mybox logo" width="52" height="52" />
          <h1>Mybox</h1>
        </div>
         

        <div class="cta-row">
          <a class="primary-link" href="mailto:raj@tinyhead.space">Contact support</a>
          <a class="secondary-link" href="/mybox/privacy">Privacy policy</a>
        </div>
      </div>

      <section>
        <h2>Like sending to yourself on WhatsApp</h2>
        <p>
          A quick place to save links, images, and text for later, without a server or a public feed.
        </p>
      </section>

      <section>
        <h2>Built for quick saves</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <h3>Links</h3>
            <p>Save articles, references, and pages you want to keep.</p>
          </div>
          <div class="feature-card">
            <h3>Images</h3>
            <p>Store screenshots and photos in one private place.</p>
          </div>
          <div class="feature-card">
            <h3>Text</h3>
            <p>Keep notes, snippets, and ideas without an account.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Offline and private</h2>
        <p>
          Mybox stays local-first. Nothing is pushed to a server. It is simple, private, and only for you.
        </p>
      </section>
    </main>
    ${myboxFooter('/mybox')}`,
});

export const myboxPrivacyPage = page({
  title: 'Mybox Privacy Policy - Tinyhead',
  description: 'Privacy policy for Mybox, a local-first iOS app.',
  body: `<main>
      <h1>Mybox Privacy Policy</h1>
      <p class="meta">Last updated: August 24, 2026</p>

      <section>
        <h2>Overview</h2>
        <p>
          Mybox is designed as a local-first app. The content you create in the app
          is stored on your device and is not stored on Tinyhead servers.
        </p>
      </section>

      <section>
        <h2>Data stored locally</h2>
        <p>
          Mybox may store your boxes, notes, logs, settings, and related app data
          locally on your device. This data remains under your control through the
          app and iOS device storage.
        </p>
      </section>

      <section>
        <h2>Server storage</h2>
        <p>
          Tinyhead does not operate a server database for Mybox app content. Mybox
          does not require an account and does not upload your boxes or entries to
          Tinyhead.
        </p>
      </section>

      <section>
        <h2>Logs and diagnostics</h2>
        <p>
          Mybox may generate local app logs needed for troubleshooting or normal app
          operation. If Apple provides crash reports or diagnostic information
          through your iOS or App Store settings, those reports may be used to fix
          bugs and improve reliability. These diagnostics are not used for
          advertising.
        </p>
      </section>

      <section>
        <h2>Device backups</h2>
        <p>
          Because Mybox stores data locally, your app data may be included in
          device backups, iCloud backups, or transfers depending on your iOS
          settings. Tinyhead does not control Apple&apos;s backup systems.
        </p>
      </section>

      <section>
        <h2>Third parties</h2>
        <p>
          Mybox does not sell personal data and does not use third-party advertising
          trackers. If the app is downloaded through the App Store, Apple may process
          purchase, download, crash, or device information under Apple&apos;s own
          policies.
        </p>
      </section>

      <section>
        <h2>Deleting data</h2>
        <p>
          You can remove Mybox data by deleting content inside the app, if available,
          or by deleting the app from your device. iOS may also provide storage and
          backup controls that affect local app data.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          For privacy questions about Mybox, contact <a href="mailto:raj@tinyhead.space">raj@tinyhead.space</a>.
        </p>
      </section>

      <section>
        <h2>Contact emails</h2>
        <p>
          If you contact Tinyhead by email, we may receive your email address and
          the contents of your message. We use this information only to respond to
          you and support Mybox.
        </p>
      </section>
    </main>
    ${myboxFooter('/mybox/privacy')}`,
});

export const myboxTermsPage = page({
  title: 'Mybox Terms and Conditions - Tinyhead',
  description: 'Terms and conditions for Mybox.',
  body: `<main>
      <h1>Mybox Terms and Conditions</h1>
      <p class="meta">Last updated: August 24, 2026</p>

      <section>
        <h2>1. Acceptance</h2>
        <p>
          By downloading or using Mybox, you agree to these terms. If you do not
          agree, do not use the app.
        </p>
      </section>

      <section>
        <h2>2. What Mybox does</h2>
        <p>
          Mybox is a local-first iOS app for organizing personal notes, logs, and
          small records into boxes. The app is provided for personal organization
          and productivity.
        </p>
      </section>

      <section>
        <h2>3. Your content</h2>
        <p>
          You are responsible for the content you create, save, import, or manage in
          Mybox. Please do not use the app to store content that you do not have the
          right to use.
        </p>
      </section>

      <section>
        <h2>4. Local data and backups</h2>
        <p>
          Mybox stores app content locally on your device. You are responsible for
          managing your device, backups, exports, and deletion of local data.
        </p>
      </section>

      <section>
        <h2>5. App Store and purchases</h2>
        <p>
          If Mybox offers paid downloads, in-app purchases, or subscriptions, those
          purchases are handled by Apple through the App Store. Apple&apos;s terms and
          your Apple account settings apply to billing, cancellation, and refunds.
        </p>
      </section>

      <section>
        <h2>6. Apple terms</h2>
        <p>
          Your use of Mybox may also be subject to Apple&apos;s App Store terms and
          the Apple standard licensed application end user license agreement,
          unless a separate custom EULA applies.
        </p>
      </section>

      <section>
        <h2>7. Privacy Policy</h2>
        <p>
          The <a href="https://tinyhead.space/mybox/privacy">Mybox Privacy Policy</a>
          explains how privacy and local app data are handled.
        </p>
      </section>

      <section>
        <h2>8. No warranty</h2>
        <p>
          Mybox is provided as is. We try to keep it useful and reliable, but we do
          not guarantee that it will be uninterrupted, error-free, or suitable for
          every purpose.
        </p>
      </section>

      <section>
        <h2>9. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Tinyhead and the Mybox developer
          are not liable for indirect, incidental, special, consequential, or
          punitive damages arising from your use of the app.
        </p>
      </section>

      <section>
        <h2>10. Changes</h2>
        <p>
          These terms may be updated from time to time. Continued use of Mybox after
          an update means you accept the updated terms.
        </p>
      </section>

      <section>
        <h2>11. Contact</h2>
        <p>
          For questions about these terms, contact <a href="mailto:raj@tinyhead.space">raj@tinyhead.space</a>.
        </p>
      </section>
    </main>
    ${myboxFooter('/mybox/terms')}`,
});

export const myboxContactPage = page({
  title: 'Mybox Contact - Tinyhead',
  description: 'Contact information for Mybox.',
  body: `<main>
      <h1>Mybox Contact</h1>
      <p>
        For support, privacy questions, terms questions, or App Store review
        contact needs, email <a href="mailto:raj@tinyhead.space">raj@tinyhead.space</a>.
      </p>

    </main>
    ${myboxFooter('/mybox/contact')}`,
});

export default landingPage;
