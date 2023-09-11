import { IDescription } from "@/components/details/Description";

import { IActor } from "@/types/actor.interface";
import { ISeriesDetails } from "@/types/seriesDetails.interface";

const useSeriesDetails = (details: ISeriesDetails, cast: IActor[]) => {
    const descriptionList: IDescription[] = [
        { name: "Type", value: details.type },
        { name: "Genres", value: details.genres.map((genre) => genre.name) },
        { name: "Original name", value: details.originalName },
        { name: "Rating", value: details.voteAverage.toFixed(1) },
        { name: "Seasons", value: details.numberOfSeasons },
        { name: "Episodes", value: details.numberOfEpisodes },
        {
            name: "Countries",
            value: details.productionCountries.map((country) => country.name),
        },
    ];

    const castNames: string[] = cast.slice(0, 10).map((actor) => actor.name);

    return { descriptionList, castNames };
};

export default useSeriesDetails;
