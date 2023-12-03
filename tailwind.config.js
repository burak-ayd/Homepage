const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#32445a",
                secondary: "#2b3548",
            },
            fontSize: {
                15: "0.938rem",
            },
        },
    },
    plugins: [],
});
