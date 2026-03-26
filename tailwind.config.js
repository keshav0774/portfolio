// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
//         sans: ['"DM Sans"', 'sans-serif'],
//         display: ['"Syne"', 'sans-serif'],
//       },
//       colors: {
//         green: {
//           400: '#d4d2cc',
//           500: '#22c55e',
//           600: '#16a34a',
//         },
//         dark: {
//           900: '#111111',
//           800: '#1a1a1a',
//           700: '#0f1a0f',
//           600: '#162016',
//           500: '#1e2e1e',
//         }
//       },
//       animation: {
//         'cursor-blink': 'blink 1.2s step-end infinite',
//         'float': 'float 6s ease-in-out infinite',
//       },
//       keyframes: {
//         blink: {
//           '0%, 100%': { opacity: '1' },
//           '50%': { opacity: '0' },
//         },
//         float: {
//           '0%, 100%': { transform: 'translateY(0px)' },
//           '50%': { transform: 'translateY(-10px)' },
//         }
//       },
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Syne"', 'sans-serif'],
      },
      colors: {
        // accent: {
        //   400: '#f5f4f0',
        //   500: '#d4d2cc',
        //   600: '#a0a0a0',
        // },
        // dark: {
        //   900: '#111111',
        //   800: '#1a1a1a',
        //   700: '#222222',
        //   600: '#2a2a2a',
        //   500: '#333333',
        // }
        accent: {
          400: '#f5f4f0',
          500: '#d4d2cc',
          600: '#a0a0a0',
        },
        dark: {
           900: '#111111',
           800: '#1a1a1a',
  
        }
      },
      animation: {
        'cursor-blink': 'blink 1.2s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}
