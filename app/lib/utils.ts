export function capitalize(str: string) {
  const temp = str.toString();
  return `${temp.charAt(0).toUpperCase()}${temp.slice(1)}`;
}

export function toThreeDigit(str: string) {
  return str?.toString().padStart(3, "0");
}
