"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { FC } from "react";

import cn from "clsx";

import { Input } from "@/components/ui/Input";

import styles from "./search.module.scss";

interface Props {
    className?: string;
}

const Search: FC<Props> = ({ className }) => {
    const router = useRouter();

    const handleChange = (value: string) => {
        router.replace(`/?search=${value}`);
    };

    return (
        <div className={cn(styles.search, className)}>
            <Image src="/img/search.svg" width={18} height={18} alt="Search" />
            <Input
                type="text"
                name="search"
                placeholder="Search for movies or TV series"
                onChange={(event) => handleChange(event.target.value)}
            />
        </div>
    );
};

export default Search;
