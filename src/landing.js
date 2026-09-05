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

  body:has(.mybox-page) {
    padding-bottom: 0;
  }

  .mybox-page + footer {
    position: static;
    margin-top: 28px;
    padding-block: 28px 48px;
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
    min-height: 58vh;
    display: grid;
    align-content: center;
    gap: 34px;
    margin-top: 0;
    padding: 18px 0 0;
  }

  .mybox-title {
    display: grid;
    justify-items: center;
    gap: 8px;
    margin-inline: calc(50% - 50vw);
    padding-inline: 20px;
    text-align: center;
  }

  .mybox-title-line {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
  }

  .mybox-title-word,
  .mybox-title-soft,
  .mybox-pill {
    color: #050505;
    font-size: clamp(44px, 6vw, 68px);
    font-weight: 750;
    line-height: 1.04;
    letter-spacing: 0;
  }

  .mybox-title-soft {
    color: rgba(5, 5, 5, 0.34);
  }

  .mybox-pill {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    min-height: 1.28em;
    padding: 0.13em 0.34em 0.17em 0.24em;
    border: 1px solid color-mix(in srgb, var(--pill-color) 18%, transparent);
    border-radius: 999px;
    background: color-mix(in srgb, var(--pill-color) 10%, white);
    color: var(--pill-color);
  }

  .mybox-pill img {
    width: 0.86em;
    height: 0.86em;
    object-fit: contain;
    flex: 0 0 auto;
    transform: translateY(0.01em);
  }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-top: 0;
  }

  .download-link {
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    min-height: 1.28em;
    padding: 12px 18px;
    border-radius: 999px;
    background: linear-gradient(180deg, #3a3a3c 0%, #202022 44%, #050505 100%);
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0;
    text-decoration: none;
  }

  .download-link::after {
    content: "";
    position: absolute;
    inset: -40%;
    background: linear-gradient(105deg, transparent 36%, rgba(255, 255, 255, 0.26) 48%, transparent 60%);
    transform: translateX(-72%);
    animation: download-shimmer 2.8s ease-in-out infinite;
    pointer-events: none;
  }

  .download-link span {
    position: relative;
    z-index: 1;
  }

  .download-link-logo {
    font-size: 1.1em;
    line-height: 1;
    transform: translateY(-0.02em);
  }

  .contact-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 42px;
    padding: 12px 18px;
    border: 1px solid #d4d4d8;
    border-radius: 999px;
    background: #ffffff;
    color: #18181b;
    font-size: 15px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0;
    text-decoration: none;
  }

  @keyframes download-shimmer {
    0%,
    58% {
      transform: translateX(-72%);
    }

    100% {
      transform: translateX(72%);
    }
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
    overflow: hidden;
    padding: 0;
    border: 1px solid #e4e4e7;
    border-radius: 16px;
    background: #fafafa;
  }

  .feature-card img {
    display: block;
    width: 100%;
    aspect-ratio: 11 / 15;
    object-fit: cover;
    object-position: top center;
    border-bottom: 1px solid #e4e4e7;
  }

  .feature-copy {
    padding: 18px;
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

  .screenshot-showcase {
    margin: 42px 0 0;
  }

  .screenshot-showcase img {
    display: block;
    width: min(100%, 360px);
    height: auto;
    margin-inline: auto;
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

    .hero {
      min-height: 66vh;
      gap: 30px;
    }

    .mybox-title-word,
    .mybox-title-soft,
    .mybox-pill {
      font-size: clamp(38px, 13.8vw, 58px);
    }

    .mybox-pill {
      gap: 6px;
    }

    .download-link {
      gap: 9px;
    }
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
  title: 'Mybox - Message Yourself Offline',
  description: 'Mybox is an offline message yourself app for saving links, notes, images, videos, and private reminders locally on your iPhone without a server.',
  body: `<main class="mybox-page">
      <div class="hero">
        <h1 class="mybox-title" aria-label="Message yourself like WhatsApp but fully offline and secure">
          <span class="mybox-title-line">
            <span class="mybox-title-word">Message</span>
            <span class="mybox-title-word">yourself</span>
          </span>
          <span class="mybox-title-line">
            <span class="mybox-title-soft">like</span>
            <span class="mybox-pill" style="--pill-color: #14a855;">
              <img src="/assets/mybox-whatsapp.png" alt="" width="64" height="64" />
              <span>WhatsApp</span>
            </span>
          </span>
          <span class="mybox-title-line">
            <span class="mybox-title-word">but fully</span>
            <span class="mybox-pill" style="--pill-color: #0a84ff;">
              <img src="/assets/mybox-offline.png" alt="" width="64" height="64" />
              <span>offline</span>
            </span>
          </span>
          <span class="mybox-title-line">
            <span class="mybox-title-soft">and</span>
            <span class="mybox-pill" style="--pill-color: #7b5cf0;">
              <img src="/assets/mybox-secure.png" alt="" width="64" height="64" />
              <span>secure</span>
            </span>
          </span>
        </h1>

        <div class="cta-row">
          <a class="download-link" href="https://apps.apple.com/app/id6806543053" rel="noopener noreferrer">
            <span class="download-link-logo" aria-hidden="true"></span>
            <span>App Store</span>
          </a>
          <a class="contact-link" href="mailto:raj@tinyhead.space">Contact support</a>
        </div>
      </div>

      <section>
        <figure class="screenshot-showcase">
          <img src="/assets/mybox-main-screenshot.png" alt="Mybox app screen showing offline private messages, saved links, files, photos, and notes" width="1800" height="3680" />
        </figure>
      </section>

      <section>
        <h2>Offline, searchable, and private</h2>
        <p>
          Create separate MyBoxes for your links, images, videos, thoughts, or daily notes.
          Search what you saved, lock what matters, and keep your personal content local-first.
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
      <p class="meta">Last updated: September 5, 2026</p>

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
          Mybox stores your inboxes, notes, links, images, videos, audio notes,
          files, settings, and related app data locally on your device. This app
          content remains under your control through the app and iOS device
          storage.
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
          Mybox may send minimal operational logs to help troubleshoot errors,
          understand whether core features work, and improve reliability. These
          logs may include the event name, timestamp, app version, country or
          region, and a random app-generated install identifier. They do not
          include the content you save in Mybox, your contacts, your photos,
          your messages, your email address, or your phone number. These logs are
          not used for advertising or tracking.
        </p>
        <p>
          If Apple provides crash reports or diagnostic information through your
          iOS or App Store settings, those reports may also be used to fix bugs
          and improve reliability.
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
          trackers. Operational logs may be processed by Tinyhead&apos;s logging
          provider only for app functionality, analytics, and diagnostics. If the
          app is downloaded through the App Store, Apple may process purchase,
          download, crash, or device information under Apple&apos;s own policies.
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
