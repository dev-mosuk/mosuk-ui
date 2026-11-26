import type {ElementType} from 'react';
import { Article as Component } from '@/components/article/.partials/components/component';
import type { ArticleProps as ComponentProps } from '@/components/article/.partials/components/component.interface';
import { ArticleOrientation } from '@/components/article/.partials/enums/component.enums';

export const Article = Object.assign(Component, {
  ENUMS: {
    Orientation: ArticleOrientation,
  },
});

export namespace Article {
  export type Props<C extends ElementType = 'article'> = ComponentProps<C>;
}
