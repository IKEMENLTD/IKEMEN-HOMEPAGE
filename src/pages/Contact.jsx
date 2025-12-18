import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Us",
        "description": "株式会社イケメンへのお問い合わせページです。",
        "mainEntity": {
            "@type": "Organization",
            "name": "株式会社イケメン",
            "telephone": "+81-50-8890-8975",
            "contactType": "customer service",
            "areaServed": "JP",
            "availableLanguage": "Japanese"
        }
    };

    return (
        <div className="w-full min-h-screen bg-white/60 backdrop-blur-md relative overflow-hidden pt-32 pb-40">
            <SEO
                title="Contact"
                description="株式会社イケメンへのお問い合わせ。Web制作、システム開発、営業代行など、お気軽にご相談ください。私たちと共に新しい価値を創造しましょう。"
                keywords="お問い合わせ,Contact,Web制作,システム開発,営業代行,東京,品川区"
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
                    <span className="text-[20vw] font-serif font-black text-black leading-none tracking-tighter">CONTACT</span>
                </div>

                {/* Decorative Lines */}
                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-40"></div>
                <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-40"></div>
            </div>

            <div className="max-w-[1000px] mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-32 text-center md:text-left"
                >
                    <h1 className="text-6xl md:text-9xl font-serif font-medium text-ikemen-text tracking-tighter mb-6">
                        GET IN<br />
                        <span className="ml-[10vw] text-gray-300 italic">TOUCH</span>
                    </h1>
                    <p className="text-sm md:text-base font-mono tracking-widest text-gray-400 uppercase md:ml-[12vw]">
                        Ikemen Co., Ltd. — Contact Us
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-serif font-medium text-ikemen-text mb-12">
                            お気軽に<br />お問い合わせください。
                        </h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-ikemen-gold" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-gray-400 tracking-widest uppercase mb-1">EMAIL</p>
                                    <a href="mailto:info@ikemen.ltd" className="text-xl font-serif text-ikemen-text hover:text-ikemen-gold transition-colors">info@ikemen.ltd</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-ikemen-gold" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-gray-400 tracking-widest uppercase mb-1">PHONE</p>
                                    <p className="text-xl font-serif text-ikemen-text">050-8890-8975</p>
                                    <p className="text-xs text-gray-400 mt-1">平日 10:00 - 19:00</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-ikemen-gold" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-gray-400 tracking-widest uppercase mb-1">OFFICE</p>
                                    <p className="text-lg font-serif text-ikemen-text leading-relaxed">
                                        〒141-0032<br />
                                        東京都品川区大崎４丁目４−２４
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/40 backdrop-blur-sm p-8 md:p-12 border border-gray-200"
                    >
                        <form className="space-y-8">
                            <div>
                                <label className="block text-xs font-mono text-gray-400 tracking-widest uppercase mb-2">Name</label>
                                <input type="text" className="w-full bg-transparent border-b border-gray-300 py-3 text-ikemen-text focus:border-ikemen-gold focus:outline-none transition-colors" placeholder="お名前" />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-gray-400 tracking-widest uppercase mb-2">Email</label>
                                <input type="email" className="w-full bg-transparent border-b border-gray-300 py-3 text-ikemen-text focus:border-ikemen-gold focus:outline-none transition-colors" placeholder="メールアドレス" />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-gray-400 tracking-widest uppercase mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-transparent border-b border-gray-300 py-3 text-ikemen-text focus:border-ikemen-gold focus:outline-none transition-colors resize-none" placeholder="お問い合わせ内容"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-ikemen-text/80 text-white py-4 font-bold tracking-widest hover:bg-ikemen-gold/80 transition-colors duration-500 flex items-center justify-center gap-2 group backdrop-blur-sm">
                                SEND MESSAGE <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
