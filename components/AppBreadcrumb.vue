<template>
  <div :class="route.fullPath !== '/' ? 'my-5' : 'my-16'">
    <Breadcrumb v-if="route.fullPath !== '/'">
      <BreadcrumbItem>
        <BreadcrumbLink
          property="item"
          typeof="WebPage"
          to="/"
        >
          <span property="name">
            <Icon name="tabler:home" />
          </span>
        </BreadcrumbLink>
        <meta
          property="position"
          content="1"
        >
      </BreadcrumbItem>
      <template
        v-for="(crumb, index) in crumbs"
        :key="index"
      >
        <template v-if="crumb.fullPath !== '/'">
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              :to="crumb.path"
              class="capitalize"
            >
              {{ crumb.title }}
            </BreadcrumbLink>
            <meta
              property="position"
              :content="index + 2"
            >
          </BreadcrumbItem>
        </template>
      </template>
    </Breadcrumb>
  </div>
</template>

<script setup>
import BreadcrumbItem from './Breadcrumb/BreadcrumbItem.vue'

const route = useRoute()
const router = useRouter()
const crumbs = computed(() => {
  const fullPath = route.fullPath
  const params = fullPath.startsWith('/')
    ? fullPath.substring(1).split('/')
    : fullPath.split('/')
  const crumbs = []
  let path = ''
  params.forEach((param, _) => {
    path = `${path}/${param}`
    const match = router.resolve(path)
    if (match.name !== null) {
      crumbs.push({
        title: param.replace(/-/g, ' '),
        ...match,
      })
    }
  })
  return crumbs
})
</script>
