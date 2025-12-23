import { createSettingsStyles } from "@/assets/styles/settings.styles"
import DangerZone from "@/components/DangerZone"
import Preferences from "@/components/Preferences"
import ProgressStats from "@/components/ProgressStats"
import useTheme from "@/hooks/useTheme"
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { View, Text, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const SettingsScreen = () => {
    

    const {colors, isDarkMode, toggleDarkMode} = useTheme()

    const settingsStyle = createSettingsStyles(colors)

    return(
        <LinearGradient colors={colors.gradients.background} style={settingsStyle.container} >
            <SafeAreaView style={settingsStyle.safeArea} >
                <View style={settingsStyle.header} >
                    <View style={settingsStyle.titleContainer} >
                        <LinearGradient colors={colors.gradients.primary} style={settingsStyle.iconContainer} >
                            <Ionicons name="settings" size={28} color="#ffffff" />
                        </LinearGradient>
                        <Text style={settingsStyle.title} >Settings</Text>
                    </View>
                </View>

                <ScrollView
                    style={settingsStyle.scrollView}
                    contentContainerStyle={settingsStyle.content}
                    showsVerticalScrollIndicator={false}
                >
                    <ProgressStats />

                     {/* PREFERENCES */}
                     <Preferences />

                     <DangerZone />
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default SettingsScreen