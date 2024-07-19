<template>
  <div class="">
    <form
      class="mt-6 grid gap-4 lg:gap-6 w-max-full"
      @submit.prevent="submitForm"
    >
      <div
        class="border py-2 bg-gray-100 rounded-lg p-0.5 dark:bg-neutral-800 "
      >
        <div class="flex flex-row w-fit mx-auto">
          <div
            class="flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px -ms-px rounded-l-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
          >
            <div class="relative flex items-start w-full">
              <FormRadio
                id="one_way"
                v-model="formData.searchType"
                :label="$t('cached_search_form.labels.one_way')"
                value="one_way"
              />
            </div>
          </div>

          <div
            class="flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px -ms-px rounded-r-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
          >
            <div class="relative flex items-start w-full">
              <FormRadio
                id="round_trip"
                v-model="formData.searchType"
                :label="$t('cached_search_form.labels.round_trip')"
                value="round_trip"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <FormSelect
          v-model="formData.source"
          :label="$t('cached_search_form.labels.source')"
        >
          <option value="">
            {{ $t('cached_search_form.strings.all_sources') }}
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

      <div class="flex flex-row items-end">
        <div class="sm:flex-1">
          <FormInput
            v-model="formData.origin"
            class="uppercase"
            :label="$t('cached_search_form.labels.origin')"
            required
            :validate="true"
            :is-valid="!v$.origin.$invalid"
            :help="$t('cached_search_form.help.origin')"
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
            :label="$t('cached_search_form.labels.destination')"
            required
            :validate="true"
            :is-valid="!v$.destination.$invalid"
            :help="$t('cached_search_form.help.destination')"
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
            :label="$t('cached_search_form.labels.start_date')"
          />
        </div>
        <div class="flex-1">
          <FormInput
            v-model="formData.endDate"
            type="date"
            :label="$t('cached_search_form.labels.end_date')"
          />
        </div>
      </div>
      <div>
        <FormSelect
          v-model="formData.cabin"
          :label="$t('cached_search_form.labels.cabin')"
        >
          <option value="">
            {{ $t('cached_search_form.strings.all_cabins') }}
          </option>
          <option
            v-for="cabinOption in cabins"
            :key="cabinOption.code"
            :value="cabinOption.value"
          >
            {{ $t('cabins.' + cabinOption.value) }}
          </option>
        </FormSelect>
      </div>

      <Alert
        v-show="broadSearch"
        id="broad-search"
        class="my-2 text-sm"
        type="warning"
        :title="'⚠️ ' + $t('cached_search_form.broad_search.title')"
      >
        <p>
          {{ $t("cached_search_form.broad_search.msg") }}
        </p>
      </Alert>
      <BButtonSolid
        :variant="broadSearch ? 'warning' : 'primary'"
        type="submit"
        class="w-full justify-center mt-3"
      >
        {{ $t('buttons.search') }}
      </BButtonSolid>
    </form>
    <CachedSearchFilters :allowed-filters="allowedFilters" />
  </div>
</template>

<script setup>
import { required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { computed, reactive } from 'vue'
import { useSeatsAeroCachedSearchApi } from '@/composables/useSeatsAeroCachedSearchApi'
import { cabins, sources, multicodeAirports } from '@/data'

const { start, finish } = useLoadingIndicator()

defineProps({
  showDates: {
    type: Boolean,
    default: true,
  },
  modelValue: {
    type: Object,
    required: true,
    default: () => ({
      searchType: 'one_way',
      origin: '',
      destination: '',
      startDate: '',
      endDate: '',
      cabin: '',
      source: '',
    }),
  },
  allowedFilters: {
    type: Array,
    default: () => [
      'Source',
      'HasDirectFlight',
      'Cabins',
      'OriginAirport',
      'DestinationAirport',
      'OriginRegion',
      'DestinationRegion',
      'Month',
      'Date',
    ],
  },
})

const formData = reactive({
  searchType: 'one_way',
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
  const roundTrip = formData.searchType == 'round_trip'
  if (!v$.value.$error) {
    emit('submit', formData)
    start()
    await get(formData)
    if (roundTrip) {
      const { origin, destination } = formData

      await get({
        ...formData,
        origin: destination,
        destination: origin,
      }, false)
    }

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
  let showMessage = false
  if (formData.cabin === '' && (formData.startDate === '' || formData.endDate === '') && formData.source === '') {
    showMessage = true
  }

  const multiCodeOrigin = origins.value.some(origin => multicodeAirports.includes(origin))
  const multiCodeDestination = destinations.value.some(destination => multicodeAirports.includes(destination))
  if (multiCodeDestination || multiCodeOrigin) {
    showMessage = true
  }

  if (formData.searchType == 'round_trip' && (formData.source == '' || multiCodeDestination || multiCodeOrigin)) {
    showMessage = true
  }

  return showMessage
})

const emit = defineEmits(['update:modelValue', 'submit'])

watchEffect(formData, emit('update:modelValue', formData))
</script>
