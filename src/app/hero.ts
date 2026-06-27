import { heroui } from "@heroui/react";

export default heroui({
  defaultTheme: "dark",
  themes: {
    dark: {
      colors: {
        background: "#0d0e12", // dark ink background
        foreground: "#eceef2", // light readable text
        primary: {
          DEFAULT: "#10b981", // Emerald/Signal green
          foreground: "#000000",
        },
        focus: "#10b981",
      },
    },
  },
});
