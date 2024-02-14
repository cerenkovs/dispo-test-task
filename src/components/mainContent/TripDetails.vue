<template>
  <div class="flex justify-center font-medium text-sm pb-8 mb-8 border-b border-dispo-thinGray">
    <a href="javascript:void(0)"
      class="min-w-40 text-center rounded-full mx-2 py-2 px-4 bg-dispo-darkerBlue hover:bg-dispo-black text-dispo-white">Trip
      details</a>
    <a href="javascript:void(0)"
      class="min-w-40 text-center border border-dispo-thinGray rounded-full mx-2 py-2 px-4 hover:bg-dispo-lighterGray">Return
      trip details</a>
  </div>

  <div class="grid grid-cols-[2rem_.5rem_1fr_.5rem_2rem] mb-8 items-center">
    <a href="javascript:void(0)" class="rounded-full bg-dispo-ligherBlueGray p-1.5"><img src="/icons/arrow.svg"
        alt="&#x2190;" class="h-5 rotate-180" /></a>
    <div class="shadow-[0_0_.8rem_#0000] [clip-path:inset(0_-4rem_0_0)] h-16"></div>
    <div class="flex overflow-hidden">
      <a v-for="(date, index) in dates" href="javascript:void(0)" :class="'shrink-0 rounded-full mx-2 py-3 px-7 text-xs font-medium ' +
        (index === 0 ? 'bg-dispo-blue text-dispo-white' : 'border hover:bg-dispo-lighterGray')
        ">{{ date }}</a>
    </div>
    <div class="shadow-[0_0_.8rem_#0008] [clip-path:inset(0_0_0_-4rem)] h-16"></div>
    <a href="javascript:void(0)" class="rounded-full bg-dispo-ligherBlueGray p-1.5"><img src="/icons/arrow.svg"
        alt="&#x2192;" class="h-5" /></a>
  </div>

  <div class="mb-8 text-sm font-semibold grid grid-cols-[1.5rem_1fr_7rem_7rem] gap-4">
    <template v-for="(stop, index) in stops">
      <p :class="'relative' +
        (index !== 0
          ? ' before:block before:absolute before:top-[-1.15rem] before:w-0.5 before:h-[1.15rem] before:left-[0.675rem] before:bg-dispo-black'
          : '')
        ">
        <img src="/icons/map-point.svg" alt="" class="h-6 -mt-0.5" />
      </p>

      <p class="text-dispo-gray truncate" :title="stop.name + ' | ' + stop.address">
        <span class="text-dispo-black mr-1">{{ stop.name }}</span>
        {{ stop.address }}
      </p>

      <p v-if="stop.timeArrive" class="text-xs">
        <img src="/icons/time.svg" alt="Time" class="h-5 -mt-0.5 mr-1 inline" />
        Arrive: {{ stop.timeArrive.getUTCHours() }}:{{
          stop.timeArrive.getUTCMinutes()
        }}
      </p>
      <p v-else></p>

      <p class="text-xs">
        <img src="/icons/time.svg" alt="Time" class="h-5 -mt-0.5 mr-1 inline" />
        Depart: {{ stop.timeDepart.getUTCHours() }}:{{
          stop.timeDepart.getUTCMinutes()
        }}
      </p>
    </template>
  </div>

  <img src="/map.jpg" alt="" class="w-full" />
</template>

<script setup>
const dates = [
  "6 November",
  "7 November",
  "8 November",
  "9 November",
  "10 November",
];

const stops = [
  {
    name: "Riga international airport",
    address: "P133, Mārupe, LV-1010, Latvia",
    timeArrive: null,
    timeDepart: new Date(2022, 11, 9, 14, 45),
  },
  {
    name: "Lithuania airport",
    address: "Road name, LT223, Lithuania",
    timeArrive: new Date(2022, 11, 9, 14, 20),
    timeDepart: new Date(2022, 11, 9, 19, 45),
  },
  {
    name: "Lithuania airport",
    address: "Road name, LT223, Lithuania",
    timeArrive: new Date(2022, 11, 9, 20, 20),
    timeDepart: new Date(2022, 11, 9, 21, 45),
  },
];
</script>
