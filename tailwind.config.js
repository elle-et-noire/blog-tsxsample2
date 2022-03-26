const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    container: {
      padding: "1rem",
    },
    screens: {
      md: "768px",
    },
    fontSize: {
      xxs: ["0.675rem"],
      xs: ["0.8125rem"],
      sm: ["0.9375rem"],
      base: ["1.02rem", "1.85rem"],
      "lg": ["1.125rem"],
      "xl": ["1.25rem"],
      "2xl": ["1.5rem"],
      "3xl": ["1.65rem", "2.5rem"],
      "4xl": ["2rem", "2.5rem"],
    },
    extend: {
      colors: {
        gray: {
          100: "#d8dee9",
          700: "#2e3440",
          800: "#2c313d",
          900: "#21252e",
        },
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#f0f6fc',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'emerald': '#007777',
        'black': '#002b36',
        'darkgreen': '#145055',
        'water': '#51c4d3',
        // 'raspberry': '#ff44dd'
        'raspberry': '#d42474'
        // 'raspberry': '#ff0099'
      },
      animation: {
        'gradient-background': 'gradient-ackground 10s ease infinite',
        appear: "appear 0.3s ease 1.5s 1 forwards",
        disappear: "disappear 3s ease 0s 1 forwards"
      },
      keyframes: {
        'gradient-background': {
          "0%": {
            'background-position': '0% 50%'
          },
          "50%": {
            'background-position': '100% 50%'
          },
          "100%": {
            'background-position': '0% 50%'
          }
        },
        appear: {
          "0%": { opacity: 0, visibility: 'hidden' },
          "100%": { opacity: 1, visibility: 'visible' },
        },
        disappear: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
    fontFamily: {
      'applimincho': ['"AppliMincho"'],
      'mono': ["'SFMono-Regular'", 'consolas', 'ui-monospace']
    }
  },
  // darkMode: 'media',  // or darkMode: 'class'
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        ".round-scrollbar": {
          "&::-webkit-scrollbar": {
            width: "8px",
            height: "8px"
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#64748b",
            "border-radius": "5px"
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#94a3b8"
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent"
          }
        },
        ".overflow-overlay": {
          overflow: "overlay",
        }
      })
    })
  ],
};
