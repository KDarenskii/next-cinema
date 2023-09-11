import { IDescription } from "@/components/details/Description";

import formatDate from "@/utils/formatDate";
import formatNumber from "@/utils/formatNumber";

import { IMovieActor } from "@/types/actor.interface";
import { IMovieDetails } from "@/types/movieDetails.interface";

const useMovieDescription = (details: IMovieDetails, cast: IMovieActor[]) => {
    const descriptionList: IDescription[] = [
        { name: "Budget", value: formatNumber(details.budget) },
        { name: "Revenue", value: formatNumber(details.revenue) },
        { name: "Release date", value: formatDate(details.releaseDate) },
        { name: "Genres", value: details.genres.map((genre) => genre.name) },
        { name: "Original title", value: details.originalTitle },
        { name: "Rating", value: details.voteAverage.toFixed(1) },
        { name: "Original title", value: details.originalTitle },
        {
            name: "Countries",
            value: details.productionCountries.map((country) => country.name),
        },
    ];

    const castNames: string[] = cast.slice(0, 10).map((actor) => actor.name);

    return { descriptionList, castNames };
};

export default useMovieDescription;
