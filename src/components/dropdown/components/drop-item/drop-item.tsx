import { FC } from "react";

import styles from "./styles.module.scss";

interface DropItemProps {
  label: string;
  value: string;
  onClick: (value: string) => void;
  isDisabled?: boolean;
}

const DropItem: FC<DropItemProps> = ({
  label,
  value,
  onClick,
  isDisabled = false,
}) => {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <div
      className={`${styles.dropItem} ${isDisabled ? styles.disabled : ""}`}
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

export default DropItem;
