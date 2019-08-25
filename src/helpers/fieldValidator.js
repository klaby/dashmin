// Validate Fields
export const fieldValidator = data => {

  for (var field in data) {
      if (!data[field]) return { status: false, field }
  };

  return { status: true };
};