import { ScreenWrapper } from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";


export default function Home() {

    const router = useRouter()
    return (
        <ScreenWrapper>
            <Text>home</Text>
            <Button title="welcome" onPress={() => router.push("/welcome")} />
        </ScreenWrapper>
    );
}

