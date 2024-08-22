
import { Configuration, DefaultApi } from '@/api/generated'
import {
    useQuery
} from '@tanstack/react-query'
import { useCallback } from 'react'

const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL
export const useUser = (id: string) => {
    const config: Configuration = {
        // accessToken: ACCESS_TOKEN,
        basePath: API_BASE_URL,
        isJsonMime: () => {
            return true
        },
    }

    const API = new DefaultApi(config)

    const getUser = useCallback(async (id: string) => {
        return await API
            .apiViewsGetUser(id)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                throw error
            })
    }, [])

    const getUsers = useCallback(async () => {
        return await API
            .apiViewsGetAllUsers()
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                console.error(error)
                throw error
            })
    }, [])

    const { data: user, isLoading: isLoadingUser } = useQuery({ queryKey: ['get-user', id], queryFn: () => getUser(id) })
    const { data: users, isLoading: isLoadingUsers } = useQuery({ queryKey: ['get-users'], queryFn: () => getUsers() })
    return { user, isLoadingUser, users, isLoadingUsers }
}