import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const worksData = [
    {
        id: 1,
        category: 'WEB PRODUCTION',
        title: 'Corporate Renewal',
        client: 'TechStart Inc.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
        desc: 'AIを活用したコーポレートサイトのリニューアル。',
        year: '2024'
    },
    {
        id: 2,
        category: 'SALES CONSULTING',
        title: 'Sales Process Optimization',
        client: 'Global Trade Co.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2370&auto=format&fit=crop',
        desc: '営業プロセスの可視化とKPI設計による成約率150%アップ。',
        year: '2023'
    },
    {
        id: 3,
        category: 'SYSTEM DEVELOPMENT',
        title: 'DX Implementation',
        client: 'Future Logistics',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2370&auto=format&fit=crop',
        desc: '勤怠管理・会計システムの導入による業務効率化。',
        year: '2023'
    },
    {
        id: 4,
        category: 'ADVERTISING',
        title: 'CRM Affiliate Optimization',
        client: 'Beauty Brand X',
        image: '/crm_affiliate_concept.png',
        desc: 'ハウスリストを活用し、月間のクレカアフィリエイト獲得件数400件を達成。',
        year: '2024'
    }
];

export const Works = () => {
    return (
        <section className="w-full py-40 bg-white/60 backdrop-blur-md relative z-10 overflow-hidden border-t border-gray-100">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-center bg-fixed pointer-events-none"></div>
            <div className="absolute top-20 right-0 text-[15rem] font-black text-gray-100/40 select-none -z-10 font-sans tracking-tighter leading-none">WORKS</div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-serif font-medium text-ikemen-text mb-6 tracking-widest">WORKS</h2>
                        <p className="text-ikemen-gold font-mono tracking-[0.5em] text-sm uppercase">Case Studies</p>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-gray-400 font-serif text-sm text-right leading-relaxed">
                            私たちの実績の一部をご紹介します。<br />
                            クライアントの課題解決に真摯に向き合った成果です。
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                    {worksData.map((work, index) => (
                        <motion.div
                            key={work.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className={`group cursor-pointer ${index % 2 === 1 ? 'md:mt-20' : ''}`}
                        >
                            <div className="relative overflow-hidden aspect-[4/3] mb-8">
                                <div className="absolute inset-0 bg-ikemen-text/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                                />
                                <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-ikemen-gold hover:text-white">
                                    <ArrowUpRight size={24} />
                                </div>
                            </div>

                            <div className="relative">
                                <div className="flex items-baseline gap-4 mb-3">
                                    <span className="text-xs font-mono text-ikemen-gold tracking-widest">{work.category}</span>
                                    <span className="text-xs font-mono text-gray-300 tracking-widest">/ {work.year}</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-serif font-medium text-ikemen-text mb-4 group-hover:text-gray-600 transition-colors duration-300">
                                    {work.title}
                                </h3>
                                <p className="text-gray-500 font-serif text-sm leading-relaxed border-l border-gray-200 pl-4 group-hover:border-ikemen-gold transition-colors duration-300">
                                    {work.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-32">
                    <Link to="/contact" className="inline-flex items-center gap-2 text-gray-400 font-mono text-xs tracking-[0.3em] hover:text-ikemen-gold transition-colors group">
                        VIEW ALL PROJECTS <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};
