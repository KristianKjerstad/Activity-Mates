import { ScreenWrapper } from "@/components/ScreenWrapper"
import { router, useRouter } from "expo-router"
import { Image, Pressable, StatusBar, StyleProp, Text, View, ViewStyle } from "react-native"
import { wp, hp } from "../helpers/common"
import { theme } from "@/constants/theme"
import Button from "@/components/Button"


const Welcome = () => {

    const router = useRouter()
    return (
        <ScreenWrapper bg="white">
            <StatusBar barStyle={"dark-content"} />
            <View style={styles.container}>
                <Image style={styles.welcomeImage} source={require("../assets/images/welcome.png")} />
                <View style={{ gap: 20 }}>
                    <Text style={styles.title}>Activity Mates</Text>
                    <Text style={styles.punchline}>Find new people to do your favorite activities with!</Text>
                </View>
                {/* Footer */}
                <View style={styles.footer}>
                    <Button
                        title="Getting started"
                        onPress={() => { router.push("/signUp") }}
                        buttonStyle={{ marignHorizontal: wp(3) }}
                        textStyle=""



                    />
                    <View style={styles.bottomTextContainer}>
                        <Text style={styles.loginText}>
                            Already have an account!
                        </Text>
                        <Pressable onPress={() => { router.push("/login") }}>
                            <Text style={[styles.loginText, { color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold }]}>
                                Login
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScreenWrapper>
    )
}

const styles = {
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "white",
        marginHorizontal: wp(6)
    },
    welcomeImage: {
        height: hp(30),
        width: wp(60),
        alignSelf: "center"
    },
    title: {
        color: theme.colors.text,
        fontSize: hp(4),
        textAlign: "center",
        fontWeight: theme.fonts.bold
    },
    punchline: {
        textAlign: "center",
        paddingHorizontal: wp(10),
        fontSize: hp(1.7),
        color: theme.colors.text
    },
    footer: {
        gap: 30,
        width: "100%"
    },
    bottomTextContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5
    },
    loginText: {
        textAlign: "center",
        color: theme.colors.text,
        fontSize: hp(1.8)
    }
}

export default Welcome