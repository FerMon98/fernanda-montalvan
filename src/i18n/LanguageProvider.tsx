import { useEffect, useMemo, useState } from 'react';
import { TranslatorContext } from './TranslatorContext';
import { translations } from './dictionary';
import type { Language } from './types';


export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() =>
    (localStorage.getItem('lng') as Language) || 'en'
  );


  useEffect(() => { localStorage.setItem('lng', language); }, [language]);


  const t = useMemo(() => (key: string) => translations[language][key] ?? key, [language]);
  const available: Language[] = ['en', 'es', 'ca'];


  return (
    <TranslatorContext.Provider value={{ language, setLanguage, t, available }}>
      {children}
    </TranslatorContext.Provider>
  );
}