import { Article as BaseArticle } from './component';
import type { ArticleProps } from './component.interface';

export function Article(props: ArticleProps) {
  return BaseArticle(props);
}

export namespace Article {
  export type Props = ArticleProps;
}
