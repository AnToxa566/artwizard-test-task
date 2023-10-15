import Link from "next/link";
import Image from "next/image";

import AppLink from "~/common/enums/app-link.enum";

import hero from "~/../public/images/hero.png";
import appStore from "~/../public/images/app_store.png";
import googlePlay from "~/../public/images/google_play.png";

import styles from "./styles.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.offer}>
        <h1 className={styles.title}>Твій кишеньковий мольфар мистецтва</h1>

        <div className={styles.app}>
          <p className={styles.subtitle}>
            Слідкуй за розкладом в зручному додатку
          </p>

          <div className={styles.socialButtons}>
            <Link href={AppLink.GOOGLE_PLAY} target="_blank">
              <Image
                src={googlePlay}
                className={styles.socialButton}
                alt="Завантажити з Google Play"
              />
            </Link>

            <Link href={AppLink.APP_STORE} target="_blank">
              <Image
                src={appStore}
                className={styles.socialButton}
                alt="Завантажити з App Store"
              />
            </Link>
          </div>
        </div>
      </div>

      <Image
        src={hero}
        className={styles.heroImg}
        alt="Зображення застосунку"
      />
    </div>
  );
};

export default HeroSection;
