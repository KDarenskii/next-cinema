import { ComponentProps, ElementType, FC, ReactNode } from "react";

import cn from "clsx";

import styles from "./typography.module.scss";

type TypographyCustomProps<E extends ElementType = ElementType> = {
    children: ReactNode;
    className?: string;
    as?: E;
};

type TypographyProps<E extends ElementType> = TypographyCustomProps<E> &
    Omit<ComponentProps<E>, keyof TypographyCustomProps>;

const defaultElement = "p";

const Typography = <E extends ElementType = typeof defaultElement>({
    children,
    className,
    as,
    ...rest
}: TypographyProps<E>) => {
    const TagName = as ?? defaultElement;
    return (
        <TagName className={cn(styles.typography, className)} {...rest}>
            {children}
        </TagName>
    );
};

export default Typography;
