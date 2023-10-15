import { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Unbounded, Manrope } from "next/font/google";

import ENV from "~/common/enums/env.enum";
import Header from "~/components/header/header";
import Footer from "~/components/footer/footer";
import AppMeta from "~/common/enums/app-meta.enum";

import "./globals.scss";
import styles from "./layout.module.scss";

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600"],
  variable: "--display-font",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "700"],
  variable: "--body-font",
});

export const metadata: Metadata = {
  metadataBase: new URL(ENV.APP_URL),
  title: AppMeta.TITLE,
  description: AppMeta.DESCRIPRION,
  openGraph: {
    title: AppMeta.TITLE,
    description: AppMeta.DESCRIPRION,
    images: [
      {
        url: "/images/artwizard.png",
        width: 500,
        height: 500,
        alt: "ArtWizard",
      },
    ],
    type: "website",
  },
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="uk">
      <body className={`${unbounded.variable} ${manrope.variable}`}>
        <div className={styles.layout}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
