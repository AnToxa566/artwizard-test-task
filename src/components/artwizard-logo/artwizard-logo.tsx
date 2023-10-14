import Image from "next/image";

import styles from "./styles.module.scss";

import artwizardLogo from "~/../public/images/artwizard.png";
import artwizardType from "~/../public/svg/type.svg";

const ArtwizardLogo = () => {
  return (
    <div className={styles.logo}>
      <Image
        src={artwizardLogo}
        className={styles.artwizardLogo}
        alt="Artwizard Logo"
      />
      <Image
        src={artwizardType}
        className={styles.artwizardType}
        alt="Artwizard Type"
      />
    </div>
  );
};

export default ArtwizardLogo;
