import axios, {AxiosResponse} from "axios";
import {UsersResponseType} from "../redux/users-reducer";
import {ProfileResponse, ResponseStatusType} from "../redux/profile-reudcer";
import {ResponseAuthType} from "../redux/authReducer/auth-reducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '5b57e857-72cc-4cd7-9bd6-09b2eef89c9a'
    },
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number, search: string) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}&term=${search}`)
            .then((response: AxiosResponse<UsersResponseType>) => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(userId: string | undefined) {
        return instance
            .get(`profile/${userId}`)
            .then((response: AxiosResponse<ProfileResponse>) => {
                return response.data
            })
    },
    getStatus(userId: string | undefined) {
        return instance
            .get(`profile/status/${userId}`)
            .then(((response: AxiosResponse<ResponseStatusType>) => {
                return response.data
            }))
    },
    updateStatus(status: string) {
        return instance
            .put(`profile/status`, {status: status})
    }
}

export const followAPI = {
    getUnfollow(id: number) {
        return instance
            .delete(`follow/${id}`)
    },
    getFollow(id: number) {
        return instance
            .post(`follow/${id}`)
    }
}

export const authAPI = {
    getAuth() {
        return instance
            .get(`auth/me`)
            .then((response: AxiosResponse<ResponseAuthType>) => {
                return response.data
            })
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance
            .post(`/auth/login`, {email, password, rememberMe})
            .then((res: AxiosResponse<ResponseAuthType>)=> {
                return res.data
            })
    },
    logout(){
        return instance
            .delete(`/auth/login`)
    }
}