import { FC } from "react";

import Skeleton, { SkeletonProps } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "./detailsLoading.module.scss";

const descriptionItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const participantsItems = [1, 2, 3, 4, 5];

const DetailsLoading: FC = () => {
    return (
        <div className={styles.body}>
            <ColoredLoader
                className={styles.desktopPoster}
                width={300}
                height={427}
            />
            <div>
                <div className={styles.header}>
                    <ColoredLoader className={styles.title} />
                    <ColoredLoader className={styles.tagline} />
                </div>
                <ColoredLoader
                    containerClassName={styles.mobilePoster}
                    width={210}
                    height={300}
                />
                <div className={styles.about}>
                    <div className={styles.descriptionWrapper}>
                        <ColoredLoader
                            className={styles.descriptionTitle}
                            width={110}
                            height={25}
                        />
                        {descriptionItems.map((_, index) => (
                            <div className={styles.descriptionItem} key={index}>
                                <ColoredLoader width={90} height={16} />
                                <ColoredLoader
                                    className={styles.descriptionValue}
                                    width={"100%"}
                                    height={19}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={styles.participantsWrapper}>
                        <ColoredLoader
                            className={styles.participantsTitle}
                            width={100}
                            height={23}
                        />
                        <div className={styles.participantsList}>
                            {participantsItems.map((_, index) => (
                                <div
                                    className={styles.participantItem}
                                    key={index}
                                >
                                    <ColoredLoader width={147} height={16} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <ColoredLoader
                        className={styles.storyTitle}
                        width={110}
                        height={25}
                    />
                    <ColoredLoader
                        className={styles.story}
                        width="70%"
                        height={55}
                    />
                </div>
            </div>
        </div>
    );
};

export default DetailsLoading;

function ColoredLoader(props: SkeletonProps) {
    return <Skeleton baseColor="#0e1834" highlightColor="#1e1d3e" {...props} />;
}
