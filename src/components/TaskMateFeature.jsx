export const TaskMateFeature = () => (
    <section aria-label="TaskMate AIのご紹介" className="relative z-10 px-6 py-24 md:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
                <p className="text-xs font-mono tracking-widest text-cyan-300 mb-5">OUR SERVICE / 業務自動化支援</p>
                <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">TaskMate AI</h2>
                <p className="text-xl md:text-3xl leading-relaxed mb-6">毎日の仕事に、<br />使えるシステムを。</p>
                <p className="text-sm md:text-base text-slate-300 leading-loose mb-8">
                    営業・顧客管理、請求書、勤怠、議事録など。
                    業務に合うシステムを選び、導入からカスタマイズ、運用まで相談できるサービスです。
                    LINEでの相談とエンジニアの支援で、身近な業務から自動化を進めます。
                </p>
                <a href="https://taskmateai.net/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 rounded-full bg-cyan-300 text-slate-950 px-7 py-4 text-sm font-bold hover:bg-white transition-colors">
                    TaskMateのサービスを見る <span aria-hidden="true">↗</span>
                </a>
                <p className="mt-4 text-xs text-slate-400 leading-relaxed">プランごとの対応範囲・料金・契約条件は、公式サイトをご確認ください。</p>
            </div>
            <div className="grid gap-4">
                {[
                    ['01', '必要なシステムを選ぶ', '業務システムのカタログから、現場の課題に合った仕組みを探せます。'],
                    ['02', 'LINEで相談する', '導入や操作、カスタマイズの相談を、日頃使うLINEから。'],
                    ['03', '自動化を育てる', 'GASコード生成やエンジニアの支援を活用し、日々の業務を改善します。'],
                ].map(([number, title, description]) => (
                    <div key={number} className="rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8">
                        <p className="text-xs font-mono text-cyan-300 mb-3">{number}</p>
                        <h3 className="text-lg md:text-xl mb-3">{title}</h3>
                        <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
