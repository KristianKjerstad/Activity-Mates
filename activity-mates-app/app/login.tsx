import Icon from "@/assets/icons"
import Home from "@/assets/icons/Home"
import { BackButton } from "@/components/BackButton"
import { ScreenWrapper } from "@/components/ScreenWrapper"
import { theme } from "@/constants/theme"
import { useRouter } from "expo-router"
import { StatusBar, Text, View } from "react-native"


const Login = () => {

    const router = useRouter()

    return <ScreenWrapper>
        <StatusBar barStyle={"dark-content"} />
        <BackButton size={26} router={router} />
        <View>
            <Text>Hey,</Text>
            <Text>Welcome Back!</Text>
        </View>
    </ScreenWrapper>
}


export default Login