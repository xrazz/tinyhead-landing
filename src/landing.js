const styles = `
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

  main,
  footer {
    width: min(calc(100% - 40px), 620px);
    margin-inline: auto;
  }

  main { padding-block: 80px 64px; }

  footer {
    padding-block: 28px 48px;
    border-top: 1px solid #f4f4f5;
    color: #71717a;
    font-size: 13px;
    font-weight: 500;
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
    width: 42px;
    height: 42px;
    border-radius: 10px;
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

  @media (max-width: 520px) {
    main,
    footer {
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

export const landingPage = page({
  title: 'Tinyhead - App pages',
  description: 'Tinyhead hosts simple pages for small apps and side projects.',
  body: `<main>
      <h1>Tiny personal project desk.</h1>
      <p>
        A quiet place for app landing pages, privacy policies, terms, and the
        small details that need a stable home.
      </p>

      <a class="app-card" href="/mybox">
        <img class="app-icon" src="/assets/mybox-logo.webp" alt="" width="42" height="42" />
        <span class="app-copy">
          <strong>Mybox</strong>
          <span>A private place for notes, logs, and small records that stay on your device.</span>
        </span>
      </a>
    </main>
    <footer>
      Tinyhead
    </footer>`,
});

export const myboxPage = page({
  title: 'Mybox - Tinyhead',
  description: 'Mybox is a local-first iOS app for personal notes, logs, and small records.',
  body: `<main>
      <h1>Mybox</h1>
      <p>
        Mybox is a small local-first iOS app for keeping personal boxes of notes,
        logs, and small records. It is built to keep your data on your device.
      </p>

      <section>
        <h2>Local by default</h2>
        <p>
          Mybox does not run an account system and does not store your app content
          on a Tinyhead server. Your boxes and entries live locally on your device.
        </p>
      </section>

      <nav aria-label="Mybox pages">
        <a href="/">Home</a>
        <a href="/mybox/privacy">Privacy Policy</a>
        <a href="/mybox/terms">Terms</a>
        <a href="/mybox/contact">Contact</a>
      </nav>
    </main>
    <footer>
      Mybox by Tinyhead
    </footer>`,
});

export const myboxPrivacyPage = page({
  title: 'Mybox Privacy Policy - Tinyhead',
  description: 'Privacy policy for Mybox, a local-first iOS app.',
  body: `<main>
      <h1>Mybox Privacy Policy</h1>
      <p class="meta">Last updated: August 23, 2026</p>

      <nav aria-label="Mybox pages">
        <a href="/mybox">Mybox</a>
        <a href="/mybox/terms">Terms</a>
      </nav>

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
          operation. If iOS or the App Store provides crash reports or diagnostic
          information to the developer, those reports may be used to fix bugs and
          improve reliability. These diagnostics are not used for advertising.
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
    </main>
    <footer>
      <a href="/mybox">Back to Mybox</a>
    </footer>`,
});

export const myboxTermsPage = page({
  title: 'Mybox Terms and Conditions - Tinyhead',
  description: 'Terms and conditions for Mybox.',
  body: `<main>
      <h1>Mybox Terms and Conditions</h1>
      <p class="meta">Last updated: August 23, 2026</p>

      <nav aria-label="Mybox pages">
        <a href="/mybox">Mybox</a>
        <a href="/mybox/privacy">Privacy Policy</a>
      </nav>

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
        <h2>6. No warranty</h2>
        <p>
          Mybox is provided as is. We try to keep it useful and reliable, but we do
          not guarantee that it will be uninterrupted, error-free, or suitable for
          every purpose.
        </p>
      </section>

      <section>
        <h2>7. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Tinyhead and the Mybox developer
          are not liable for indirect, incidental, special, consequential, or
          punitive damages arising from your use of the app.
        </p>
      </section>

      <section>
        <h2>8. Changes</h2>
        <p>
          These terms may be updated from time to time. Continued use of Mybox after
          an update means you accept the updated terms.
        </p>
      </section>

      <section>
        <h2>9. Contact</h2>
        <p>
          For questions about these terms, contact <a href="mailto:raj@tinyhead.space">raj@tinyhead.space</a>.
        </p>
      </section>
    </main>
    <footer>
      <a href="/mybox">Back to Mybox</a>
    </footer>`,
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

      <nav aria-label="Mybox pages">
        <a href="/">Home</a>
        <a href="/mybox">Mybox</a>
        <a href="/mybox/privacy">Privacy Policy</a>
        <a href="/mybox/terms">Terms</a>
      </nav>
    </main>
    <footer>
      Mybox by Tinyhead
    </footer>`,
});

export default landingPage;
