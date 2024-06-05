import { Offer, OfferItem } from "../Models/Offer";
import { uuidv4 } from "../Utis";


const groundBlindOfferItem: OfferItem = {
    id: uuidv4(),
    name: 'Layout Blind',
    imageUrl: 'goosedecoy.png',
    currentQuantity: 1,
    maxQuantity: 2,
    price: 200,
};

const aFramedOfferItem: OfferItem = {
  id: uuidv4(),
  name: 'A Frame',
  imageUrl: 'decoys/aframe.jpg',
  currentQuantity: 1,
  maxQuantity: 2,
  price: 200,
};

export const offers: Offer[] = [
    {
      id: uuidv4(),
      name: 'Geese',
      imageUrl: 'geeseflying.png',
      days: 1,
      items: [
        {
          id: uuidv4(),
          name: 'Full Body Decoy',
          imageUrl: 'decoys/fullbodydecoyswide.jpg',
          currentQuantity: 50,
          maxQuantity: 100,
          price: 15,
        },
        {
          id: uuidv4(),
          name: 'Socks',
          imageUrl: 'decoys/allsockswiderighthigh.jpg',
          currentQuantity: 200,
          maxQuantity: 500,
          price: 3.5,
        },
        groundBlindOfferItem,
        aFramedOfferItem
      ]
    },
    // {
    //   id: uuidv4(),
    //   name: 'Deer',
    //   imageUrl: 'deer.jpg',
    //   days: 1,
    //   items: [
        
    //     {
    //       id: uuidv4(),
    //       name: 'Mallard Full Body',
    //       imageUrl: 'goosedecoy.png',
    //       currentQuantity: 100,
    //       maxQuantity: 100,
    //       price: 1,
    //     },
    //     {
    //       id: uuidv4(),
    //       name: 'Mojo Full Body',
    //       imageUrl: 'goosedecoy.png',
    //       currentQuantity: 10,
    //       maxQuantity: 10,
    //       price: 1,
    //     },
    //     blindsOfferItem
    //   ]
    // },
  //   {
  //     id: uuidv4(),
  //     name: 'Turkey',
  //     imageUrl: 'turkey.jpg',
  //     days: 1,
  //     items: [
  //       {
  //         id: uuidv4(),
  //         name: 'Hen Decoy',
  //         imageUrl: 'goosedecoy.png',
  //         currentQuantity: 2,
  //         maxQuantity: 2,
  //         price: 15,
  //       },
  //       {
  //         id: uuidv4(),
  //         name: 'Jake Decoy',
  //         imageUrl: 'goosedecoy.png',
  //         currentQuantity: 10,
  //         maxQuantity: 10,
  //         price: 15,
  //       },
  //       {
  //         id: uuidv4(),
  //         name: 'Tom Decoy',
  //         imageUrl: 'goosedecoy.png',
  //         currentQuantity: 10,
  //         maxQuantity: 10,
  //         price: 15,
  //       },
  //       groundBlindOfferItem
  //     ]
  //   },
  //   {
  //     id: uuidv4(),
  //     name: 'Duck',
  //     imageUrl: 'mallard.png',
  //     days: 1,
  //     items: [
  //       {
  //         id: uuidv4(),
  //         name: 'Field',
  //         imageUrl: 'goosedecoy.png',
  //         currentQuantity: 120,
  //         maxQuantity: 120,
  //         price: 25 / 12,
  //       },
  //       {
  //         id: uuidv4(),
  //         name: 'Full Body Canadians',
  //         imageUrl: 'goosedecoy.png',
  //         currentQuantity: 100,
  //         maxQuantity: 100,
  //         price: 30 / 12,
  //       },
  //       {
  //         id: uuidv4(),
  //         name: 'Mojo Full Body',
  //         imageUrl: 'goosedecoy.png',
  //         currentQuantity: 10,
  //         maxQuantity: 10,
  //         price: 15,
  //       },
  //       groundBlindOfferItem
  //     ]
  //   }
]