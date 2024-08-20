import Button from "@/components/Button"
import { ScreenWrapper } from "@/components/ScreenWrapper"
import { useAuth } from "@/hooks/useAuth"
import { supabase } from "@/lib/supabase"
import { Alert, Text, View } from "react-native"

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon, { TIconName } from "@/assets/icons"
import { theme } from "@/constants/theme"
import { ProfileScreen } from "@/screens/ProfileScreen"
import { HomeScreen } from "@/screens/HomeScreen"
import { SearchScreen } from "@/screens/SearchScreen"






const Tab = createBottomTabNavigator();


const Main = () => {

    const { setAuth } = useAuth()

    const onLogout = async () => {
        setAuth(null)
        const { error } = await supabase.auth.signOut()
        if (error) {
            Alert.alert("Sign out", "Error signing out")
        }

    }
    return <ScreenWrapper>
        <NavigationContainer independent={true}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName: TIconName = "home"
                        if (route.name === 'Home') {
                            iconName = "home"
                        } else if (route.name === 'Search') {
                            iconName = "search"
                        }
                        else if (route.name === 'Profile') {
                            iconName = "user"
                        }

                        // You can return any component that you like here!
                        return <Icon name={iconName} width={size} height={size} color={color} />;
                    },
                    tabBarActiveTintColor: theme.colors.primary,
                    tabBarInactiveTintColor: "grey",
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
        {/* <Text>home</Text>
        <Button title="logout" onPress={onLogout} /> */}
    </ScreenWrapper>
}

export default Main