import Icon from "@/assets/icons"
import Home from "@/assets/icons/Home"
import { BackButton } from "@/components/BackButton"
import Button from "@/components/Button"
import Input from "@/components/Input"
import { ScreenWrapper } from "@/components/ScreenWrapper"
import { theme } from "@/constants/theme"
import { hp, wp } from "@/helpers/common"
import { supabase } from "@/lib/supabase"
import { useRouter } from "expo-router"
import { useRef, useState } from "react"
import { Alert, Pressable, StatusBar, StyleSheet, Text, TextInput, View } from "react-native"


const SignUp = () => {

    const router = useRouter()
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const mailIcon = <Icon name="mail" width={26} height={26} strokeWidth={1.6} />
    const lockIcon = <Icon name="lock" width={26} height={26} strokeWidth={1.6} />
    const userIcon = <Icon name="user" width={26} height={26} strokeWidth={1.6} />

    const isValidForm = email && password && name

    // TODO use react form and zod for valdiation
    const onSubmit = async () => {
        if (!isValidForm) {
            Alert.alert("Sign Up", "Please fill in all required fields")
            return
        }
        setLoading(true)
        await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    name: name
                }
            }
        })
            .then((response) => {
                if (response.error) {
                    throw new Error(response.error.message)
                }
            })
            .catch((error) => {
                console.log("error ", error)
                Alert.alert("Sign Up", error.message)
            })
            .finally(() => {
                setLoading(false)
                setEmail("")
                setPassword("")
                setName("")
            })





    }

    return <ScreenWrapper>
        <StatusBar barStyle={"dark-content"} />
        <View style={styles.container}>
            <BackButton size={26} router={router} />
            <View>

                <Text style={styles.welcomeText}>Let's Get Started!</Text>
            </View>

            <View style={styles.form}>
                <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>Please fill in your details</Text>
                <Input icon={userIcon} value={name} placeholder="Enter your name" onChangeText={(text: string) => { setName(text) }} />
                <Input icon={mailIcon} value={email} placeholder="Enter your email" onChangeText={(text: string) => { setEmail(text) }} keyboardType="email-address" />
                <Input icon={lockIcon} value={password} secureTextEntry placeholder="Enter your password" onChangeText={(text: string) => { setPassword(text) }} />
                <Button disabled={!isValidForm} title="Sign Up" loading={loading} onPress={onSubmit} />
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Already have an account?</Text>
                <Pressable onPress={() => router.push("/login")}>
                    <Text style={[styles.footerText, styles.signUp]}>Log In</Text>
                </Pressable>
            </View>
        </View>

    </ScreenWrapper>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 45,
        paddingHorizontal: wp(5),
    },
    welcomeText: {
        fontSize: hp(4),
        fontWeight: theme.fonts.extrabold,
        color: theme.colors.text,
    },
    form: {
        gap: 25
    },
    forgotPassword: {
        textAlign: "right",
        fontWeight: theme.fonts.semibold,
        color: theme.colors.text
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5
    },
    footerText: {
        textAlign: "center",
        color: theme.colors.text,
        fontSize: hp(1.6)
    },
    signUp: {
        color: theme.colors.primaryDark,
        fontWeight: theme.fonts.bold

    }


})

export default SignUp