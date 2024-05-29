import { Offer, OfferItem } from "../Models/Offer";
import { uuidv4 } from "../Utis";

const blindsOfferItem: OfferItem = {
    id: uuidv4(),
    name: 'Blinds',
    imageUrl: 'goosedecoy.png',
    currentQuantity: 2,
    maxQuantity: 2,
    price: 100,
};

export const offers: Offer[] = [
    {
      id: uuidv4(),
      name: 'Geese',
      imageUrl: 'goosedecoy.png',
      days: 1,
      items: [
        {
          id: uuidv4(),
          name: 'Canadian Goose Full Body',
          imageUrl: 'goosedecoy.png',
          currentQuantity: 120,
          maxQuantity: 120,
          price: 100,
        },
        {
          id: uuidv4(),
          name: 'Mallard Full Body',
          imageUrl: 'goosedecoy.png',
          currentQuantity: 100,
          maxQuantity: 100,
          price: 100,
        },
        {
          id: uuidv4(),
          name: 'Mojo Full Body',
          imageUrl: 'goosedecoy.png',
          currentQuantity: 10,
          maxQuantity: 10,
          price: 100,
        },
        blindsOfferItem
      ]
    },
    {
      id: uuidv4(),
      name: 'Deer',
      imageUrl: 'deer.jpeg',
      days: 1,
      items: [
        
        {
          id: uuidv4(),
          name: 'Mallard Full Body',
          imageUrl: 'goosedecoy.png',
          currentQuantity: 100,
          maxQuantity: 100,
          price: 100,
        },
        {
          id: uuidv4(),
          name: 'Mojo Full Body',
          imageUrl: 'goosedecoy.png',
          currentQuantity: 10,
          maxQuantity: 10,
          price: 100,
        },
        blindsOfferItem
      ]
    },
    {
      id: uuidv4(),
      name: 'Turkey',
      imageUrl: 'turkey.jpeg',
      days: 1,
      items: [
        {
          id: uuidv4(),
          name: 'Calls',
          imageUrl: 'goosedecoy.png',
          currentQuantity: 2,
          maxQuantity: 2,
          price: 100,
        },
        {
          id: uuidv4(),
          name: 'Mojo Full Body',
          imageUrl: 'goosedecoy.png',
          currentQuantity: 10,
          maxQuantity: 10,
          price: 100,
        },
        blindsOfferItem
      ]
    },
    {
      id: uuidv4(),
      name: 'Mallard',
      imageUrl: 'mallard.jpeg',
      days: 1,
      items: [
        {
          id: uuidv4(),
          name: 'Calls',
          imageUrl: 'goosedecoy.png',
          currentQuantity: 2,
          maxQuantity: 2,
          price: 100,
        },
        {
          id: uuidv4(),
          name: 'Mojo Full Body',
          imageUrl: 'goosedecoy.png',
          currentQuantity: 10,
          maxQuantity: 10,
          price: 100,
        },
        blindsOfferItem
      ]
    }
  ]