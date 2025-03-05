export const handleError = (err) => {
  let errors = {};
  Object.keys(err.errors).forEach((e) => {
    let key = e;
      errors = { ...errors, [key]: err.errors[e].message };
  });
  return errors;
};
