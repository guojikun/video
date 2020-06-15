<script>
export default {
    name: "OwlVideo",
    props: {
        src: {
            type: String,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
    },
    render(h) {
        return h("div", { class: ["owl-video"] }, [
            h("video", { class: ["owl-video-player"], attrs: { controls: "controls", src: this.src } }, this.slots),
            h("div", { class: ["owl-video-controls"] }),
        ]);
    },
    mounted() {},
    methods: {
        slots() {
            if (this.$slots.default) {
                return [...this.$slots.default, "您的浏览器不支持Video标签。"];
            } else {
                return ["您的浏览器不支持Video标签。"];
            }
        },
    },
};
</script>

<style lang="scss">
.owl-video {
    display: block;
    position: relative;
    &:hover {
        &-controls {
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
        }
    }
    &-player {
        display: block;
        max-width: 100%;
        max-height: 100%;
    }
    &-controls {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }
}
</style>
