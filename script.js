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

export function exercise06(args) {
  const input = args
  const result = []
  let capitalLetters = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    const asciiCode = currentElement.charCodeAt(0)
    if (
      asciiCode <= 31 ||
      (asciiCode >= 33 && asciiCode <= 64) ||
      (asciiCode >= 91 && asciiCode <= 96) ||
      asciiCode >= 123
    ) {
      return true
    }
  }
  return false
}

export function exercise07(text) {
  // Use a regular expression to match the whole word 'and' (case-insensitive)
  const regex = /\band\b/i

  // Test if the regex pattern is found in the text
  return regex.test(text)
}
