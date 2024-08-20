import { theme } from "@/constants/theme"
import { hp } from "@/helpers/common"
import { Pressable, StyleSheet, Text, View } from "react-native"
import Loading from "./Loading"


type ButtonProps = {
    buttonStyle?: any
    textStyle?: string
    title: string
    onPress: () => void,
    loading?: boolean,
    hasShadow?: boolean
    disabled?: boolean
}


const Button = ({ buttonStyle, textStyle, title, onPress, loading = false, hasShadow = true, disabled = false }: ButtonProps) => {

    const shadowStyle = {
        shadowColor: theme.colors.dark,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4
    }

    if (loading) {
        return <View style={[styles.button, buttonStyle, { backgroundColor: "white" }]}>
            <Loading />
        </View>
    }
    if (disabled) {
        return <Pressable style={[styles.disabledButton, hasShadow && shadowStyle]}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </Pressable>
    }
    return <Pressable onPress={onPress} style={[styles.button, buttonStyle, hasShadow && shadowStyle]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>

}

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        height: hp(6.6),
        justifyContent: "center",
        alignItems: "center",
        borderCurve: "continuous",
        borderRadius: theme.radius.xl
    },
    disabledButton: {
        backgroundColor: theme.colors.gray,
        height: hp(6.6),
        justifyContent: "center",
        alignItems: "center",
        borderCurve: "continuous",
        borderRadius: theme.radius.xl
    },
    text: {
        fontSize: hp(2.5),
        color: "white"
    },
    disabledText: {
        fontSize: hp(2.5),
        color: theme.colors.textDark,
    }
})

export default Button