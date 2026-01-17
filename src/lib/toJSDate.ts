export function toJsDate(dateData: string) {
  return new Date(dateData.slice(0,23));
}