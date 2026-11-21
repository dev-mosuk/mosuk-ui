import { TypographyBody } from '@/components/texts/typography/.partials/components/body/component';
import { TypographyBodyProps } from '@/components/texts/typography/.partials/components/body/component.interface';
import { TypographyCode } from '@/components/texts/typography/.partials/components/code/component';
import { TypographyCodeProps } from '@/components/texts/typography/.partials/components/code/component.interface';
import { TypographyComment } from '@/components/texts/typography/.partials/components/comment/component';
import { TypographyCommentProps } from '@/components/texts/typography/.partials/components/comment/component.interface';
import { Typography as Component } from '@/components/texts/typography/.partials/components/component';
import { TypographyProps } from '@/components/texts/typography/.partials/components/component.interface';
import { TypographyDescription } from '@/components/texts/typography/.partials/components/description/component';
import { TypographyDescriptionProps } from '@/components/texts/typography/.partials/components/description/component.interface';
import { TypographyH1 } from '@/components/texts/typography/.partials/components/h1/component';
import { TypographyH1Props } from '@/components/texts/typography/.partials/components/h1/component.interface';
import { TypographyH2 } from '@/components/texts/typography/.partials/components/h2/component';
import { TypographyH2Props } from '@/components/texts/typography/.partials/components/h2/component.interface';
import { TypographyH3 } from '@/components/texts/typography/.partials/components/h3/component';
import { TypographyH3Props } from '@/components/texts/typography/.partials/components/h3/component.interface';
import { TypographyH4 } from '@/components/texts/typography/.partials/components/h4/component';
import { TypographyH4Props } from '@/components/texts/typography/.partials/components/h4/component.interface';
import { TypographyH5 } from '@/components/texts/typography/.partials/components/h5/component';
import { TypographyH5Props } from '@/components/texts/typography/.partials/components/h5/component.interface';
import { TypographyH6 } from '@/components/texts/typography/.partials/components/h6/component';
import { TypographyH6Props } from '@/components/texts/typography/.partials/components/h6/component.interface';

export const Typography = Object.assign(Component, {
  H1: TypographyH1,
  H2: TypographyH2,
  H3: TypographyH3,
  H4: TypographyH4,
  H5: TypographyH5,
  H6: TypographyH6,
  Body: TypographyBody,
  Description: TypographyDescription,
  Comment: TypographyComment,
  Code: TypographyCode,
});

export namespace Typography {
  export type Props = TypographyProps;

  export namespace H1 {
    export type Props = TypographyH1Props;
  }

  export namespace H2 {
    export type Props = TypographyH2Props;
  }

  export namespace H3 {
    export type Props = TypographyH3Props;
  }

  export namespace H4 {
    export type Props = TypographyH4Props;
  }

  export namespace H5 {
    export type Props = TypographyH5Props;
  }

  export namespace H6 {
    export type Props = TypographyH6Props;
  }

  export namespace Body {
    export type Props = TypographyBodyProps;
  }

  export namespace Description {
    export type Props = TypographyDescriptionProps;
  }

  export namespace Comment {
    export type Props = TypographyCommentProps;
  }

  export namespace Code {
    export type Props = TypographyCodeProps;
  }
}
