import Icon from "@/assets/icons"
import { theme } from "@/constants/theme"
import { Router } from "expo-router"
import { Pressable, StyleSheet } from "react-native"



export const BackButton = ({ size, router }: { size: number, router: Router }) => {

    return <Pressable onPress={() => { router.back() }} style={styles.button}>
        <Icon name="arrowLeft" strokeWidth={2.5} width={size} height={size} color={theme.colors.text} />
    </Pressable>

}

const styles = StyleSheet.create({
    button: {
        alignSelf: "flex-start",
        padding: 5,
        borderRadius: theme.radius.sm,
        backgroundColor: "rgba(0,0,0,0.07)"
    }
})