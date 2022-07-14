interface IPeople {
  name: string,
  gender: string,
  mass: string,
}

export default interface IPeoples {
  count: number,
  next: null | string,
  previous: null | string,
  results: Array<IPeople>,
}
