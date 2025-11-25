import React from "react"
import Svg, { Path, Circle } from "react-native-svg"
import { View, ViewStyle } from "react-native"

interface TabIconProps {
  name: "home" | "shop" | "freelance" | "dashboard" | "profile"
  active?: boolean
  size?: number
  color?: string
}

export const TabIcon: React.FC<TabIconProps> = ({
  name,
  active = false,
  size = 24,
  color = "#FFFFFF",
}) => {
  const strokeWidth = 2.5
  const cornerRadius = 4

  const renderIcon = () => {
    switch (name) {
      case "home":
        // Filled home icon (always filled, Instagram style)
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path
              d="M9.5 21V14.5C9.5 13.9477 9.94772 13.5 10.5 13.5H13.5C14.0523 13.5 14.5 13.9477 14.5 14.5V21M3 9.5L12 3L21 9.5V19.5C21 20.6046 20.1046 21.5 19 21.5H5C3.89543 21.5 3 20.6046 3 19.5V9.5Z"
              fill={active ? color : "none"}
              stroke={color}
              strokeWidth={active ? 0 : strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        )

      case "shop":
        // Shopping bag with rounded corners
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path
              d="M6 6C6 3.79086 7.79086 2 10 2H14C16.2091 2 18 3.79086 18 6V7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9C2 7.89543 2.89543 7 4 7H6V6Z"
              fill={active ? color : "none"}
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M6 7V6C6 3.79086 7.79086 2 10 2H14C16.2091 2 18 3.79086 18 6V7"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        )

      case "freelance":
        // Briefcase/Reels style - rounded square with play icon
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path
              d="M3 8C3 6.34315 4.34315 5 6 5H18C19.6569 5 21 6.34315 21 8V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V8Z"
              fill={active ? color : "none"}
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M8 5V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V5"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M3 10H21"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        )

      case "dashboard":
        // Paper plane / DM style - rotated -45°
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path
              d="M21.7071 2.29289C22.4381 3.02389 22.2556 4.23949 21.3146 4.72684L4.98959 12.8893C3.96733 13.4204 2.8034 12.4721 3.08233 11.3411L4.96719 3.94803C5.11032 3.39171 5.39171 2.89032 5.94803 2.74719L13.3411 0.862326C14.4721 0.583397 15.4204 1.74733 14.8893 2.76959L6.72684 19.0946C6.23949 20.0356 5.02389 20.2181 4.29289 19.4871L2.29289 17.4871C1.90237 17.0966 1.90237 16.4634 2.29289 16.0729L16.0729 2.29289C16.4634 1.90237 17.0966 1.90237 17.4871 2.29289L21.7071 2.29289Z"
              fill={active ? color : "none"}
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="rotate(-45 12 12)"
            />
            <Path
              d="M10.5 13.5L21 3"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        )

      case "profile":
        // User profile circle with silhouette
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Circle
              cx="12"
              cy="12"
              r="9"
              fill={active ? color : "none"}
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
              fill={active ? color : "none"}
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M6.16797 18.8409C6.70043 16.6229 8.76497 15 11.25 15H12.75C15.235 15 17.2996 16.6229 17.832 18.8409"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        )

      default:
        return null
    }
  }

  return <View style={{ width: size, height: size }}>{renderIcon()}</View>
}
