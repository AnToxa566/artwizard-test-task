"use client";

import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { useRouter } from "next/navigation";

import Button from "~/components/button/button";
import MenuItems, { navLinks } from "../menu-items/menu-items";
import AppLink from "~/common/enums/app-link.enum";
import IconButton from "~/components/icon-button/icon-button";
import useBreakpoints from "~/hooks/use-breakpoints.hook";
import ButtonTitle from "~/common/enums/button-title.enum";
import Dropdown from "~/components/dropdown/dropdown";

import styles from "./styles.module.scss";

const Menu = () => {
  const router = useRouter();

  const { isMobile, isTablet, isLaptop, isDesktop } = useBreakpoints();

  const handleDropdownSelect = (value: string) => {
    router.push(value);
  };

  const DropdownTrigger = () => (
    <IconButton
      startIcon={<FaBars />}
      hierarchy="text-black"
      size={isMobile ? "medium" : "large"}
    />
  );

  return (
    <nav className={styles.menu}>
      {(isLaptop || isDesktop) && <MenuItems />}

      <Link href={AppLink.GOOGLE_PLAY}>
        <Button
          label={isMobile ? ButtonTitle.MENU_MOBILE : ButtonTitle.MENU_DESKTOP}
          hierarchy="accent"
        />
      </Link>

      {(isMobile || isTablet) && (
        <Dropdown
          options={navLinks.map((link) => ({
            label: link.label,
            value: link.href,
          }))}
          trigger={<DropdownTrigger />}
          placement="bottom-end"
          onSelect={handleDropdownSelect}
        />
      )}
    </nav>
  );
};

export default Menu;
