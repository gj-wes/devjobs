export const useJobDetails = async (id) => {
  const { data, error } = await useFetch(
    `/api/job/${id}`
  );

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: 'Could not fetch job details',
    });
  }

  return data;
}