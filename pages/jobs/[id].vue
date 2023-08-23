<script setup>
// get job details by id
const route = useRoute()
const job = await useJobDetails(route.params.id)

const {logoBackground, logo, company, website, apply, postedAt, contract, position, location, description, requirements, role} = job.value[0] 

const logoPath = logo.replace('./','/_nuxt/');
</script>
<template>
  <div class="description-container">
    <!-- company info -->
    <div class="container job-container company-info">
      <div :style="{ 'background-color': logoBackground }" class="logo">
        <img :src="logoPath" alt="">
      </div>
      <h3 class="company-name">
        {{ company }}
      </h3>
      <TheButton link alt :url="website">Company Site</TheButton>
    </div>
    <div class="container job-container">
      <!-- job details -->
      <div class="job-description">
        <div class="job-details">
          <div>
            <div class="detail">
              <span>{{ postedAt }}</span> &bull; <span>{{ contract }}</span>
            </div>
            <h3 class="job-title">
              {{ position }}
            </h3>
            <h4 class="location">
              {{ location }}
            </h4>
          </div>

          <TheButton link :url="apply">Apply Now</TheButton>
        </div>

        <p>
          {{ description }}
        </p>

        <h3 class="desciption-subheader">
          Requirements
        </h3>

        <p>
          {{ requirements.content }}
        </p>

        <ul>
          <li v-for="req in requirements.items">
            {{ req }}
          </li>
        </ul>

        <h3 class="desciption-subheader">
          What You Will Do
        </h3>

        <p>
          {{ role.content }}
        </p>

        <ol>
          <li v-for="item in role.items">
            {{ item }}
          </li>
        </ol>
      </div>
    </div>
  </div>
  <!-- sticky 'apply now' footer -->
  <footer>
    <div class="container footer-container">
      <div>
        <h3 class="job-title">
          {{ position }}
        </h3>
        <h3 class="company-name">
          {{ company }}
        </h3>
      </div>
      <TheButton link :url="apply">Apply Now</TheButton>
    </div>
  </footer>
</template>

<style scoped>
.job-container {
  background-color: var(--clr-neutral-100);
  border-radius: 0.375rem;
  padding: 2.5rem 1.5rem;
}
.job-container,
.footer-container {
  max-width: 45.625rem;
}

.company-info {
  margin-top: -1rem;
  margin-bottom: 2rem;
  padding-block: 3rem 2rem;

  position: relative;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 50px;
  height: 50px;
  border-radius: 0.9375rem;

  display: grid;
  place-content: center center;

  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
}
@media (min-width: 45.625rem) {
  .company-info {
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;
    padding: 0;
  }
  .company-info.job-container {
    padding: 0;
    padding-right: 1.5rem;
  }

  .company-info .company-name {
    margin-right: auto;
  }

  .logo {
    width: 140px;
    height: 140px;
    border-radius: 0;
    position: static;
    align-self: stretch;
    transform: translateX(0);
  }
}
.detail {
  color: var(--clr-neutral-500);
  font-size: var(--fs-body);
  margin-bottom: 0.75rem;
}
.job-details {
  margin-bottom: 2rem;
}
.company-name,
.job-title,
.desciption-subheader {
  color: var(--clr-neutral-800);
  font-size: var(--fs-header-sm);
  font-weight: var(--fw-bold);
  margin-bottom: 0.5rem;
}
.footer-container .company-name {
  color: var(--clr-neutral-500);
  font-size: var(--fs-body);
  font-weight: var(--fw-regular);
  margin-bottom: 0;
}
.desciption-subheader {
  margin-bottom: 1.5rem;
}
.company-name {
  margin-bottom: 2rem;
}
.location {
  color: var(--clr-primary);
  font-size: var(--fs-header-xs);
  font-weight: var(--fw-bold);
  margin-bottom: 3rem;
}

ol, ul {
  margin-left: 1rem;

}
li {
  padding-left: 1rem;
}
li:not(:last-child) {
  margin-bottom: 0.5rem;
}

p, li {
  font-size: var(--fs-body);
  line-height: 1.6;
  color: var(--clr-neutral-500);
}
ul + h3,
p + h3 {
  margin-top: 2.5rem;
}
p + ul,
p + ol {
  margin-top: 2rem;
}

footer {
  background-color: var(--clr-neutral-100);
  margin-top: 4rem;
  padding: 1.5rem;
  position: sticky;
  bottom: 0;
}

.footer-container div {
  display: none;
}
@media (min-width: 45.625rem) {
  .job-details,
  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer-container div {
    display: block;
  }
}
</style>