<template>
  <div class="flex">
    <Dropdown>
      <DropdownTrigger>
        Routes
      </DropdownTrigger>
      <DropdownItems>
        <DropdownItem to="/routes/yearly-calendar">
          Yearly Calendar
        </DropdownItem>
      </DropdownItems>
    </Dropdown>
    <Dropdown>
      <DropdownTrigger>
        API Playground
      </DropdownTrigger>
      <DropdownItems>
        <DropdownItem to="/api-playground/cached-search">
          Cached Search
        </DropdownItem>
      </DropdownItems>
    </Dropdown>
  </div>
</template>
