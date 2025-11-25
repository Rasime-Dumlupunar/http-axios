const fullName = (first: string, last: string, title: string): string =>
  `${title} ${first} ${last}`;
const fullLocation = (postcode: number, state: string) =>
  `${postcode} ${state}`;

function getInitials(fullName) {
  const names = fullName.split(' ');
  const initials = names.map(name => name[0].toUpperCase()).join('');
  return initials;
}
export { fullName };
export { fullLocation };
export { getInitials };
