import { MenuCategoryType } from './types';

export const MENU_DATA = [
  {
    id: 'dragon-rolls',
    title: { fr: 'Dragon Rolls', en: 'Dragon Rolls' },
    items: [
      { id: 'dr-1', name: { fr: 'Dragon Saumon', en: 'Salmon Dragon' }, price: '24 DT', description: { fr: 'Avocat, concombre garni de saumon frais et mayo épicée.', en: 'Avocado, cucumber topped with fresh salmon and spicy mayo.' }, image: '/images/menu/dr-1.jpg' },
      { id: 'dr-2', name: { fr: 'Dragon Crevettes', en: 'Shrimp Dragon' }, price: '23 DT', description: { fr: 'Tempura de crevettes, avocat, garni de crevettes.', en: 'Tempura shrimp, avocado, topped with shrimp.' }, image: '/images/menu/dr-2.jpg' },
      { id: 'dr-3', name: { fr: 'Dragon Végétarien', en: 'Veggie Dragon' }, price: '19 DT', description: { fr: 'Concombre, avocat, carottes, graines de sésame.', en: 'Cucumber, avocado, carrots, sesame seeds.' }, isVegetarian: true, image: '/images/menu/dr-3.jpg' },
      { id: 'dr-4', name: { fr: 'Dragon Saumon Fumé', en: 'Smoked Salmon Dragon' }, price: '26 DT', description: { fr: 'Fromage à la crème, avocat, garni de saumon fumé.', en: 'Cream cheese, avocado, topped with smoked salmon.' }, image: '/images/menu/dr-4.jpg' },
    ]
  },
  {
    id: 'california-rolls',
    title: { fr: 'California Rolls', en: 'California Rolls' },
    items: [
      { id: 'cr-1', name: { fr: 'California Saumon', en: 'Salmon California' }, price: '19 DT', description: { fr: 'Saumon, avocat, concombre, sésame.', en: 'Salmon, avocado, cucumber, sesame.' }, image: '/images/menu/cr-1.jpg' },
      { id: 'cr-2', name: { fr: 'California Crevettes', en: 'Shrimp California' }, price: '18 DT', description: { fr: 'Crevettes cuites, avocat, concombre.', en: 'Cooked shrimp, avocado, cucumber.' }, image: '/images/menu/cr-2.jpg' },
      { id: 'cr-3', name: { fr: 'California Végétarien', en: 'Veggie California' }, price: '17 DT', description: { fr: 'Roulé de légumes frais.', en: 'Fresh vegetables roll.' }, isVegetarian: true, image: '/images/menu/cr-3.jpg' },
      { id: 'cr-4', name: { fr: 'California Saumon Fumé', en: 'Smoked Salmon California' }, price: '21 DT', description: { fr: 'Saumon fumé, fromage, concombre.', en: 'Smoked salmon, cheese, cucumber.' }, image: '/images/menu/cr-4.jpg' },
    ]
  },
  {
    id: 'futo-makis',
    title: { fr: 'Futo Makis', en: 'Futo Makis' },
    items: [
      { id: 'fm-1', name: { fr: 'Maki Saumon', en: 'Salmon Maki' }, price: '20 DT', description: { fr: 'Saumon frais, riz, nori.', en: 'Fresh salmon, rice, nori.' }, image: '/images/menu/fm-1.jpg' },
      { id: 'fm-2', name: { fr: 'Maki Crevette', en: 'Shrimp Maki' }, price: '19 DT', description: { fr: 'Crevette, concombre.', en: 'Shrimp, cucumber.' }, image: '/images/menu/fm-2.jpg' },
      { id: 'fm-3', name: { fr: 'Maki Végétarien', en: 'Veggie Maki' }, price: '15 DT', description: { fr: 'Avocat, concombre, radis mariné.', en: 'Avocado, cucumber, pickled radish.' }, isVegetarian: true, image: '/images/menu/fm-3.jpg' },
      { id: 'fm-4', name: { fr: 'Maki Saumon Fumé', en: 'Smoked Salmon Maki' }, price: '22 DT', description: { fr: 'Saumon fumé, fromage à la crème.', en: 'Smoked salmon, cream cheese.' }, image: '/images/menu/fm-4.jpg' },
    ]
  },
  {
    id: 'crunchy-cheesy',
    title: { fr: 'Crunchy Cheesy', en: 'Crunchy Cheesy' },
    items: [
      { id: 'cc-1', name: { fr: 'Cheesy Saumon', en: 'Salmon Cheesy' }, price: '20 DT', description: { fr: 'Saumon, fromage fondu, garniture croustillante.', en: 'Salmon, melted cheese, crispy topping.' }, image: '/images/menu/cc-1.jpg' },
      { id: 'cc-2', name: { fr: 'Cheesy Crevette', en: 'Shrimp Cheesy' }, price: '19 DT', description: { fr: 'Crevette, fromage, oignons frits.', en: 'Shrimp, cheese, fried onions.' }, image: '/images/menu/cc-2.jpg' },
      { id: 'cc-3', name: { fr: 'Cheesy Calamar', en: 'Calamari Cheesy' }, price: '18 DT', description: { fr: 'Calamar, sauce au fromage épicée.', en: 'Calamari, spicy cheese sauce.' }, image: '/images/menu/cc-3.jpg' },
      { id: 'cc-4', name: { fr: 'Cheesy Saumon Fumé', en: 'Smoked Salmon Cheesy' }, price: '23 DT', description: { fr: 'Saumon fumé, double fromage.', en: 'Smoked salmon, double cheese.' }, image: '/images/menu/cc-4.jpg' },
      { id: 'cc-5', name: { fr: 'Cheesy Végétarien', en: 'Veggie Cheesy' }, price: '18 DT', description: { fr: 'Tempura de légumes, fromage.', en: 'Vegetable tempura, cheese.' }, isVegetarian: true, image: '/images/menu/cc-5.jpg' },
    ]
  },
  {
    id: 'crunchy-futomaki',
    title: { fr: 'Crunchy Futomaki', en: 'Crunchy Futomaki' },
    items: [
      { id: 'cf-1', name: { fr: 'Crunchy Saumon', en: 'Salmon Crunchy' }, price: '22 DT', description: { fr: 'Roulé frit au saumon.', en: 'Deep fried roll with salmon.' }, image: '/images/menu/cf-1.jpg' },
      { id: 'cf-2', name: { fr: 'Crunchy Crevettes', en: 'Shrimp Crunchy' }, price: '21 DT', description: { fr: 'Roulé frit aux crevettes.', en: 'Deep fried shrimp roll.' }, image: '/images/menu/cf-2.jpg' },
      { id: 'cf-3', name: { fr: 'Crunchy Végétarien', en: 'Veggie Crunchy' }, price: '17 DT', description: { fr: 'Roulé frit aux légumes.', en: 'Deep fried vegetable roll.' }, isVegetarian: true, image: '/images/menu/cf-3.jpg' },
      { id: 'cf-4', name: { fr: 'Crunchy Saumon Fumé', en: 'Smoked Salmon Crunchy' }, price: '24 DT', description: { fr: 'Saumon fumé frit.', en: 'Deep fried smoked salmon.' }, image: '/images/menu/cf-4.jpg' },
    ]
  }
];

export const BRAND_INFO = {
  name: 'Mes Sushi',
  slogan: 'Taste of Japan',
  phone: '51 438 154',
  address: 'Online Store | Delivery Only',
  hours: 'Fri: 17:30-20:00 | Sat-Sun: 11:30-20:00',
  instagram: 'https://www.instagram.com/mes_sushis_fait_maison',
};