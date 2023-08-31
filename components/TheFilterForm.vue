<script setup>

</script>

<template>
  <div class="filter-form-container">
    <div>
      <img src="~assets/desktop/icon-search.svg" alt="">
      <input type="text" placeholder="Filter by title, companies, expertise...">
    </div>
    <div>
      <img src="~assets/desktop/icon-location.svg" alt="">
      <input type="text" placeholder="Filter by location...">
    </div>
    <div>
      <label class="full-time-check">
        <input type="checkbox">
        <div class="check"></div>
        Full Time<span>&nbsp;Only</span>
      </label>
      <TheButton>Search</TheButton>
    </div>
  </div>
</template>

<style scoped>
.filter-form-container {
  background-color: var(--clr-neutral-100);
  border-radius: 0.375rem;
  margin-top: -1rem;
  margin-bottom: 5rem;

  display: grid;
  grid-template-columns: 1fr 18rem auto;
}
@media (max-width: 800px) {
  .filter-form-container {
    display: flex;
  }
}

.filter-form-container > div {
  padding-inline: 1rem;
  display: flex;
  align-items: center;
}
.filter-form-container > div:last-child {
  padding: 1rem 1rem 1rem 2rem;
}
.filter-form-container div:not(:last-child) {
  border-right: 1px solid var(--clr-neutral-200);
}
input[type="text"] {
  border: none;
  margin-left: 1rem;
  width: 100%;
  line-height: 2;
  caret-color: var(--clr-primary);
}
.full-time-check {
  margin-right: 1.5rem;
  font-size: var(--fs-body);
  font-weight: var(--fw-bold);
  display: flex;
  align-items: center;
  white-space: nowrap;
}
@media (max-width: 730px) {
  .full-time-check span {
    display: none;
  }
}
.full-time-check input {
  display: none;
}
.full-time-check .check {
  margin-right: 1rem;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  background-color: var(--clr-neutral-800);
  opacity: 0.2;
  border-radius: 3px;
}
.full-time-check input:checked + .check {
  background-color: var(--clr-primary);
  opacity: 1;
  background-image: url('/_nuxt/assets/desktop/icon-check.svg');
  background-position: center center;
  background-repeat: no-repeat;
}
</style>