export interface MenuItem {
  $id : string;
  MenuItemId : number;
  Type : string;
  ExternalReferenceID : number;
  Name : string;
  Description : string;
  DefaultItemId : number;
  ItemOrderingMode : number;
  DisplayName : string;
  BaseImageName : string;
  SalesItemIds : any;
  SalesGroups : any;
  PromoId : number;
  IsVisible : boolean;
  Price: number;
  PriceChanges : any;
  DaysOfWeekAvailable : any;
  CaloricServingUnit : string;
  Icons: any;
}

