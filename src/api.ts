import axios from "axios";

const instance = axios.create({
    baseURL:"http://127.0.0.1:8000/"
})

export const getBanners = () => instance.get("core/mainpage-banners").then(response => response.data)