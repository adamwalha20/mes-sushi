export interface BilingualText {
  fr: string;
  en: string;
}

export interface MenuItemType {
  id: string;
  name: BilingualText;
  price: string;
  description: BilingualText;
  image?: string;
  isVegetarian?: boolean;
}

export interface MenuCategoryType {
  id: string;
  title: BilingualText;
  items: MenuItemType[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // icon name or component ref
}