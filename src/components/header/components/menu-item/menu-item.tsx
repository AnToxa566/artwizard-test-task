import { FC } from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";

import Button from "~/components/button/button";
import { INavLink } from "../menu-items/menu-items";

interface IMenuItemsProps {
  link: INavLink;
}

const MenuItem: FC<IMenuItemsProps> = ({ link }) => {
  return (
    <Link href={link.href}>
      <Button
        label={link.label}
        hierarchy="text-black"
        endIcon={link.dropdown && <FaAngleDown />}
      />
    </Link>
  );
};

export default MenuItem;
