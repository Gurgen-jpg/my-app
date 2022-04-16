import axios, {AxiosResponse} from "axios";
import {UsersResponseType} from "../redux/users-reducer";
import {ProfileResponse, setUsersProfileAC} from "../redux/profile-reudcer";
import {AuthResponseType} from "../redux/authReducer/auth-reducer";


export const getUsers = (currentPage: number, pageSize: number) => {
    return axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
            {withCredentials: true})
        .then((response: AxiosResponse<UsersResponseType>) => {
            return response.data
        })
}

export const getProfile = (userId: string | undefined) => {
    return axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then((response: AxiosResponse<ProfileResponse>) => {
            return response.data
        })
}


export const followUnfollow = (id:number) => {
  return  axios
      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
          {
              withCredentials: true,
              headers: {
                  'API-KEY' : '5b57e857-72cc-4cd7-9bd6-09b2eef89c9a'
              }
          })
}

export const getAuth = () => {
  return axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
          withCredentials: true
      })
      .then((response: AxiosResponse<AuthResponseType>) => {
          return response.data
      })
}