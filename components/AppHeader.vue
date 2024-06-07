<template>
  <Header>
    <template #branding>
      <AppLogo />
    </template>
    <template #navigation>
      <AppNavigation />

      <div class="flex items-center gap-x-5 py-2 sm:py-0 sm:ms-auto">
        <AppApiUsage/>
        <AppApiKey />
      </div>
    </template>
  </Header>
</template>
