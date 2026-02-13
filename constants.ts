import { MenuCategoryType } from './types';

export const MENU_DATA: MenuCategoryType[] = [
  {
    id: 'dragon-rolls',
    title: 'Dragon Rolls',
    items: [
      { id: 'dr-1', name: 'Dragon Saumon', price: '24 DT', description: 'Avocado, cucumber topped with fresh salmon and spicy mayo.', image: 'https://picsum.photos/seed/sushi1/400/300' },
      { id: 'dr-2', name: 'Dragon Crevettes', price: '23 DT', description: 'Tempura shrimp, avocado, topped with shrimp.', image: 'https://picsum.photos/seed/sushi2/400/300' },
      { id: 'dr-3', name: 'Dragon Végétarien', price: '19 DT', description: 'Cucumber, avocado, carrots, sesame seeds.', isVegetarian: true, image: 'https://picsum.photos/seed/sushi3/400/300' },
      { id: 'dr-4', name: 'Dragon Saumon Fumé', price: '26 DT', description: 'Cream cheese, avocado, topped with smoked salmon.', image: 'https://picsum.photos/seed/sushi4/400/300' },
    ]
  },
  {
    id: 'california-rolls',
    title: 'California Rolls',
    items: [
      { id: 'cr-1', name: 'California Saumon', price: '19 DT', description: 'Salmon, avocado, cucumber, sesame.', image: 'https://picsum.photos/seed/sushi5/400/300' },
      { id: 'cr-2', name: 'California Crevettes', price: '18 DT', description: 'Cooked shrimp, avocado, cucumber.', image: 'https://picsum.photos/seed/sushi6/400/300' },
      { id: 'cr-3', name: 'California Végétarien', price: '17 DT', description: 'Fresh vegetables roll.', isVegetarian: true, image: 'https://picsum.photos/seed/sushi7/400/300' },
      { id: 'cr-4', name: 'California Saumon Fumé', price: '21 DT', description: 'Smoked salmon, cheese, cucumber.', image: 'https://picsum.photos/seed/sushi8/400/300' },
    ]
  },
  {
    id: 'futo-makis',
    title: 'Futo Makis',
    items: [
      { id: 'fm-1', name: 'Maki Saumon', price: '20 DT', description: 'Fresh salmon, rice, nori.', image: 'https://picsum.photos/seed/sushi9/400/300' },
      { id: 'fm-2', name: 'Maki Crevette', price: '19 DT', description: 'Shrimp, cucumber.', image: 'https://picsum.photos/seed/sushi10/400/300' },
      { id: 'fm-3', name: 'Maki Végétarien', price: '15 DT', description: 'Avocado, cucumber, pickled radish.', isVegetarian: true, image: 'https://picsum.photos/seed/sushi11/400/300' },
      { id: 'fm-4', name: 'Maki Saumon Fumé', price: '22 DT', description: 'Smoked salmon, cream cheese.', image: 'https://picsum.photos/seed/sushi12/400/300' },
    ]
  },
  {
    id: 'crunchy-cheesy',
    title: 'Crunchy Cheesy',
    items: [
      { id: 'cc-1', name: 'Cheesy Saumon', price: '20 DT', description: 'Salmon, melted cheese, crispy topping.', image: 'https://picsum.photos/seed/sushi13/400/300' },
      { id: 'cc-2', name: 'Cheesy Crevette', price: '19 DT', description: 'Shrimp, cheese, fried onions.', image: 'https://picsum.photos/seed/sushi14/400/300' },
      { id: 'cc-3', name: 'Cheesy Calamar', price: '18 DT', description: 'Calamari, spicy cheese sauce.', image: 'https://picsum.photos/seed/sushi15/400/300' },
      { id: 'cc-4', name: 'Cheesy Saumon Fumé', price: '23 DT', description: 'Smoked salmon, double cheese.', image: 'https://picsum.photos/seed/sushi16/400/300' },
      { id: 'cc-5', name: 'Cheesy Végétarien', price: '18 DT', description: 'Vegetable tempura, cheese.', isVegetarian: true, image: 'https://picsum.photos/seed/sushi17/400/300' },
    ]
  },
  {
    id: 'crunchy-futomaki',
    title: 'Crunchy Futomaki',
    items: [
      { id: 'cf-1', name: 'Crunchy Saumon', price: '22 DT', description: 'Deep fried roll with salmon.', image: 'https://picsum.photos/seed/sushi18/400/300' },
      { id: 'cf-2', name: 'Crunchy Crevettes', price: '21 DT', description: 'Deep fried shrimp roll.', image: 'https://picsum.photos/seed/sushi19/400/300' },
      { id: 'cf-3', name: 'Crunchy Végétarien', price: '17 DT', description: 'Deep fried vegetable roll.', isVegetarian: true, image: 'https://picsum.photos/seed/sushi20/400/300' },
      { id: 'cf-4', name: 'Crunchy Saumon Fumé', price: '24 DT', description: 'Deep fried smoked salmon.', image: 'https://picsum.photos/seed/sushi21/400/300' },
    ]
  }
];

export const BRAND_INFO = {
  name: 'Mes Sushi',
  slogan: 'Taste of Japan',
  phone: '+216 12 345 678',
  address: 'La Marsa, Tunis',
  hours: 'Daily: 11:00 AM - 11:00 PM',
  instagram: 'https://instagram.com/messushi',
};