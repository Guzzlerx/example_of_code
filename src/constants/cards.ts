export enum CARD_TYPES_ENUM {
  DEBIT = 'DEBIT',
  CREDIT = 'CREDIT',
  DEPOSIT = 'DEPOSIT',
}

export enum CARD_STATUSES_ENUM {
  ACTIVE = 'ACTIVE',
  BLOCKED = 'BLOCKED',
  EXPIRED = 'EXPIRED',
}

export enum PAYMENT_SYSTEMS_ENUM {
  VISA = 'VISA',
  MASTERCARD = 'MASTERCARD',
}

export enum CARD_NAMES_ENUM {
  UNIVERSAL_CARD = 'universal_card',
  SMART_PAYOUT = 'smart_payout',
  PURCHASE_PLUS = 'purchase_plus',
  PERSONAL_LOAN = 'personal_loan',
  INFINITY_CLASSIC = 'infinity_classic',
  INFINITY_GOLD = 'infinity_gold',
  INFINITY_PREMIUM = 'infinity_premium',
}

export enum CURRENCY_CODES_ENUM {
  EUR = 'EUR',
  USD = 'USD',
  KZT = 'KZT',
  GBP = 'GBP',
  CHF = 'CHF',
  PLN = 'PLN',
  RUB = 'RUB',
}

export const MAX_CARDS_TO_SHOW = 3;

export enum CARD_SIZE_ENUM {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
  EXTRA_SMALL = 'extraSmall',
}
