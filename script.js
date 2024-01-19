export function exercise01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      result.push("")
    } else if (currentElement === "E") {
      // If the current element is "e" or "E", replace it with an empty string
      result.push("")
    } else {
      result.push(currentElement)
    }
  }
  // Combine array elements into a string
  return result.join("")
}

export function exercise02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const capitalizedElement = currentElement.toUpperCase()
    // Convert the current element to uppercase and add it to the result array
    result.push(capitalizedElement)
  }
  // Combine the modified array to form the string with capitalized letters
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
      // If the current element is "e" or "E", increase the count
      count = count + 1
    }
  }
  // Show the total number of "e" in the array
  return count
}

export function exercise04(args) {
  const input = args
  let count = 1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const previousElement = input[i - 1]

    if (currentElement === " " && previousElement != "-") {
      // If the current element is a space and the previous element is not a hyphen, increase the count
      count = count + 1
    } else if (currentElement === "0") {
      // If the current element is "0", decrease the count
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
      // If the ASCII code corresponds to an uppercase letter, return true
      return true
    }
  }
  // If no uppercase letter is found, return false
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
      // If the ASCII code corresponds to a special character, return true
      return true
    }
  }
  // If no special character is found, return false
  return false
}

export function exercise07(text) {
  // Use a regular expression to match the whole word 'and' (case-insensitive)
  const regex = /\band\b/i

  // Test if the regex pattern is found in the text
  return regex.test(text)
}
