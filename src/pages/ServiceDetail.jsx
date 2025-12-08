import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ArrowRight, CheckCircle2, FileText, Code2, Megaphone, BarChart3, Users, Zap, ShieldCheck, HelpCircle, Server, Database, Cpu, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import NotFound from './NotFound';

const ServiceDetail = () => {
    const { id } = useParams();
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const services = {
        'advertising': {
            title: '広告事業',
            enTitle: 'ADVERTISING',
            desc: 'Web広告運用 / SNSマーケティング / インフルエンサー施策',
            icon: Megaphone,
            concept: {
                title: "Data × Creative",
                text: "データに基づいた論理的な戦略と、人の心を動かすクリエイティブ。この2つを高度に融合させることで、クライアントのビジネスを最大化させます。単なる運用代行ではなく、事業成長のパートナーとして伴走します。",
                image: "/advertising_concept.png"
            },
            menu: [
                { title: "Web広告運用", desc: "Google / Yahoo! / Microsoft 等のリスティング広告、ディスプレイ広告の運用。" },
                { title: "SNS広告", desc: "Instagram / TikTok / X (Twitter) / Facebook / LINE 等の主要SNS媒体での広告配信。" },
                { title: "動画広告", desc: "YouTube / TikTok / TVer 等での動画クリエイティブを用いた広告展開。" },
                { title: "インフルエンサー施策", desc: "ブランドにマッチしたインフルエンサーのキャスティングとディレクション。" }
            ],
            strengths: [
                { title: "圧倒的なスピード感", desc: "最短3営業日での配信開始が可能。高速なPDCAで機会損失を防ぎます。" },
                { title: "クリエイティブ制作力", desc: "社内クリエイティブチームが、数値に基づいた「勝てる」クリエイティブを制作。" },
                { title: "透明性の高いレポート", desc: "ブラックボックス化しがちな運用状況を、リアルタイムで可視化・共有します。" }
            ],
            flow: [
                { step: "01", title: "ヒアリング", desc: "課題、目標、予算などを詳細にお伺いします。" },
                { step: "02", title: "戦略立案", desc: "ターゲット分析に基づき、最適な媒体とプランをご提案。" },
                { step: "03", title: "クリエイティブ制作", desc: "バナー、動画、LPなどの広告素材を制作します。" },
                { step: "04", title: "配信開始", desc: "入稿設定を行い、広告配信をスタートします。" },
                { step: "05", title: "分析・改善", desc: "日々の数値を分析し、継続的な改善施策を実行します。" }
            ],
            faq: [
                { q: "最低出稿金額はありますか？", a: "月額10万円から承っております。媒体や商材に合わせて最適なプランをご提案します。" },
                { q: "契約期間の縛りはありますか？", a: "原則として3ヶ月からのご契約となりますが、スポットでのご依頼もご相談可能です。" }
            ]
        },
        'system-development': {
            title: 'システム開発事業',
            enTitle: 'SYSTEM DEV',
            desc: 'Webシステム開発 / アプリ開発 / DX支援',
            icon: Code2,
            concept: {
                title: "Business-Driven Tech",
                text: "技術はあくまで手段です。私たちは「何を作るか」ではなく「どうビジネスを解決するか」に焦点を当てます。最新のテクノロジーとビジネス視点を掛け合わせ、本質的な価値を生み出すシステムを構築します。",
                image: "/system_dev_concept.png"
            },
            menu: [
                { title: "Webアプリケーション開発", desc: "React / Next.js / Go 等を用いた、高パフォーマンスなWebアプリ開発。" },
                { title: "モバイルアプリ開発", desc: "iOS / Android ネイティブアプリ、またはFlutterを用いたクロスプラットフォーム開発。" },
                { title: "ECサイト構築", desc: "Shopify / MakeShop / フルスクラッチによるECサイトの設計・構築。" },
                { title: "DXコンサルティング", desc: "業務フローのデジタル化、レガシーシステムの刷新支援。" }
            ],
            techStack: [
                {
                    category: "フロントエンド開発",
                    icon: Globe,
                    items: [
                        { name: "Next.js 14", desc: "App Router / Server Actions / ISR / SSG / SSR" },
                        { name: "React.js", desc: "Hooks / Context API / Redux / Zustand / Recoil" },
                        { name: "TypeScript", desc: "Strict Type Safety / Generics / Utility Types" },
                        { name: "Vue.js", desc: "Vue 3 / Composition API / Nuxt.js" },
                        { name: "Svelte", desc: "SvelteKit / Reactive Programming" },
                        { name: "Astro", desc: "Island Architecture / Performance Optimization" },
                        { name: "Tailwind CSS", desc: "JIT / Custom Config / Design System" },
                        { name: "Framer Motion", desc: "Complex Animations / Gestures / 3D Transforms" },
                        { name: "Three.js", desc: "WebGL / R3F / Shaders / 3D Modeling" },
                        { name: "WebGL", desc: "Canvas API / High Performance Graphics" }
                    ]
                },
                {
                    category: "バックエンド開発",
                    icon: Server,
                    items: [
                        { name: "Node.js", desc: "Event Loop / Streams / Worker Threads" },
                        { name: "Go (Golang)", desc: "Goroutines / High Concurrency / Microservices" },
                        { name: "Python", desc: "FastAPI / Django / Flask / AsyncIO" },
                        { name: "PHP", desc: "Laravel / Symfony / Modern PHP 8.x" },
                        { name: "Supabase", desc: "PostgreSQL / Auth / Edge Functions / Realtime" },
                        { name: "Firebase", desc: "Firestore / Auth / Cloud Functions / Analytics" },
                        { name: "GraphQL", desc: "Apollo Server / Nexus / Code Generator" },
                        { name: "gRPC", desc: "Protocol Buffers / High Performance RPC" },
                        { name: "WebSocket", desc: "Socket.io / Real-time Communication" }
                    ]
                },
                {
                    category: "AI・機械学習・データ",
                    icon: Cpu,
                    items: [
                        { name: "OpenAI API", desc: "GPT-4 / Assistants API / Function Calling" },
                        { name: "Anthropic Claude", desc: "Claude 3.5 Sonnet / Opus / Long Context" },
                        { name: "Google Gemini", desc: "Multimodal AI / Vision / Audio" },
                        { name: "LangChain", desc: "Agents / Chains / Memory / Retrievers" },
                        { name: "LlamaIndex", desc: "RAG / Vector Store Integration" },
                        { name: "Pinecone", desc: "Vector Database / Semantic Search" },
                        { name: "Hugging Face", desc: "Transformers / Open Source Models" },
                        { name: "Stable Diffusion", desc: "Image Generation / ControlNet / LoRA" },
                        { name: "Python Data Stack", desc: "Pandas / NumPy / Scikit-learn / PyTorch" }
                    ]
                },
                {
                    category: "クラウド・インフラ",
                    icon: Database,
                    items: [
                        { name: "AWS", desc: "EC2 / Lambda / S3 / RDS / ECS / CloudFront" },
                        { name: "Google Cloud", desc: "Cloud Run / App Engine / BigQuery / Vertex AI" },
                        { name: "Vercel", desc: "Edge Network / Serverless Functions / Analytics" },
                        { name: "Cloudflare", desc: "Workers / Pages / R2 / CDN / Security" },
                        { name: "Docker", desc: "Containerization / Compose / Multi-stage Builds" },
                        { name: "Kubernetes", desc: "Orchestration / Helm / GitOps" },
                        { name: "Terraform", desc: "IaC / Multi-cloud Provisioning" }
                    ]
                },
                {
                    category: "開発ツール・その他",
                    icon: Zap,
                    items: [
                        { name: "Git / GitHub", desc: "Actions / Projects / Flow / Code Review" },
                        { name: "Figma", desc: "UI/UX Design / Prototyping / Dev Mode" },
                        { name: "Stripe", desc: "Payments / Subscriptions / Connect" },
                        { name: "Headless CMS", desc: "MicroCMS / Contentful / Strapi / WordPress" },
                        { name: "Testing", desc: "Jest / Vitest / Playwright / Cypress / Storybook" }
                    ]
                }
            ],
            strengths: [
                { title: "モダンな技術選定", desc: "常に最新の技術トレンドをキャッチアップし、長期間運用に耐えうる設計を提案。" },
                { title: "UI/UXデザイン", desc: "使いやすさと美しさを兼ね備えた、ユーザーファーストなデザイン。" },
                { title: "アジャイル開発", desc: "変化に強いアジャイル手法を採用し、ビジネスの状況に合わせて柔軟に対応。" }
            ],
            flow: [
                { step: "01", title: "要件定義", desc: "実現したい機能や業務フローを明確化します。" },
                { step: "02", title: "設計・デザイン", desc: "システム構成図やUIデザインを作成します。" },
                { step: "03", title: "開発", desc: "プロトタイプを確認しながら実装を進めます。" },
                { step: "04", title: "テスト", desc: "品質担保のための厳格なテストを実施します。" },
                { step: "05", title: "リリース・保守", desc: "本番公開後も、安定稼働のためのサポートを行います。" }
            ],
            faq: [
                { q: "開発言語は何を使いますか？", a: "上記のTechnology Stackに記載の通り、フロントエンドからバックエンド、AI/ML、クラウドインフラまで幅広く対応可能です。特定の技術に縛られず、プロジェクトの要件・規模・運用体制に最適な技術を選定します。" },
                { q: "着手金はかかりますか？", a: "通常の受託開発では着手金を頂いておりますが、補助金を活用した開発の場合は、補助金の種類によって着手金が発生する場合がございます。詳細はお問い合わせください。" },
                { q: "保守運用のみの依頼は可能ですか？", a: "はい、可能です。他社開発システムの引き継ぎもご相談ください。" }
            ]
        },
        'subsidy': {
            title: '補助金申請代行事業',
            enTitle: 'SUBSIDY',
            desc: 'IT導入補助金 / 小規模事業者持続化補助金 / ものづくり補助金',
            icon: FileText,
            concept: {
                title: "Growth Opportunity",
                text: "補助金申請は、単なる資金調達ではありません。自社の強みを見つめ直し、次なる成長戦略を描く絶好の機会です。複雑な手続きをプロが完全サポートし、採択とその後の事業成長まで伴走します。",
                image: "/subsidy_concept.png"
            },
            menu: [
                {
                    title: "IT導入補助金サポート",
                    desc: "デジタル化推進 / 補助率：最大3/4 / 補助上限：最大450万円",
                    detail: "ITツール導入による業務効率化や売上向上を支援する制度です。WEB制作と組み合わせることで、お客様の実質負担を軽減できます。事業計画書作成から申請手続き、導入後のフォローまで一貫してサポートします。",
                    url: "https://it-dounyu-grants.netlify.app/"
                },
                {
                    title: "中小企業新事業進出補助金",
                    desc: "事業再構築補助金の後継【2025年新設】 / 補助率：1/2〜2/3",
                    detail: "2025年度から開始される新たな補助金制度です。事業再構築補助金の後継として位置付けられ、新事業分野への進出や事業転換を重点的に支援します。従業員20名以下でも最大2,500万円の補助が受けられます。",
                    url: "https://shinjigyo-sinsyutsu-grants.netlify.app/"
                },
                {
                    title: "ものづくり補助金",
                    desc: "革新的な製品・サービス開発 / 補助率：1/2〜2/3 / 補助上限：最大4,000万円",
                    detail: "2025年度の大きな改正により収益納付が廃止され、より活用しやすくなりました。革新的な製品開発や生産プロセスの省力化を通じて生産性向上を図る設備投資等を支援します。",
                    url: "https://monodsukuri-grants.netlify.app/"
                },
                {
                    title: "中小企業省力化投資補助金",
                    desc: "人手不足解消 / 補助率：1/2〜2/3 / 補助上限：最大8,000万円",
                    detail: "人手不足に悩む中小企業の省力化投資を支援する補助金です。2025年より新たに一般型が追加され、カタログ形式に加えて事業者が希望する設備を申請できるようになりました。",
                    url: "https://chusyokigyo-syoryokukatousi.netlify.app/"
                },
                {
                    title: "人材開発支援助成金",
                    desc: "リスキリング・人材育成支援 / 助成率：最大75%",
                    detail: "従業員の教育訓練費用を助成する制度です。2025年度は非正規雇用者向けの助成率が60%から70%に引き上げられ、さらに活用しやすくなりました。デジタル人材育成やリスキリングなど様々なコースがあります。",
                    url: "https://jinzaikaihatsu-grants.netlify.app/"
                },
                {
                    title: "キャリアアップ助成金",
                    desc: "非正規労働者のキャリア形成支援 / 助成率：最大75%",
                    detail: "非正規労働者の安定雇用やキャリアアップを促進するための助成制度です。正社員化や賃金引き上げ、無期契約転換など幅広い支援が対象となり、多くの企業が活用しています。",
                    url: "https://careerup-grants.netlify.app/"
                },
                {
                    title: "小規模事業者持続化補助金",
                    desc: "販路開拓等の取り組み支援 / 補助率：2/3 / 補助上限：最大200万円",
                    detail: "小規模事業者の販路開拓等の取り組みを支援する補助金です。比較的申請のハードルが低く、採択率も高いため、初めて補助金に挑戦する事業者に最適です。WEBサイト制作や広告費なども対象となります。",
                    url: "https://syoukibojigyousya-grants.netlify.app/"
                }
            ],
            strengths: [
                { title: "高い採択率", desc: "豊富な実績とノウハウに基づき、業界平均を大きく上回る採択率を誇ります。" },
                { title: "トータルサポート", desc: "申請書の作成から、採択後の交付申請、実績報告まで一気通貫で対応。" },
                { title: "完全成果報酬", desc: "採択された場合のみ費用が発生する安心の料金体系。（※一部着手金が発生する案件もございます）" }
            ],
            flow: [
                { step: "01", title: "無料相談", desc: "活用可能な補助金の診断と要件確認を行います。" },
                { step: "02", title: "戦略立案", desc: "事業計画の策定と申請ストーリーの構築。" },
                { step: "03", title: "申請サポート", desc: "申請書類の作成代行と電子申請のサポート。" },
                { step: "04", title: "採択・交付決定", desc: "採択後の交付申請手続きもサポートします。" },
                { step: "05", title: "実績報告", desc: "事業完了後の実績報告まで確実に対応します。" }
            ],
            faq: [
                { q: "着手金はかかりますか？", a: "原則として完全成果報酬ですが、難易度や申請する補助金の種類によっては着手金が発生する場合がございます。詳細はお問い合わせください。" },
                { q: "個人事業主でも申請できますか？", a: "はい、多くの補助金が個人事業主の方も対象となります。まずはご相談ください。" }
            ]
        }
    };

    const service = services[id];

    if (!service) {
        return <NotFound />;
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.desc,
        "provider": {
            "@type": "Organization",
            "name": "株式会社イケメン"
        },
        "areaServed": "JP"
    };

    return (
        <div className="w-full min-h-screen bg-white/60 backdrop-blur-md relative overflow-hidden pt-32 pb-40">
            <SEO
                title={service.title}
                description={`${service.title}に関する詳細ページです。${service.desc}`}
                keywords={`${service.title},株式会社イケメン,サービス詳細`}
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
                    <span className="text-[15vw] font-serif font-black text-black leading-none tracking-tighter uppercase whitespace-nowrap">{service.enTitle}</span>
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
                    <h1 className="text-5xl md:text-8xl font-serif font-medium text-ikemen-text tracking-tighter mb-6 uppercase leading-none whitespace-nowrap">
                        {service.enTitle}
                    </h1>
                    <p className="text-sm md:text-base font-mono tracking-widest text-gray-400 uppercase md:ml-[1vw]">
                        Ikemen Co., Ltd. — {service.title}
                    </p>
                </motion.div>

                {/* Concept */}
                <section className="mb-40">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    >
                        <div>
                            <span className="text-ikemen-gold font-mono tracking-widest text-sm mb-4 block">CONCEPT</span>
                            <h2 className="text-3xl md:text-5xl font-serif font-medium text-ikemen-text mb-8 leading-tight">
                                {service.concept.title}
                            </h2>
                            <p className="text-gray-600 leading-loose font-serif text-lg">
                                {service.concept.text}
                            </p>
                        </div>
                        <div className="relative h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                            <img src={service.concept.image} alt={service.concept.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                    </motion.div>
                </section>

                {/* Tech Stack (Only for System Development) */}
                {service.techStack && (
                    <section className="mb-40">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-4xl font-serif font-medium text-ikemen-text mb-4">TECHNOLOGY STACK</h2>
                            <div className="w-px h-12 bg-ikemen-gold mx-auto"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {service.techStack.map((category, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-white/40 backdrop-blur-sm border border-gray-200 p-8 rounded-xl"
                                >
                                    <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
                                        <category.icon className="w-6 h-6 text-ikemen-gold" />
                                        <h3 className="text-xl font-bold text-ikemen-text">{category.category}</h3>
                                    </div>
                                    <div className="space-y-4">
                                        {category.items.map((item, i) => (
                                            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                                <div className="flex items-center gap-3">
                                                    <span className="font-bold text-gray-700 min-w-[120px]">{item.name}</span>
                                                </div>
                                                <span className="text-xs text-gray-500 font-mono">{item.desc}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Service Menu */}
                <section className="mb-40">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-serif font-medium text-ikemen-text mb-4">SERVICE MENU</h2>
                        <div className="w-px h-12 bg-ikemen-gold mx-auto"></div>
                    </div>

                    {id === 'subsidy' ? (
                        <div className="max-w-4xl mx-auto space-y-4">
                            {service.menu.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 transition-colors"
                                    >
                                        <div>
                                            <h3 className="text-lg font-bold text-ikemen-text mb-1">{item.title}</h3>
                                            <p className="text-sm text-gray-500 font-serif">{item.desc}</p>
                                        </div>
                                        {openAccordion === index ? <ChevronUp className="text-ikemen-gold" /> : <ChevronDown className="text-gray-400" />}
                                    </button>
                                    <AnimatePresence>
                                        {openAccordion === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="border-t border-gray-100"
                                            >
                                                <div className="p-6 pt-2 bg-gray-50/30">
                                                    <p className="text-gray-600 font-serif leading-relaxed mb-4 text-sm">
                                                        {item.detail}
                                                    </p>
                                                    <a
                                                        href={item.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center text-xs font-bold text-ikemen-gold hover:underline tracking-widest"
                                                    >
                                                        OFFICIAL SITE <ArrowRight className="w-3 h-3 ml-1" />
                                                    </a>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {service.menu.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-white/40 backdrop-blur-sm border border-gray-200 p-10 hover:border-ikemen-gold transition-colors duration-300 group"
                                >
                                    <h3 className="text-xl font-bold text-ikemen-text mb-4 group-hover:text-ikemen-gold transition-colors">{item.title}</h3>
                                    <p className="text-gray-500 font-serif leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </section>

                {/* Strengths */}
                <section className="mb-40 bg-white/50 backdrop-blur-md rounded-[3rem] p-10 md:p-20 border border-white/50 shadow-sm">
                    <div className="mb-16">
                        <span className="text-ikemen-gold font-mono tracking-widest text-sm mb-4 block">WHY US</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-medium text-ikemen-text">
                            選ばれる理由
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {service.strengths.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="w-16 h-16 bg-ikemen-text text-white flex items-center justify-center rounded-full mb-6 text-2xl font-serif">
                                    0{index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-ikemen-text mb-4">{item.title}</h3>
                                <p className="text-gray-500 font-serif leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Flow */}
                <section className="mb-40">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-serif font-medium text-ikemen-text mb-4">FLOW</h2>
                        <p className="text-gray-400 font-mono text-sm tracking-widest">導入までの流れ</p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        {service.flow.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative pl-12 pb-16 last:pb-0 border-l border-gray-200 last:border-0"
                            >
                                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-ikemen-gold border-4 border-white shadow-sm"></div>
                                <div className="flex flex-col md:flex-row gap-4 md:items-baseline">
                                    <span className="text-ikemen-gold font-mono font-bold text-lg">{item.step}</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-ikemen-text mb-2">{item.title}</h3>
                                        <p className="text-gray-500 font-serif">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-40">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-serif font-medium text-ikemen-text mb-4">FAQ</h2>
                        <p className="text-gray-400 font-mono text-sm tracking-widest">よくある質問</p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {service.faq.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white/60 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl"
                            >
                                <div className="flex gap-4 items-start mb-4">
                                    <span className="text-ikemen-gold font-bold font-serif text-xl">Q.</span>
                                    <h3 className="text-lg font-bold text-ikemen-text pt-0.5">{item.q}</h3>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <span className="text-gray-300 font-bold font-serif text-xl">A.</span>
                                    <p className="text-gray-600 font-serif leading-relaxed pt-0.5">{item.a}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center">
                    <div className="bg-ikemen-text text-white p-12 md:p-20 rounded-[3rem] relative overflow-hidden group max-w-4xl mx-auto">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-ikemen-gold rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-8">
                                Ready to Start?
                            </h2>
                            <p className="text-gray-300 mb-12 font-serif text-lg">
                                まずはお気軽にご相談ください。<br />
                                貴社の課題に合わせた最適なプランをご提案します。
                            </p>
                            <Link to="/contact" className="inline-flex items-center justify-center px-12 py-5 bg-white text-ikemen-text font-bold rounded-full hover:bg-ikemen-gold hover:text-white transition-all duration-300 tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-1">
                                CONTACT US <ArrowRight className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ServiceDetail;
