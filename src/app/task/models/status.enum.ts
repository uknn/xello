export enum Status {
  unassigned = 0,
  inProgress = 1,
  completed = 2
}

export function getStatusEnumValue(): number[] {
  const dropdownValues: number[] = []
  Object.entries(Status).forEach(([key, value]) => {
    if(!isNaN(Number(key))) {
      dropdownValues.push(+key)
    }
  })
  return dropdownValues;
}
