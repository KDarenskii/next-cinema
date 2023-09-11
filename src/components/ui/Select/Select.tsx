"use client";

import { FC, useId } from "react";

import cn from "clsx";
import ReactSelect from "react-select";

import styles from "./select.module.scss";

export interface Option {
    value: string;
    label: string;
}

interface Props {
    className?: string;
    options: Option[];
    value: Option;
    onChange: (option: Option) => void;
}

const Select: FC<Props> = ({ className, options, onChange, value }) => {
    return (
        <ReactSelect
            className={cn(styles.select, className)}
            options={options}
            instanceId={useId()}
            value={value}
            onChange={(option) => onChange(option as Option)}
            classNames={{
                control: () => styles.control,
                singleValue: () => styles.value,
                menu: () => styles.menu,
                option: () => styles.option,
            }}
        />
    );
};

export default Select;
