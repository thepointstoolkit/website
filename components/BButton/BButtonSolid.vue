<template>
  <BButton :class="[colorClasses]">
    <slot />
  </BButton>
</template>

<script>
import BButton from './BButton.vue'

export default {
  components: {
    BButton,
  },
  props: {
    color: {
      type: String,
      default: 'blue',
    },
  },
  computed: {
    colorClasses() {
      return 'border-transparent bg-' + this.color + '-600 text-white hover:bg-' + this.color + '-700 disabled:opacity-50'
    },
  },
}
</script>
