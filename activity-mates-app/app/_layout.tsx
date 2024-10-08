import { AuthProvider, TUser } from "@/context/AuthContext"
import { useAuth } from "@/hooks/useAuth"
import { supabase } from "@/lib/supabase"
import { getUserData } from "@/services/userService"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Stack, useRouter } from "expo-router"
import { useEffect } from "react"


const queryClient = new QueryClient()

const _layout = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <MainLayout />
            </AuthProvider>
        </QueryClientProvider>
    )
}


const MainLayout = () => {

    const { setAuth, setUserData } = useAuth()

    const router = useRouter()

    const updateuserData = async (user: TUser) => {
        let res = await getUserData(user.id)
        if (res.success) {
            setUserData
        }

    }

    useEffect(() => {
        supabase.auth.onAuthStateChange((_event, session) => {
            if (session && session.user) {
                setAuth(session.user as TUser)
                updateuserData(session.user)
                router.replace("/home")
            }
            else {
                setAuth(null)
                router.replace("/welcome")

            }
        })


    }, [])


    return (
        <Stack screenOptions={{
            headerShown: false
        }}>
        </Stack>
    )
}

export default _layout