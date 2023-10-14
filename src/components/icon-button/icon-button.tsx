import { FC } from "react";

import ButtonLoading from "../button/components/button-loading";
import { ButtonSizeType } from "~/common/types/button-size.type";
import { ButtonHierarchyType } from "~/common/types/button-hierarchy.type";

import styles from "./styles.module.scss";
import hierarchyStyles from "~/assets/scss/hierarchy.module.scss";

interface IconButtonProps {
  startIcon: React.ReactNode;
  size?: ButtonSizeType;
  hierarchy?: ButtonHierarchyType;
  isDisabled?: boolean;
  isLoading?: boolean;
  className?: string;
}

const IconButton: FC<IconButtonProps> = ({
  startIcon,
  size = "medium",
  hierarchy = "primary",
  isDisabled = false,
  isLoading = false,
  className = "",
}) => {
  return (
    <button
      className={`${styles.iconBtn} ${styles[size]} ${
        hierarchyStyles[hierarchy]
      } ${isDisabled ? hierarchyStyles.disabled : ""} ${className}`}
    >
      <span className={`${styles.icon}`}>
        {isLoading ? <ButtonLoading /> : startIcon}
      </span>
    </button>
  );
};

export default IconButton;
