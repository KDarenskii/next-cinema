import Image from "next/image";

import { FC } from "react";

import { Typography } from "@/components/Typography";
import { Description } from "@/components/details/Description";
import { Participants } from "@/components/details/Participants";

import imageApiUrl from "@/utils/imageApiUrl";

import { IActor } from "@/types/actor.interface";
import { ISeriesDetails } from "@/types/seriesDetails.interface";

import styles from "./seriesDescription.module.scss";
import useSeriesDetails from "./useSeriesDescription";

interface Props {
    details: ISeriesDetails;
    cast: IActor[];
}

const SeriesDescription: FC<Props> = ({ details, cast }) => {
    const { descriptionList, castNames } = useSeriesDetails(details, cast);

    return (
        <section className={styles.section}>
            <Intro src={imageApiUrl(details.posterPath, "w300")} />
            <div>
                <header className={styles.header}>
                    <Typography as="h1">{details.name}</Typography>
                    <Typography>{details.tagline}</Typography>
                </header>
                <div className={styles.contentPoster}>
                    <Image
                        src={imageApiUrl(details.posterPath, "w300")}
                        alt="Poster"
                        width={300}
                        height={427}
                        quality={80}
                    />
                </div>
                <div className={styles.about}>
                    <Description
                        title="About film"
                        descriptionList={descriptionList}
                    />
                    <Participants participants={castNames} title="Lead roles" />
                </div>
                <div className={styles.story}>
                    <Typography as="h6">Short story</Typography>
                    <Typography>{details.overview}</Typography>
                </div>
            </div>
        </section>
    );
};

export default SeriesDescription;

function Intro({ src }: { src: string }) {
    return (
        <div className={styles.intro}>
            <div className={styles.introPoster}>
                <Image
                    src={src}
                    alt="Poster"
                    width={300}
                    height={427}
                    quality={80}
                />
            </div>
        </div>
    );
}
