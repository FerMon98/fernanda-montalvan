import { createContext } from 'react';
import type { Language } from './types';


export type TranslatorContextType = {
  language: Language;
  setLanguage: (lng: Language) => void;
  t: (key: string) => string;
  available: Language[];
};


export const TranslatorContext = createContext<TranslatorContextType>({
  language: 'en',
  setLanguage: () => { },
  t: (k: string) => k,
  available: ['en', 'es', 'ca']
});