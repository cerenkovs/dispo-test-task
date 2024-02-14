<script setup>
import ContentHeader from './mainContent/ContentHeader.vue'
import CarrierSummaryProfile from './mainContent/CarrierSummaryProfile.vue'
import TripProgress from './mainContent/TripProgress.vue'
import TripDetails from './mainContent/TripDetails.vue'
</script>

<template>
  <main class="rounded-3xl bg-white mt-36 pb-16">
    <ContentHeader />

    <article class="relative -mt-48 mx-36 rounded-2xl bg-white p-16 shadow-lg grid grid-cols-[22rem_1fr] gap-4">
      <div>
        <CarrierSummaryProfile />
        <TripProgress />
      </div>

      <div>
        <TripDetails />
      </div>
    </article>
  </main>
</template>
