export interface IOrder {
  OrderId: number,
  OrderDate: Date,
  UserId: number,
  Products: [{
    ProductId: number,
    Quantity: number
  }],
  PaymentType: string
}
