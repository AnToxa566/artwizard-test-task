import AppPath from "~/common/enums/app-path.enum";
import FooterNavLink, {
  IFooterNavLink,
} from "../footer-nav-link/footer-nav-link";

import styles from "./styles.module.scss";

export const footerNavLinks: IFooterNavLink[] = [
  { label: "Місто", href: AppPath.HOME },
  { label: "Артист", href: AppPath.HOME },
  { label: "Для бізнесів", href: AppPath.HOME },
  { label: "Про нас", href: AppPath.HOME },
  { label: "Контакти", href: AppPath.HOME },
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
