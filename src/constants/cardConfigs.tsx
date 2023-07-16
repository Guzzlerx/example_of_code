import { ReactComponent as ThreeDSecure } from 'assets/icons/cardProductBenefits/3d_secure.svg';
import { ReactComponent as AdditionalCashback } from 'assets/icons/cardProductBenefits/additional_cashback.svg';
import { ReactComponent as ATM } from 'assets/icons/cardProductBenefits/atm.svg';
import { ReactComponent as GiftCard } from 'assets/icons/cardProductBenefits/card_giftcard.svg';
import { ReactComponent as Graph } from 'assets/icons/cardProductBenefits/deposit_graph.svg';
import { ReactComponent as EarnUp } from 'assets/icons/cardProductBenefits/earn_up.svg';
import { ReactComponent as Currency } from 'assets/icons/cardProductBenefits/euro_currency.svg';
import { ReactComponent as EventTicket } from 'assets/icons/cardProductBenefits/event_ticket.svg';
import { ReactComponent as ExchangeRates } from 'assets/icons/cardProductBenefits/excellent_rates.svg';
import { ReactComponent as Restaurant } from 'assets/icons/cardProductBenefits/free_restaurant.svg';
import { ReactComponent as GracePeriod30 } from 'assets/icons/cardProductBenefits/grace_period.svg';
import { ReactComponent as GracePeriod60 } from 'assets/icons/cardProductBenefits/grace_period_60.svg';
import { ReactComponent as MoneyLimit } from 'assets/icons/cardProductBenefits/local_atm.svg';
import { ReactComponent as Lounge } from 'assets/icons/cardProductBenefits/lounge.svg';
import { ReactComponent as Insurance } from 'assets/icons/cardProductBenefits/medical_services.svg';
import { ReactComponent as MileProgram } from 'assets/icons/cardProductBenefits/mile_program.svg';
import { ReactComponent as Notifications } from 'assets/icons/cardProductBenefits/notifications.svg';
import { ReactComponent as Overdraft } from 'assets/icons/cardProductBenefits/overdraft.svg';
import { ReactComponent as Transfer } from 'assets/icons/cardProductBenefits/transfer.svg';
import { ReactComponent as Uber } from 'assets/icons/cardProductBenefits/uber.svg';
import { ReactComponent as VirtualCard } from 'assets/icons/cardProductBenefits/virtual_card.svg';
import { CARD_NAMES_ENUM } from './cards';
import { ICardConfigs } from './types';

export const CARD_CONFIGS: ICardConfigs = {
  [CARD_NAMES_ENUM.UNIVERSAL_CARD]: {
    advantages: [
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.first_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.first_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.first_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.first_advantage.description_3`,
        icon: <GiftCard />,
      },
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.second_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.second_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.second_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.second_advantage.description_3`,
        icon: <MoneyLimit />,
      },
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.third_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.third_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.third_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.third_advantage.description_3`,
        icon: <ATM />,
      },
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.fourth_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.fourth_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.fourth_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.fourth_advantage.description_3`,
        icon: <Transfer />,
      },
    ],
    extraAdvantages: [
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.first_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.first_advantage.description`,
        icon: <Currency />,
      },
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.second_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.second_advantage.description`,
        icon: <MileProgram />,
      },
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.third_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.third_advantage.description`,
        icon: <Graph />,
      },
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.fourth_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.fourth_advantage.description`,
        icon: <GracePeriod30 />,
      },
    ],
  },
  [CARD_NAMES_ENUM.INFINITY_CLASSIC]: {
    advantages: [
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.first_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.first_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.first_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.first_advantage.description_3`,
        icon: <ThreeDSecure />,
      },
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.second_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.second_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.second_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.second_advantage.description_3`,
        icon: <ATM />,
      },
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.third_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.third_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.third_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.third_advantage.description_3`,
        icon: <Insurance />,
      },
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.fourth_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.fourth_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.fourth_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.fourth_advantage.description_3`,
        icon: <Overdraft />,
      },
    ],
    extraAdvantages: [
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.first_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.first_advantage.description`,
        icon: <GiftCard />,
      },
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.second_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.second_advantage.description`,
        icon: <ExchangeRates />,
      },
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.third_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.third_advantage.description`,
        icon: <Transfer />,
      },
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.fourth_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_CLASSIC}.icons.fourth_advantage.description`,
        icon: <Notifications />,
      },
    ],
  },
  [CARD_NAMES_ENUM.INFINITY_GOLD]: {
    advantages: [
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.first_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.first_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.first_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.first_advantage.description_3`,
        icon: <MoneyLimit />,
      },
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.second_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.second_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.second_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.second_advantage.description_3`,
        icon: <Transfer />,
      },
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.third_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.third_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.third_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.third_advantage.description_3`,
        icon: <GracePeriod30 />,
      },
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.fourth_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.fourth_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.fourth_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.fourth_advantage.description_3`,
        icon: <Overdraft />,
      },
    ],
    extraAdvantages: [
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.first_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.first_advantage.description`,
        icon: <EventTicket />,
      },
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.second_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.second_advantage.description`,
        icon: <Graph />,
      },
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.third_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.third_advantage.description`,
        icon: <Uber />,
      },
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.fourth_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_GOLD}.icons.fourth_advantage.description`,
        icon: <Restaurant />,
      },
    ],
  },
  [CARD_NAMES_ENUM.INFINITY_PREMIUM]: {
    advantages: [
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.first_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.first_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.first_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.first_advantage.description_3`,
        icon: <ThreeDSecure />,
      },
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.second_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.second_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.second_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.second_advantage.description_3`,
        icon: <ATM />,
      },
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.third_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.third_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.third_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.third_advantage.description_3`,
        icon: <Insurance />,
      },
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.fourth_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.fourth_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.fourth_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.fourth_advantage.description_3`,
        icon: <AdditionalCashback />,
      },
    ],
    extraAdvantages: [
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.first_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.first_advantage.description`,
        icon: <Currency />,
      },
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.second_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.second_advantage.description`,
        icon: <GracePeriod60 />,
      },
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.third_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.third_advantage.description`,
        icon: <Graph />,
      },
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.fourth_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.fourth_advantage.description`,
        icon: <Lounge />,
      },
    ],
  },
  [CARD_NAMES_ENUM.SMART_PAYOUT]: {
    advantages: [
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.first_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.first_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.first_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.first_advantage.description_3`,
        icon: <ThreeDSecure />,
      },
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.second_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.second_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.second_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.second_advantage.description_3`,
        icon: <ATM />,
      },
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.third_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.third_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.third_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.third_advantage.description_3`,
        icon: <Transfer />,
      },
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.fourth_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.fourth_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.fourth_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.fourth_advantage.description_3`,
        icon: <AdditionalCashback />,
      },
    ],
    extraAdvantages: [
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.first_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.first_advantage.description`,
        icon: <EarnUp />,
      },
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.second_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.second_advantage.description`,
        icon: <Overdraft />,
      },
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.third_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.third_advantage.description`,
        icon: <MileProgram />,
      },
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.fourth_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.SMART_PAYOUT}.icons.fourth_advantage.description`,
        icon: <Notifications />,
      },
    ],
  },
  [CARD_NAMES_ENUM.PURCHASE_PLUS]: {
    advantages: [
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.first_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.first_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.first_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.first_advantage.description_3`,
        icon: <GiftCard />,
      },
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.second_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.second_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.second_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.second_advantage.description_3`,
        icon: <ATM />,
      },
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.third_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.third_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.third_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.third_advantage.description_3`,
        icon: <Transfer />,
      },
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.fourth_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.fourth_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.fourth_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.fourth_advantage.description_3`,
        icon: <MoneyLimit />,
      },
    ],
    extraAdvantages: [
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.first_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.first_advantage.description`,
        icon: <VirtualCard />,
      },
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.second_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.second_advantage.description`,
        icon: <EarnUp />,
      },
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.third_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.third_advantage.description`,
        icon: <Overdraft />,
      },
      {
        title: `card_details.extra_advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.fourth_advantage.image_title`,
        description: `card_details.extra_advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.fourth_advantage.description`,
        icon: <Notifications />,
      },
    ],
  },
  [CARD_NAMES_ENUM.PERSONAL_LOAN]: {
    advantages: [
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.first_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.first_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.first_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.first_advantage.description_3`,
        icon: <GiftCard />,
      },
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.second_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.second_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.second_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.second_advantage.description_3`,
        icon: <MoneyLimit />,
      },
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.third_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.third_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.third_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.third_advantage.description_3`,
        icon: <ATM />,
      },
      {
        title: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.fourth_advantage.image_title`,
        descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.fourth_advantage.description_1`,
        descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.fourth_advantage.description_2`,
        descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.fourth_advantage.description_3`,
        icon: <Transfer />,
      },
    ],
    extraAdvantages: [],
  },
};
