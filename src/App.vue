<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <div>
            <owl-video>
                <source src="@/assets/01.mp4" type="video/mp4" />
            </owl-video>
        </div>
        <video width="320" height="240" controls>
            <source src="@/assets/01.mp4" type="video/mp4" />
            您的浏览器不支持Video标签。
        </video>
        <video width="320" height="240" controls>
            <source src="//mp4.vjshi.com/2020-01-02/1250806439ec0bb8e0e6805b1da9dbac.mp4" type="video/mp4" />
            您的浏览器不支持Video标签。
        </video>
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
