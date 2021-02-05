function birthday(): void {
  var date: string[] = 'February 1, 2021' as unknown as string[]
  var month = [...date].filter((element:string, index: number) => index < 8)
  // var month = [].filter.call(date, (element: string, index: number) => index < 8)

  console.log(month)
}

birthday()