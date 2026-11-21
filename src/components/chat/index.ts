import { Chat as Component } from '@/components/chat/.partials/components/component';
import { ChatProps } from '@/components/chat/.partials/components/component.interface';
import { ChatComposer } from '@/components/chat/.partials/components/composer/component';
import { ChatComposerProps } from '@/components/chat/.partials/components/composer/component.interface';
import { ChatComposerIcon } from '@/components/chat/.partials/components/composer/icon/component';
import { ChatComposerIconProps } from '@/components/chat/.partials/components/composer/icon/component.interface';
import { ChatComposerTextarea } from '@/components/chat/.partials/components/composer/textarea/component';
import { ChatComposerTextareaProps } from '@/components/chat/.partials/components/composer/textarea/component.interface';
import { ChatMessageAvatar } from '@/components/chat/.partials/components/message/avatar/component';
import { ChatMessageAvatarProps } from '@/components/chat/.partials/components/message/avatar/component.interface';
import { ChatMessage } from '@/components/chat/.partials/components/message/component';
import { ChatMessageStatus } from '@/components/chat/.partials/components/message/component.enums';
import { ChatMessageProps } from '@/components/chat/.partials/components/message/component.interface';
import { ChatMessageFile } from '@/components/chat/.partials/components/message/file/component';
import { ChatMessageFileProps } from '@/components/chat/.partials/components/message/file/component.interface';
import { ChatMessageImage } from '@/components/chat/.partials/components/message/image/component';
import { ChatMessageImageProps } from '@/components/chat/.partials/components/message/image/component.interface';
import { ChatSeparator } from '@/components/chat/.partials/components/separator/component';
import { ChatSeparatorProps } from '@/components/chat/.partials/components/separator/component.interface';
import { ChatViewport } from '@/components/chat/.partials/components/viewport/component';
import { ChatViewportProps } from '@/components/chat/.partials/components/viewport/component.interface';

export const Chat = Object.assign(Component, {
  Viewport: Object.assign(ChatViewport, {
    Separator: ChatSeparator,
    Message: Object.assign(ChatMessage, {
      Avatar: ChatMessageAvatar,
      Image: ChatMessageImage,
      File: ChatMessageFile,
      ENUMS: {
        Status: ChatMessageStatus,
      },
    }),
  }),
  Composer: Object.assign(ChatComposer, {
    Icon: ChatComposerIcon,
    Textarea: ChatComposerTextarea,
  }),
});

export namespace Chat {
  export type Props = ChatProps;

  export namespace Viewport {
    export type Props = ChatViewportProps;

    export namespace Separator {
      export type Props = ChatSeparatorProps;
    }

    export namespace Message {
      export type Props = ChatMessageProps;

      export namespace Avatar {
        export type Props = ChatMessageAvatarProps;
      }

      export namespace Image {
        export type Props = ChatMessageImageProps;
      }

      export namespace File {
        export type Props = ChatMessageFileProps;
      }

      export namespace ENUMS {
        export type Status = ChatMessageStatus;
      }
    }
  }

  export namespace Composer {
    export type Props = ChatComposerProps;

    export namespace Icon {
      export type Props<C = 'button'> = ChatComposerIconProps<C>;
    }

    export namespace Textarea {
      export type Props = ChatComposerTextareaProps;
    }
  }
}
