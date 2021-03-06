export default function ibexLanguage(app) {
    const config = app.context.config;
    const availableLanguages = config.get('availableLanguages');
    if (!availableLanguages) {
        throw new Error('Missing config "availableLanguages"');
    }

    if (!navigator.languages.some(language => {
        const l = language.split('-')[0].toLowerCase();
        if (availableLanguages.indexOf(l) !== -1) {
            app.context.language = l;
            return true;
        }
    })) {
        app.context.language = availableLanguages[0];
    }
}
