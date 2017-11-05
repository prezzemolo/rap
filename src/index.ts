export interface rap {
  [key: string]: any
}

const rap = async (obj: rap): Promise<rap> => {
  const target: rap = {}
  const keys = Object.keys(obj)
  const rawValues = Object.values(obj)
  const retValues = ((values: any[]): any[] =>
    values.map(value => {
      if (!value || !value.constructor || value.constructor.name !== 'Object')
        return value
  
      return rap(value)
    })
  )(rawValues)
  const values = await Promise.all(retValues)
  values.forEach((v, i) => {
    target[keys[i]] = v
  })
  return target
}

export default rap
