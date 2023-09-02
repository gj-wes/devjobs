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
  display: flex;
  justify-content: center;
  background-color: var(--clr-primary);
  color: var(--clr-neutral-100);
  font-size: var(--fs-body);
  font-weight: var(--fw-bold);
  border-radius: 5px;
  text-align: center;
  padding-block: 0.75rem;
  padding-inline: 1rem;
  transition: background-color .2s linear;
}
.dark .cta {
  color: var(--clr-neutral-800);
}

@media (min-width: 45.625rem) {
  .cta {
    width: 8.75rem;
  }
}

.cta:hover,
.cta:active {
  background-color: var(--clr-primary-400);
}

.link {
  text-decoration: none;
}

.btn {
  cursor: pointer;
  border: none;
  width: 100%;
}

@media (min-width: 45.625rem) {
  .btn {
    width: 8.75rem;
  }
}

.alt {
  background-color: rgba(89, 100, 224, 0.1);
  color: var(--clr-primary);
  width: 8.75rem;
}
.alt:hover,
.alt:active {
  background-color: rgba(89, 100, 224, 0.3);
}
</style>