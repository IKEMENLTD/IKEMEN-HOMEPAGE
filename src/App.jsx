import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CheckCircle2, Sparkles } from 'lucide-react'
import { Scene } from './lib/ikemen-3d/Scene'
import { FloatyMesh } from './lib/ikemen-3d/FloatyMesh'
import { ParticleField } from './lib/ikemen-3d/ParticleField'
import { CustomCursor } from './components/CustomCursor'
import { ScrollProgress } from './components/ScrollProgress'
import { TechMarquee } from './components/TechMarquee'
import { SideInterface } from './components/SideInterface'
import { SystemWidget } from './components/SystemWidget'
import { OpeningLines } from './lib/ikemen-3d/OpeningLines'
import { MagneticButton } from './components/MagneticButton'
import { HeroSpotlight } from './components/HeroSpotlight'
import { HudOverlay } from './components/HudOverlay'
import { Works } from './components/Works'
import { FAQ } from './components/FAQ'
import { SEO } from './components/SEO'
import { TextScramble } from './components/TextScramble'

// ... (imports)

// ... (inside App component)


import { motion, AnimatePresence } from 'framer-motion'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Recruit from './pages/Recruit'
import ServiceDetail from './pages/ServiceDetail'
import News from './pages/News'
import Legal from './pages/Legal'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

// ...



const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = () => (
  <>
    <SEO />
    {/* Hero Content */}
    <section className="w-full h-screen flex flex-col items-center justify-center p-8 relative z-10 overflow-hidden">
      {/* Vignette & Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)] pointer-events-none z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-white/80 pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] bg-center bg-fixed pointer-events-none z-0"></div>
      <HeroSpotlight />

      <div className="text-center pointer-events-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 5.5, ease: "easeOut" }}
          className="mb-12 flex justify-center"
        >
          <img src="/logo.png" alt="IKEMEN Co., Ltd." className="h-12 md:h-24 w-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]" />
        </motion.div>

        <div className="text-slate-600 text-[10px] sm:text-sm md:text-xl max-w-3xl mx-auto leading-relaxed mb-24 tracking-widest md:tracking-[0.2em] font-medium font-sans whitespace-nowrap overflow-visible">
          <TextScramble
            text="Continuing to redefine 'cool' in the world."
            duration={3000}
            delay={7000}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 7.5 }}
          className="flex flex-col md:flex-row gap-8 justify-center items-center"
        >
          <MagneticButton>
            <Link to="/service" className="group relative block w-64 py-5 bg-ikemen-text/80 backdrop-blur-sm text-white overflow-hidden rounded-full font-bold tracking-widest text-sm shadow-[0_10px_30px_rgba(30,41,59,0.3)] hover:shadow-[0_10px_40px_rgba(6,182,212,0.4)] transition-all duration-500 hover:-translate-y-1">
              <span className="relative z-10 group-hover:text-ikemen-gold transition-colors duration-300">SERVICE</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"></div>
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link to="/contact" className="group relative block w-64 py-5 bg-white/80 backdrop-blur-md text-ikemen-text border border-gray-200 overflow-hidden rounded-full font-bold tracking-widest text-sm shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_rgba(6,182,212,0.2)] transition-all duration-500 hover:-translate-y-1">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">CONTACT</span>
              <div className="absolute inset-0 bg-gradient-to-r from-ikemen-gold to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"></div>
            </Link>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 8, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] tracking-[0.3em] text-gray-400 font-mono">SCROLL</span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-ikemen-gold/50 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-ikemen-gold animate-slide-down shadow-[0_0_10px_#06b6d4]"></div>
        </div>
      </motion.div>
    </section>

    {/* Mission Section */}
    <section className="w-full py-40 bg-white/60 backdrop-blur-md relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-center bg-fixed pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -top-20 -left-20 text-[12rem] font-black text-gray-100/50 select-none -z-10 font-sans">PHILOSOPHY</div>

          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-ikemen-text mb-6 tracking-widest">PHILOSOPHY</h2>
            <div className="w-px h-20 bg-ikemen-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-ikemen-text/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src="/philosophy.png" alt="Philosophy" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>

            <div className="space-y-12">
              <h3 className="text-2xl md:text-4xl font-serif leading-relaxed text-ikemen-text">
                「イケメン」<br />
                <span className="text-lg md:text-2xl text-gray-500 mt-4 block">
                  我々はこの言葉を個人だけに当てず、<br />
                  世の中を測るものさしとして使います。
                </span>
              </h3>

              <div className="space-y-8">
                <p className="font-serif text-gray-600 leading-loose">
                  弊社は、<span className="text-ikemen-text font-bold border-b border-ikemen-gold">"世の中のカッコイイを再定義し続ける"</span>のスローガンを元に、世にあるモノ、仕組み、サービス、情報のカッコよさを再定義していきます。
                </p>

                <ul className="space-y-6">
                  {[
                    "本当に必要なモノなのか？",
                    "あの仕組みは本当に素敵な仕組みなのか？",
                    "このサービスは本当にイイものなのか？"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-4 group border-b border-gray-200 pb-4">
                      <span className="text-ikemen-gold font-mono text-sm">0{index + 1}</span>
                      <span className="text-lg text-gray-600 font-serif group-hover:text-ikemen-text transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link to="/about" className="inline-flex items-center gap-2 text-ikemen-text font-bold tracking-widest hover:gap-4 transition-all group">
                  VIEW MORE <span className="text-ikemen-gold group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* News Section */}
    <section className="w-full py-32 bg-white/40 backdrop-blur-sm flex flex-col items-center border-t border-gray-100/50 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-center bg-fixed pointer-events-none"></div>
      <div className="absolute -top-10 -right-10 text-[15rem] font-black text-gray-100/30 select-none -z-10 font-sans tracking-tighter leading-none">NEWS</div>

      <div className="max-w-5xl w-full px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-6">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-ikemen-text tracking-widest">NEWS</h2>
          <Link to="/news" className="text-sm font-bold text-ikemen-gold tracking-widest hover:text-ikemen-text transition-colors mt-4 md:mt-0">VIEW ALL &rarr;</Link>
        </div>

        <div className="space-y-4">
          {[
            { date: '2025.12.08', category: 'RELEASE', title: '自社プロダクト「SEO TURBO」をリリースしました', url: 'https://seoturbo.org/' },
            { date: '2025.10.01', category: 'RELEASE', title: '自社プロダクト「TaskMate AI」をリリースしました', url: 'https://taskmateai.net/' },
            { date: '2025.05.22', category: 'RELEASE', title: '自社プロダクト「LiteWEB+」をリリースしました', url: 'https://litewebplus.com/' },
          ].map((news, i) => (
            <a key={i} href={news.url} target="_blank" rel="noopener noreferrer" className="group block relative">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 hover:bg-white/50 rounded-xl transition-colors duration-300">
                <div className="flex items-center gap-4 min-w-[140px]">
                  <span className="text-xs text-cyan-600 border border-cyan-600 px-3 py-1 font-medium rounded-full tracking-wider group-hover:bg-cyan-600 group-hover:text-white transition-colors">{news.category}</span>
                  <span className="text-gray-400 text-sm font-mono tracking-wider">{news.date}</span>
                </div>
                <p className="text-lg text-gray-700 font-serif group-hover:text-ikemen-text transition-colors flex-1 leading-relaxed">
                  {news.title}
                </p>
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-ikemen-text transition-colors">
                  <span className="text-gray-400 text-sm group-hover:text-ikemen-text transition-colors">&rarr;</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Services Section */}
    <section className="w-full py-40 bg-white/60 backdrop-blur-md relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-center bg-fixed pointer-events-none"></div>
      <div className="absolute top-40 -left-20 text-[20rem] font-black text-gray-100/40 select-none -z-10 font-sans tracking-tighter leading-none">SERVICE</div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-ikemen-text mb-6 tracking-widest">SERVICE</h2>
          <p className="text-ikemen-gold font-mono tracking-[0.5em] text-sm uppercase">Business Activities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: '広告事業', en: 'Advertising', id: 'advertising', desc: 'Web広告運用 / SNSマーケティング' },
            { name: 'システム開発事業', en: 'System Development', id: 'system-development', desc: 'Webシステム開発 / アプリ開発' },
            { name: '補助金申請代行事業', en: 'Subsidy Support', id: 'subsidy', desc: 'IT導入補助金 / 小規模事業者持続化補助金' }
          ].map((service, i) => (
            <Link to={`/service/${service.id}`} key={i} className="group relative bg-white/40 backdrop-blur-sm border border-gray-100 p-10 h-80 flex flex-col justify-between hover:border-ikemen-gold/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-2 rounded-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-full -mr-20 -mt-20 transition-transform group-hover:scale-150 duration-700"></div>

              <div className="relative z-10">
                <span className="text-6xl font-serif text-gray-100 group-hover:text-ikemen-gold/10 transition-colors duration-500">0{i + 1}</span>
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-2xl font-serif font-medium text-ikemen-text group-hover:text-ikemen-gold transition-colors mb-2">{service.name}</h3>
                <p className="text-xs font-mono text-gray-400 tracking-widest uppercase mb-4">{service.en}</p>
                <p className="text-sm text-gray-500 font-serif">{service.desc}</p>

                <div className="w-full h-px bg-gray-200 mt-8 group-hover:bg-ikemen-gold transition-colors duration-500 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-ikemen-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-24">
          <Link to="/service" className="inline-block px-12 py-4 border border-gray-300 text-ikemen-text/80 font-bold rounded-full hover:border-ikemen-text hover:bg-ikemen-text/80 hover:text-white transition-all duration-300 tracking-widest text-sm">
            VIEW ALL SERVICES
          </Link>
        </div>
      </div>
    </section>

    <Works />

    {/* Contact Section */}
    <section className="w-full py-40 px-6 relative z-10 bg-white/40 backdrop-blur-md overflow-hidden border-t border-gray-100">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-center bg-fixed pointer-events-none"></div>
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[15rem] font-serif font-black text-gray-100/50 select-none -z-10 whitespace-nowrap">CONTACT</div>

        <h2 className="text-4xl md:text-6xl font-serif font-medium text-ikemen-text mb-12 tracking-tight">
          CONTACT
        </h2>
        <p className="text-gray-500 mb-16 leading-loose font-serif text-lg">
          お仕事のご依頼、ご相談など、お気軽にお問い合わせください。<br />
          私たちと共に、新しい価値を創造しましょう。
        </p>
        <Link to="/contact" className="group relative inline-flex items-center justify-center px-16 py-6 overflow-hidden font-bold text-white rounded-full bg-ikemen-text/80 backdrop-blur-sm shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-ikemen-text to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
          <span className="relative flex items-center gap-3 tracking-widest">
            <span>CONTACT US</span>
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </span>
        </Link>
      </div>
    </section>

  </>
)



// ... (existing imports)

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showOpening, setShowOpening] = useState(true);
  const [openingPhase, setOpeningPhase] = useState(0); // 0: Start, 1: Text 1, 2: Text 2, 3: Fade Out

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "株式会社イケメン",
    "url": "https://ikemen.ltd",
    "logo": "https://ikemen.ltd/logo.png",
    "sameAs": [
      "https://twitter.com/ikemen_ltd",
      "https://www.instagram.com/ikemen_ltd"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+81-3-0000-0000",
      "contactType": "customer service"
    }
  };

  useEffect(() => {
    if (showOpening) {
      // Sequence logic
      const timer1 = setTimeout(() => setOpeningPhase(1), 500); // Start "IKEMEN"
      const timer2 = setTimeout(() => setOpeningPhase(2), 2500); // Start "Redefining"
      const timer3 = setTimeout(() => setOpeningPhase(3), 4500); // Start Fade Out
      const timer4 = setTimeout(() => setShowOpening(false), 5500); // Remove Overlay

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }
  }, [showOpening]);

  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <ScrollProgress />
      <SideInterface />
      <SystemWidget />
      <HudOverlay />
      <div className="bg-white min-h-screen relative overflow-hidden font-sans selection:bg-ikemen-gold selection:text-white">
        <SEO
          title="Home"
          description="株式会社イケメンは、世の中の「カッコイイ」を再定義し続けるクリエイティブカンパニーです。WEB制作、システム開発、マーケティング支援を通じて、クライアントの価値を最大化します。"
          keywords="株式会社イケメン,WEB制作,システム開発,営業代行,マーケティング,デザイン,東京"
          jsonLd={jsonLd}
        />


        {/* Opening Overlay */}
        <AnimatePresence>
          {showOpening && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center overflow-hidden"
            >
              {/* 3D Lines Background for Opening */}
              <div className="absolute inset-0 z-0">
                <Scene>
                  <OpeningLines />
                </Scene>
              </div>

              <div className="text-center relative z-10">
                {openingPhase >= 1 && (
                  <div className="mb-4">
                    <img src="/logo.png" alt="IKEMEN Co., Ltd." className="h-12 md:h-16 w-auto mx-auto" />
                  </div>
                )}
                {openingPhase >= 2 && (
                  <div>
                    <TextScramble
                      text="REDEFINING COOL"
                      className="text-xl md:text-6xl font-black text-cyan-500 tracking-tighter font-mono"
                    />
                  </div>
                )}
              </div>

              {/* Loading Bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 4, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-full h-1 bg-cyan-500"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3D Background Layer */}
        <div className="fixed inset-0 z-[1] pointer-events-none">
          <Scene>
            <ParticleField count={5000} color="#06b6d4" />
          </Scene>
        </div>

        {/* Navigation - Hidden during opening */}
        {!showOpening && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="fixed top-0 left-0 w-full z-50 p-3 md:p-6 flex justify-between items-center bg-white/80 backdrop-blur-md shadow-sm"
          >
            <Link to="/" className="z-50 relative">
              <img src="/logo.png" alt="IKEMEN Co., Ltd." className="h-5 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 text-sm font-medium tracking-wider text-gray-600">
              {[
                { name: 'HOME', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Service', path: '/service' },
                { name: 'News', path: '/news' },
                { name: 'Contact', path: '/contact' },
                { name: 'Recruit', path: '/recruit' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="cursor-pointer hover:text-ikemen-gold transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-[70] relative w-10 h-10 flex flex-col justify-center items-center gap-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-8 h-0.5 bg-ikemen-text block transition-transform"
              ></motion.span>
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-8 h-0.5 bg-ikemen-text block transition-opacity"
              ></motion.span>
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-8 h-0.5 bg-ikemen-text block transition-transform"
              ></motion.span>
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="fixed inset-0 bg-white z-[60] flex flex-col justify-center items-center w-screen h-screen overflow-hidden"
                >
                  {/* Background Decoration */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden opacity-[0.03]">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150vw] font-black text-black leading-none whitespace-nowrap rotate-90 md:rotate-0">
                      IKEMEN
                    </span>
                  </div>

                  <motion.ul
                    className="relative z-10 flex flex-col gap-8 text-center"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                      hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                    }}
                  >
                    {[
                      { name: 'HOME', jp: 'ホーム', path: '/' },
                      { name: 'About Us', jp: '私たちについて', path: '/about' },
                      { name: 'Service', jp: '事業内容', path: '/service' },
                      { name: 'News', jp: 'ニュース', path: '/news' },
                      { name: 'Contact', jp: 'お問い合わせ', path: '/contact' },
                      { name: 'Recruit', jp: '採用情報', path: '/recruit' }
                    ].map((item) => (
                      <motion.li
                        key={item.name}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                        }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="group block"
                        >
                          <span className="block text-4xl md:text-5xl font-serif font-medium text-ikemen-text group-hover:text-ikemen-gold transition-colors duration-500">
                            {item.name}
                          </span>
                          <span className="block text-xs font-mono text-gray-400 mt-2 tracking-widest uppercase group-hover:text-ikemen-gold/70 transition-colors duration-500">
                            {item.jp}
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Footer Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="absolute bottom-10 left-0 w-full text-center"
                  >
                    <p className="text-[10px] text-gray-300 font-mono tracking-[0.3em]">© IKEMEN Co., Ltd.</p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        )}

        {/* UI Overlay Layer */}
        <main className="relative z-10 w-full flex flex-col pt-20">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={
                <>
                  <Home />
                  <TechMarquee /> {/* Placed below the Hero section, which is part of Home */}
                </>
              } />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/service/:id" element={<ServiceDetail />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/recruit" element={<Recruit />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>

          {/* Footer */}
          <footer className="w-full py-10 bg-white text-center border-t border-gray-200 mt-auto">
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 text-[10px] md:text-xs text-gray-500 px-4">
              <Link to="/legal" className="hover:text-ikemen-gold transition-colors whitespace-nowrap">特定商取引法に基づく表示</Link>
              <Link to="/privacy" className="hover:text-ikemen-gold transition-colors whitespace-nowrap">プライバシーポリシー</Link>
              <Link to="/terms" className="hover:text-ikemen-gold transition-colors whitespace-nowrap">販売業務請負規約</Link>
            </div>
            <p className="text-xs text-gray-400 tracking-widest">© Ikemen Co., Ltd. All Rights Reserved.</p>
          </footer>

        </main>
      </div>
    </Router>
  )
}

export default App
