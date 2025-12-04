export default function Footer() {
  return (
    <footer className="w-full bg-[#05050A] pt-20 pb-12 text-white relative">

      {/* TOP GRID */}
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-14">

        {/* COLUMN 1 — Logo + Text */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-xl bg-white">
              <img
                src="/logo.jpg"
                className="w-12 h-12 object-contain"
                alt="WebX AI Logo"
              />
            </div>

            <h1 className="text-3xl font-bold">
              WebX{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                AI
              </span>
            </h1>
          </div>

          <p className="text-soft text-[15px] leading-relaxed max-w-xs mb-6">
            Engineering intelligent digital systems with precision, speed and futuristic design thinking.
          </p>

          {/* SOCIAL ICONS — INLINE SVG */}
          <div className="flex items-center gap-4">

            {/* Twitter */}
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.18 4.18 0 001.82-2.31 8.36 8.36 0 01-2.64 1.02A4.15 4.15 0 0015.5 4c-2.3 0-4.16 1.86-4.16 4.16 0 .33.04.65.1.96A11.78 11.78 0 013 5.16a4.14 4.14 0 001.29 5.55 4.1 4.1 0 01-1.88-.52v.05c0 2.02 1.44 3.7 3.35 4.08a4.23 4.23 0 01-1.88.07 4.17 4.17 0 003.89 2.9A8.35 8.35 0 012 19.54 11.78 11.78 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68l-.01-.53A8.1 8.1 0 0022.46 6z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm4.75-.88a1.12 1.12 0 11-2.24 0 1.12 1.12 0 012.24 0z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
                <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.01 2.5 2.5 0 01.01-5.01zM3 9h4v12H3zM15.5 9c-2.33 0-3.5 1.17-4 2v-2H7v12h4v-6.5c0-1.5.5-3 2.5-3 2 0 2 1.67 2 3.25V21h4v-6.75C19.5 10.67 17.5 9 15.5 9z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.43 7.86 10.96.58.1.79-.25.79-.56v-1.96c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.07-.74.08-.73.08-.73 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.75 1.28 3.42.98.1-.76.41-1.28.74-1.57-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.28 1.2-3.08-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18A11.1 11.1 0 0112 6.8c.99.01 1.99.13 2.92.39 2.22-1.49 3.19-1.18 3.19-1.18.63 1.59.23 2.76.11 3.05.75.8 1.2 1.82 1.2 3.08 0 4.43-2.69 5.4-5.25 5.68.42.36.79 1.09.79 2.21v3.28c0 .31.21.67.8.56A10.99 10.99 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/>
              </svg>
            </a>

          </div>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-soft text-[15px]">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-3 text-soft text-[15px]">
            <li>Web Development</li>
            <li>App Development</li>
            <li>AI Development</li>
            <li>Data Analytics</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-3 text-soft text-[15px]">
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Process</li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-full h-px bg-white/10 mt-16 mb-8" />

      {/* BOTTOM AREA */}
      <div className="max-w-[1300px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-soft text-sm gap-4">
        <p>© 2025 WebX AI. All rights reserved.</p>

        <div className="flex gap-6">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
