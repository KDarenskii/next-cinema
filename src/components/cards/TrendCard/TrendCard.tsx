import Image from "next/image";

import { FC } from "react";

import cn from "clsx";

import imageApiUrl from "@/utils/imageApiUrl";

import styles from "./trendCard.module.scss";

interface Props {
    src: string;
    rating: number;
    overview: string;
    mediaType: "movie" | "tv";
    year: string | null;
    className?: string;
    detailsClassName?: string;
}

const TrendCard: FC<Props> = ({
    className,
    detailsClassName,
    mediaType,
    overview,
    rating,
    year,
    src,
}) => {
    const mediaName = mediaType === "movie" ? "Movie" : "TV Series";

    return (
        <div className={cn(styles.card, className)}>
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
        </div>
    );
};

export default TrendCard;
