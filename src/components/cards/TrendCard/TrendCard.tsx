import Image from "next/image";
import Link from "next/link";

import { FC } from "react";

import cn from "clsx";

import imageApiUrl from "@/utils/imageApiUrl";

import { MOVIES_ROUTE } from "@/constants/routesPathnames";

import styles from "./trendCard.module.scss";

interface Props {
    id: number;
    src: string;
    rating: number;
    overview: string;
    mediaName: string;
    className?: string;
    year: string | null;
    detailsClassName?: string;
}

const TrendCard: FC<Props> = ({
    className,
    detailsClassName,
    mediaName,
    overview,
    rating,
    year,
    src,
    id,
}) => {
    return (
        <Link
            className={cn(styles.card, className)}
            href={`${MOVIES_ROUTE}/${id}`}
        >
            <Image
                src={imageApiUrl(src, "w500")}
                alt="Poster"
                width={428}
                height={642}
            />
            <div className={cn(styles.details, detailsClassName)}>
                <div>
                    <ul>
                        <li>{mediaName}</li>
                        {year && <li>{year}</li>}
                        <li>{rating.toFixed(1)}</li>
                    </ul>
                    <p>{overview}</p>
                </div>
            </div>
        </Link>
    );
};

export default TrendCard;
