import { theme } from "@/constants/theme";
import { ActivityIndicator, Text, View } from "react-native";



const Loading = ({ size = "large", color = theme.colors.primary }: { size: number | "large" | "small" | undefined, color: string }) => {

    return <View style={{ justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={size} color={color} />
    </View >
}

export default Loading