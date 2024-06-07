<template>
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
</template>
