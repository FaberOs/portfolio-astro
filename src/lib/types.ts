// src/types.ts
export interface MenuItem {
  title: string;
  href?: string;
  icon?: string;
  subItems?: SubMenuItem[];
}

export interface SubMenuItem {
  title: string;
  href: string;
  icon?: string;
}
