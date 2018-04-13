import { LineItem } from "@local/models/LineItem";
import { Customer, CustomerAddress } from "@local/models/Customer";

export interface Order{
  SiteId?: number; //  (integer , optional) : Get or set the SiteId property ,
  OrderId?: number; //  (integer , optional) : Get or set the OrderId property ,
  MenuId?: number; //  (integer , optional) : Get or set the MenuId property ,
  DesignId?: number; //  (integer , optional) : Get or set the DesignId property ,
  OrderMode?: string; //  (enum , optional) = ['Pickup' or 'Delivery' or 'CurbSide'] : Get or set the OrderMode property ,
  LastModifiedTimestamp?: string; //  (string , optional) : Get or set the LastModifiedTimestamp property ,
  Status?: string; //  (enum , optional) = ['Unordered' or 'Validated' or 'Submitted' or 'PendingOperation' or 'Deleted' or 'CreditProcessed' or 'SubmittedAndCanceled' or 'SubmittedWithDepositFailure'] : Get or set the Status property ,
  PromiseDateTime?: string; //  (string , optional) : Get or set the PromiseDateTime property ,
  PaymentMode?: string; //  (enum , optional) = ['Unknown' or 'ProvidedToSite' or 'PaymentDeferred' or 'PaidOnline'] : Get or set the PaymentMode property ,
  Customer?: Customer; // (OrderCustomer , optional) : Get or set the Customer property ,
  CustomerAddressForOrder?: CustomerAddress; // (CustomerAddress , optional) : Get or set the CustomerAddressForOrder property ,
  LineItems?: Array<LineItem>; // (array[ExternalLineItem] , optional) : Get or set the LineItems property ,
  SubTotalAmount?: number; //  (number , optional) : Get or set the SubTotalAmount property ,
  TaxAmount?: number; //  (number , optional) : Get or set the TaxAmount property ,
  PaymentAmount?: number; //  (number , optional) : Get or set the PaymentAmount property ,
  TotalAmount?: number; //  (number , optional) : Get or set the TotalAmount property ,
  BalanceDueAmount?: number; //  (number , optional) : Get or set the BalanceDueAmount property ,
  LoyaltyCardNumber?: string; //  (string , optional) : Get or set the loyalty card number sent with the order ,
  OrderSource?: string; //  (enum , optional) = ['Web' or 'Mobile' or 'MobileWeb'] : Get or set the OrderSource property ,
  Destination?: string; //  (enum , optional) = ['DestinationNull' or 'MobileDineIn' or 'MobileCarryOut' or 'MobileCurbSide' or 'MobileDriveThru' or 'CateringPickup' or 'CateringDelivery'] : Describes where the order is suppose to be at ,
  NextItemLineNumber?: number; //  (integer , optional) : Get or set the NextItemLineNumber property ,
  SpecialInstructions?: string; //  (string , optional) : Get or set the SpecialInstructions property ,
  SubmitCommandId?: string; //  (Guid , optional) : Get or set the SubmitCommandId property ,
  SubmitOrderNumber?: number; //  (integer , optional) : Get or set the SubmitOrderNumber property ,
  SubmitMessage?: string; //  (string , optional) : Get or set the SubmitMessage property ,
  CreationDateTime?: string; //  (string , optional) : Get or set the CreationDateTime property ,
  CompId?: number; //  (integer , optional) : Get or set the CompId property ,
  CompValue?: number; //  (number , optional) : Get or set the CompValue property ,
  CompName?: string; //  (string , optional) : Get or set the CompName property ,
  DeliveryFeeAmount?: number; //  (number , optional) : Get or set the DeliveryFeeAmount property ,
  TaxJurisdictionId?: number; //  (integer , optional) : Get or set the TaxJurisdictionId property ,
  SubmitOrderId?: number; //  (integer , optional) : Get or set the SubmitOrderId property ,
  IsFailover?: boolean; //  (boolean , optional) : Get or set the IsFailover property ,
  ReferenceNumber?: number; //  (integer , optional) : Gets or sets the reference number. ,
  ComboItems?: Array<ComboItem>; // (array[ComboItem] , optional) : A list of combo items in the order ,
  SVCAmount?: number; //  (number , optional) : Stored value card amount applied to the order ,
  Payments?: Array<ExternalPayment>; // (array[ExternalPayment] , optional) : List of payments assigned to this order ,
  NextOrderOfProcessing?: number; //  (integer , optional) : The order of processing that will be given to the next payment added to the order
}

export interface ComboItem{
  PromoId?: number; // (integer , optional) : the promo id ,
  PromoType?: string; // (enum , optional) = ['Unknown' or 'BOGO' or 'Combo' or 'Coupon' or 'NewPrice' or 'CheckReduction' or 'QuickCombo' or 'PackagePromo'] : The combo type of the combo item ,
  Price?: number; // (number , optional) : price of the combo item ,
  WebSalesGroupLineItems?: Array<OrderWebSalesGroup>; // (array[OrderWebSalesGroup] , optional) : A List of web sales group items in the combo item
}

export interface OrderWebSalesGroup{
  WebSalesGroupId?: number; // (integer , optional) : WebSalesGroupId, this pertains mainly to Menu Configurator where sales items are grouped ,
  LineItemNumber?: number; // (integer , optional) : LineItem Number, relates back to the line item object of the Order ,
  GroupLineId?: number; // (integer , optional) : LineItem Number, random unique lineId of the combo generated on add items This will be used to group the combos items together ,
  MenuItemName?: string; // (string , optional) : MenuItem Name ,
  SalesItemId?: number; // (integer , optional) : The item id in the SalesItemId table
}

export interface ExternalPayment{

}