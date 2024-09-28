<template>
  <div class="flex flex-col sm:flex-row">
    <Dropdown>
      <DropdownTrigger>
        <NuxtLink :to="localePath('/tools')">
          {{ $t("menu.tools") }}
        </NuxtLink>
      </DropdownTrigger>
      <DropdownItems>
        <DropdownItem :to="localePath('/tools/yearly-calendar')">
          {{ $t("menu.yearly_calendar") }}
        </DropdownItem>
        <DropdownItem :to="localePath('/tools/deep-link')">
          {{ $t("menu.deep_link") }}
        </DropdownItem>

        <DropdownItem :to="localePath('/tools/api-playground')">
          {{ $t("menu.api_playground") }}
        </DropdownItem>
      </DropdownItems>
    </Dropdown>
    <NavigationLink :to="localePath('/sponsors')">
      {{ $t("menu.sponsors") }}
    </NavigationLink>
  </div>
</template>
