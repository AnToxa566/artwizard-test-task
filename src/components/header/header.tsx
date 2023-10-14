import Link from "next/link";

import ArtwizardLogo from "../artwizard-logo/artwizard-logo";
import AppPath from "~/common/enums/app-path.enum";
import Menu from "./components/menu/menu";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={AppPath.HOME}>
        <ArtwizardLogo />
      </Link>

      <Menu />
    </header>
  );
};

export default Header;
