import { FC } from "react";

import styles from "./descriptionItem.module.scss";

interface Props {
    name: string;
    value: string | string[] | number;
}

const DescriptionItem: FC<Props> = ({ name, value }) => {
    return (
        <li className={styles.item}>
            <div className={styles.name}>{name}</div>
            <div>
                {Array.isArray(value) ? (
                    value.map((item, index) => (
                        <span className={styles.value} key={index}>
                            {item}
                        </span>
                    ))
                ) : (
                    <span className={styles.value}>{value}</span>
                )}
            </div>
        </li>
    );
};

export default DescriptionItem;
