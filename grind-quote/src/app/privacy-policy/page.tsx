import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="container">
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/support">Support</Link>
      </nav>

      <main className="content">
        <h1>Privacy Policy for HormoziDaily</h1>
        <p><strong>Last Updated: November 9, 2025</strong></p>

        <h2>Introduction</h2>
        <p>
          Grind Quotes (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
          This Privacy Policy explains how our iOS application collects, uses, and safeguards your information.
        </p>

        <h2>Information We Collect</h2>
        <h3>Data Collected Automatically</h3>
        <p>
          Our app does not collect, store, or transmit any personal information from your device. 
          The app operates entirely offline and does not require an internet connection to display quotes in widgets.
        </p>

        <h3>Data Not Collected</h3>
        <p>We do not collect:</p>
        <ul>
          <li>Personal identification information (name, email, phone number)</li>
          <li>Device identifiers or advertising IDs</li>
          <li>Location data</li>
          <li>Usage data or analytics</li>
          <li>Payment information</li>
          <li>Photos, contacts, or other personal content</li>
        </ul>

        <h2>How We Use Information</h2>
        <p>
          Since our app does not collect any personal data, we do not use, process, or share any information about you.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Our app does not integrate with any third-party services, analytics platforms, or advertising networks. 
          No data is shared with third parties.
        </p>

        <h2>Data Storage and Security</h2>
        <p>
          All quote content is stored locally on your device. No data is transmitted to external servers. 
          The app functions entirely offline after initial installation.
        </p>

        <h2>Data Retention and Deletion</h2>
        <p>
          Since we do not collect any personal data, there is no data to retain or delete. 
          If you wish to remove all app data, simply delete the app from your device.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Our app does not knowingly collect information from children under 13. 
          Since no data is collected from any users, the app is safe for all ages.
        </p>

        <h2>Your Rights</h2>
        <p>
          As we do not collect any personal data, there is no personal information to access, modify, or delete. 
          You have complete control over the app by managing it through your iOS device settings.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted within the app and on our App Store listing. 
          The &quot;Last Updated&quot; date at the top will reflect when changes were made.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at:{" "}
          <a href="mailto:mkabaevuk@gmail.com">mkabaevuk@gmail.com</a>
        </p>
        <p>
          <strong>Maxim Kabaev</strong>
        </p>

        <h2>Compliance</h2>
        <p>This Privacy Policy complies with:</p>
        <ul>
          <li>Apple App Store Review Guidelines</li>
          <li>General Data Protection Regulation (GDPR)</li>
          <li>California Consumer Privacy Act (CCPA)</li>
          <li>Other applicable data protection laws</li>
        </ul>
      </main>

      <footer className="footer">
        <p>© 2025 Grind Quotes. All rights reserved.</p>
      </footer>
    </div>
  );
}
