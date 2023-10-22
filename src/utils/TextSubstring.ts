
const TextSubstring = ( text: string, length: number) => {
  if (text.length > length) {
    return text.substring(0, 20) + "..."
  } else {
    return text
  }
}

export default TextSubstring