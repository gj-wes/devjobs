<script setup>
// get job details by id
const route = useRoute()
const job = await useJobDetails(route.params.id)
</script>
<template>
  <div>
    <!-- company info -->
    <!-- job details -->
    <!-- sticky 'apply now' footer -->
    {{ job }}
  </div>
</template>