'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ibexLanguage;
/**
 * @function
 * @param app
*/function ibexLanguage(app) {
    var config = app.context.config;
    var availableLanguages = config.get('availableLanguages');
    if (!availableLanguages) {
        throw new Error('Missing config "availableLanguages"');
    }

    if (!navigator.languages.some(function (language) {
        var l = language.split('-')[0].toLowerCase();
        if (availableLanguages.indexOf(l) !== -1) {
            app.context.language = l;
            return true;
        }
    })) {
        app.context.language = availableLanguages[0];
    }
}
//# sourceMappingURL=index.js.map