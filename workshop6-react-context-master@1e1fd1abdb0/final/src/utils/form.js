export const validateForm = (formData) => {
  let result = {
    isValid: true
  };

  for (const field in formData) {
    if (!formData[field]) {
      result = {
        ...result,
        isValid: false,
        errors: {
          ...result.errors,
          [field]: {
            message: `${field} is required!`
          }
        }
      };
    }
  }

  return result;
};
