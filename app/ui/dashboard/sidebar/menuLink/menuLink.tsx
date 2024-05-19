"use client";

import React from "react";
import styles from "./menuLink.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListItem } from "@/app/types/menuItem.interface";

interface ListItemProps {
  item: ListItem;
}

const MenuLink: React.FC<ListItemProps> = ({ item }) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
