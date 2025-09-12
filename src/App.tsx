import { useState } from 'react';
import './Styles/App.css';
import NavBar from './components/NavBar';
import LanguageProvider from './i18n/LanguageProvider';
import { useTranslate } from './i18n/useTranslate';


function Home() {
    const t = useTranslate();
    return (
        <main className="mx-auto max-w-5xl px-6 py-16">
            <section className="rounded-2xl p-8 bg-card shadow-lg">
                <h1 className="text-4xl font-display leading-tight">
                    {t('hero.title')}
                </h1>
                <p className="mt-4 text-lg opacity-90">{t('hero.subtitle')}</p>
                <button className="mt-8 rounded-2xl px-5 py-3 font-medium bg-[var(--accent-app)] text-black hover:opacity-90">
                    {t('hero.cta')}
                </button>
            </section>
        </main>
    );
}


export default function App() {
    const [theme, setTheme] = useState<'electric' | 'cyber'>('electric');


    const toggleTheme = () => {
        const root = document.documentElement;
        const electric = theme === 'electric';
        root.style.setProperty('--bg-app', electric ? 'var(--color-bg-cyber)' : 'var(--color-bg-electric)');
        root.style.setProperty('--text-app', electric ? 'var(--color-text-cyber)' : 'var(--color-text-electric)');
        root.style.setProperty('--card-app', electric ? 'var(--color-card-cyber)' : 'var(--color-card-electric)');
        root.style.setProperty('--accent-app', electric ? 'var(--color-cyber)' : 'var(--color-electric)');
        setTheme(electric ? 'cyber' : 'electric');
    };


    return (
        <LanguageProvider>
            <div className="min-h-dvh">
                <NavBar theme={theme} onToggleTheme={toggleTheme} />
                <Home />
            </div>
        </LanguageProvider>
    );
}