import Button from "@/components/Button"
import { AuthProvider } from "@/context/AuthContext"
import { useAuth } from "@/hooks/useAuth"
import { supabase } from "@/lib/supabase"
import { Stack, useRouter } from "expo-router"
import { useEffect } from "react"
import { Alert } from "react-native"


const _layout = () => {

    return (
        <AuthProvider>
            <MainLayout />
        </AuthProvider>
    )
}


const MainLayout = () => {

    const { setAuth, } = useAuth()

    const router = useRouter()

    useEffect(() => {
        supabase.auth.onAuthStateChange((_event, session) => {
            if (session && session.user) {
                setAuth(session.user)
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