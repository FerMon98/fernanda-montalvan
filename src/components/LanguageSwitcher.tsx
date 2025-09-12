import { useContext } from 'react';
import { TranslatorContext } from '../i18n/TranslatorContext';


export default function LanguageSwitcher() {
    const { language, setLanguage, available } = useContext(TranslatorContext);


    return (
        <label className="inline-flex items-center gap-2">
            <span className="sr-only">Language</span>
            <select
                className="rounded-xl border border-white/20 bg-transparent px-3 py-2"
                aria-label="Language selector"
                value={language}
                onChange={(e) => setLanguage(e.target.value as typeof language)}
            >
                {available.map((lng) => (
                    <option key={lng} value={lng} className="text-black">
                        {lng.toUpperCase()}
                    </option>
                ))}
            </select>
        </label>
    );
}