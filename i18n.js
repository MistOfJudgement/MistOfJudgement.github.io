import fs from 'fs';

const dictionaries = {};
export function loadTranslations(folder) {
    const files = fs.readdirSync(folder);
    for (const file of files) {
        const locale = file.replace(".json", "");
        dictionaries[locale] = JSON.parse(fs.readFileSync(`${folder}/${file}`, 'utf8'));
        console.log(`Loaded ${locale} dictionary`);
    }
}

export function getLocales() {
    const locales = [];
    for (const locale in dictionaries) {
        locales.push(locale);
    }
    return locales;
}

export function t(key, options = {}) {
    if (!dictionaries[locale]) {
        throw new Error(`Locale ${locale} not found`);
    }
    if (!dictionaries[locale][key]) {
        throw new Error(`Key ${key} not found in locale ${locale}`);
    }
    return dictionaries[locale][key];
}

