<script>
export default {
    name: "OwlVideo",
    props: {
        source: {
            type: [Array, String],
            required: true,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
    },
    render(h) {
        return h("div", { class: ["owl-video"] }, [h("video", { class: ["owl-video-player"], attrs: { controls: "controls" } }, [...this.$slots.default, "您的浏览器不支持Video标签。"]), h("div", { class: ["owl-video-controls"] })]);
    },
    mounted() {
        const soruce = this.getSource();
        console.log(soruce);
    },
    methods: {
        getSource() {
            const type = typeof this.source;
            if (type === "string") {
                return [
                    {
                        src: this.source,
                        type: `video/${this.source.slice(this.source.lastIndexOf("."), this.source.length)}`,
                    },
                ];
            } else {
                return this.source;
            }
        },
    },
    computed: {
        srcs() {
            const type = typeof this.source;
            if (type === "string") {
                return [
                    {
                        src: this.source,
                        type: `video/${this.source.slice(this.source.lastIndexOf("."), this.source.length)}`,
                    },
                ];
            } else {
                return this.source;
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
