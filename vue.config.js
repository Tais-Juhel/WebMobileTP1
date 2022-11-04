const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    pwa: {
        name: "Movie-Verse",
        short_name: "MoVe",
        description: "Application to search movies",
        dir: "rtl",
        lang: "fr",
        theme_color: "#1B2430",
        icons: [
            {
                src: "./src/assets/icon/M.png",
                type: "img/png",
                size: "100x100"
            }
        ],
        start_url: "/",
        display: "standalone",
        background_color: "#1B2430"
    }
})