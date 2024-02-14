<template>
  <section
    class="relative -top-20 text-white bg-contentHeader from-dispo-darkBlue to-dispo-dark bg-no-repeat bg-right rounded-3xl pt-10 pb-36 w-11/12 mx-auto text-center font-medium">
    <h1 class="text-2xl font-black">Your daily rental details</h1>

    <div class="mt-4">
      <div class="inline-flex items-center mx-3 ml-0">
        <img src="/icons/check-shielded.svg" alt="" class="h-4 mr-2">
        Request #779
      </div>
      <div class="inline-flex items-center mx-3">
        <img src="/icons/calendar.svg" alt="" class="h-4 mr-2">
        Trip starts 18 feb - 11:00
      </div>
      <div class="inline-flex items-center mx-3">
        <img src="/icons/person.svg" alt="" class="h-4 mr-2">
        45 people
      </div>
      <div class="inline-flex items-center mx-3 py-2 px-6 border rounded-full">
        Paid 12&euro;
        <img src="/icons/tick.svg" alt="" class="h-3 ml-2">
      </div>

      <a href="javascript:void(0)" class="text-bold underline hover:no-underline p-3 -mr-3">view invoice</a>
    </div>

    <a href="javascript:void(0)" class="block p-3 text-dispo-gray inline-flex items-center hover:underline hover:brightness-200">
      <img src="/icons/copy.svg" alt="" class="h-4 mr-2">
      Copy your unique trip link
    </a>
  </section>
</template>
