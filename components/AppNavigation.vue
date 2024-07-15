<template>
  <div class="flex flex-col sm:flex-row">
    <Dropdown>
      <DropdownTrigger>
        <NuxtLink :to="localePath('/routes')">
          {{ $t("menu.routes") }}
        </NuxtLink>
      </DropdownTrigger>
      <DropdownItems>
        <DropdownItem :to="localePath('/routes/yearly-calendar')">
          {{ $t("menu.yearly_calendar") }}
        </DropdownItem>
      </DropdownItems>
    </Dropdown>
    <Dropdown>
      <DropdownTrigger>
        <NuxtLink :to="localePath('/api-playground')">
          {{ $t("menu.api_playground") }}
        </NuxtLink>
      </DropdownTrigger>
      <DropdownItems>
        <DropdownItem :to="localePath('/api-playground/cached-search')">
          {{ $t("menu.cached_search") }}
        </DropdownItem>
      </DropdownItems>
    </Dropdown>
  </div>
</template>

<script setup>
const localePath = useLocalePath()
</script>
