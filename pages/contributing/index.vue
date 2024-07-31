<template>
  <div>
    <SectionTitle :title="t('section.title')"
      :subtitle="t('section.subtitle')" />
  </div>
</template>
<script setup>

import { onMounted, watch } from 'vue'
const { t } = useI18n({
  useScope: 'local',
})
</script>

<i18n lang="json">{
  "en": {
    "section": {
      "title": "Contributing with The Points Toolkit",
      "subtitle": "Contribute with feature requesting, bug reporting, coding, spreading the word, and contribute financially."
    }
  },
  "pt": {
    "section": {
      "title": "Nossos Patrocinadores",
      "subtitle": "Seu apoio e colaboração nos permitem oferecer as melhores ferramentas, recursos e insights para otimizar sua viagem com pontos.",
      "cta": "Quer patrocinar o projeto?",
      "link": "Saiba Como"
    }
  }
}
</i18n>
