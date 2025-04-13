export function capitalize(str: string) {
  const temp = str.toString();
  return `${temp.charAt(0).toUpperCase()}${temp.slice(1)}`;
}

export function toThreeDigit(str: string) {
  try {
    const temp = str.toString().replace(/^0+/, "");
    return temp.padStart(3, "0");
  } catch (error) {
    console.error("3-digit error:", error);
    throw new Error("Failed to transform to 3-digit.");
  }
}
