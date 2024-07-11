<template>
  <div class="flex flex-col overflow-y-auto overflow-clip pr-4"
    style="height: 300px;">
    <div class="-m-1.5 ">
      <div class="p-1.5 min-w-full inline-block align-middle">
        <!-- <div class="overflow-hidden"> -->
        <table
          class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700 relative">
          <thead class="sticky top-0 bg-gray-50 dark:bg-neutral-700">
            <tr>
              <th scope="col"
                class="px-6 py-3 text-xs font-medium text-gray-500 uppercase dark:text-neutral-400">
                Route
              </th>
              <th scope="col"
                class="px-6 py-3 text-xs font-medium text-gray-500 uppercase dark:text-neutral-400">
                Source
              </th>
              <th scope="col"
                class="px-6 py-3 text-xs font-bold text-gray-600 dark:text-gray-500">
                Economy
              </th>
              <th scope="col"
                class="px-6 py-3 text-xs font-bold text-blue-600 dark:text-blue-500">
                Premium
              </th>
              <th scope="col"
                class="px-6 py-3 text-xs font-bold text-green-600 dark:text-green-500">
                Business
              </th>
              <th scope="col"
                class="px-6 py-3 text-xs font-bold text-red-600 dark:text-red-500">
                First
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
            <tr v-for="availability in availabilities" :key="availability.ID">
              <td
                class="px-3 py-2 whitespace-nowrap text-sm text-center text-gray-800 dark:text-neutral-200">
                {{ availability.OriginAirport }}-{{
                availability.DestinationAirport
                }}
              </td>
              <td
                class="px-3 py-2 whitespace-nowrap text-sm text-center text-gray-800 dark:text-neutral-200">
                {{ availability.Source }}
                <span class="block text-xs text-gray-500 dark:text-neutral-400">
                  {{ formatDistanceToNow(availability.UpdatedAt) }} ago</span>
              </td>
              <td class="px-3 py-2 whitespace-nowrap text-sm">
                <AvailabilityBadge :is-available="availability.YAvailable"
                  :is-direct="availability.YDirect"
                  :cost="availability.YDirect ? availability.YDirectMileageCost : availability.YMileageCost"
                  :seats="availability.YDirect ? availability.YDirectRemainingSeats : availability.YRemainingSeats" />
              </td>
              <td class="px-3 py-2 whitespace-nowrap text-sm">
                <AvailabilityBadge :is-available="availability.WAvailable"
                  :is-direct="availability.WDirect"
                  :cost="availability.WDirect ? availability.WDirectMileageCost : availability.WMileageCost"
                  :seats="availability.WDirect ? availability.WDirectRemainingSeats : availability.WRemainingSeats" />
              </td>
              <td class="px-3 py-2 whitespace-nowrap text-sm">
                <AvailabilityBadge :is-available="availability.JAvailable"
                  :is-direct="availability.JDirect"
                  :cost="availability.JDirect ? availability.JDirectMileageCost : availability.JMileageCost"
                  :seats="availability.JDirect ? availability.JDirectRemainingSeats : availability.JRemainingSeats" />
              </td>
              <td class="px-3 py-2 whitespace-nowrap text-sm">
                <AvailabilityBadge :is-available="availability.FAvailable"
                  :is-direct="availability.FDirect"
                  :cost="availability.FDirect ? availability.FDirectMileageCost : availability.FMileageCost"
                  :seats="availability.FDirect ? availability.FDirectRemainingSeats : availability.FRemainingSeats" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script setup>
import { formatDistanceToNow } from 'date-fns'

defineProps({ availabilities: { type: Array, required: true } })
</script>
