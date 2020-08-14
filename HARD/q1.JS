function realType(val) {
    if(typeof val === 'number') return "number"
      else if (typeof val === 'string') return "string"
      else if (typeof val === 'boolean') return "boolean"
      else if (val instanceof Array) return "array"
      else if (val == null ) return "null"
  }
  
  console.log(realType(1));
  console.log(realType(true));
  console.log(realType(null));
  console.log(realType([1,2,3]));