/**
 * useTranslate Hook
 * -----------------
 * Provides access to the translation function and
 * current language state within functional components.
*/

import { useContext } from 'react';
import { TranslatorContext } from './TranslatorContext';

export function useTranslate() {
const ctx = useContext(TranslatorContext);
return (key: string) => ctx.t(key);
}
