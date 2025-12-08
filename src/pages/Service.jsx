import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

const Service = () => {
    const services = [
        { id: 'advertising', title: '広告事業', desc: 'Advertising', num: '01', detail: 'Web広告運用 / SNSマーケティング / インフルエンサー施策' },
        { id: 'system-development', title: 'システム開発事業', desc: 'System Development', num: '02', detail: 'Webシステム開発 / アプリ開発 / DX支援' },
        { id: 'subsidy', title: '補助金申請代行事業', desc: 'Subsidy Support', num: '03', detail: 'IT導入補助金 / 小規模事業者持続化補助金 / ものづくり補助金' },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Advertising",
                "description": "広告代理店事業"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "System Development",
                "description": "システム開発事業"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Subsidy Support",
                "description": "補助金申請代行事業"
            }
        ]
    };

    return (
        <div className="w-full min-h-screen bg-white/60 backdrop-blur-md relative overflow-hidden pt-32 pb-40">
            <SEO
                title="Services"
                description="株式会社イケメンのサービス一覧。WEB制作、システム開発、営業代行、広告代理店業務など、多角的なソリューションを提供します。"
                keywords="サービス,WEB制作,システム開発,営業代行,広告代理店,補助金申請"
                jsonLd={jsonLd}
            />

            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                {/* Soft Gradients */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gray-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-80"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.08] bg-center"></div>

                {/* Large Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-[0.05]">
                    <span className="text-[20vw] font-serif font-black text-black leading-none tracking-tighter">SERVICE</span>
                </div>

                {/* Decorative Lines */}
                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-40"></div>
                <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-40"></div>
            </div>

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-32 text-center md:text-left"
                >
                    <h1 className="text-6xl md:text-9xl font-serif font-medium text-ikemen-text tracking-tighter mb-6">
                        BUSINESS<br />
                        <span className="ml-[10vw] text-gray-300 italic">DOMAIN</span>
                    </h1>
                    <p className="text-sm md:text-base font-mono tracking-widest text-gray-400 uppercase md:ml-[12vw]">
                        Ikemen Co., Ltd. — Service Overview
                    </p>
                </motion.div>

                {/* Service List */}
                <div className="space-y-0">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <Link
                                to={`/service/${service.id}`}
                                className="group block relative border-t border-gray-200 py-16 md:py-24 hover:bg-gray-50/50 transition-colors duration-500 overflow-hidden bg-white/80"
                            >
                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
                                    {/* Number & Title */}
                                    <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16">
                                        <span className="text-sm md:text-base font-mono text-ikemen-gold tracking-widest">
                                            {service.num} — {service.desc}
                                        </span>
                                        <h2 className="text-3xl md:text-5xl font-serif font-medium text-ikemen-text group-hover:text-gray-600 transition-colors duration-500">
                                            {service.title}
                                        </h2>
                                    </div>

                                    {/* Arrow & Detail */}
                                    <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                                        <p className="text-xs md:text-sm text-gray-400 font-mono tracking-wider hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-4 group-hover:translate-x-0">
                                            {service.detail}
                                        </p>
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-ikemen-text/80 group-hover:border-ikemen-text transition-all duration-500">
                                            <span className="text-xl md:text-2xl text-gray-300 group-hover:text-white transition-colors duration-500 group-hover:rotate-45 transform">↗</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Background Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                            </Link>
                        </motion.div>
                    ))}
                    <div className="border-t border-gray-200"></div>
                </div>
            </div>
        </div>
    );
};

export default Service;
