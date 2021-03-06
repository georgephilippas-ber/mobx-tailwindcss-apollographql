/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}",],
    theme: {
        fontFamily:
            {
                sans: ["Quicksand", "sans-serif"],
                serif: ["Cormorant Garamond", "serif"]
            },
        extend: {},
    },
    plugins: [require("daisyui")],
}
