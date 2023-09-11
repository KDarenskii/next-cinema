"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { FC } from "react";

import cn from "clsx";

import { Input } from "@/components/ui/Input";

import styles from "./search.module.scss";

interface Props {
    className?: string;
}

const Search: FC<Props> = ({ className }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const defaultSearchValue = searchParams.get("query") || "";

    const handleSearch = (value: string) => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set("query", value);
        newParams.set("page", "1");
        router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
    };

    return (
        <div className={cn(styles.search, className)}>
            <Image src="/img/search.svg" width={18} height={18} alt="Search" />
            <Input
                type="text"
                name="search"
                placeholder="Search for movies or TV series"
                onChange={(event) => handleSearch(event.target.value)}
                defaultValue={defaultSearchValue}
            />
        </div>
    );
};

export default Search;
