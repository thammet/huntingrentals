export default interface IRental {
    name: string,
    image: string,
    maxQuantity: number,
    currentQuantity: number,
    salePrice: number,
    rentPrice: number,
    setupPrice?: number
}