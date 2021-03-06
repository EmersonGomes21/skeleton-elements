import { h } from 'vue';

export default {
  name: 'skeleton-block',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    width: [String, Number],
    height: [String, Number],
    effect: String,
  },
  render() {
    return h(
      this.tag,
      {
        class: {
          'skeleton-block': true,
          [`skeleton-effect-${this.effect}`]: this.effect,
        },
        style: {
          width: this.width,
          height: this.height,
        },
      },
      this.$slots.default && this.$slots.default(),
    );
  },
};
