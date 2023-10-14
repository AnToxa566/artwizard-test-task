import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";

import Button from "~/components/button/button";
import AppPath from "~/common/enums/app-path.enum";
import Dropdown from "~/components/dropdown/dropdown";

import styles from "./styles.module.scss";

interface INavLink {
  label: string;
  href: string;
}

interface ICity {
  label: string;
}

export const navLinks: INavLink[] = [
  { label: "Артист", href: AppPath.HOME },
  { label: "Для бізнесів", href: AppPath.HOME },
  { label: "Про нас", href: AppPath.HOME },
  { label: "Контакти", href: AppPath.HOME },
];

const cities: ICity[] = [{ label: "Львів" }];

const MenuItems = () => {
  const CitySelect = () => (
    <Button label="Місто" hierarchy="text-black" endIcon={<FaAngleDown />} />
  );

  const handleDropdownSelect = (value: string) => {
    alert("Було обрано місто " + value);
  };

  return (
    <div className={styles.menuItems}>
      <Dropdown
        options={cities.map((city) => ({
          label: city.label,
          value: city.label,
        }))}
        trigger={<CitySelect />}
        onSelect={handleDropdownSelect}
      />

      {navLinks.map((link) => (
        <Link key={link.label} href={link.href}>
          <Button label={link.label} hierarchy="text-black" />
        </Link>
      ))}
    </div>
  );
};

export default MenuItems;
