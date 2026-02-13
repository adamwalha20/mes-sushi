export interface MenuItemType {
  id: string;
  name: string;
  price: string;
  description: string;
  image?: string;
  isVegetarian?: boolean;
}

export interface MenuCategoryType {
  id: string;
  title: string;
  items: MenuItemType[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // icon name or component ref
}