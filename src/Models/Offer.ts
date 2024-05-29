export interface Offer {
    id: string,
    name: string,
    imageUrl: string,
    items: OfferItem[],
    days: number
}

export interface OfferItem {
    id: string,
    name: string,
    imageUrl: string,
    currentQuantity: number,
    maxQuantity: number,
    price: number
}