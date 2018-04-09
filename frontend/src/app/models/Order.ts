export interface Order{
  SiteId : number; // : Get or set the SiteId property ,
  OrderId : number; // Get or set the OrderId property ,
  MenuId : number; // Get or set the MenuId property ,
  DesignId : number; // Get or set the DesignId property ,
  OrderMode : string; // ['Pickup' or 'Delivery' or 'CurbSide'] : Get or set the OrderMode property ,
  LastModifiedTimestamp : string; // Get or set the LastModifiedTimestamp property ,
  Status : string; // ['Unordered' or 'Validated' or 'Submitted' or 'PendingOperation' or 'Deleted' or 'CreditProcessed' or 'SubmittedAndCanceled' or 'SubmittedWithDepositFailure'] : Get or set the Status property ,
  PromiseDateTime : string; // Get or set the PromiseDateTime property ,
  PaymentMode : string; // ['Unknown' or 'ProvidedToSite' or 'PaymentDeferred' or 'PaidOnline'] : Get or set the PaymentMode property ,
  Customer : any; // (OrderCustomer , optional) : Get or set the Customer property ,
  CustomerAddressForOrder : any; // (CustomerAddress , optional) : Get or set the CustomerAddressForOrder property ,
  LineItems : any; // (array[ExternalLineItem] , optional) : Get or set the LineItems property ,
  SubTotalAmount : number; // Get or set the SubTotalAmount property ,
  TaxAmount : number; // Get or set the TaxAmount property ,
  PaymentAmount : number; // Get or set the PaymentAmount property ,
  TotalAmount : number; // Get or set the TotalAmount property ,
  BalanceDueAmount : number; // Get or set the BalanceDueAmount property ,
  LoyaltyCardNumber : string; // Get or set the loyalty card number sent with the order ,
  OrderSource : string; // ['Web' or 'Mobile' or 'MobileWeb'] : Get or set the OrderSource property ,
  Destination : string; // ['DestinationNull' or 'MobileDineIn' or 'MobileCarryOut' or 'MobileCurbSide' or 'MobileDriveThru' or 'CateringPickup' or 'CateringDelivery'] : Describes where the order is suppose to be at ,
  NextItemLineNumber : number; // Get or set the NextItemLineNumber property ,
  SpecialInstructions : string; // Get or set the SpecialInstructions property ,
  SubmitCommandId : any; // (Guid , optional) : Get or set the SubmitCommandId property ,
  SubmitOrderNumber : number; // Get or set the SubmitOrderNumber property ,
  SubmitMessage : string; // Get or set the SubmitMessage property ,
  CreationDateTime : string; // Get or set the CreationDateTime property ,
  CompId : number; // Get or set the CompId property ,
  CompValue : number; // Get or set the CompValue property ,
  CompName : string; // Get or set the CompName property ,
  DeliveryFeeAmount : number; // Get or set the DeliveryFeeAmount property ,
  TaxJurisdictionId : number; // Get or set the TaxJurisdictionId property ,
  SubmitOrderId : number; // Get or set the SubmitOrderId property ,
  IsFailover : boolean; // Get or set the IsFailover property ,
  ReferenceNumber : number; // Gets or sets the reference number. ,
  ComboItems : any; //(array[ComboItem] , optional) : A list of combo items in the order ,
  SVCAmount : number; // Stored value card amount applied to the order ,
  Payments : any; //(array[ExternalPayment] , optional) : List of payments assigned to this order
  NextOrderOfProcessing : number; // The order of processing that will be given to the next payment added to the order
}