import axios from "axios";

import toCamelCase from "@/utils/toCamelCase";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

api.interceptors.request.use((config) => {
    config.headers.Authorization =
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2Q0ZTU4ZTM0NzRhNGIyZWFkZmMzNmE1N2RlYzMyMSIsInN1YiI6IjY0ZjlmMmJkZGI0ZWQ2MDBhYzNjMzBhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vyUUd-mhlZP2UBP-SIYFYWM3Txh8mxwyVCcaIaC0br8";
    return config;
});

api.interceptors.response.use((config) => {
    const convertedData = toCamelCase(config.data);
    config.data = convertedData;
    return config;
});

export default api;
