const getEnv = (key: string, defaultValue?: string): string => {
  const value = process.env[key] || defaultValue;
  if (value === undefined) {
    throw new Error(`Missing environment variable ${key}`);
  }
  return value;
};

export const EMAIL = getEnv("EMAIL");
export const PASSWORD = getEnv("PASSWORD");
export const PORT = getEnv("PORT", "5000"); // Default to 5000 if PORT is not set
