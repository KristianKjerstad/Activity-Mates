import Home from "@/assets/icons/Home"
import { theme } from "@/constants/theme"
import { Text, View } from "react-native"


const Login = () => {
    return <View>
        <Text>login</Text>
        <Home strokeWidth={2} color={theme.colors.primary} />
    </View>
}


export default Login