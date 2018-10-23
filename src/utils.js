const isObject = obj => {
  if(Object.prototype.toString.call(obj).toLowerCase() === '[object object]'){
    return true
  }
  return false
}

const ObjectToStr = obj => {
  let str = ''
  for(const [ k, v ] of Object.entries(obj)){
    str += k + ':' + v + ';'
  }
  return str
}

const getUniqArray = arr => {
  const res = []
  for(let v of arr){
    if(!res.includes(v)){
      res.push(v)
    }
  }
  return res
}

const delObject = (key, obj) => {
  const res = Object.create()

  for(const [ k, v ] of obj){
    if(k !== key) res[k] = v
  }

  return res
}

export {
  isObject,
  ObjectToStr,
  getUniqArray,
  delObject
}