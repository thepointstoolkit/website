<template>
  <Header>
    <template #branding>
      <NuxtLink class="flex items-center text-xl dark:text-white" to="/"
        aria-label="Brand">
        <AppLogo />
      </NuxtLink>
    </template>
    <template #navigation>
      <AppNavigation />

      <div class="flex items-center gap-x-5 py-2 sm:py-0 sm:ms-auto">



        <NavigationLink :to="localePath('/settings')">
          <Icon name="tabler:settings"
            class="size-5" />
        </NavigationLink>
      </div>
    </template>
  </Header>
</template>
