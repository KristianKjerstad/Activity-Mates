import { ScreenWrapper } from "@/components/ScreenWrapper"
import { router, useRouter } from "expo-router"
import { Button, Text, View } from "react-native"



const Welcome = () => {
    const router = useRouter()
    return (
        <ScreenWrapper>
            <Text>welcome</Text>
            <Button title="home" onPress={() => router.push("/")} />
        </ScreenWrapper>
    )
}

export default Welcome