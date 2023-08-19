<script setup>
const props = defineProps({
  job: Object
})
const {
  id,
  logoBackground,
  logo,
  postedAt,
  contract,
  position,
  company,
  location
} = props.job

const logoPath = computed(() => logo.replace('./','/_nuxt/'))
</script>

<template>
  <div class="item-container">
    <div :style="{ 'background-color': logoBackground }" class="logo">
      <img :src="logoPath" alt="">
    </div>
    <div class="detail">
      <span>{{ postedAt }}</span> &bull; <span>{{ contract }}</span>
    </div>
    <h3 class="job-title">
      <NuxtLink :to="`jobs/${id}`">
        {{ position }}
      </NuxtLink>
    </h3>
    <p class="company">
      {{ company }}
    </p>
    <h4 class="location">
      {{ location }}
    </h4>
  </div>
</template>

<style scoped>
.item-container {
  background-color: var(--clr-neutral-100);
  border-radius: 0.375rem;
  padding: 3rem 2rem 2rem 2rem;
  position: relative;
}
.logo {
  width: 50px;
  height: 50px;
  border-radius: 0.9375rem;

  display: grid;
  place-content: center center;

  position: absolute;
  top: -25px;
}
.detail {
  color: var(--clr-neutral-500);
  font-size: var(--fs-body);
  margin-bottom: 0.875rem;
}
.job-title {
  color: var(--clr-neutral-800);
  font-size: var(--fs-header-sm);
  font-weight: var(--fw-bold);
  margin-bottom: 1rem;
}
.job-title a {
  text-decoration: none;
  color: inherit;
}
.job-title:hover,
.job-title a:hover {
  color: var(--clr-neutral-500);
}
.company {
  color: var(--clr-neutral-500);
  font-size: var(--fs-body);
  margin-bottom: 2.75rem;
}
.location {
  color: var(--clr-primary);
  font-size: var(--fs-header-xs);
  font-weight: var(--fw-bold);
}
</style>