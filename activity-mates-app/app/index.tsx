

import Loading from "@/components/Loading";
import { ScreenWrapper } from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";


export default function Home() {

    return (
        <ScreenWrapper>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Loading />
            </View>
        </ScreenWrapper>
    );
}

