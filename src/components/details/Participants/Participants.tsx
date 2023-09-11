import { FC } from "react";

import cn from "clsx";

import styles from "./participants.module.scss";

interface Props {
    participants: string[];
    title: string;
    className?: string;
}

const Participants: FC<Props> = ({ participants, className, title }) => {
    return (
        <div className={cn(styles.participants, className)}>
            <h6>{title}</h6>
            <ul>
                {participants.map((participant) => (
                    <li key={participant}>{participant}</li>
                ))}
            </ul>
        </div>
    );
};

export default Participants;
