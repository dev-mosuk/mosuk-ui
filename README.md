# mosuk UI

UI библиотека компонентов с использованием CSS Layers для управления каскадом стилей.

### Основные слои

```css
@layer theme, base, mosuk-ui, components, utilities;
```

### Структура индексов внутри `mosuk-ui`

#### Компоненты (1-й уровень)

- **index-0 до index-9** - зарезервировано для технических слоёв (providers, utilities)
- **index-10** - texts (заголовки, параграфы, ссылки)
- **index-11** - actions (кнопки, инпуты, формы)
- **index-12** - display (карточки, изображения, видео)
- **index-13** - containers (секции, сетки, контейнеры)
- **index-14** - collections (таблицы, аккордеоны, табы)
- **index-15** - integrations (внешние интеграции)
- **index-16** - layouts (header, sidebar, tabbar)
- **index-17** - overlays (диалоги, dropdown, модальные окна)

#### Варианты компонентов (2-й уровень)

- **Базовый компонент**: `index-11` (например, `button`)
- **Вариант 1**: `index-21` (например, `button/submit`)
- **Вариант 2**: `index-21` (например, `button/delete`)

### Примеры использования

```css
/* Базовый компонент кнопки */
@layer mosuk-ui {
  @layer index-11 {
    .button {
      /* стили */
    }
  }
}

/* Вариант кнопки submit */
@layer mosuk-ui {
  @layer index-21 {
    .button {
      /* переопределённые стили */
    }
  }
}
```

### Файловая структура

```
src/
├── components/
│   ├── texts/          # index-10
│   ├── actions/        # index-11, 21, 31...
│   ├── display/        # index-12, 22, 32...
│   ├── containers/     # index-13
│   ├── collections/    # index-14
│   ├── integrations/   # index-15
│   ├── layouts/        # index-16
│   └── overlays/       # index-17, 27, 37...
└── providers/          # index-0
```
