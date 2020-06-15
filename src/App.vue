<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <div>
            <owl-video src="example.mp4">
                <source src="media/example.mp4" type="video/mp4" />
            </owl-video>
        </div>
    </div>
</template>

<script>
import OwlVideo from "./components/video";

export default {
    name: "App",
    components: {
        OwlVideo,
    },
    data() {
        return {
            source: [
                {
                    src: "@/assets/movies.ogv",
                    type: "video/ogv",
                },
            ],
        };
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
