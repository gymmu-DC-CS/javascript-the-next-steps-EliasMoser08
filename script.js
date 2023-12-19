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

export function exercise02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const capitalizedElement = currentElement.toUpperCase()
    result.push(capitalizedElement)
  }
  return result.join("")
}

export function exercise03(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      count = count + 1
    } else if (currentElement === "E") {
      count = count + 1
    }
  }
  return count
}

export function exercise04(args) {
  const input = args
  let count = 1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const previousElement = input[i - 1]

    if (currentElement === " " && previousElement != "-") {
      count = count + 1
    } else if (currentElement === "0") {
      count = count - 1
    }
  }
  return count
}

export function exercise05(args) {
  const input = args
  const result = []
  let capitalLetters = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    const asciiCode = currentElement.charCodeAt(0)
    if (asciiCode >= 65 && asciiCode <= 90) {
      return true
    }
  }

  return false
}
