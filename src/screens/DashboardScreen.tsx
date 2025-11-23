import { FC } from "react"
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native"
import { Text } from "@/components/Text"
import { useSafeAreaInsetsStyle } from "@/utils/useSafeAreaInsetsStyle"

const COLORS = {
  background: "#0D0D0D",
  accent: "#D4A84B",
  text: "#FFFFFF",
  textSecondary: "#8A8A8A",
}

export const DashboardScreen: FC = function DashboardScreen() {
  const $topInsets = useSafeAreaInsetsStyle(["top"])

  return (
    <View style={[styles.container, $topInsets]}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>Your dashboard is empty</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  } as ViewStyle,
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: COLORS.text,
    marginBottom: 8,
  } as TextStyle,
  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
  } as TextStyle,
})
