import type { NavigateOptions } from "next/dist/shared/lib/app-router-context";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useCallback } from "react";

import { SEARCH_PARAMS_NAMES } from "@/constants/searchParamsNames";

const defaultPage = 1;

interface SearchParamsOptions extends NavigateOptions {
    resetPage?: boolean;
}

const useAppSearchParams = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const setParam = useCallback(
        (key: string, value: string, options?: SearchParamsOptions) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(key, value);
            if (options?.resetPage) {
                params.set(SEARCH_PARAMS_NAMES.page, String(defaultPage));
            }
            router.push(`${pathname}?${params.toString()}`, {
                scroll: options?.scroll ?? false,
            });
        },
        [pathname, router, searchParams],
    );

    const getParam = useCallback(
        (key: string, defaultValue?: string) => {
            const params = new URLSearchParams(searchParams.toString());
            return params.get(key) ?? defaultValue ?? null;
        },
        [searchParams],
    );

    return { searchParams, setParam, getParam };
};

export default useAppSearchParams;
