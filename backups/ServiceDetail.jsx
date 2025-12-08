import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Smartphone, MonitorPlay, Handshake, Sprout, Lightbulb, Rocket, Laptop, FileText, ExternalLink, TrendingUp, Award, Users, Shield, BarChart3, CheckCircle2, ArrowRight, Code2, Cpu, Database, Zap, Landmark, Scale } from 'lucide-react';
import { SEO } from '../components/SEO';
import NotFound from './NotFound';

const serviceData = {
    'advertising': {
        title: 'ADVERTISING',
        subtitle: '広告事業',
        desc: 'Closed ASP Service',
        theme: 'light', // Base theme
        content: (
            <>
                {/* Hero / Intro Section with Parallax Feel */}
                <div className="mb-40 relative isolate">
                    <div className="absolute -top-40 -left-40 w-[50rem] h-[50rem] bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl pointer-events-none mix-blend-multiply animate-pulse-slow"></div>
                    <div className="absolute top-20 -right-20 w-[40rem] h-[40rem] bg-gradient-to-bl from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl pointer-events-none mix-blend-multiply animate-pulse-slow delay-1000"></div>

                    <h3 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight tracking-tighter mb-16 relative z-10">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">
                            選ばれたパートナーだけの
                        </span>
                        <span className="block mt-4 relative inline-block">
                            完全クローズドASP。
                            <span className="absolute -bottom-2 left-0 w-full h-4 bg-cyan-200/50 -z-10 skew-x-12"></span>
                        </span>
                    </h3>

                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl relative z-10 font-medium">
                        株式会社イケメンが運営するASPは、一般公開されていない<span className="font-bold text-slate-900 bg-white/50 px-2 py-1 rounded shadow-sm">「高単価」・「高成約率」</span>の独占案件のみを取り扱う、招待制のプラットフォームです。
                        圧倒的な収益性と、専任担当者による伴走型サポートで、あなたのメディア価値を最大化します。
                    </p>
                </div>

                {/* God-Tier Bento Grid Features */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-40 auto-rows-[minmax(200px,auto)]">
                    {/* Card 1: Large - High Unit Price (Span 8) */}
                    <div className="md:col-span-8 bg-gradient-to-br from-white to-slate-50 border border-white/60 p-12 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden hover:-translate-y-1">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                            <div className="w-24 h-24 bg-white rounded-3xl shadow-lg flex items-center justify-center text-cyan-500 group-hover:scale-110 transition-transform duration-500">
                                <TrendingUp size={48} />
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-slate-800 mb-4 group-hover:text-cyan-600 transition-colors">業界最高水準の高単価</h4>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    広告主との直接提携や、独自の強力なコネクションにより、他社ASPを圧倒する報酬単価を実現。
                                    同じ獲得件数でも、収益に大きな差が生まれます。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Tall - Exclusive (Span 4, Row 2) */}
                    <div className="md:col-span-4 md:row-span-2 bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 bg-center bg-cover mix-blend-overlay"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-cyan-400/40 transition-colors"></div>

                        <div className="relative z-10">
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20 group-hover:border-cyan-400/50 transition-colors">
                                <Award size={40} className="text-cyan-400" />
                            </div>
                            <h4 className="text-3xl font-bold mb-6 leading-tight">ここだけの<br /><span className="text-cyan-400">独占案件</span></h4>
                            <p className="text-slate-300 leading-relaxed mb-8">
                                一般市場には出回らない、株式会社イケメン独自の独占案件を多数保有。
                                ブルーオーシャンな市場で、有利に収益化を進められます。
                            </p>
                        </div>
                        <div className="relative z-10 pt-8 border-t border-white/10">
                            <span className="text-xs font-bold text-cyan-400 tracking-[0.3em] uppercase">Exclusive</span>
                        </div>
                    </div>

                    {/* Card 3: Standard - Support (Span 4) */}
                    <div className="md:col-span-4 bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 p-10 rounded-[2.5rem] shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-1">
                        <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:rotate-12 transition-transform">
                            <Users size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">専任担当サポート</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            パートナー様一人ひとりに専任担当者がつき、案件選定から訴求までフルサポート。
                        </p>
                    </div>

                    {/* Card 4: Standard - Approval Rate (Span 4) */}
                    <div className="md:col-span-4 bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 p-10 rounded-[2.5rem] shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-1">
                        <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:rotate-12 transition-transform">
                            <FileText size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors">驚異的な承認率</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            「質」の高いパートナー様限定だからこそ実現できる、高い承認率（確定率）を維持。
                        </p>
                    </div>
                </div>

                {/* Enterprise Section - Split Layout with Interactive Feel */}
                <div className="mb-40">
                    <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
                        <div className="w-full lg:w-1/2">
                            <div className="inline-block px-4 py-2 bg-slate-900 text-white text-xs font-bold tracking-widest uppercase rounded-full mb-6">For Enterprise</div>
                            <h3 className="text-5xl md:text-6xl font-black text-slate-900 mb-10 leading-none">
                                企業様向け<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Closed ASP</span>
                            </h3>
                            <p className="text-xl text-slate-600 leading-relaxed mb-12 font-light">
                                当社のClosed ASPは、一般公開されていない<span className="font-bold text-slate-900 border-b-2 border-cyan-400">招待制</span>のアフィリエイトプログラムです。
                                審査を通過した質の高いパートナー様のみが参加できるため、ブランドイメージを守りながら、効果的にターゲット層へリーチできます。
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: Shield, title: "ブランドセーフティの確保", desc: "審査済みパートナーのみが掲載" },
                                    { icon: TrendingUp, title: "成果報酬型で低リスク", desc: "ROASを最大化する料金体系" },
                                    { icon: BarChart3, title: "詳細なレポーティング", desc: "リアルタイムな成果分析" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-cyan-200 hover:shadow-md transition-all group cursor-default">
                                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors">
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-slate-800 text-lg group-hover:text-cyan-700 transition-colors">{item.title}</h5>
                                            <p className="text-slate-500 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 relative perspective-1000">
                            <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-slate-100 to-white shadow-2xl border border-white relative overflow-hidden flex items-center justify-center transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700 ease-out">
                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30 bg-center"></div>
                                {/* Abstract Graphic */}
                                <div className="relative z-10 w-80 h-80">
                                    <div className="absolute inset-0 border-[3px] border-cyan-100 rounded-full animate-[spin_20s_linear_infinite]"></div>
                                    <div className="absolute inset-8 border-[3px] border-blue-100 rounded-full animate-[spin_25s_linear_infinite_reverse]"></div>
                                    <div className="absolute inset-16 border-[3px] border-indigo-100 rounded-full animate-[spin_30s_linear_infinite]"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-40 h-40 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl rotate-45 shadow-2xl flex items-center justify-center text-white z-20">
                                            <Shield size={64} />
                                        </div>
                                        <div className="absolute w-40 h-40 bg-cyan-500/30 rounded-3xl rotate-45 blur-xl animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Implementation Flow - Vertical Timeline with Glowing Path */}
                    <div className="max-w-4xl mx-auto">
                        <h4 className="text-3xl font-bold text-center mb-20 text-slate-900 tracking-tight">導入から運用までの流れ</h4>
                        <div className="relative space-y-20">
                            {/* Glowing Line */}
                            <div className="absolute left-8 top-0 bottom-0 w-1 bg-slate-100 md:left-1/2 md:-translate-x-1/2 overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-drop"></div>
                            </div>

                            {/* Step 1 */}
                            <div className="relative flex flex-col md:flex-row items-center gap-12 group">
                                <div className="md:w-1/2 md:text-right md:pr-16 order-2 md:order-1">
                                    <h5 className="text-2xl font-bold text-slate-900 mb-3">ヒアリング</h5>
                                    <p className="text-slate-600 leading-relaxed">貴社の商品・サービス、目標、ターゲット層を詳しくお伺いし、最適な戦略を立案します。</p>
                                </div>
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)] z-10 order-1 md:order-2 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                </div>
                                <div className="md:w-1/2 md:pl-16 order-3">
                                    <span className="text-8xl font-black text-slate-100 group-hover:text-cyan-50 transition-colors duration-500 block leading-none">01</span>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative flex flex-col md:flex-row items-center gap-12 group">
                                <div className="md:w-1/2 md:text-right md:pr-16 order-2 md:order-1">
                                    <span className="text-8xl font-black text-slate-100 group-hover:text-cyan-50 transition-colors duration-500 block leading-none">02</span>
                                </div>
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)] z-10 order-1 md:order-2 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                </div>
                                <div className="md:w-1/2 md:pl-16 order-3">
                                    <h5 className="text-2xl font-bold text-slate-900 mb-3">案件設計</h5>
                                    <p className="text-slate-600 leading-relaxed">最適な報酬体系とプロモーション戦略を設計し、成果最大化を目指します。</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative flex flex-col md:flex-row items-center gap-12 group">
                                <div className="md:w-1/2 md:text-right md:pr-16 order-2 md:order-1">
                                    <h5 className="text-2xl font-bold text-slate-900 mb-3">運用開始</h5>
                                    <p className="text-slate-600 leading-relaxed">厳選されたパートナーへ案件を展開し、継続的に最適化を実施します。</p>
                                </div>
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)] z-10 order-1 md:order-2 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                </div>
                                <div className="md:w-1/2 md:pl-16 order-3">
                                    <span className="text-8xl font-black text-slate-100 group-hover:text-cyan-50 transition-colors duration-500 block leading-none">03</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section - Premium Dark with Logo */}
                <div className="relative rounded-[2rem] md:rounded-[3rem] p-6 md:p-32 text-center overflow-hidden shadow-2xl group isolate">
                    {/* Backgrounds */}
                    <div className="absolute inset-0 bg-slate-950 z-0"></div>
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center bg-cover z-0"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-900/20 to-transparent z-0"></div>
                    <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

                    {/* Content */}
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-6xl font-black text-white mb-6 md:mb-10 tracking-tight leading-tight">
                            選ばれたあなたと共に、<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">次のステージへ。</span>
                        </h3>
                        <p className="text-slate-400 mb-10 md:mb-16 max-w-xl mx-auto leading-relaxed text-sm md:text-lg">
                            私たちのASPは完全審査制です。<br />
                            本気で収益化を目指すアフィリエイター様、インフルエンサー様のご参加をお待ちしております。
                        </p>

                        <div className="flex flex-col items-center gap-8 md:gap-10">
                            <a href="https://provision-asp.com/" target="_blank" rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center bg-white py-4 px-10 md:py-6 md:px-16 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-1 overflow-hidden w-full md:w-auto max-w-xs md:max-w-none">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <img src="/services/provision_logo.png" alt="Provision ASP" className="relative z-10 h-6 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute -bottom-8 text-[10px] text-cyan-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-[0.2em] font-bold">
                                    OFFICIAL SITE &rarr;
                                </div>
                            </a>

                            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-[10px] md:text-xs text-slate-500 font-bold tracking-widest uppercase">
                                <Link to="/legal" className="hover:text-cyan-400 transition-colors flex items-center justify-center gap-2">
                                    <span className="w-1 h-1 bg-cyan-500 rounded-full"></span>
                                    特定商取引法に基づく表示
                                </Link>
                                <Link to="/terms" className="hover:text-cyan-400 transition-colors flex items-center justify-center gap-2">
                                    <span className="w-1 h-1 bg-cyan-500 rounded-full"></span>
                                    販売業務請負規約
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    },
    'system-development': {
        title: 'SYSTEM',
        subtitle: 'システム開発事業',
        desc: 'System Development',
        theme: 'dark', // Cyberpunk Theme
        content: (
            <>
                {/* Cyberpunk Hero */}
                <div className="mb-32 relative text-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
                    <h3 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10 tracking-tighter">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 animate-gradient-x">
                            FUTURE OF DEV
                        </span>
                    </h3>
                    <p className="text-cyan-100/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed relative z-10 font-light tracking-wide">
                        業務効率化とコスト削減を同時に実現する、<br />
                        株式会社イケメンの<span className="text-cyan-400 font-bold">フルスクラッチ開発</span>プロダクト。
                    </p>
                </div>

                {/* Tech Stack Grid - Dark Glassmorphism */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {[
                        { icon: Code2, title: "フルスクラッチ", desc: "既製品に頼らず、ゼロから最適なシステムを構築。無駄なコストを徹底的に削減。", color: "text-cyan-400", border: "hover:border-cyan-500/50" },
                        { icon: Cpu, title: "最新AI技術", desc: "代表自身がトップ5%の実績を持つ最新AI技術を駆使し、開発速度を劇的に向上。", color: "text-purple-400", border: "hover:border-purple-500/50" },
                        { icon: Database, title: "精鋭チーム", desc: "フルスタックエンジニアが複数常駐。フロントからインフラまで一気通貫で対応。", color: "text-pink-400", border: "hover:border-pink-500/50" }
                    ].map((item, index) => (
                        <div key={index} className={`bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl group transition-all duration-500 ${item.border} hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]`}>
                            <div className={`w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                                <item.icon size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                            <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Products Showcase - Neon Cards */}
                <div className="space-y-24">
                    {/* LiteWEB+ */}
                    <div className="group relative bg-slate-900 border border-white/10 rounded-[3rem] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="flex flex-col lg:flex-row">
                            <div className="w-full lg:w-1/2 overflow-hidden relative min-h-[400px]">
                                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src="/services/litewebplus.png" alt="LiteWEB+" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                            </div>
                            <div className="w-full lg:w-1/2 p-12 flex flex-col justify-center relative z-10">
                                <div className="mb-6">
                                    <span className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-bold px-4 py-2 rounded-full tracking-widest uppercase">Web Production</span>
                                </div>
                                <h3 className="text-4xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors">LiteWEB+</h3>
                                <p className="text-sm font-bold text-slate-500 mb-8 tracking-[0.2em] uppercase">ライトウェブプラス</p>

                                <p className="text-xl font-bold text-cyan-400 mb-6">AIが実現する高品質Webサイトが初回1万円から</p>
                                <p className="text-slate-400 mb-10 leading-relaxed">
                                    AI独自アルゴリズムを活用し、高品質なWebサイトを圧倒的な低価格で提供。
                                    従来の制作プロセスを効率化することで、最短1日での納品を実現しました。
                                </p>

                                <a href="https://litewebplus.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-white font-bold hover:text-cyan-400 transition-colors group/link">
                                    <span className="border-b border-white/30 group-hover/link:border-cyan-400 pb-1">VISIT WEBSITE</span>
                                    <ExternalLink size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* TaskMateAI */}
                    <div className="group relative bg-slate-900 border border-white/10 rounded-[3rem] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="flex flex-col lg:flex-row-reverse">
                            <div className="w-full lg:w-1/2 overflow-hidden relative min-h-[400px]">
                                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src="/services/taskmate.png" alt="TaskMateAI" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                            </div>
                            <div className="w-full lg:w-1/2 p-12 flex flex-col justify-center relative z-10">
                                <div className="mb-6">
                                    <span className="bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-bold px-4 py-2 rounded-full tracking-widest uppercase">Automation</span>
                                </div>
                                <h3 className="text-4xl font-black text-white mb-2 group-hover:text-green-400 transition-colors">TaskMateAI</h3>
                                <p className="text-sm font-bold text-slate-500 mb-8 tracking-[0.2em] uppercase">タスクメイト</p>

                                <p className="text-xl font-bold text-green-400 mb-6">業務自動化で月40時間削減するGASソリューション</p>
                                <p className="text-slate-400 mb-10 leading-relaxed">
                                    スプレッドシートの手作業、メール送信、API連携などをAI×GASで完全自動化。
                                    プログラミング知識は一切不要。LINEでAIに指示するだけ。
                                </p>

                                <a href="https://taskmateai.net/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-white font-bold hover:text-green-400 transition-colors group/link">
                                    <span className="border-b border-white/30 group-hover/link:border-green-400 pb-1">VISIT WEBSITE</span>
                                    <ExternalLink size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ShortLink */}
                    <div className="group relative bg-slate-900 border border-white/10 rounded-[3rem] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="flex flex-col lg:flex-row">
                            <div className="w-full lg:w-1/2 overflow-hidden relative min-h-[400px]">
                                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src="/services/shortlink.png" alt="LinkShort" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                            </div>
                            <div className="w-full lg:w-1/2 p-12 flex flex-col justify-center relative z-10">
                                <div className="mb-6">
                                    <span className="bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 text-xs font-bold px-4 py-2 rounded-full tracking-widest uppercase">Security</span>
                                </div>
                                <h3 className="text-4xl font-black text-white mb-2 group-hover:text-indigo-400 transition-colors">LinkShort</h3>
                                <p className="text-sm font-bold text-slate-500 mb-8 tracking-[0.2em] uppercase">リンクショート</p>

                                <p className="text-xl font-bold text-indigo-400 mb-6">セキュアなリンク短縮サービス</p>
                                <p className="text-slate-400 mb-10 leading-relaxed">
                                    有効期限付きの安全な短縮URLを瞬時に作成。
                                    XSS対策、暗号化ID、レート制限など、ビジネス利用に必須のセキュリティ機能を標準搭載。
                                </p>

                                <a href="https://shortlink-a.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-white font-bold hover:text-indigo-400 transition-colors group/link">
                                    <span className="border-b border-white/30 group-hover/link:border-indigo-400 pb-1">VISIT WEBSITE</span>
                                    <ExternalLink size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    },
    'subsidy': {
        title: 'SUBSIDY',
        subtitle: '補助金申請代行事業',
        desc: 'Subsidy Support',
        theme: 'classic', // High-End Finance Theme
        content: (
            <>
                {/* Classic Trust Hero */}
                <div className="mb-32 text-center relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-slate-300"></div>
                    <div className="pt-24">
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 tracking-wide">
                            確かな実績と、<br />
                            プロフェッショナルの知見を。
                        </h3>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-loose font-serif">
                            複雑な補助金申請を、経験豊富な専門家がフルサポート。<br />
                            企業の成長を加速させる資金調達を、確実なものにします。
                        </p>
                    </div>
                </div>

                {/* Trust Cards */}
                <div className="grid md:grid-cols-2 gap-12 mb-32">
                    <div className="bg-white border-t-4 border-ikemen-gold p-12 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-shadow duration-500">
                        <div className="text-ikemen-gold mb-8"><Scale size={48} /></div>
                        <h4 className="text-2xl font-serif font-bold text-slate-900 mb-6">高い採択率の実績</h4>
                        <p className="text-slate-600 leading-loose">
                            豊富な申請実績を持つ専門家が、審査員に響く事業計画書の作成をサポート。
                            ポイントを押さえた申請で、採択の可能性を最大限に高めます。
                        </p>
                    </div>
                    <div className="bg-white border-t-4 border-slate-900 p-12 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-shadow duration-500">
                        <div className="text-slate-900 mb-8"><Handshake size={48} /></div>
                        <h4 className="text-2xl font-serif font-bold text-slate-900 mb-6">完全成果報酬も可能</h4>
                        <p className="text-slate-600 leading-loose">
                            着手金なしの完全成果報酬プランもご用意（※要審査）。
                            リスクを最小限に抑えて、補助金申請にチャレンジできます。
                        </p>
                    </div>
                </div>

                {/* Subsidy List - Sorted by Ease/Scale (Low -> High) */}
                <div className="mb-32">
                    <h4 className="text-3xl font-serif font-bold text-center mb-16 relative inline-block left-1/2 -translate-x-1/2">
                        取扱助成金・補助金一覧
                        <span className="absolute -bottom-4 left-0 w-full h-px bg-slate-200"></span>
                    </h4>

                    <div className="space-y-24">
                        {/* Category 1: Grants (Easier Entry) */}
                        <div>
                            <div className="flex items-center gap-4 mb-10">
                                <span className="w-12 h-px bg-slate-300"></span>
                                <h5 className="text-lg font-bold text-slate-500 tracking-widest uppercase">Grants & Support</h5>
                                <span className="flex-1 h-px bg-slate-300"></span>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    { name: "キャリアアップ助成金", desc: "非正規労働者の正社員化や処遇改善を支援。", link: "https://careerup-grants.netlify.app/" },
                                    { name: "業務改善助成金", desc: "生産性向上と事業場内最低賃金の引上げを支援。", link: "https://gyoumukaizen-grants.netlify.app/" },
                                    { name: "働き方改革推進支援助成金", desc: "労働時間の短縮や年休促進に向けた環境整備。", link: "https://hatarakikatakaikaku-grants.netlify.app/" },
                                    { name: "両立支援等助成金", desc: "育児・介護等と仕事の両立支援に取り組む企業へ。", link: "https://ryouritsusien-grants.netlify.app/" },
                                    { name: "人材開発支援助成金", desc: "職務に関連した知識・技能習得のための訓練費用を助成。", link: "https://jinzaikaihatsu-grants.netlify.app/" },
                                    { name: "人材確保等支援助成金", desc: "魅力ある職場づくりのための雇用管理改善を支援。", link: "https://jinzaikakuho-grants.netlify.app/" },
                                    { name: "テレワーク促進助成金", desc: "在宅勤務などテレワーク環境の整備費用を助成。", link: "https://telework-grants.netlify.app/" },
                                    { name: "65歳超雇用推進助成金", desc: "高年齢者が意欲と能力のある限り働ける環境整備。", link: "https://65sai-koyou-grants.netlify.app/" },
                                ].map((item, i) => (
                                    <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="group bg-white p-8 border border-slate-100 hover:border-ikemen-gold/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full">
                                        <div>
                                            <h6 className="font-serif font-bold text-lg text-slate-900 mb-3 group-hover:text-ikemen-gold transition-colors">{item.name}</h6>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                                        </div>
                                        <div className="flex items-center text-xs font-bold text-slate-400 group-hover:text-ikemen-gold transition-colors">
                                            DETAILS <ArrowRight size={14} className="ml-2" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Category 2: Small/Medium Subsidies */}
                        <div>
                            <div className="flex items-center gap-4 mb-10">
                                <span className="w-12 h-px bg-slate-300"></span>
                                <h5 className="text-lg font-bold text-slate-500 tracking-widest uppercase">Standard Subsidies</h5>
                                <span className="flex-1 h-px bg-slate-300"></span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                {[
                                    { name: "小規模事業者持続化補助金", cap: "最大200万円", desc: "小規模事業者の販路開拓や業務効率化の取り組みを支援。WEB制作や広告費にも活用可能。", link: "https://syoukibojigyousya-grants.netlify.app/" },
                                    { name: "IT導入補助金サポート", cap: "最大450万円", desc: "業務効率化・売上アップのためのITツール導入費用を補助。インボイス対応システム等も対象。", link: "https://it-dounyu-grants.netlify.app/" },
                                ].map((item, i) => (
                                    <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="group relative bg-slate-50 p-10 rounded-xl overflow-hidden hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
                                        <div className="absolute top-0 right-0 bg-slate-200 text-slate-600 text-[10px] font-bold px-3 py-1 rounded-bl-lg group-hover:bg-ikemen-gold group-hover:text-white transition-colors">
                                            {item.cap}
                                        </div>
                                        <h6 className="font-serif font-bold text-xl text-slate-900 mb-4 group-hover:text-ikemen-gold transition-colors">{item.name}</h6>
                                        <p className="text-slate-600 leading-relaxed mb-6">{item.desc}</p>
                                        <div className="flex items-center text-sm font-bold text-slate-400 group-hover:text-ikemen-gold transition-colors">
                                            詳細を見る <ArrowRight size={16} className="ml-2" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Category 3: Large Scale Subsidies */}
                        <div>
                            <div className="flex items-center gap-4 mb-10">
                                <span className="w-12 h-px bg-slate-300"></span>
                                <h5 className="text-lg font-bold text-slate-500 tracking-widest uppercase">Large Scale Investment</h5>
                                <span className="flex-1 h-px bg-slate-300"></span>
                            </div>
                            <div className="grid md:grid-cols-1 gap-6">
                                {[
                                    { name: "ものづくり補助金", cap: "最大4,000万円", desc: "革新的な製品・サービス開発や生産プロセス改善のための設備投資を支援。", link: "https://monodsukuri-grants.netlify.app/" },
                                    { name: "中小企業省力化投資補助金", cap: "最大8,000万円", desc: "IoT・ロボット等の導入による人手不足解消と生産性向上を支援。", link: "https://chusyokigyo-syoryokukatousi.netlify.app/" },
                                    { name: "中小企業新事業進出補助金", cap: "最大9,000万円", desc: "新分野展開や業態転換など、思い切った事業再構築に挑戦する企業を支援。", link: "https://shinjigyo-sinsyutsu-grants.netlify.app/" },
                                    { name: "中小企業成長加速化補助金", cap: "最大1億円", desc: "売上高100億円を目指す急成長企業の、大規模な投資プロジェクトを強力に後押し。", link: "https://seichou-kasokuka-grants.netlify.app/" },
                                    { name: "地域観光魅力向上事業補助金", cap: "最大1,000万円", desc: "観光資源を活用したコンテンツ開発やインバウンド対応など、地域の稼ぐ力を強化。", link: "https://tourism-grants.netlify.app/" },
                                ].map((item, i) => (
                                    <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col md:flex-row items-center gap-8 bg-white p-8 border-l-4 border-slate-200 hover:border-ikemen-gold shadow-sm hover:shadow-xl transition-all duration-300">
                                        <div className="md:w-1/3">
                                            <div className="inline-block bg-slate-100 text-slate-500 text-xs font-bold px-2 py-1 mb-2 group-hover:bg-ikemen-gold/10 group-hover:text-ikemen-gold transition-colors">
                                                補助上限: {item.cap}
                                            </div>
                                            <h6 className="font-serif font-bold text-xl text-slate-900 group-hover:text-ikemen-gold transition-colors">{item.name}</h6>
                                        </div>
                                        <div className="md:w-2/3 flex items-center justify-between gap-4">
                                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                            <ArrowRight size={20} className="text-slate-300 group-hover:text-ikemen-gold group-hover:translate-x-2 transition-all shrink-0" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Synergy Section */}
                <div className="bg-slate-900 text-white p-16 md:p-24 rounded-[2rem] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <div className="inline-block px-4 py-2 border border-ikemen-gold text-ikemen-gold text-xs font-bold tracking-widest uppercase mb-6">Synergy</div>
                            <h4 className="text-3xl md:text-4xl font-serif font-bold mb-6">システム導入との相乗効果</h4>
                            <p className="text-slate-300 leading-loose mb-8">
                                弊社のシステム開発事業と連携することで、システム導入費用を補助金で賄うことが可能です。
                                「業務効率化」と「コスト削減」を同時に実現する、賢い投資をご提案します。
                            </p>
                            <Link to="/contact" className="inline-block bg-ikemen-gold text-white px-10 py-4 font-bold tracking-widest hover:bg-white hover:text-slate-900 transition-colors duration-300">
                                ご相談はこちら
                            </Link>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <div className="w-32 h-32 md:w-64 md:h-64 border border-white/20 rounded-full flex items-center justify-center relative">
                                <div className="absolute inset-0 border border-ikemen-gold/30 rounded-full animate-ping-slow"></div>
                                <Lightbulb className="w-8 h-8 md:w-16 md:h-16 text-ikemen-gold" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
};

const ServiceDetail = () => {
    const { id } = useParams();
    const service = serviceData[id];

    if (!service) {
        return <NotFound />;
    }

    // Dynamic Background based on theme
    const bgClass = service.theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50';
    const textClass = service.theme === 'dark' ? 'text-white' : 'text-slate-900';

    return (
        <div className={`pt-24 pb-20 px-6 min-h-screen ${bgClass} transition-colors duration-700`}>
            <SEO title={service.title} description={service.desc} />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto"
            >
                <div className="mb-16">
                    <Link to="/service" className={`group inline-flex items-center ${service.theme === 'dark' ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-slate-900'} transition-colors font-medium tracking-wider text-sm`}>
                        <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">&larr;</span>
                        BACK TO LIST
                    </Link>
                </div>

                {/* Main Header */}
                <div className="mb-32 text-center">
                    <h1 className={`text-6xl md:text-9xl font-black ${textClass} mb-6 tracking-tighter uppercase opacity-10`}>
                        {service.title}
                    </h1>
                    <div className="relative -mt-12 md:-mt-20 z-10">
                        <p className={`text-2xl md:text-4xl ${service.theme === 'dark' ? 'text-cyan-400' : 'text-slate-900'} font-bold tracking-widest uppercase`}>
                            {service.subtitle}
                        </p>
                        <div className={`w-20 h-1 ${service.theme === 'dark' ? 'bg-cyan-500' : 'bg-slate-900'} mx-auto mt-6`}></div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-none">
                    {service.content}
                </div>

                {/* Footer CTA for non-advertising pages */}
                {id !== 'advertising' && (
                    <div className={`mt-32 pt-20 border-t ${service.theme === 'dark' ? 'border-white/10' : 'border-slate-200'}`}>
                        <div className={`relative overflow-hidden p-16 md:p-24 rounded-[3rem] text-center ${service.theme === 'dark' ? 'bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10' : 'bg-white shadow-2xl'}`}>
                            <h3 className={`text-4xl font-bold ${textClass} mb-6`}>INTERESTED?</h3>
                            <p className={`${service.theme === 'dark' ? 'text-slate-400' : 'text-slate-500'} mb-12 text-lg`}>本事業に関するご相談・ご依頼は、お気軽にお問い合わせください。</p>
                            <Link to="/contact" className={`inline-block px-16 py-5 ${service.theme === 'dark' ? 'bg-cyan-500 text-slate-900 hover:bg-white' : 'bg-slate-900 text-white hover:bg-cyan-600'} font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl tracking-widest transform hover:-translate-y-1`}>
                                CONTACT US
                            </Link>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default ServiceDetail;
