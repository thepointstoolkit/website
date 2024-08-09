<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :throttle="0" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const appName = config.public.appName
useHead({
  titleTemplate: (titleChunk: string) => {
    return titleChunk ? `${titleChunk} - ${appName}` : `${appName}`
  },
  link: [{ rel: 'icon', type: 'image/png', href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧰</text></svg>" }]
})

const { t } = useI18n({
  useScope: 'local',
})

useSeoMeta({
  description: t('seo.description'),
})

</script>
<i18n lang="json">{
  "en": {
    "seo": {
      "description": "Your ultimate resource for award travel. All the tools you need to optimize your points and miles, making your travel planning seamless and rewarding. Save time, maximize value, and explore more with ease.",
    }
  },
  "pt": {
    "seo": {
      "description": "O seu recurso definitivo para viagens com milhas. Todas as ferramentas que você precisa para otimizar seus pontos e milhas, tornando o planejamento de suas viagens mais fácil e gratificante. Economize tempo, maximize o valor e explore mais com facilidade."
    }
  }
}
</i18n>
