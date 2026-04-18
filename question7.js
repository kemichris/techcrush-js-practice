// Write a function formatName(firstName, lastName) that trims extra 
// spaces from both inputs and returns the full name in this exact format: 'LASTNAME, Firstname'.


function formatName(firstName, lastName) {
  // Trim extra spaces from both inputs
  const trimmedFirstName = firstName.trim();
  const trimmedLastName = lastName.trim();

  // Format the full name as 'LASTNAME, Firstname'
  const formattedName = `${trimmedLastName.toUpperCase()}, ${trimmedFirstName.charAt(0).toUpperCase() + trimmedFirstName.slice(1).toLowerCase()}`;

  return formattedName;
}


console.log(formatName('  esther  ', '  ogbu  ')); 