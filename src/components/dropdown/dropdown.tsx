import { FC, useState } from "react";

import DropItem from "./components/drop-item/drop-item";

import styles from "./styles.module.scss";

type PlacementType = "bottom-start" | "bottom-end";

interface IOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: IOption[];
  onSelect: (value: string) => void;
  trigger: React.ReactNode;
  placement?: PlacementType;
}

const Dropdown: FC<DropdownProps> = ({
  options,
  onSelect,
  trigger,
  placement = "bottom-start",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <div onClick={toggleDropdown}>{trigger}</div>

      {isOpen && (
        <div className={`${styles.dropdownItems} ${styles[placement]}`}>
          {options.map((option) => (
            <DropItem
              key={option.value}
              label={option.label}
              value={option.value}
              onClick={handleSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
