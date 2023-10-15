import Link from "next/link";
import Image from "next/image";

import AppLink from "~/common/enums/app-link.enum";
import FooterNav from "./components/footer-nav/footer-nav";

import addStoreQR from "~/../public/images/app_store_qr.png";
import googlePlayQR from "~/../public/images/google_play_qr.png";

import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.menu}>
        <span className={styles.copyright}>© ArtWizard 2023</span>
        <FooterNav />
      </div>

      <div className={styles.socialButtons}>
        <Link href={AppLink.GOOGLE_PLAY} target="_blank">
          <Image src={googlePlayQR} alt="Завантажити з Google Play" />
        </Link>

        <Link href={AppLink.APP_STORE} target="_blank">
          <Image src={addStoreQR} alt="Завантажити з App Store" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
