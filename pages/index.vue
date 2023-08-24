<script setup>
// manage filters
const allJobs = await useAllJobs()

</script>
<template>
  <main>
    <div class="container">
      <!-- filter form -->
      <!-- listings -->
      <div class="list-container">
        <JobItem v-for="job in allJobs" :key="job.id" 
        :job="job"
        />
      </div>
      
      <!-- load more button -->
      <TheButton class="btn-load-more">Load More</TheButton>
    </div>
  </main>
</template>

<style scoped>
.list-container {
  padding-block: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem
}
.btn-load-more {
  margin-bottom: 3rem;
  margin-inline: auto;
  justify-self: center;
}
</style>