import { LinkModel } from '@app/core/model/link.model';
import { ImageModel } from '@app/core/model/image.model';

export interface ModalLinkModel {
  title: string;
  _editable?: string;
  component?: string;
  leftBlock: BlockModalLinkModal[];
  rightBlock: LinkModel[];
}

export interface BlockModalLinkModal {
  title: string;
  _editable?: string;
  component?: string;
  image: ImageModel;
  description: string;
  url: string;
  background: string;
}
