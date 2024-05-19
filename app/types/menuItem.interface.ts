import { ReactElement } from 'react';

export interface ListItem {
    title: string;
    path: string;
    icon: ReactElement;
  }
  
  export interface MenuItem {
    title: string;
    list: ListItem[];
  }