import { FC } from "react";

import { DescriptionItem } from ".";

import { IDescription } from "./description.interface";
import styles from "./description.module.scss";

interface Props {
    title: string;
    descriptionList: IDescription[];
}

const Description: FC<Props> = ({ title, descriptionList }) => {
    return (
        <div>
            <h5 className={styles.title}>{title}</h5>
            <ul>
                {descriptionList.map(({ name, value }) => (
                    <DescriptionItem name={name} value={value} key={name} />
                ))}
            </ul>
        </div>
    );
};

export default Description;
