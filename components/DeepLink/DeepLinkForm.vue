<template>
  <form class="flex flex-row justify-center items-end gap-x-5"
    @submit.prevent="submitForm">
    <div>
      <FormSelect v-model="formData.cabin"
        :label="$t('deep_link_form.labels.cabin')">
        <option value="">
          {{ $t('deep_link_form.strings.any_cabin') }}
        </option>
        <option v-for="cabinOption in cabins" :key="cabinOption.code"
          :value="cabinOption.code">
          {{ $t('cabins.' + cabinOption.value) }}
        </option>
      </FormSelect>
    </div>
    <div class="flex flex-row items-end">
      <div class="sm:flex-1">
        <FormInput v-model="formData.origin" class="uppercase"
          :label="$t('deep_link_form.labels.origin')" required maxlength="3"
          minlength="3" />
      </div>
      <div class="p-2 text-neutral-500 cursor-pointer"
        @click="swapDestinations">
        <Icon name="tabler:switch-horizontal" size="2em" />
      </div>
      <div class="sm:flex-1">
        <FormInput v-model="formData.destination" class="uppercase"
          :label="$t('deep_link_form.labels.destination')" required
          maxlength="3" minlength="3" />
      </div>
    </div>

    <div class="flex flex-row items-end gap-4">
      <div class="flex-1">
        <FormInput v-model="formData.depart" type="date" required
          :label="$t('deep_link_form.labels.depart')" />
      </div>
      <div class="flex-1">
        <FormInput v-model="formData.return" type="date"
          :label="$t('deep_link_form.labels.return')" />
      </div>
    </div>
    <div>
      <BButtonSolid type="submit" class="w-full justify-center mt-3">
        {{ $t('buttons.generate') }}
      </BButtonSolid>
    </div>
  </form>

</template>

<script setup>
import { cabins } from '@/data'
import { usePopulateFromQueryParams } from '@/composables/usePopulateFromQueryParams'
const { updateFormDataFromQuery, updateUrlWithFormData } = usePopulateFromQueryParams();

const formData = ref({
  cabin: '',
  origin: '',
  destination: '',
  depart: '',
  return: '',
})



function swapDestinations() {
  const origin = formData.value.origin
  const destination = formData.value.destination
  formData.value.origin = destination
  formData.value.destination = origin
}
const submitForm = () => {
  emit('submit', formData)
}

const emit = defineEmits(['submit'])

</script>
