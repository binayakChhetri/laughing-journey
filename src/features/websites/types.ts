export type PaymentGateway = 'credit_debit_card' | 'stripe' | 'paypal' | 'google_pay';

export interface WebsiteFormData {
  name: string;
  url: string;
  paymentGateways: PaymentGateway[];
}