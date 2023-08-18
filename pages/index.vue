<script setup>
// manage filters
const allJobs = await useAllJobs()

</script>
<template>
  <main>
    <!-- filter form -->
    <!-- listings -->
    <!-- load more button -->
    <div v-for="job in allJobs" :key="job.id">
      <NuxtLink :to="`jobs/${job.id}`">
        {{ job.company }}
      </NuxtLink>
    </div>
  </main>
</template>