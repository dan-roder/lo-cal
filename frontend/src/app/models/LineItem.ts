import { LineItemModifier } from "@local/models/LineItemModifier";

export interface LineItem{
  LineItemNumber : number; // (integer , optional) : The internal index for the line items for the order ,
  SalesItemId : number; // (integer , optional) : The item id in the SalesItemId table ,
  MenuItemId : number; // (integer , optional) : The item id in the MenuItem table ,
  CompId : number; // (integer , optional) : The id for the comp that is to be applied to only this item ,
  Name : string; // (string , optional) : The name of the item ,
  ShortDescription : string; // (string , optional) : The short description of the Pub Sales Item associated with this line item ,
  SpecialInstructions : string; // (string , optional) : Special instructions for this item ,
  RecipientName : string; // (string , optional) : The person that is suppose to receive this specific item ,
  ItemOrderingMode : string; // (enum , optional) =['Normal' or 'Pizza' or 'QtyModifierItem' or 'BuildYourOwn' or 'ModifierDeterminesQty'] : Tells the POS how to apply the modifiers to the item ,
  Section1Type : string; // (enum , optional) =['Unassigned' or 'Half' or 'Third' or 'Quarter' or 'Left' or 'Right'] : Pizza configuration _only used for Pizza items_ ,
  Section2Type : string; // (enum , optional) =['Unassigned' or 'Half' or 'Third' or 'Quarter' or 'Left' or 'Right'] : Pizza configuration _only used for Pizza items_ ,
  Section3Type : string; // (enum , optional) =['Unassigned' or 'Half' or 'Third' or 'Quarter' or 'Left' or 'Right'] : Pizza configuration _only used for Pizza items_ ,
  Section4Type : string; // (enum , optional) =['Unassigned' or 'Half' or 'Third' or 'Quarter' or 'Left' or 'Right'] : Pizza configuration _only used for Pizza items_ ,
  Modifiers : Array<LineItemModifier>; // (array[ExternalLineItemModifier] , optional) : The modfiers for the item ,
  UnitPrice : number; // (number , optional) = The price of a single item ,
  ExtendedPrice : number; // (number , optional) = The total price of the item (Unit Price * Quantity) ,
  Quantity : number; // (integer , optional) : The number of items ,
  NextModifierSequenceNumber : number; // (integer , optional) : The internal index for the modifiers for this line item ,
  PosItemId : number; // (integer , optional) : The Id of the item at the site ,
  CompValue : number; // (number , optional) = The comp value if there is a price
}