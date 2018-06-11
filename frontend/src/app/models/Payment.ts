export interface SavedPayment{
  $id: string;
  AccountId: string;
  AccountNumber: string;
  ExpirationDate: string;
  MaskedAccountNumber: string;
  MaskedExpirationDate: string;
  MethodType: number;
  ProviderType: number;
  SecurityCode: string;
  ZipCode: string;
}

export interface RailsSavePayment{
  payment: {
    AccountNumber: string;
    ExpirationDate: string;
    PaymentMethodType: number;
  }
}