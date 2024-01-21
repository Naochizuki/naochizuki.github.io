'use client'

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface Language {
    name: string;
    code: string;
}

export default function LanguageSwitcher() {
    const transNavbar = useTranslations('Navbar')
    const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null)
    const languages: Language[] = [
        { name: 'Bahasa Indonesia', code: 'id' },
        { name: 'English', code: 'en' },
        { name: ' 日本語', code: 'jp' }
    ];

    const selectedLanguageTemplate = (option: Language, props: any) => {
        if (option) {
            console.log(option.name)
            return (
                <div></div>
            );
        } else {
            return <span>{ props.placeholder }</span>;
        }

    };

    const languageOptionsTemplate = (option: Language) => {
        return (
            <div>
                { option.name }
            </div>
        );
    };

    return (
        <Dropdown value={ selectedLanguage } onChange={ (e: DropdownChangeEvent) => setSelectedLanguage(e.value) } options={ languages } placeholder={ transNavbar('Select a language') } valueTemplate={ selectedLanguageTemplate } itemTemplate={ languageOptionsTemplate } />
    )
}