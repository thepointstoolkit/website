<template>
    <div class="grid md:grid-cols-5 gap-10">
      <div class="md:col-span-2">
        <div class="max-w-xs">
          <h2
            class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            {{ t('section.title') }}
          </h2>
          <p class="mt-1 hidden md:block text-gray-600 dark:text-neutral-400">
            {{ t('section.subtitle') }}
          </p>
        </div>
      </div>
      <div class="md:col-span-3">
        <div
          class="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
          <FaqAccordionItem v-for="idx in 4" :key="`faq-${idx}`">
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

<i18n lang="json">{
  "en": {
    "section": {
      "title": "Frequently asked questions",
      "subtitle": "Answers to the most frequently asked questions."
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
      "title": "Dúvidas Frequentes",
      "subtitle": "Respostas às perguntas mais frequentes."
    },
    "faqs": [
      {
        "question": "O que é o The Points Toolkit?",
        "answer": "O The Points Toolkit é o seu site definitivo para otimizar viagens com pontos. Oferecemos um conjunto de ferramentas projetadas para ajudar você a maximizar seus pontos e milhas, tornando o planejamento de suas viagens mais fácil e recompensador."
      },
      {
        "question": "O The Points Toolkit é gratuito para usar?",
        "answer": "Sim, o The Points Toolkit é completamente gratuito para usar. No entanto, observe que algumas ferramentas podem exigir integração com aplicativos de terceiros que possuem suas próprias taxas de assinatura, como o Seats.aero."
      },
      {
        "question": "Como posso contribuir com o The Points Toolkit?",
        "answer": "Agradecemos as contribuições da nossa comunidade! Seja você tenha ideias para novos recursos, encontre bugs ou queira fornecer feedback, você pode se envolver."
      },
      {
        "question": "Como começo a usar o The Points Toolkit?",
        "answer": "Começar é fácil! Você não precisa criar uma conta. Basta configurar suas integrações com os aplicativos de terceiros que você usa e começar a explorar nossas ferramentas para planejar sua próxima viagem com pontos."
      }

    ]
  }
}
</i18n>
