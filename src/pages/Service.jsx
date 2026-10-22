import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TaskMateFeature } from '../components/TaskMateFeature';
import { SEO } from '../components/SEO';

const Service = () => {
    const services = [
        { id: 'system-development', title: 'システム開発事業', desc: 'Core Business', num: '01', detail: 'Webシステム / AI活用 / 業務自動化・DX支援' },
        { id: 'advertising', title: '広告事業', desc: 'Advertising', num: '02', detail: 'Web広告運用 / SNSマーケティング / インフルエンサー施策' },
        { id: 'subsidy', title: '補助金申請代行事業', desc: 'Subsidy Support', num: '03', detail: 'IT導入補助金 / 小規模事業者持続化補助金 / ものづくり補助金' },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": services.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": service.title,
            "description": service.detail,
            "url": `https://ikemen.ltd/service/${service.id}`
        }))
    };

    return (
        <div className="w-full min-h-screen bg-white/60 backdrop-blur-md relative overflow-hidden pt-32 pb-40">
            <SEO
                title="Services"
                description="株式会社イケメンは、システム開発を主軸に、AI活用・業務自動化・DX支援を行う開発会社です。課題整理から設計・開発・導入・運用改善まで一貫して支援します。"
                keywords="サービス,システム開発,AI,DX支援,業務自動化,TaskMate"
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

                <p className="text-lg text-gray-600 leading-loose mb-12">システム開発を主軸に、業務の整理からAI活用・自動化、運用改善まで支援します。</p>
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
                                <div className="flex flex-col items-start justify-between gap-8 relative z-10">
                                    {/* Number & Title */}
                                    <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16">
                                        <span className="text-sm md:text-base font-mono text-ikemen-gold tracking-widest">
                                            {service.num} — {service.desc}
                                        </span>
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-ikemen-text group-hover:text-gray-600 transition-colors duration-500">
                                            {service.title}
                                        </h2>
                                    </div>

                                    {/* Arrow & Detail */}
                                    <div className="flex items-center gap-8 w-full justify-between">
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            {service.detail}
                                        </p>
                                        <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-ikemen-text/80 group-hover:border-ikemen-text transition-all duration-500">
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
            <TaskMateFeature />
        </div>
    );
};

export default Service;
