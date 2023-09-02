<script setup>

</script>

<template>
  <div class="filter-form-container">

    <div class="filter-title">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#5964E0" fill-rule="nonzero"/></svg>
      <input type="text" placeholder="Filter by title, companies, expertise...">
    </div>

    <div class="filter-location">
      <svg width="17" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z" fill="#5964E0" fill-rule="nonzero"/></svg>
      <input type="text" placeholder="Filter by location...">
    </div>

    <div class="filter-option">
      <label class="full-time-check">
        <input type="checkbox">
        <div class="check"></div>
        Full Time<span>&nbsp;Only</span>
      </label>
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" class="filter-icon"><path d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z" fill="#6E8098" fill-rule="nonzero"/></svg>
      <TheButton>
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" class="btn-icon"><path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#ffffff" fill-rule="nonzero"/></svg>
        <span class="btn-text">Search</span>
      </TheButton>
    </div>

  </div>
</template>

<style scoped>
.filter-form-container {
  background-color: var(--clr-neutral-100);
  border-radius: 0.375rem;
  margin-top: -1rem;
  margin-bottom: 4.5rem;

  display: grid;
  grid-template-columns: 1fr 18rem auto;
}
@media (max-width: 900px) {
  .filter-form-container {
    margin-bottom: 1.5rem;
  }
}
@media (max-width: 500px) {
  .filter-form-container {
    grid-template-columns: auto max-content;
  }
}

.filter-title,
.filter-location,
.filter-option {
  padding-inline: 1rem;
  display: flex;
  align-items: center;
}

.filter-title,
.filter-location {
  border-right: 1px solid var(--clr-neutral-200);
}

.filter-option {
  padding: 1rem 1rem 1rem 2rem;
}
@media (max-width: 900px) {
  .filter-option {
    padding: 1rem 1rem 1rem 0;
  }
}

@media (max-width: 500px) { 
  .filter-title {
    border-right: none;
  }
  .filter-title > svg,
  .filter-location {
    display: none;
    border-right: none;
  }
}

input[type="text"] {
  border: none;
  margin-left: 1rem;
  width: 100%;
  line-height: 2;
  caret-color: var(--clr-primary);
  background-color: transparent;
  color: var(--clr-neutral-800);
}
@media (max-width: 500px) { 
  input[type="text"] {
    margin-left:0;
  }
}
.full-time-check {
  margin-right: 1.5rem;
  font-size: var(--fs-body);
  font-weight: var(--fw-bold);
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: var(--clr-neutral-800);
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

@media (max-width: 500px) { 
  .full-time-check {
    display: none;
  }

  .filter-option {
    gap: 0.5rem;
  }
}


.btn-icon,
.filter-icon {
  display: none;
}
@media (max-width: 500px) {
  .btn-icon,
  .filter-icon {
    display: block;
  }
  .filter-icon {
    width: 20px;
  }
  .btn-text {
    display: none;
  }
}
</style>