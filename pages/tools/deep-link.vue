<template>
  <div>
    <DeepLinkForm @submit="updateDeepLinkData" />
    <DeepLinkList :deep-link-data="formData" />
  </div>
</template>

<script setup>
const formData = ref({})

const { t } = useI18n({
  useScope: 'local',
})

function updateDeepLinkData(data) {
  formData.value = { ...data.value }
}

useSeoMeta({
  title: t('seo.title'),
  description: t('seo.description'),
})
</script>

<i18n lang="json">
{
  "en": {
    "seo": {
  "title": "Direct Link",
  "description": "Enter the flight details you want, and our tool creates direct links for all loyalty programs. Quickly compare options and find the best deal!"
    }
  },
  "pt": {
    "seo": {
      "title": "Link Direto",
      "description": "Digite as informações da passagem que deseja, e nossa ferramenta cria links diretos para todos os programas de fidelidade. Assim, você pode comparar rapidamente as opções e encontrar a melhor opção!"
    }
  }
}
</i18n>
