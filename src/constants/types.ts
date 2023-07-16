import { ReactNode } from 'react';
import { CARD_NAMES_ENUM } from './cards';

export interface ICardConfigsAdvantages {
  title: string;
  descriptionPart1: string;
  descriptionPart2: string;
  descriptionPart3: string;
  icon: ReactNode;
}

export interface ICardConfigsExtraAdvantages {
  title: string;
  icon: ReactNode;
  description: string;
}

export interface ICardConfigsItem {
  advantages: ICardConfigsAdvantages[];
  extraAdvantages: ICardConfigsExtraAdvantages[];
}

export type ICardConfigs = {
  [key in CARD_NAMES_ENUM]: ICardConfigsItem;
};
