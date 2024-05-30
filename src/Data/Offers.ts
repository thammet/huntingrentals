import { Offer, OfferItem } from "../Models/Offer";
import { uuidv4 } from "../Utis";

const blindsOfferItem: OfferItem = {
    id: uuidv4(),
    name: 'Blinds',
    imageUrl: 'goosedecoy.png',
    currentQuantity: 2,
    maxQuantity: 2,
    price: 25,
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
          name: 'Silhouette Decoy',
          imageUrl: 'goosedecoy.png',
          currentQuantity: 120,
          maxQuantity: 120,
          price: 25 / 12,
        },
        {
          id: uuidv4(),
          name: 'Full Body Decoy',
          imageUrl: 'goosedecoy.png',
          currentQuantity: 100,
          maxQuantity: 100,
          price: 30 / 12,
        },
        {
          id: uuidv4(),
          name: 'Socks',
          imageUrl: 'goosedecoy.png',
          currentQuantity: 1200,
          maxQuantity: 1200,
          price: 30 / 12,
        },
        {
          id: uuidv4(),
          name: 'Floaters',
          imageUrl: 'goosedecoy.png',
          currentQuantity: 100,
          maxQuantity: 100,
          price: 30 / 12,
        },
        blindsOfferItem
      ]
    },
    {
      id: uuidv4(),
      name: 'Deer',
      imageUrl: 'deer.jpg',
      days: 1,
      items: [
        
        {
          id: uuidv4(),
          name: 'Mallard Full Body',
          imageUrl: 'goosedecoy.png',
          currentQuantity: 100,
          maxQuantity: 100,
          price: 1,
        },
        {
          id: uuidv4(),
          name: 'Mojo Full Body',
          imageUrl: 'goosedecoy.png',
          currentQuantity: 10,
          maxQuantity: 10,
          price: 1,
        },
        blindsOfferItem
      ]
    },
    {
      id: uuidv4(),
      name: 'Turkey',
      imageUrl: 'turkey.jpg',
      days: 1,
      items: [
        {
          id: uuidv4(),
          name: 'Hen Decoy',
          imageUrl: 'goosedecoy.png',
          currentQuantity: 2,
          maxQuantity: 2,
          price: 15,
        },
        {
          id: uuidv4(),
          name: 'Jake Decoy',
          imageUrl: 'goosedecoy.png',
          currentQuantity: 10,
          maxQuantity: 10,
          price: 15,
        },
        {
          id: uuidv4(),
          name: 'Tom Decoy',
          imageUrl: 'goosedecoy.png',
          currentQuantity: 10,
          maxQuantity: 10,
          price: 15,
        },
        blindsOfferItem
      ]
    },
    {
      id: uuidv4(),
      name: 'Duck',
      imageUrl: 'mallard.png',
      days: 1,
      items: [
        {
          id: uuidv4(),
          name: 'Field',
          imageUrl: 'goosedecoy.png',
          currentQuantity: 120,
          maxQuantity: 120,
          price: 25 / 12,
        },
        {
          id: uuidv4(),
          name: 'Full Body Canadians',
          imageUrl: 'goosedecoy.png',
          currentQuantity: 100,
          maxQuantity: 100,
          price: 30 / 12,
        },
        {
          id: uuidv4(),
          name: 'Mojo Full Body',
          imageUrl: 'goosedecoy.png',
          currentQuantity: 10,
          maxQuantity: 10,
          price: 15,
        },
        blindsOfferItem
      ]
    }
  ]