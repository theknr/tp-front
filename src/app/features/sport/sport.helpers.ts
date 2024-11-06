export const sanitizeInput = (value: string) => {
  const noSpaces = value.replace(/\s+/g, "");

  const sanitized =
    noSpaces.charAt(0).toUpperCase() + noSpaces.slice(1).toLowerCase();

  return sanitized;
};
