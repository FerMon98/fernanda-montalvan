/**
 * Renders the homepage hero with translated title, subtitle, and CTA button.
*/

import React, { JSX } from 'react'
import { useTranslate } from '../i18n/useTranslate'

export default function HomePage(): JSX.Element {
    const t = useTranslate()

    return (
        <main className= "mx-auto max-w-5xl px-6 py-16" >
        <section className="rounded-2xl p-8 bg-card shadow-lg" >
            <h1 className="text-4xl font-display leading-tight" >
                { t('hero.title') }
                </h1>
                < p className = "mt-4 text-lg opacity-90" > { t('hero.subtitle') } </p>
                    < button className = "mt-8 rounded-2xl px-5 py-3 font-medium bg-[var(--accent-app)] text-black hover:opacity-90" >
                        { t('hero.cta') }
                        </button>
                        </section>
                        </main>
 )
}