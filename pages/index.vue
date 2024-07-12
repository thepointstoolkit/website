<template>
  <CardLinkList>
    <CardLink to="/routes">
      <template #title>
        Routes
      </template>
      Explore various visualizations for a specific route with our comprehensive
      set of tools. Gain insights and plan your travel efficiently. <template
        #leading
      >
        <Icon
          name="tabler:route-2"
          size="1.5em"
          class="text-gray-800 dark:text-neutral-200"
        />
      </template>
    </CardLink>

    <CardLink to="/api-playground">
      <template #title>
        API Playground
      </template>
      Test the Seats.aero API endpoints and view raw response data in our
      interactive API Playground. Perfect for developers to experiment and
      integrate seamlessly. <template #leading>
        <Icon
          name="tabler:code"
          size="1.5em"
          class="text-gray-800 dark:text-neutral-200"
        />
      </template>
    </CardLink>
  </CardLinkList>
</template>
