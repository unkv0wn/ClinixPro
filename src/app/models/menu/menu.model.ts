export interface MenuItem {
    text: string;
    icon: any; 
    route: string;
  }
  
  export interface MenuSection {
    title: string;
    items: MenuItem[];
  }
  