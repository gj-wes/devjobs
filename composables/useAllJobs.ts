export const useAllJobs = async () => {
  const { data, error } = await useFetch(
    `/api/allJobs`
  );

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: 'Could not fetch jobs',
    });
  }

  return data;
}
