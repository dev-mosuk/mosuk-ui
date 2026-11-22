import { TypographyCaption } from '@/components/typography/.partials/components/caption/component';
import { TypographyCaptionProps } from '@/components/typography/.partials/components/caption/component.interface';
import { Typography as Component } from '@/components/typography/.partials/components/component';
import { TypographyProps } from '@/components/typography/.partials/components/component.interface';
import { TypographyDetail } from '@/components/typography/.partials/components/detail/component';
import { TypographyDetailProps } from '@/components/typography/.partials/components/detail/component.interface';
import { TypographyFine } from '@/components/typography/.partials/components/fine/component';
import { TypographyFineProps } from '@/components/typography/.partials/components/fine/component.interface';
import { TypographyH1 } from '@/components/typography/.partials/components/h1/component';
import { TypographyH1Props } from '@/components/typography/.partials/components/h1/component.interface';
import { TypographyH2 } from '@/components/typography/.partials/components/h2/component';
import { TypographyH2Props } from '@/components/typography/.partials/components/h2/component.interface';
import { TypographyH3 } from '@/components/typography/.partials/components/h3/component';
import { TypographyH3Props } from '@/components/typography/.partials/components/h3/component.interface';
import { TypographyH4 } from '@/components/typography/.partials/components/h4/component';
import { TypographyH4Props } from '@/components/typography/.partials/components/h4/component.interface';
import { TypographyH5 } from '@/components/typography/.partials/components/h5/component';
import { TypographyH5Props } from '@/components/typography/.partials/components/h5/component.interface';
import { TypographyH6 } from '@/components/typography/.partials/components/h6/component';
import { TypographyH6Props } from '@/components/typography/.partials/components/h6/component.interface';
import { TypographyLead } from '@/components/typography/.partials/components/lead/component';
import { TypographyLeadProps } from '@/components/typography/.partials/components/lead/component.interface';
import { TypographyMeta } from '@/components/typography/.partials/components/meta/component';
import { TypographyMetaProps } from '@/components/typography/.partials/components/meta/component.interface';
import { TypographyText } from '@/components/typography/.partials/components/text/component';
import { TypographyTextProps } from '@/components/typography/.partials/components/text/component.interface';
import {
  TypographyAlign,
  TypographyColor,
  TypographyLineHeight,
  TypographySize,
  TypographyType,
  TypographyWeight,
} from '@/components/typography/.partials/enums/component.enums';

export const Typography = Object.assign(Component, {
  H1: TypographyH1,
  H2: TypographyH2,
  H3: TypographyH3,
  H4: TypographyH4,
  H5: TypographyH5,
  H6: TypographyH6,
  Lead: TypographyLead,
  Text: TypographyText,
  Detail: TypographyDetail,
  Meta: TypographyMeta,
  Caption: TypographyCaption,
  Fine: TypographyFine,
  ENUMS: {
    Type: TypographyType,
    Align: TypographyAlign,
    Size: TypographySize,
    Color: TypographyColor,
    Weight: TypographyWeight,
    LineHeight: TypographyLineHeight,
  },
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

  export namespace Lead {
    export type Props = TypographyLeadProps;
  }

  export namespace Text {
    export type Props = TypographyTextProps;
  }

  export namespace Detail {
    export type Props = TypographyDetailProps;
  }

  export namespace Meta {
    export type Props = TypographyMetaProps;
  }

  export namespace Caption {
    export type Props = TypographyCaptionProps;
  }

  export namespace Fine {
    export type Props = TypographyFineProps;
  }
}
