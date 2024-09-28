<template>
  <div class="grid md:grid-cols-5 gap-10">
    <div class="md:col-span-2">
      <div class="max-w-xs">
        <h2
          class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white"
        >
          {{ t('section.title') }}
        </h2>
      </div>
    </div>
    <div class="md:col-span-3">
      <div
        class="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700"
      >
        <FaqAccordionItem
          v-for="idx in 4"
          :key="`faq-${idx}`"
        >
          <template #title>
            {{ t(`faqs.${idx-1}.question`) }}
          </template>
          <p>{{ t(`faqs.${idx - 1}.answer`) }}</p>
        </FaqAccordionItem>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n({
  useScope: 'local',
})
</script>

<i18n lang="json">
{
  "en": {
    "section": {
      "title": "Frequently asked questions"
    },
    "faqs": [
      {
        "question": "What is The Points Toolkit?",
        "answer": "The Points Toolkit is your ultimate resource for optimizing award travel. We provide a suite of tools designed to help you maximize your points and miles, making your travel planning seamless and rewarding."
      },
      {
        "question": "Is The Points Toolkit free to use?",
        "answer": "Yes, The Points Toolkit is completely free to use. However, please note that some tools may require integration with third-party apps that have their own subscription fees, such as Seats.aero."
      },
      {
        "question": "How can I contribute to The Points Toolkit?",
        "answer": "We welcome contributions from our community! Whether you have ideas for new features, find bugs, or want to provide feedback, you can get involved."
      },
      {
        "question": "How do I get started with The Points Toolkit?",
        "answer": "Getting started is easy! You don't need to create an account. Simply configure your integrations with the third-party apps you use and start exploring our tools to plan your next award travel."
      }
    ]
  },
  "pt": {
    "section": {
      "title": "Dúvidas Frequentes"
    },
    "faqs": [
      {
        "question": "O que é o The Points Toolkit?",
        "answer": "O The Points Toolkit é o seu site definitivo para otimizar viagens com pontos e milhas. Oferecemos várias ferramentas projetadas para ajudar você a maximizar seus pontos e milhas, tornando o planejamento de suas viagens mais fácil e sem muito esforço."
      },
      {
        "question": "O The Points Toolkit é gratuito para usar?",
        "answer": "Sim, o The Points Toolkit é completamente gratuito para usar. No entanto, algumas ferramentas podem exigir integração com aplicativos de terceiros que possuem suas próprias taxas de assinatura, como o Seats.aero."
      },
      {
        "question": "Como posso contribuir com o The Points Toolkit?",
        "answer": "Agradecemos as contribuições com a nossa comunidade! Caso você tenha ideias para novos recursos, ache bugs ou queira fornecer qualquer outro feedback, pode entrar em contato com a gente."
      },
      {
        "question": "Como começo a usar o The Points Toolkit?",
        "answer": "Começar é super fácil! Você não precisa nem criar uma conta. Basta configurar suas integrações com os aplicativos de terceiros que nós temos parceria. Assim você já começa a explorar nossas ferramentas para planejar sua próxima viagem com pontos e milhas."
      }

    ]
  }
}
</i18n>
