<template>
    <Breadcrumb v-if="route.fullPath !== '/'">
      <template v-for="(crumb, index) in crumbs" :key="index">
        <BreadcrumbItem>
          <BreadcrumbLink :to="crumb.path" class="capitalize"
            v-if="index < crumbs.length - 1">
            {{ crumb.title }}
          </BreadcrumbLink>
          <span v-else class="font-semibold capitalize">
            {{ crumb.title }}
          </span>
          <meta property="position" :content="index + 2">
          <BreadcrumbSeparator v-show="index < crumbs.length - 1" />
        </BreadcrumbItem>
      </template>
    </Breadcrumb>
</template>

<script setup>
import BreadcrumbItem from './Breadcrumb/BreadcrumbItem.vue'

const { locale } = useI18n()
const localePath = useLocalePath()

const route = useRoute()
const router = useRouter()
const crumbs = computed(() => {
  const fullPath = route.fullPath
  const params = fullPath.startsWith('/')
    ? fullPath.substring(1).split('/')
    : fullPath.split('/')
  const crumbs = []

  if (params[0] == locale.value) {
    delete params[0]
  }

  let path = ''
  params.forEach((param, _) => {
    path = `${path}/${param}`
    const match = router.resolve(localePath(path))
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
