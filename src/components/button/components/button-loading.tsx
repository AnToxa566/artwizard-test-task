import styles from "./styles.module.scss";

const ButtonLoading = () => {
  return (
    <svg
      viewBox="0 0 15 14"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.buttonLoading}
    >
      <g id="Group">
        <path
          id="Vector"
          d="M7.5 0.333313C7.67681 0.333313 7.84638 0.403551 7.9714 0.528575C8.09643 0.653599 8.16667 0.823169 8.16667 0.99998V2.99998C8.16667 3.17679 8.09643 3.34636 7.9714 3.47138C7.84638 3.59641 7.67681 3.66665 7.5 3.66665C7.32319 3.66665 7.15362 3.59641 7.02859 3.47138C6.90357 3.34636 6.83333 3.17679 6.83333 2.99998V0.99998C6.83333 0.823169 6.90357 0.653599 7.02859 0.528575C7.15362 0.403551 7.32319 0.333313 7.5 0.333313ZM7.5 10.3333C7.67681 10.3333 7.84638 10.4036 7.9714 10.5286C8.09643 10.6536 8.16667 10.8232 8.16667 11V13C8.16667 13.1768 8.09643 13.3464 7.9714 13.4714C7.84638 13.5964 7.67681 13.6666 7.5 13.6666C7.32319 13.6666 7.15362 13.5964 7.02859 13.4714C6.90357 13.3464 6.83333 13.1768 6.83333 13V11C6.83333 10.8232 6.90357 10.6536 7.02859 10.5286C7.15362 10.4036 7.32319 10.3333 7.5 10.3333ZM14.1667 6.99998C14.1667 7.17679 14.0964 7.34636 13.9714 7.47138C13.8464 7.59641 13.6768 7.66665 13.5 7.66665H11.5C11.3232 7.66665 11.1536 7.59641 11.0286 7.47138C10.9036 7.34636 10.8333 7.17679 10.8333 6.99998C10.8333 6.82317 10.9036 6.6536 11.0286 6.52858C11.1536 6.40355 11.3232 6.33331 11.5 6.33331H13.5C13.6768 6.33331 13.8464 6.40355 13.9714 6.52858C14.0964 6.6536 14.1667 6.82317 14.1667 6.99998ZM4.16667 6.99998C4.16667 7.17679 4.09643 7.34636 3.9714 7.47138C3.84638 7.59641 3.67681 7.66665 3.5 7.66665H1.5C1.32319 7.66665 1.15362 7.59641 1.02859 7.47138C0.90357 7.34636 0.833332 7.17679 0.833332 6.99998C0.833332 6.82317 0.90357 6.6536 1.02859 6.52858C1.15362 6.40355 1.32319 6.33331 1.5 6.33331H3.5C3.67681 6.33331 3.84638 6.40355 3.9714 6.52858C4.09643 6.6536 4.16667 6.82317 4.16667 6.99998ZM12.214 11.714C12.089 11.839 11.9194 11.9092 11.7427 11.9092C11.5659 11.9092 11.3964 11.839 11.2713 11.714L9.85733 10.3C9.73589 10.1742 9.6687 10.0058 9.67022 9.83105C9.67174 9.65625 9.74185 9.48904 9.86545 9.36543C9.98906 9.24183 10.1563 9.17172 10.3311 9.1702C10.5059 9.16868 10.6743 9.23588 10.8 9.35731L12.214 10.7706C12.276 10.8326 12.3252 10.9061 12.3587 10.987C12.3923 11.068 12.4095 11.1547 12.4095 11.2423C12.4095 11.3299 12.3923 11.4167 12.3587 11.4976C12.3252 11.5785 12.276 11.6521 12.214 11.714ZM5.14267 4.64265C5.01765 4.76763 4.84811 4.83784 4.67133 4.83784C4.49456 4.83784 4.32502 4.76763 4.2 4.64265L2.78667 3.22931C2.66157 3.10431 2.59126 2.93473 2.5912 2.75788C2.59113 2.58104 2.66133 2.41141 2.78633 2.28631C2.91134 2.16122 3.08092 2.09091 3.25776 2.09084C3.43461 2.09078 3.60424 2.16097 3.72933 2.28598L5.14267 3.69998C5.26765 3.825 5.33786 3.99454 5.33786 4.17131C5.33786 4.34809 5.26765 4.51763 5.14267 4.64265ZM2.78667 11.714C2.66168 11.589 2.59147 11.4194 2.59147 11.2426C2.59147 11.0659 2.66168 10.8963 2.78667 10.7713L4.20067 9.35731C4.26216 9.29364 4.33573 9.24285 4.41706 9.20791C4.4984 9.17297 4.58588 9.15458 4.6744 9.15381C4.76292 9.15304 4.8507 9.16991 4.93264 9.20343C5.01457 9.23695 5.089 9.28646 5.1516 9.34905C5.21419 9.41164 5.26369 9.48608 5.29721 9.56801C5.33073 9.64994 5.3476 9.73773 5.34683 9.82625C5.34606 9.91477 5.32767 10.0022 5.29273 10.0836C5.25779 10.1649 5.20701 10.2385 5.14333 10.3L3.73 11.714C3.66808 11.776 3.59456 11.8251 3.51363 11.8587C3.43269 11.8922 3.34594 11.9095 3.25833 11.9095C3.17072 11.9095 3.08397 11.8922 3.00304 11.8587C2.92211 11.8251 2.84858 11.776 2.78667 11.714ZM9.85733 4.64265C9.73235 4.51763 9.66214 4.34809 9.66214 4.17131C9.66214 3.99454 9.73235 3.825 9.85733 3.69998L11.2707 2.28598C11.3957 2.16089 11.5652 2.09057 11.7421 2.09051C11.9189 2.09045 12.0886 2.16064 12.2137 2.28565C12.3388 2.41065 12.4091 2.58023 12.4091 2.75708C12.4092 2.93392 12.339 3.10355 12.214 3.22865L10.8 4.64265C10.675 4.76763 10.5054 4.83784 10.3287 4.83784C10.1519 4.83784 9.98235 4.76763 9.85733 4.64265Z"
          fill="innerhit"
        />
      </g>
    </svg>
  );
};

export default ButtonLoading;
