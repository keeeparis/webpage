export function addPostfix(base: string, postfix?: string) {
  if (!postfix) {
    return `${base} | Телеграм Бот | @keeeparis`
  }
  return `${base} ${postfix}`
}