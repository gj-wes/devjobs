<script setup>
// get job details by id
const route = useRoute()
const job = await useJobDetails(route.params.id)
</script>
<template>
  <div class="description-container">
    <!-- company info -->
    <div class="container company-info">
      <div :style="{ 'background-color': job[0].logoBackground }" class="logo">
        <img :src="job[0].logo.replace('./','/_nuxt/')" alt="">
      </div>
      <h3 class="company-name">
        {{ job[0].company }}
      </h3>
      <TheButton link alt :url="job[0].website">Company Site</TheButton>
    </div>
    <div class="container">
      <!-- job details -->
      <div class="job-description">
        <div class="job-details">
          <div>
            <div class="detail">
              <span>{{ job[0].postedAt }}</span> &bull; <span>{{ job[0].contract }}</span>
            </div>
            <h3 class="job-title">
              {{ job[0].position }}
            </h3>
            <h4 class="location">
              {{ job[0].location }}
            </h4>
          </div>

          <TheButton link :url="job[0].apply">Apply Now</TheButton>
        </div>

        <p>
          {{ job[0].description }}
        </p>

        <h3 class="desciption-subheader">
          Requirements
        </h3>

        <p>
          {{ job[0].requirements.content }}
        </p>

        <ul>
          <li v-for="req in job[0].requirements.items">
            {{ req }}
          </li>
        </ul>

        <h3 class="desciption-subheader">
          What You Will Do
        </h3>

        <p>
          {{ job[0].role.content }}
        </p>

        <ol>
          <li v-for="item in job[0].role.items">
            {{ item }}
          </li>
        </ol>
      </div>
    </div>
  </div>
  <!-- sticky 'apply now' footer -->
  <footer>
    <TheButton link :url="job[0].apply">Apply Now</TheButton>
  </footer>
</template>

<style scoped>
.container {
  background-color: var(--clr-neutral-100);
  border-radius: 0.375rem;
  padding: 2.5rem 1.5rem;
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
.detail {
  color: var(--clr-neutral-500);
  font-size: var(--fs-body);
  margin-bottom: 0.5rem;
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
</style>