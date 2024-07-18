<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">

  <Head>
    <template v-for="link in head.link" :key="link.id">
      <Link :id="link.id" :rel="link.rel" :href="link.href"
        :hreflang="link.hreflang" />
    </template>
    <template v-for="meta in head.meta" :key="meta.id">
      <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
    </template>
  </Head>

  <Body>
    <div class="min-h-screen flex flex-col">
      <AppHeader />
      <AppSubHeader />
      <div class="max-w-[90rem] mx-auto relative h-100 flex flex-grow w-full">
        <AppSidebar v-if="hasSlotContent('sidebar')">
          <slot name="sidebar" />
        </AppSidebar>
        <main class="flex-1 p-4 overflow-y-auto">
          <div class="w-full px-4 sm:px-6 md:px-8">
            <NotificationList />
            <slot />
          </div>
        </main>
      </div>
      <AppFooter />

    </div>
  </Body>

  </Html>
</template>

<script setup>
import { computed } from 'vue';
const slots = useSlots();

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
})

function hasSlotContent(name) {
  return !!slots[name];
}
</script>
