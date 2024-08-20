import Button from "@/components/Button"
import { ScreenWrapper } from "@/components/ScreenWrapper"
import { useAuth } from "@/hooks/useAuth"
import { supabase } from "@/lib/supabase"
import { Alert, Text, View } from "react-native"



const Main = () => {

    const { setAuth } = useAuth()

    const onLogout = async () => {
        setAuth(null)
        const { error } = await supabase.auth.signOut()
        if (error) {
            Alert.alert("Sign out", "Error signing out")
        }

    }
    return <ScreenWrapper>
        <Text>home</Text>
        <Button title="logout" onPress={onLogout} />
    </ScreenWrapper>
}

export default Main