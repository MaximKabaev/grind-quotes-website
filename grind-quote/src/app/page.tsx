import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/support">Support</Link>
      </nav>

      <main className="content">
        <h1>Grind Quotes</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Daily motivation from Alex Hormozi, right on your iPhone home screen.
        </p>

        <p>
          Get inspired every time you check your phone with powerful quotes from Alex Hormozi&apos;s tweets. 
          Our iOS widget brings his best insights directly to your home screen.
        </p>

        <h3>Features</h3>
        <ul>
          <li>Beautiful iOS home screen widgets</li>
          <li>Curated quotes from Alex Hormozi</li>
          <li>Multiple widget sizes to fit your style</li>
          <li>No account required</li>
          <li>Works completely offline</li>
        </ul>

        <p style={{ marginTop: '2rem', fontSize: '1.1rem' }}>
          <strong>More inspiring personalities coming soon!</strong>
        </p>
      </main>

      <footer className="footer">
        <p>© 2025 Grind Quotes. All rights reserved.</p>
      </footer>
    </div>
  );
}
