import Video from "./src/video.vue";

Video.install = Vue => {
    Vue.component(Video.name, Video);
};

export default Video;
