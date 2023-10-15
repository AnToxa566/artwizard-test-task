import AppPath from "~/common/enums/app-path.enum";
import FooterNavLink, {
  IFooterNavLink,
} from "../footer-nav-link/footer-nav-link";

import styles from "./styles.module.scss";

export const footerNavLinks: IFooterNavLink[] = [
  { label: "Місто", href: AppPath.CITY },
  { label: "Артист", href: AppPath.ARTIST },
  { label: "Для бізнесів", href: AppPath.BUSINESS },
  { label: "Про нас", href: AppPath.ABOUT },
  { label: "Контакти", href: AppPath.CONTACTS },
];

const FooterNav = () => {
  return (
    <nav className={styles.nav}>
      {footerNavLinks.map((link) => (
        <FooterNavLink key={link.label} link={link} />
      ))}
    </nav>
  );
};

export default FooterNav;
