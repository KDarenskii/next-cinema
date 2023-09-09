import Image from "next/image";
import Link from "next/link";

import { FC } from "react";

import cn from "clsx";

import Typography from "@/components/Typography/Typography";
import { BookmarkButton } from "@/components/ui/BookmarkButton";

import imageApiUrl from "@/utils/imageApiUrl";

import styles from "./movieCard.module.scss";

interface Props {
    src: string;
    rating: number;
    year: string | null;
    className?: string;
    mediaType: "movie" | "tv";
    title: string;
}

const MovieCard: FC<Props> = ({
    mediaType,
    rating,
    src,
    title,
    year,
    className,
}) => {
    const mediaName = mediaType === "movie" ? "Movie" : "TV Series";

    return (
        <div className={cn(styles.card, className)}>
            <Link href="/">
                <div className={styles.imageWrapper}>
                    <Image
                        src={imageApiUrl(src, "w780")}
                        alt="Preview"
                        width={330}
                        height={208}
                    />
                    <BookmarkButton
                        className={styles.bookmark}
                        isActive={false}
                    />
                </div>
                <div className={styles.details}>
                    <Typography as="span">{year}</Typography>
                    <Typography as="span">{mediaName}</Typography>
                    <Typography as="span">{rating.toFixed(1)}</Typography>
                    <Typography as="h5">{title}</Typography>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;
