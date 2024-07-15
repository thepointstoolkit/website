<template>
  <Html
    :lang="head.htmlAttrs.lang"
    :dir="head.htmlAttrs.dir"
  >
    <Head>
      <template
        v-for="link in head.link"
        :key="link.id"
      >
        <Link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
      <template
        v-for="meta in head.meta"
        :key="meta.id"
      >
        <Meta
          :id="meta.id"
          :property="meta.property"
          :content="meta.content"
        />
      </template>
    </Head>

    <Body>
      <div
        class="flex flex-col min-h-screen bg-gray-100 dark:bg-neutral-800 dark:text-white "
      >
        <AppHeader />
        <main class="flex-1">
          <!-- End Sidebar -->
          <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <AppBreadcrumb />
            <NotificationList />
            <slot />
          </div>
        </main>
        <AppFooter />
      </div>
    </Body>
  </Html>
</template>

<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
})
</script>
