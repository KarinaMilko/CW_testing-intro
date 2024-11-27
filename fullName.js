// Дана функція, яка за рядком вигляду "Прізвище Ім'я" або "Прізвище Ім'я По-батькові" повертає рядок з ініціалом або ініціалами, тобто "Прізвище І." або "Прізвище І.П.":

module.exports.getSurnameWithInitials = fullName => {
  if (typeof fullName !== 'string') {
    throw new Error('Input must be a string');
  }

  const parts = fullName.trim().split(/\s+/);

  if (parts.length < 2) {
    throw new Error(
      'Full name must include at least a surname and a first name'
    );
  }

  if (parts.length > 3) {
    throw new Error('Full name must include a maximum of 3 words');
  }

  const surname = parts[0];

  const initials = parts
    .slice(1) // беремо ім'я та по-батькові
    .map(name => name[0]?.toUpperCase() + '.')
    .join('');
  return `${surname} ${initials}`;
};
