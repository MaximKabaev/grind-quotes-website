import Link from "next/link";

export default function Support() {
  return (
    <div className="container">
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/support">Support</Link>
      </nav>

      <main className="content">
        <h1>Support</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Need help? We&apos;re here for you.
        </p>

        <h2>Contact Information</h2>
        <p>
          For any questions, feedback, or support requests, please reach out to:
        </p>

        <div style={{ 
          marginTop: '2rem', 
          padding: '2rem', 
          background: '#111', 
          borderRadius: '8px',
          border: '1px solid #333'
        }}>
          <p style={{ marginBottom: '0.5rem' }}>
            <strong>Email:</strong>{" "}
            <a href="mailto:mkabaevuk@gmail.com">mkabaevuk@gmail.com</a>
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Developer:</strong> Maxim Kabaev
          </p>
        </div>

        <h2>Response Time</h2>
        <p>
          We typically respond to all inquiries within 24-48 hours. 
          Please include as much detail as possible when contacting us to help us assist you better.
        </p>

        <h2>Common Questions</h2>
        <h3>How do I add the widget to my home screen?</h3>
        <p>
          Long press on your home screen, tap the + button in the top left corner, 
          search for &quot;Grind Quotes&quot;, and select your preferred widget size.
        </p>

        <h3>Does the app require an internet connection?</h3>
        <p>
          No, the app works completely offline. All quotes are stored locally on your device.
        </p>

        <h3>How do I change the quote displayed?</h3>
        <p>
          The widget automatically refreshes with new quotes throughout the day. 
          You can also open the app to manually refresh the quote.
        </p>
      </main>

      <footer className="footer">
        <p>© 2025 Grind Quotes. All rights reserved.</p>
      </footer>
    </div>
  );
}
