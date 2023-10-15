"use client";

import { FC, useState, useRef } from "react";
import { motion } from "framer-motion";

import DropItem from "./components/drop-item/drop-item";
import useOutsideClickHandler from "~/hooks/use-outside-click-handler.hook";

import styles from "./styles.module.scss";

type PlacementType = "bottom-start" | "bottom-end";

export interface IDropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: IDropdownOption[];
  onSelect: (value: string) => void;
  trigger: React.ReactNode;
  placement?: PlacementType;
  className?: string;
}

const Dropdown: FC<DropdownProps> = ({
  options,
  onSelect,
  trigger,
  placement = "bottom-start",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClickHandler(dropdownRef, () => setIsOpen(false));

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownVariants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={`${styles.dropdown} ${className}`}>
      <div onClick={toggleDropdown}>{trigger}</div>

      {isOpen && (
        <motion.div
          ref={dropdownRef}
          className={`${styles.dropdownItems} ${styles[placement]}`}
          variants={dropdownVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          {options.map((option) => (
            <DropItem
              key={option.value}
              label={option.label}
              value={option.value}
              onClick={handleSelect}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Dropdown;
