<template>
  <NuxtLink v-if="link" :to="url" class="link cta" :class="{ 'alt': alt }">
    <slot/>
  </NuxtLink>
  <button v-else class="btn cta">
    <slot/>
  </button>
</template>

<script setup>
defineProps({
  link: Boolean,
  url: String,
  alt: Boolean
})
</script>

<style scoped>
.cta {
  display: block;
  background-color: var(--clr-primary);
  color: var(--clr-neutral-100);
  font-size: var(--fs-body);
  font-weight: var(--fw-bold);
  border-radius: 5px;
  text-align: center;
  padding-block: 0.75rem;
}

.link {
  text-decoration: none;
}

.btn {
  border: none;
  width: 100%;
}

.alt {
  background-color: rgba(89, 100, 224, 0.1);
  color: var(--clr-primary);
  width: 8.75rem;
}
</style>