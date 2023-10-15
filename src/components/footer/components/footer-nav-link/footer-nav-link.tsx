import Link from "next/link";
import { FC } from "react";

import Button from "~/components/button/button";

export interface IFooterNavLink {
  label: string;
  href: string;
}

interface IFooterNavLinkProps {
  link: IFooterNavLink;
}

const FooterNavLink: FC<IFooterNavLinkProps> = ({ link }) => {
  return (
    <Link href={link.href}>
      <Button label={link.label} hierarchy="text-black" />
    </Link>
  );
};

export default FooterNavLink;
