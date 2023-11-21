export function exercise01(args) {
  const input = args
  const result = []
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
 if (currentElement === "e") {
  result.push("")
 } else if (currentElement === "E") {
  result.push("")
 } else {
  result.push(currentElement)
 }
}
  return result.join("")
}


