<script setup>
// manage filters
const allJobs = await useAllJobs()

</script>
<template>
  <main>
    <!-- filter form -->
    <!-- listings -->
    <!-- load more button -->
    <div v-for="j in allJobs">
      {{ j.company }}
    </div>
  </main>
</template>