# mosuk UI

UI библиотека компонентов с использованием CSS Layers для управления каскадом стилей.

## 1. Основные слои

```css
@layer theme, base, mosuk-ui, components, utilities;
```

## 2. z-index

1. **0–99** — обычные компоненты (контент, карточки, формы)
2. **100–199** — dropdown, popover, tooltip и другие всплывающие элементы
3. **200+** — dialog, drawer, модальные окна

## 3. Структура индексов внутри `mosuk-ui`

### 3.1. Компоненты (1-й уровень)

1. **index-0 до index-9** — зарезервировано для технических слоёв (providers, utilities)
2. **index-10** — texts (заголовки, параграфы, ссылки)
3. **index-11** — actions (кнопки, инпуты, формы)
4. **index-12** — display (карточки, изображения, видео)
5. **index-13** — containers (секции, сетки, контейнеры)
6. **index-14** — collections (таблицы, аккордеоны, табы)
7. **index-15** — integrations (внешние интеграции)
8. **index-16** — layouts (header, sidebar, tabbar)
9. **index-17** — overlays (диалоги, dropdown, модальные окна)

### 3.2. Варианты компонентов (2-й уровень)

1. **Базовый компонент**: `index-11` (например, `button`)
2. **Вариант 1**: `index-21` (например, `button/submit`)
3. **Вариант 2**: `index-31` (например, `button/delete`)

## 4. Примеры использования

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

## 5. Файловая структура

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
