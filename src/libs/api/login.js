import api from "./index";

export const login = (data) => api.get('/api/login', data)

export const bannerList = (data) => api.get('/api/banner/list', data)