import Icon from "@/assets/icons";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PaddedContainer from "./PaddedContainer";


export function ProfileScreen() {

    const { userMetaData, user } = useAuth()
    const [isLoading, setIsLoading] = useState<boolean>(false)


    const addressIcon = <Icon name="location" width={26} height={26} strokeWidth={1.6} />
    const emailIcon = <Icon name="mail" width={26} height={26} strokeWidth={1.6} />

    const handleSignOut = async () => {
        setIsLoading(true)
        await supabase.auth.signOut()
        setIsLoading(false)
    }

    return (
        <PaddedContainer>
            <View>
                <Text style={styles.headerText}>Profile</Text>
                <Image style={styles.profileImage} source={require("../assets/images/avatar.png")} />
                <Text style={styles.nameText}>{userMetaData?.name ?? "No name found..."}</Text>
            </View>
            <View style={styles.profileInfoContainer}>
                <Input icon={addressIcon} value={userMetaData?.address ?? "No address"} containerStyles={{ width: wp(80) }} />
                <Input icon={emailIcon} value={user?.email ?? "No email"} containerStyles={{ width: wp(80) }} />
                <Input icon={emailIcon} value={"Birthday"} containerStyles={{ width: wp(80) }} />

            </View>
            <View style={styles.footer}>

                <Button title="Sign Out" onPress={handleSignOut} loading={isLoading} buttonStyle={{ width: wp(60) }} />
            </View>
        </PaddedContainer >
    );
}


const styles = StyleSheet.create({
    profileImage: {
        height: 128,
        width: 128,
        alignSelf: "center"
    },
    headerText: {
        color: theme.colors.text,
        fontSize: hp(3),
        paddingBottom: hp(2),
        fontWeight: theme.fonts.semibold,
    },
    nameText: {
        // flex: 1,
        // alignSelf: "center",
        textAlign: "center",
        fontSize: 24,
        paddingTop: hp(2),
    },
    profileInfoContainer: {
        paddingTop: hp(2),
        paddingBottom: hp(4),
        gap: hp(1.5),
        alignItems: "center"
    },
    footer: {
        alignItems: "center"
    }
})