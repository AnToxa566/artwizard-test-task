import { FC } from "react";

import ButtonLoading from "./components/button-loading";
import { ButtonSizeType } from "~/common/types/button-size.type";
import { ButtonHierarchyType } from "~/common/types/button-hierarchy.type";

import styles from "./styles.module.scss";
import hierarchyStyles from "~/assets/scss/hierarchy.module.scss";

interface ButtonProps {
  label: string;
  size?: ButtonSizeType;
  hierarchy?: ButtonHierarchyType;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  label,
  size = "medium",
  hierarchy = "primary",
  startIcon,
  endIcon,
  isDisabled = false,
  isLoading = false,
  className = "",
}) => {
  return (
    <button
      className={`${styles.btn} ${styles[size]} ${hierarchyStyles[hierarchy]} ${
        isDisabled ? hierarchyStyles.disabled : ""
      } ${className}`}
    >
      {(startIcon || isLoading) && (
        <span className={`${styles.icon}`}>
          {isLoading ? <ButtonLoading /> : startIcon}
        </span>
      )}

      {label}

      {endIcon && !isLoading && (
        <span className={`${styles.icon}`}>{endIcon}</span>
      )}
    </button>
  );
};

export default Button;
