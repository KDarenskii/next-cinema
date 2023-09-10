export interface BaseGetResponse<T> {
    page: number;
    totalPages: number;
    totalResults: number;
    results: T;
}
