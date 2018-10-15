export interface LineItem{
  LineItemNumber?: number; // (integer , optional) : The internal index for the line items for the order ,
  SalesItemId?: number; // (integer , optional) : The item id in the SalesItemId table ,
  MenuItemId?: number; // (integer , optional) : The item id in the MenuItem table ,
  CompId?: number; // (integer , optional) : The id for the comp that is to be applied to only this item ,
  Name?: string; // (string , optional) : The name of the item ,
  ShortDescription?: string; // (string , optional) : The short description of the Pub Sales Item associated with this line item ,
  SpecialInstructions?: string; // (string , optional) : Special instructions for this item ,
  RecipientName?: string; // (string , optional) : The person that is suppose to receive this specific item ,
  ItemOrderingMode?: string; // (enum , optional) =['Normal' or 'Pizza' or 'QtyModifierItem' or 'BuildYourOwn' or 'ModifierDeterminesQty']?:  Tells the POS how to apply the modifiers to the item ,
  Section1Type?: string; // (enum , optional) =['Unassigned' or 'Half' or 'Third' or 'Quarter' or 'Left' or 'Right'] : Pizza configuration _only used for Pizza items_ ,
  Section2Type?: string; // (enum , optional) =['Unassigned' or 'Half' or 'Third' or 'Quarter' or 'Left' or 'Right'] : Pizza configuration _only used for Pizza items_ ,
  Section3Type?: string; // (enum , optional) =['Unassigned' or 'Half' or 'Third' or 'Quarter' or 'Left' or 'Right'] : Pizza configuration _only used for Pizza items_ ,
  Section4Type?: string; // (enum , optional) =['Unassigned' or 'Half' or 'Third' or 'Quarter' or 'Left' or 'Right'] : Pizza configuration _only used for Pizza items_ ,
  Modifiers?: Array<LineItemModifier>; // (array[ExternalLineItemModifier] , optional) : The modfiers for the item ,
  UnitPrice?: number; // (number , optional) = The price of a single item ,
  ExtendedPrice? : number; // (number , optional) = The total price of the item (Unit Price * Quantity) ,
  Quantity?: number; // (integer , optional) : The number of items ,
  NextModifierSequenceNumber?: number; // (integer , optional) : The internal index for the modifiers for this line item ,
  PosItemId?: number; // (integer , optional) : The Id of the item at the site ,
  CompValue?: number; // (number , optional) = The comp value if there is a price
  cartImage?: string; // Temporary location for cart image string
  caloricValue?: number;
  returnUrl?: string;
}

export interface LineItemModifier{
  SequenceNumber?: number; // (integer , optional) : The internal index for the modfiers for an line item ,
  ItemOptionGroupId: number; // (integer , optional) : The group id in the ItemOptionGroups table ,
  SalesItemOptionId: number; // (integer , optional) : The option id in the SalesItemOptions table ,
  ModifierId: number;
  Action?: string; // (enum , optional) = ['Default' or 'Add' or 'No' or 'Extra' or 'Side' or 'Light' or 'Everything' or 'Plain'] : Tells the system how the modifier should be applied to the line item ,
  DefaultAction?: string; // (enum , optional) = ['Default' or 'Add' or 'No' or 'Extra' or 'Side' or 'Light' or 'Everything' or 'Plain'] : The default way how the modifier is added to the item ,
  ItemLineNumber?: number; // (integer , optional) : The line item index where this modifier is to be applied to use 0 if the parent item is a modifier ,
  ParentSequenceNumber?: number; // (integer , optional) : The parent internal index for the modifier where this modifier is to be applied to ,
  Quantity?: number; // (integer , optional) : The number of modifiers that should be applied ,
  IsOnEntireItem?: boolean; // (boolean , optional) : Value to match up the Pizza configuration, if no value is provided defaults to true ,
  IsOnSection1?: boolean; // (boolean , optional) : Value to match up the Pizza configuration, if no value is provided defaults to false ,
  IsOnSection2?: boolean; // (boolean , optional) : Value to match up the Pizza configuration, if no value is provided defaults to false ,
  IsOnSection3?: boolean; // (boolean , optional) : Value to match up the Pizza configuration, if no value is provided defaults to false ,
  IsOnSection4?: boolean; // (boolean , optional) : Value to match up the Pizza configuration, if no value is provided defaults to false ,
  FreeQuantity?: number; // (integer , optional) : The number of modifiers that are to be free ,
  Name?: string; // (string , optional) : The name of the modifier ,
  UnitPrice?: number; // (number , optional) : The price for a single modiifer ,
  ExtendedPrice?: number; // (number , optional) : The total price of this modifier (Unit Price * Quantity) ,
  PosModifierGroupId?: number; // (integer , optional) : The POS Modifier Group Id ,
  PosModifierId?: number; // (integer , optional) : The POS Modifier id ,
  Status?: string; // (enum , optional) = ['Normal' or 'UnknownError'] : The status of the modifier ,
  Modifiers?: Array<LineItemModifier>; //(array[ExternalLineItemModifier] , optional) : Allows the user add modifiers to another modifier
}