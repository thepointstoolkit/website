<template>
  <div>
    <DeepLinkForm @submit="updateDeepLinkData" />
  </div>
  <DeepLinkList :deepLinkData="formData"  />
</template>

<script setup>
const formData = ref({})

const { t } = useI18n({
  useScope: 'local',
})

function updateDeepLinkData(data) {
  formData.value = {...data.value}
}

useSeoMeta({
  title: t('seo.title'),
  description: t('seo.description'),
})
</script>

<i18n lang="json">{
  "en": {
    "seo": {
      "title": "Yearly Calendar",
      "description": "Discover a yearly calendar of availability for your desired route. Plan your travels with ease by viewing all available dates at a glance.",
    }
  },
  "pt": {
    "seo": {
      "title": "Calendário Anual",
      "description": "Descubra um calendário anual de disponibilidade para a rota desejada. Planeje suas viagens com facilidade visualizando todas as datas disponíveis de uma vez."
    }
  }
}
</i18n>
