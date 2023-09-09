import { FC } from "react";

import cn from "clsx";

import styles from "./bookmarkButton.module.scss";

interface Props {
    isActive: boolean;
    className?: string;
}

const BookmarkButton: FC<Props> = ({ isActive, className }) => {
    return (
        <button
            className={cn(
                styles.button,
                isActive && styles["button--active"],
                className,
            )}
        >
            <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
};

export default BookmarkButton;