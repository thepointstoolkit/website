<template>
  <form @submit.prevent="submitForm">
    <div class="mt-6 grid gap-4 lg:gap-6">
      <div class="flex flex-col sm:flex-row items-end">
        <div class="flex-1">
          <FormInput
v-model="formData.origin" class="uppercase" label="Origin"
            :minlength="3" required :maxlength="3"
            :is-valid="!v$.origin.$invalid" @change="v$.origin.$touch" />
        </div>
        <div
class="p-2 text-neutral-500 cursor-pointer"
          @click="swapDestinations">
          <Icon name="tabler:switch-horizontal" size="2em" />
        </div>
        <div class="flex-1">
          <FormInput
v-model="formData.destination" class="uppercase"
            label="Destination" required :minlength="3"
            :maxlength="3" :is-valid="!v$.destination.$invalid"
            @change="v$.destination.$touch" />
        </div>

      </div>
    </div>


    <ButtonSolid type="submit" class="w-full justify-center mt-3">
      Search
    </ButtonSolid>
  </form>
</template>
<script setup>
import { useSeatsAeroCachedSearchApi } from '@/composables/useSeatsAeroCachedSearchApi';
import { required, minLength, maxLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
const formData = reactive({
  origin: '',
  destination: '',
});

const rules = computed(() => {
  return {
    origin: { required, minLength: minLength(3), maxLength: maxLength(3) },
    destination: { required, minLength: minLength(3), maxLength: maxLength(3) },
  };
});
const v$ = useVuelidate(rules, formData);
const submitForm = async () => {
  v$.value.$validate();
  const { get } = useSeatsAeroCachedSearchApi();

  if (!v$.value.$error) {
get(formData)
  }
};

function swapDestinations() {
  const origin = formData.origin;
  const destination = formData.destination;
  formData.origin = destination;
  formData.destination = origin;
}

</script>
