import { FC, PropsWithChildren } from "react";

import cn from "clsx";

import styles from "./alert.module.scss";

interface Props {
    className?: string;
    variant: "info" | "success" | "fail";
}

const Alert: FC<PropsWithChildren<Props>> = ({
    className,
    children,
    variant,
}) => {
    return (
        <div
            className={cn(styles.alert, styles[`alert--${variant}`], className)}
        >
            {children}
        </div>
    );
};

export default Alert;
