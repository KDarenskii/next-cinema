import { FC, PropsWithChildren } from "react";

import cn from "clsx";

import { Typography } from "../Typography";
import styles from "./section.module.scss";

interface Props {
    className?: string;
}

const SectionTitle: FC<PropsWithChildren<Props>> = ({
    children,
    className,
}) => {
    return (
        <Typography className={cn(styles.title, className)} as="h2">
            {children}
        </Typography>
    );
};

export default SectionTitle;
