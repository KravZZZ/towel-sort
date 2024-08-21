
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined){return[]}
  let arr = []
  for(let i = 0; i < matrix.length; i++){
    let temp = matrix[i]
    if (i % 2 != 0) {
      temp.reverse()
    }
    arr = [...arr, ...temp]
  }
  return arr
}
