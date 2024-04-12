import axios, { CanceledError } from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
    key: "216c90e5b86c41a990a031ee5931f8db",
    },
});

