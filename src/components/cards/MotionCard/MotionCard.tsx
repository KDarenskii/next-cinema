import Image from "next/image";
import Link from "next/link";

import { FC, MouseEvent } from "react";

import cn from "clsx";

import Typography from "@/components/Typography/Typography";
import { BookmarkButton } from "@/components/ui/BookmarkButton";

import styles from "./motionCard.module.scss";

interface Props {
    src: string;
    rating: number;
    year: string | null;
    mediaName: string;
    title: string;
    href: string;
    isBookmarked: boolean;
    onBookmarkClick: () => void;
    className?: string;
    isFetching?: boolean;
}

const MotionCard: FC<Props> = ({
    onBookmarkClick,
    isBookmarked,
    isFetching,
    className,
    mediaName,
    rating,
    title,
    href,
    year,
    src,
}) => {
    const handleBookmarkClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onBookmarkClick();
    };

    return (
        <div
            className={cn(
                styles.card,
                isFetching && styles.disabled,
                className,
            )}
        >
            <Link href={href}>
                <div className={styles.imageWrapper}>
                    <Image src={src} alt="Preview" width={330} height={208} />
                    <BookmarkButton
                        onClick={(event) => handleBookmarkClick(event)}
                        className={styles.bookmark}
                        isActive={isBookmarked}
                    />
                </div>
                <div className={styles.details}>
                    <Typography as="span">{year}</Typography>
                    <Typography as="span">{mediaName}</Typography>
                    <Typography as="span">{rating}</Typography>
                    <Typography as="h5">{title}</Typography>
                </div>
            </Link>
        </div>
    );
};

export default MotionCard;
