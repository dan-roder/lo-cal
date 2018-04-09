export interface LineItemModifier{
  SequenceNumber : number; // (integer , optional) : The internal index for the modfiers for an line item ,
  ItemOptionGroupId : number; // (integer , optional) : The group id in the ItemOptionGroups table ,
  SalesItemOptionId : number; // (integer , optional) : The option id in the SalesItemOptions table ,
  Action : string; // (enum , optional) = ['Default' or 'Add' or 'No' or 'Extra' or 'Side' or 'Light' or 'Everything' or 'Plain'] : Tells the system how the modifier should be applied to the line item ,
  DefaultAction : string; // (enum , optional) = ['Default' or 'Add' or 'No' or 'Extra' or 'Side' or 'Light' or 'Everything' or 'Plain'] : The default way how the modifier is added to the item ,
  ItemLineNumber : number; // (integer , optional) : The line item index where this modifier is to be applied to use 0 if the parent item is a modifier ,
  ParentSequenceNumber : number; // (integer , optional) : The parent internal index for the modifier where this modifier is to be applied to ,
  Quantity : number; // (integer , optional) : The number of modifiers that should be applied ,
  IsOnEntireItem : boolean; // (boolean , optional) : Value to match up the Pizza configuration, if no value is provided defaults to true ,
  IsOnSection1 : boolean; // (boolean , optional) : Value to match up the Pizza configuration, if no value is provided defaults to false ,
  IsOnSection2 : boolean; // (boolean , optional) : Value to match up the Pizza configuration, if no value is provided defaults to false ,
  IsOnSection3 : boolean; // (boolean , optional) : Value to match up the Pizza configuration, if no value is provided defaults to false ,
  IsOnSection4 : boolean; // (boolean , optional) : Value to match up the Pizza configuration, if no value is provided defaults to false ,
  FreeQuantity : number; // (integer , optional) : The number of modifiers that are to be free ,
  Name : string; // (string , optional) : The name of the modifier ,
  UnitPrice : number; // (number , optional) : The price for a single modiifer ,
  ExtendedPrice : number; // (number , optional) : The total price of this modifier (Unit Price * Quantity) ,
  PosModifierGroupId : number; // (integer , optional) : The POS Modifier Group Id ,
  PosModifierId : number; // (integer , optional) : The POS Modifier id ,
  Status : string; // (enum , optional) = ['Normal' or 'UnknownError'] : The status of the modifier ,
  Modifiers : Array<LineItemModifier>; //(array[ExternalLineItemModifier] , optional) : Allows the user add modifiers to another modifier
}