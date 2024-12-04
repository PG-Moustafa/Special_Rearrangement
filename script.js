
let rearrange = function(list) {

  for (let i = 0; i < list.length; i++) {
    for (let j = i+1; j < list.length; j++) {
      if ( list[j] % 2 == 0 ) {
        let tmp = list[i]
        list[i] = list[j]
        list[j] = tmp
      }
    }
  }
  return list
}



list = [1, 2, 3, 4, 5, 6]
console.log(rearrange(list))



