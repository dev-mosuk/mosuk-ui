import { Chat as Component } from '@/components/collections/chat/.partials/components/component';
import { ChatProps } from '@/components/collections/chat/.partials/components/component.interface';
import { ChatComposerActions } from '@/components/collections/chat/.partials/components/composer/actions/component';
import { ChatComposerActionsProps } from '@/components/collections/chat/.partials/components/composer/actions/component.interface';
import { ChatComposerAttach } from '@/components/collections/chat/.partials/components/composer/attach/component';
import { ChatComposerAttachProps } from '@/components/collections/chat/.partials/components/composer/attach/component.interface';
import { ChatComposer } from '@/components/collections/chat/.partials/components/composer/component';
import { ChatComposerProps } from '@/components/collections/chat/.partials/components/composer/component.interface';
import { ChatComposerSend } from '@/components/collections/chat/.partials/components/composer/send/component';
import { ChatComposerSendProps } from '@/components/collections/chat/.partials/components/composer/send/component.interface';
import { ChatComposerTextarea } from '@/components/collections/chat/.partials/components/composer/textarea/component';
import { ChatComposerTextareaProps } from '@/components/collections/chat/.partials/components/composer/textarea/component.interface';
import { ChatMessageAvatar } from '@/components/collections/chat/.partials/components/message/avatar/component';
import { ChatMessageAvatarProps } from '@/components/collections/chat/.partials/components/message/avatar/component.interface';
import { ChatMessage } from '@/components/collections/chat/.partials/components/message/component';
import { ChatMessageStatus } from '@/components/collections/chat/.partials/components/message/component.enums';
import { ChatMessageProps } from '@/components/collections/chat/.partials/components/message/component.interface';
import { ChatMessageFile } from '@/components/collections/chat/.partials/components/message/file/component';
import { ChatMessageFileProps } from '@/components/collections/chat/.partials/components/message/file/component.interface';
import { ChatMessageImage } from '@/components/collections/chat/.partials/components/message/image/component';
import { ChatMessageImageProps } from '@/components/collections/chat/.partials/components/message/image/component.interface';
import { ChatSeparator } from '@/components/collections/chat/.partials/components/separator/component';
import { ChatSeparatorProps } from '@/components/collections/chat/.partials/components/separator/component.interface';

export const Chat = Object.assign(Component, {
  Separator: ChatSeparator,
  Message: Object.assign(ChatMessage, {
    Avatar: ChatMessageAvatar,
    Image: ChatMessageImage,
    File: ChatMessageFile,
    ENUMS: {
      Status: ChatMessageStatus,
    },
  }),
  Composer: Object.assign(ChatComposer, {
    Attach: ChatComposerAttach,
    Textarea: ChatComposerTextarea,
    Actions: ChatComposerActions,
    Send: ChatComposerSend,
  }),
});

export namespace Chat {
  export type Props = ChatProps;

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

  export namespace Composer {
    export type Props = ChatComposerProps;

    export namespace Attach {
      export type Props = ChatComposerAttachProps;
    }

    export namespace Textarea {
      export type Props = ChatComposerTextareaProps;
    }

    export namespace Actions {
      export type Props = ChatComposerActionsProps;
    }

    export namespace Send {
      export type Props = ChatComposerSendProps;
    }
  }
}
