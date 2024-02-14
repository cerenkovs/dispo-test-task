<template>
  <div class="text-sm font-medium mt-8">
    <p class="mt-3" v-for="step in progress">
      <img src="/icons/tick.svg" alt="&#x2713;"
        :class="'inline h-5 rounded-full ' + (step.complete ? 'bg-dispo-blue' : 'bg-dispo-lightGray') + ' p-1 -mt-0.5 mr-3'">
      {{ step.title }}
      <template v-if="step.date">
        - <span class="text-dispo-gray">{{ step.date.getUTCDate() }}.{{ ('0' + step.date.getUTCMonth()).slice(-2) }}.{{
          step.date.getUTCFullYear() }} at {{ step.date.getHours() }}:{{ step.date.getMinutes() }}</span>
      </template>
    </p>
  </div>
</template>

<script setup>
const progress = [
  {
    "title": "Waiting chauffeur",
    "date": new Date(2022, 6, 14, 12, 32),
    "complete": true,
  },
  {
    "title": "Chauffeur assigned",
    "date": new Date(2022, 6, 14, 12, 32),
    "complete": true,
  },
  {
    "title": "Started",
    "date": new Date(2022, 6, 14, 12, 32),
    "complete": true,
  },
  {
    "title": "Trip in progress",
    "date": null,
    "complete": false,
  },
  {
    "title": "Finished",
    "date": null,
    "complete": false,
  },
]
</script>