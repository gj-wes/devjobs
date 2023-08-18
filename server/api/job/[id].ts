import jobs from '~/server/data'

export default defineEventHandler((event) => {
  const { id } = event.context.params
  return jobs.filter(j => j.id === +id);
})