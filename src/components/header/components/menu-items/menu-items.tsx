"use client";

import { FC } from "react";

import AppPath from "~/common/enums/app-path.enum";
import Dropdown, { IDropdownOption } from "~/components/dropdown/dropdown";

import styles from "./styles.module.scss";
import MenuItem from "../menu-item/menu-item";

interface IMenuItemsProps {
  className?: string;
}

export interface INavLink {
  label: string;
  href: string;
  dropdown?: boolean;
  dropdownOptions?: IDropdownOption[];
  handleDropdownSelect?: (value: string) => void;
}

export const cities: IDropdownOption[] = [{ label: "Львів", value: "Львів" }];

export const navLinks: INavLink[] = [
  { label: "Місто", href: "#", dropdown: true, dropdownOptions: cities },
  { label: "Артист", href: AppPath.ARTIST },
  { label: "Для бізнесів", href: AppPath.BUSINESS },
  { label: "Про нас", href: AppPath.ABOUT },
  { label: "Контакти", href: AppPath.CONTACTS },
];

const MenuItems: FC<IMenuItemsProps> = ({ className = "" }) => {
  return (
    <div className={`${styles.menuItems} ${className}`}>
      {navLinks.map((link) =>
        link.dropdown ? (
          <Dropdown
            key={link.label}
            options={link.dropdownOptions || []}
            trigger={<MenuItem link={link} />}
            onSelect={() => {}}
          />
        ) : (
          <MenuItem key={link.label} link={link} />
        )
      )}
    </div>
  );
};

export default MenuItems;
