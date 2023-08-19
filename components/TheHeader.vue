<template>
  <header>
    <div class="container">
      <NuxtLink to="/">
        <img src="~assets/desktop/logo.svg" alt="Devjobs logo" class="logo">
      </NuxtLink>
      <div>
        Switch
      </div>
    </div>
  </header>
</template>

<style scoped>
  header {
    background-color: var(--clr-primary);
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    padding: 2rem 0 4.5rem 0;
  }

  .logo {
    width: 115px;
  }
</style>