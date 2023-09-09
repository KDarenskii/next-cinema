export interface BaseGetResponse<T> {
    page: number;
    totalPages: number;
    totalResult: number;
    results: T;
}
