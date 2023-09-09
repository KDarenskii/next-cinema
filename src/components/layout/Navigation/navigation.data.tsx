import {
    BOOKMARKS_ROUTE,
    HOME_ROUTE,
    MOVIES_ROUTE,
    SERIALS_ROUTE,
} from "@/constants/routesPathnames";

interface INavLink {
    href: string;
    src: string;
    alt: string;
    height: number;
    width: number;
}

export const navLinks: INavLink[] = [
    {
        href: HOME_ROUTE,
        src: "/img/house.svg",
        alt: "Home",
        width: 30,
        height: 30,
    },
    {
        href: MOVIES_ROUTE,
        src: "/img/movie.svg",
        alt: "Movie",
        width: 30,
        height: 30,
    },
    {
        href: SERIALS_ROUTE,
        src: "/img/serials.svg",
        alt: "Serials",
        width: 30,
        height: 30,
    },
    {
        href: BOOKMARKS_ROUTE,
        src: "/img/bookmark.svg",
        alt: "Bookmarks",
        width: 30,
        height: 30,
    },
];
