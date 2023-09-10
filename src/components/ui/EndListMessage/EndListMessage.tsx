import { FC, PropsWithChildren } from "react";

import cn from "clsx";

import { Typography } from "@/components/Typography";

import styles from "./endListMessage.module.scss";

interface Props {
    className?: string;
}
const EndListMessage: FC<PropsWithChildren<Props>> = ({
    className,
    children,
}) => {
    return (
        <Typography className={cn(styles.message, className)}>
            {children}
        </Typography>
    );
};

export default EndListMessage;
