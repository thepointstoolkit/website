<template>
  <div>
    <Card class="w-full sm:w-[360px] p-3">
      <div class="relative">
        <form @submit.prevent="submitForm">
          <div>
            <FormSelect
              v-model="formData.source"
              label="Source"
            >
              <option value="">
                All sources
              </option>
              <option
                v-for="sourceOption in sources"
                :key="sourceOption.value"
                :value="sourceOption.value"
              >
                {{ sourceOption.name }}
              </option>
            </FormSelect>
          </div>
          <div class="mt-6 grid gap-4 lg:gap-6">
            <div class="flex flex-row items-end">
              <div class="sm:flex-1">
                <FormInput
                  v-model="formData.origin"
                  class="uppercase"
                  label="Origin"
                  required
                  :validate="true"
                  :is-valid="!v$.origin.$invalid"
                  help="A list of origin airports. Comma-delimited if multiple, such as &quot;
            SFO,LAX&quot;."
                  @change="v$.origin.$touch"
                />
              </div>
              <div
                class="p-2 text-neutral-500 cursor-pointer"
                @click="swapDestinations"
              >
                <Icon
                  name="tabler:switch-horizontal"
                  size="2em"
                />
              </div>
              <div class="sm:flex-1">
                <FormInput
                  v-model="formData.destination"
                  class="uppercase"
                  label="Destination"
                  required
                  :validate="true"
                  :is-valid="!v$.destination.$invalid"
                  help="A list of destination airports. Comma-delimited if multiple, such as
            &quot;FRA,LHR&quot;."
                  @change="v$.destination.$touch"
                />
              </div>
            </div>
            <div
              v-if="showDates"
              class="flex flex-row items-end gap-4"
            >
              <div class="flex-1">
                <FormInput
                  v-model="formData.startDate"
                  type="date"
                  label="Start Date"
                />
              </div>
              <div class="flex-1">
                <FormInput
                  v-model="formData.endDate"
                  type="date"
                  label="End Date"
                />
              </div>
            </div>
            <div>
              <FormSelect
                v-model="formData.cabin"
                label="Cabin"
              >
                <option value="">
                  All cabins
                </option>
                <option
                  v-for="cabinOption in cabins"
                  :key="cabinOption.code"
                  :value="cabinOption.value"
                >
                  {{
                    cabinOption.name }}
                </option>
              </FormSelect>
            </div>
          </div>
          <Alert
            v-show="broadSearch"
            class="my-2 text-sm"
            type="warning"
            title="⚠️ Broad search"
          >
            <p>
              Your search criterias may lead into a broad search, which may
              consume a lot of API credits and freeze your browser.
            </p>
          </Alert>
          <BButtonSolid
            :variant="broadSearch ? 'warning' : 'primary'"
            type="submit"
            class="w-full justify-center mt-3"
          >
            Search
          </BButtonSolid>
        </form>

        <div v-show="isLoading">
          <div
            class="absolute top-0 start-0 size-full bg-white/50 rounded-lg dark:bg-neutral-800/40"
          />

          <div
            class="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div
              class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
              role="status"
              aria-label="loading"
            >
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
    <CachedSearchFilters />
  </div>
</template>

<script setup>
import { required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { computed, reactive } from 'vue'
import { useSeatsAeroCachedSearchApi } from '@/composables/useSeatsAeroCachedSearchApi'
import { cabins, sources, multicodeAirports } from '@/data'

const { isLoading, start, finish } = useLoadingIndicator()
defineProps({
  showDates: {
    type: Boolean,
    default: true,
  },
  modelValue: {
    type: Object,
    required: true,
    default: () => ({
      origin: '',
      destination: '',
      startDate: '',
      endDate: '',
      cabin: '',
      source: '',
    }),
  },
})

const formData = reactive({
  origin: '',
  destination: '',
  startDate: '',
  endDate: '',
  cabin: '',
  source: '',
})

const airportList = (value) => {
  if (!value) {
    return false
  }

  const parts = value.split(',')

  for (const part of parts) {
    const trimmedPart = part.trim()
    if (trimmedPart.length !== 3) {
      return false
    }
  }

  return true
}

const rules = computed(() => {
  return {
    origin: { required, airportList },
    destination: { required, airportList },
  }
})

const v$ = useVuelidate(rules, formData)

const submitForm = async () => {
  v$.value.$validate()
  const { get } = useSeatsAeroCachedSearchApi()

  if (!v$.value.$error) {
    start()
    await get(formData)
    finish()
  }
}

function swapDestinations() {
  const origin = formData.origin
  const destination = formData.destination
  formData.origin = destination
  formData.destination = origin
}
const origins = computed(() => formData.origin.split(','))
const destinations = computed(() => formData.destination.split(','))

const broadSearch = computed(() => {
  if (formData.cabin === '' && (formData.startDate === '' || formData.endDate === '') && formData.source === '') {
    return true
  }

  const multiCodeOrigin = origins.value.some(origin => multicodeAirports.includes(origin))
  const multiCodeDestination = destinations.value.some(destination => multicodeAirports.includes(destination))
  if (multiCodeDestination || multiCodeOrigin) {
    return true
  }

  return false
})

const emit = defineEmits(['update:modelValue'])

watchEffect(formData, emit('update:modelValue', formData))
</script>
