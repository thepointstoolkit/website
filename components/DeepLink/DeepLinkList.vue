<template>
  <div class="pt-2 sm:pt-4 md:pt-8 border-t mt-2 sm:mt-4 md:mt-8 ">
    <div v-show="showList"
      class="grid sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6">
      <template v-for="(_, loyaltyProgram) in deepLinks"
        :key="`${loyaltyProgram}-deep-link-${deepLinkDataHash}`">
        <DeepLink :program="loyaltyProgram" :origin="deepLinkData.origin"
          :destination="deepLinkData.destination"
          :departure="deepLinkData.depart" :cabin="deepLinkData.cabin"
          :return="deepLinkData.return" />
      </template>
    </div>
  </div>
</template>
<script setup>
import { deepLinks } from '@/data'
const props = defineProps({
  deepLinkData: {
    type: Object,
    required: true,
    default: () => ({
      cabin: '',
      origin: '',
      destination: '',
      depart: '',
      return: '',
    }),
  },
})
const showList = computed(() => {
  const deepLinkData  = props.deepLinkData;
  if (Object.keys(deepLinkData).length === 0) {
    return false
  }

  return props.deepLinkData != {} && props.deepLinkData.origin != '' && props.deepLinkData.destination != '' && props.deepLinkData.depart != '';
})

const deepLinkDataHash = computed(() => {
  const deepLinkData = props.deepLinkData;
  return Object.values(deepLinkData?.value ?? {}).join("")
})

</script>
