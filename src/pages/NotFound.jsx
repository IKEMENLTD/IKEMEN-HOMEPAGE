import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white text-ikemen-text relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>

            <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-[10rem] md:text-[15rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-ikemen-text to-gray-200 leading-none select-none"
            >
                404
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-center z-10"
            >
                <h2 className="text-2xl md:text-4xl font-bold mb-6">Page Not Found</h2>
                <p className="text-gray-500 mb-10">
                    お探しの「カッコイイ」は見つかりませんでした。<br />
                    URLをご確認いただくか、トップページへお戻りください。
                </p>

                <Link to="/" className="px-10 py-4 bg-ikemen-text text-white font-bold rounded-full hover:bg-ikemen-gold transition-colors shadow-lg hover:shadow-cyan-500/50">
                    TOP PAGE
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;
