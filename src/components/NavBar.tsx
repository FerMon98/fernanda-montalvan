import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslate } from '../i18n/useTranslate';


type Props = {
  theme: 'electric' | 'cyber';
  onToggleTheme: () => void;
};


export default function NavBar({ theme, onToggleTheme }: Props) {
  const t = useTranslate();
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/20">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="#" className="flex items-center flex-row gap-2">
          <img src="/media/favi.png" alt="Fernanda logo" className="h-6 w-6" />
          <span className="font-display text-xl">Fernanda Montalván</span>
        </Link>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            aria-label={t('nav.toggleThemeLabel')}
            className="rounded-xl border border-white/20 px-3 py-2 hover:bg-white/10"
            onClick={onToggleTheme}
          >
            {theme === 'electric' ? t('nav.themeCyber') : t('nav.themeElectric')}
          </button>
        </div>
      </nav>
    </header>
  );
}