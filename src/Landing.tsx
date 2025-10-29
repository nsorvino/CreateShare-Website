export default function Landing() {
  return (
    <div className="flex flex-col bg-brand-blue text-brand-cream font-garamond">
      {/* MAIN — fills the screen so the footer is below the fold */}
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center w-full max-w-md">
          {/* Logo — match footer style */}
          <div className="mx-auto mb-6 inline-flex items-center justify-center group">
            <span className="p-1 rounded-2xl bg-gradient-to-br from-brand-cream/20 via-transparent to-brand-cream/10">
              <img
                src="/logo_dark_blue.png"
                alt="Amphitheater logo"
                className="block w-24 h-24 rounded-xl object-cover ring-brand-cream/25 shadow-lg"
              />
            </span>
          </div>


          {/* Company name */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            amphitheater
          </h1>
          <p className="mt-2 text-sm text-brand-cream/85">
            ...connecting creative minds.
          </p>

          {/* Store badges */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            {/* App Store */}
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-xl bg-brand-black text-brand-white px-5 py-3 shadow ring-1 ring-brand-cream/20 hover:ring-brand-cream/50 transition"
              aria-label="Download on the App Store"
            >
              {/* Apple logo */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-5 w-5" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-.3-36.7 16.3-64.4 49.7-84.7-18.7-27.3-45.6-42.3-80.5-45-33.8-2.6-70.8 19.8-83.9 19.8-13.5 0-44.5-19.2-68.9-19-35.4.5-67.8 20.6-85.9 52.3-36.6 63.5-9.3 156.7 26.2 208.1 17.3 25 37.9 53 65.1 52 26-1 35.8-16.7 67-16.7 30.9 0 39.8 16.7 67.2 16.2 27.9-.5 45.6-25.1 62.7-50.2 19.7-28.8 27.9-56.6 28.2-58.1-.6-.3-54.1-20.8-54.2-74.7zM262.5 96.1c18-21.8 30.2-52.3 26.9-83.1-26.1 1-57.6 17.4-76.1 39.3-16.7 19.3-31.2 50.4-27.3 80.2 29.2 2.2 58.7-14.8 76.5-36.4z"
                />
              </svg>
              <div className="text-left leading-tight">
                <div className="text-[10px] uppercase tracking-wider text-brand-cream/70">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>

            {/* Google Play */}
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-xl bg-brand-black text-brand-white px-5 py-3 shadow ring-1 ring-brand-cream/20 hover:ring-brand-cream/50 transition"
              aria-label="Get it on Google Play"
            >
              {/* Google Play triangle */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-5 w-5" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M325.3 234.3 104.6 13.6C95.7 4.7 79.1 9.6 79.1 23.2v465.7c0 13.6 16.6 18.5 25.5 9.6l220.7-220.7c12.5-12.5 12.5-32.8 0-45.3zm32.3-19.6 74.4-41.8c17.2-9.6 17.2-35.9 0-45.5L377.6 85.6c-4.2-2.4-9.2 1.2-9.2 5.9v115c0 4.7 5.1 8.2 9.2 5.8zm0 82.6v115c0 4.7 5 8.3 9.2 5.9l54.4-31.9c17.2-9.6 17.2-35.9 0-45.5l-74.4-41.8c-4.1-2.4-9.2 1.1-9.2 5.8z"
                />
              </svg>
              <div className="text-left leading-tight">
                <div className="text-[10px] uppercase tracking-wider text-brand-cream/70">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </main>

      {/* FOOTER — appears only after scrolling */}
      <footer className="bg-brand-black text-brand-cream">
        <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand / blurb */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <a
              href="/"
              aria-label="Home"
              className="inline-flex items-center gap-3 group"
            >
              {/* Logo with soft glow + ring */}
              <span className="p-0.5 rounded-2xl bg-gradient-to-br from-brand-cream/20 via-transparent to-brand-cream/10">
                <img
                  src="/logo-footer.jpg"
                  alt="Amphitheater logo"
                  className="h-12 w-12 rounded-xl object-cover ring-1 ring-brand-cream/25 shadow-lg transition-transform duration-200 group-hover:scale-[1.03]"
                />
              </span>

              {/* Wordmark (hidden on xs to keep it tidy) */}
              <span className="hidden sm:block text-lg font-semibold tracking-tight">
                amphitheater
              </span>
            </a>

            {/* Optional one-liner blurb */}
            <p className="mt-3 text-xs text-brand-cream/70 leading-relaxed">
              where creativity meets.
            </p>

            {/* Hairline divider */}
            <div className="mt-4 h-px bg-gradient-to-r from-brand-cream/0 via-brand-cream/20 to-brand-cream/0" />

            {/* Legal line */}
            <div className="mt-3 text-[11px] text-brand-cream/60">
              © {new Date().getFullYear()} amphitheater. all rights reserved.
            </div>
          </div>

          {/* Social */}
          <nav aria-label="Social" className="text-sm">
            <h5 className="font-semibold mb-3">Social</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="inline-flex items-center gap-2 hover:text-brand-cream/70">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.53 3h3.2l-7 8.01L22 21h-6.9l-4.52-5.64L4.6 21H1.4l7.51-8.6L2 3h7l4.08 5.19L17.53 3Zm-1.21 16h1.77L7.8 5h-1.8l10.32 14Z"/></svg>
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 hover:text-brand-cream/70">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5V21H3.5V8.5h3.44ZM5.22 3a2.03 2.03 0 1 1 0 4.06 2.03 2.03 0 0 1 0-4.06ZM21 13.26V21h-3.43v-6.9c0-1.64-.59-2.76-2.06-2.76-1.12 0-1.78.75-2.07 1.47-.11.27-.14.65-.14 1.03V21H9.86s.05-11.78 0-12.5h3.44v1.77c.46-.71 1.29-1.72 3.15-1.72 2.3 0 4.55 1.5 4.55 4.71Z"/></svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 hover:text-brand-cream/70">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a4.49 4.49 0 0 0-3.16-3.17C18.56 2.5 12 2.5 12 2.5s-6.56 0-8.34.53A4.49 4.49 0 0 0 .5 6.2 47.8 47.8 0 0 0 0 12a47.8 47.8 0 0 0 .5 5.8 4.49 4.49 0 0 0 3.16 3.17C5.44 21.5 12 21.5 12 21.5s6.56 0 8.34-.53a4.49 4.49 0 0 0 3.16-3.17c.33-1.88.5-3.79.5-5.8s-.17-3.92-.5-5.8ZM9.75 15.5v-7l6.25 3.5-6.25 3.5Z"/></svg>
                  YouTube
                </a>
              </li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company" className="text-sm">
            <h5 className="font-semibold mb-3">Company</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-brand-cream/70">About</a></li>
              <li><a href="#" className="hover:text-brand-cream/70">Careers</a></li>
              <li><a href="#" className="hover:text-brand-cream/70">Press</a></li>
              <li><a href="#" className="hover:text-brand-cream/70">Contact</a></li>
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal" className="text-sm">
            <h5 className="font-semibold mb-3">Legal</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-brand-cream/70">Terms</a></li>
              <li><a href="#" className="hover:text-brand-cream/70">Privacy</a></li>
              <li><a href="#" className="hover:text-brand-cream/70">Security</a></li>
              <li><a href="#" className="hover:text-brand-cream/70">Cookies</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
