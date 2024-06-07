<template>
  <BButton :class="[colorClasses]">
    <slot />
  </BButton>
</template>

<script>
import BButton from './BButton.vue';

export default {
  components: {
    BButton
  },
  props: {
    color: {
      type: String,
      default: "blue"
    }
  },
  computed: {
    colorClasses() {
      return "border-gray-200 text-gray-500 hover:border-" + this.color + "-600 hover:text-" + this.color + "-600 disabled:opacity-50  dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-" + this.color + "-500 dark:hover:border-" + this.color + "-600"
    },
  }
};
</script>
