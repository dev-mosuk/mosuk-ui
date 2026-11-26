# mosuk-ui

- [ui.mosuk.ru](https://ui.mosuk.ru/) — документация и примеры
- [dev.mosuk.ru](https://dev.mosuk.ru/) — наш сайт, занимаемся разработкой web-приложений

## Философия

Пакет для Next.js и Tailwind CSS 4. Корневого JS-входа нет: `import` из `mosuk-ui` не собирает контролы. Каждый путь свой — `mosuk-ui/components/button`, `mosuk-ui/hooks/…`, `mosuk-ui/providers/…`, `mosuk-ui/services/…`. В бандл попадает только то, что импортировали. Маска, телефон и поиск — отдельные входы, не флаги одного Input.

Внешность задаётся через `className`. Размер и вид — утилиты `size-*` и `variant-*`.

Слои объявлены в `src/index.css`: `properties`, `theme`, `base`, `mosuk-ui`, `components`, `utilities`. Слой `mosuk-ui` идёт сразу после `base`, поэтому дефолт компонента выше базовых стилей. `components` и `utilities` стоят позже: утилиты Tailwind перекрывают кит. Проп `as` меняет тег, классы остаются.

## Подключение

```bash
npm i mosuk-ui
```

В `src/index.css` пакет уже импортирует Tailwind. Повторный `@import "tailwindcss"` в проекте не нужен:

```css
@import "mosuk-ui";
```

В `layout.tsx` этот CSS — первый импорт: кто первый объявил слой `mosuk-ui`, тот фиксирует порядок слоёв.

Primary по желанию: `--color-primary-50` … `--color-primary-900` в `:root` сразу после импорта. Полная шкала — в [быстром старте](https://ui.mosuk.ru/overview/quick-start).
