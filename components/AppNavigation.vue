<template>
  <div class="flex flex-col sm:flex-row">
    <Dropdown>
      <DropdownTrigger>
        <NuxtLink :to="localePath('/tools')">
          {{ $t("menu.tools") }}
        </NuxtLink>
      </DropdownTrigger>
      <DropdownItems>
        <DropdownItem :to="localePath('/tools/routes')">
          {{ $t("menu.routes") }}
        </DropdownItem>

        <DropdownItem :to="localePath('/tools/api-playground')">
          {{ $t("menu.api_playground") }}
        </DropdownItem>
      </DropdownItems>
    </Dropdown>
    <NavigationLink :to="localePath('/sponsors')">
      {{ $t("menu.sponsors") }}
    </NavigationLink>
    <NavigationLink :to="localePath('/contributing')">
      {{ $t("menu.contributing") }}
    </NavigationLink>
  </div>
</template>
