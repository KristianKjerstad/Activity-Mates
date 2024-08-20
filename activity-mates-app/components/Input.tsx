import { theme } from "@/constants/theme"
import { hp } from "@/helpers/common"
import { StyleSheet, TextInput, View } from "react-native"




type InputProps = {
    containerStyles?: any
    icon: any
    inputRef: any
    placeholder: string
    onChangeText: () => void
    secureTextEntry?: boolean
    keyboardType?: "default" | "email-address"
}


const Input = (props: InputProps) => {
    return <View style={[styles.container, props.containerStyles && props.containerStyles]}>
        {
            props.icon && props.icon
        }
        <TextInput
            style={{ flex: 1 }}
            placeholderTextColor={theme.colors.textLight}
            ref={props.inputRef && props.inputRef}
            placeholder={props.placeholder}
            keyboardType={props.keyboardType ? props.keyboardType : "default"}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
        ></TextInput>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: hp(6),
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.2,
        borderColor: theme.colors.text,
        borderRadius: theme.radius.xxl,
        borderCurve: "continuous",
        paddingHorizontal: 18,
        gap: 12
    }
})

export default Input