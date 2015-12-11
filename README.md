# ibex-language

```yaml
common:
    availableLanguages: [en, fr]
```


```js
import Ibex from 'ibex';
import config from 'ibex-config';
import language from 'ibex-language';

(async function main() {
    const app = new Ibex();
    await config('/js/config')(app);
    await language(app);
    await app.run();
})();
```
