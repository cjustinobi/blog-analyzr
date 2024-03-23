import { utils } from 'ethers'

export const shortenAddress = (addr: string) => {
  return `${addr?.substring(0, 6)}...${addr?.substring(addr.length - 4)}`
}

export const capitalize = (word: string) =>
  `${word?.substring(0, 1).toUpperCase()}${word?.substring(1)}`


  const sanitizeInput = (input: string) => {
  // Remove any HTML tags
  const sanitizedInput = input.replace(/<[^>]+>/g, '')
  return sanitizedInput
}

export const validateForm = (phoneNumber: string, yourMessage: string) => {
  const sanitizedPhoneNumber = phoneNumber
    ? sanitizeInput(phoneNumber).replace(/[^0-9]/g, '')
    : ''
  const sanitizedYourMessage = sanitizeInput(yourMessage)

  // Validation
  const isValid =
    sanitizedPhoneNumber.length > 9 && sanitizedYourMessage.trim() !== ''

  return isValid
}

export const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    
    // Months array for converting numeric month to string
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Get the components of the date
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();
    
    // Add leading zero if day is a single digit
    const formattedDay = day < 10 ? '0' + day : day;

    // Get the time in hours and minutes
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Format the time string
    const timeString = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    // Construct the human-readable date string
    const humanReadableDate = `${month} ${formattedDay}, ${year} ${timeString}`;
    
    return humanReadableDate;
}




// export const parseInputEvent = (input: `0x${string}`) => {
//   if (input) {
//     const decodedString = utils.toUtf8String(input)
//     return JSON.parse(JSON.parse(decodedString))
//   }
// }
