import { useMemo, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { Option } from "@/components/ui/Select";

import useAppSearchParams from "@/hooks/useAppSearchParams";

import MoviesService from "@/services/Movies.service";

import { IGenre } from "@/types/genre.interface";
import { IMovie } from "@/types/movie.interface";
import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";

import { SEARCH_PARAMS_NAMES } from "@/constants/searchParamsNames";

const sortOptions: Option[] = [
    { value: "popularity.desc", label: "Popular (DESC)" },
    { value: "popularity.asc", label: "Popular (ASC)" },
];
const yearsList = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];
const defaultGenreOption: Option = { value: "all", label: "All genres" };
const defaultYearOption: Option = { value: "all", label: "All years" };
const defaultSortOption: Option = sortOptions[0];
const defaultPage = "1";

const useMovies = (
    initialData: BaseGetResponse<IMovie[]>,
    genres: IGenre[],
) => {
    const { setParam, getParam } = useAppSearchParams();

    const search = getParam(SEARCH_PARAMS_NAMES.search);
    const page = getParam(SEARCH_PARAMS_NAMES.page, defaultPage);
    const year = getParam(SEARCH_PARAMS_NAMES.year, defaultYearOption.value);
    const genre = getParam(SEARCH_PARAMS_NAMES.genre, defaultGenreOption.value);
    const sort = getParam(SEARCH_PARAMS_NAMES.sort, defaultSortOption.value);

    const [movies, setMovies] = useState<IMovie[]>(initialData.results);

    const query = useQuery(
        ["movies", page, search, genre, year, sort],
        () =>
            MoviesService.get({
                page,
                genre: genre === "all" ? null : genre,
                query: search,
                year: year === "all" ? null : genre,
                sort,
            }),
        {
            initialData,
            onSuccess: (data) => handleSuccess(data),
        },
    );

    const { data, isError, isFetching: isQueryFetching } = query;

    const hasMore = data.results.length < data.totalResults;
    const dataLength = movies.length;
    const isFetching = isQueryFetching && page === defaultPage;

    const handleSuccess = (data: BaseGetResponse<IMovie[]>) => {
        if (data.page === 1) {
            setMovies(data.results);
        } else {
            setMovies((movies) => movies.concat(data.results));
        }
    };

    const handleChangePage = () => {
        const currPage = getParam(SEARCH_PARAMS_NAMES.page, defaultPage);
        const nextPage = String(Number(currPage) + 1);
        setParam(SEARCH_PARAMS_NAMES.page, nextPage);
    };

    const handleChangeGenre = (option: Option) => {
        setParam(SEARCH_PARAMS_NAMES.genre, option.value, { resetPage: true });
    };

    const handleChangeYear = (option: Option) => {
        setParam(SEARCH_PARAMS_NAMES.year, option.value, { resetPage: true });
    };

    const handleChangeSort = (option: Option) => {
        setParam(SEARCH_PARAMS_NAMES.sort, option.value, { resetPage: true });
    };

    const genreOptions: Option[] = useMemo(() => {
        const defaultOption = [defaultGenreOption];
        const dataOptions = genres.map(({ id, name }) => ({
            value: String(id),
            label: name,
        }));
        return defaultOption.concat(dataOptions);
    }, [genres]);

    const activeGenreOption: Option = useMemo(() => {
        if (genre === defaultGenreOption.value) {
            return defaultGenreOption;
        }

        const genreItem = genres.find(({ id }) => String(id) === genre);

        return {
            value: genre as string,
            label: genreItem?.name ?? defaultGenreOption.label,
        };
    }, [genre, genres]);

    const yearOptions: Option[] = useMemo(() => {
        const defaultOption = [defaultYearOption];
        const dataOptions = yearsList.map((year) => ({
            value: String(year),
            label: String(year),
        }));
        return defaultOption.concat(dataOptions);
    }, []);

    const activeYearOption: Option = useMemo(() => {
        if (year === defaultYearOption.value) {
            return defaultYearOption;
        }

        const yearItem =
            yearsList
                .find((currYear) => String(currYear) === year)
                ?.toString() ?? defaultYearOption.value;

        return { value: yearItem, label: yearItem };
    }, [year]);

    const activeSortOption: Option = useMemo(() => {
        if (sort === defaultSortOption.value) {
            return defaultSortOption;
        }

        const sortOption =
            sortOptions.find((currSort) => currSort.value === sort) ??
            defaultSortOption;

        return sortOption;
    }, [sort]);

    return {
        movies,
        handleChangePage,
        handleChangeGenre,
        handleChangeYear,
        handleChangeSort,
        hasMore,
        dataLength,
        isError,
        genreOptions,
        activeGenreOption,
        activeYearOption,
        yearOptions,
        isFetching,
        sortOptions,
        activeSortOption,
    };
};

export default useMovies;
