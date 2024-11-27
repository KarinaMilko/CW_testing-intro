const { expect } = require('chai');
const { getSurnameWithInitials } = require('../fullName');

describe('Testing fullname', () => {
  // 1) Для аргументу вигляду "Прізвище Ім'я Побатькові" має повертати "Прізвище І.П."
  // 2) Для аргументу вигляду "Прізвище Ім'я" має повертати "Прізвище І."
  it('should return surname with initials for a full name', () => {
    // В одному тесті можна перевіряти кілька однотипних комбінацій
    const result1 = getSurnameWithInitials('Іваненко Петро Сергійович');
    const expected1 = 'Іваненко П.С.';
    expect(result1).to.equal(expected1);

    const result2 = getSurnameWithInitials('Шевченко Тарас');
    const expected2 = 'Шевченко Т.';
    expect(result2).to.equal(expected2);
  });

  // 3) Для аргументу із зайвими пробілами має повертати коректний результат
  // ("   Прізвище     Ім'я      Побатькові     " => "Прізвище І.П." )
  // ("     Прізвище        Ім'я         " => "Прізвище І." )

  it('should return surname without spaces', () => {
    const result1 = getSurnameWithInitials(
      '  Іваненко   Петро    Сергійович    '
    );
    const expected1 = 'Іваненко П.С.';
    expect(result1).to.equal(expected1);

    const result2 = getSurnameWithInitials('  Шевченко   Тарас    ');
    const expected2 = 'Шевченко Т.';
    expect(result2).to.equal(expected2);
  });

  // 4) Для аргументу типу не рядок ({lastName: "Прізвище", firstName: "Ім'я"}, NaN, ...) має викидати помилку "Input must be a string"
  it('should throw an error if the input is not a string', () => {
    // При перевірці на викидання помилки expect має приймати колбек:
    expect(() => getSurnameWithInitials(123)).to.throw(
      'Input must be a string'
    );
    expect(() => getSurnameWithInitials(null)).to.throw(
      'Input must be a string'
    );
    expect(() => getSurnameWithInitials({})).to.throw('Input must be a string');
  });

  // 5) Для аргументу тільки з одного слова ("Прізвище") має викидати помилку "Full name must include at least a surname and a first name"
  it('should throw an error if only last name', () => {
    expect(() => getSurnameWithInitials('Шевченко')).to.throw(
      'Full name must include at least a surname and a first name'
    );
  });

  // 6) Для аргументу з кількістю слів > 3 ("Прізвище Ім'я Побатькові BlaBlaBla") має викидати помилку "Full name must include a maximum of 3 words"
  it('should throw an error if full name include more 3 words', () => {
    expect(() =>
      getSurnameWithInitials('Іваненко Петро Сергійович BlaBlaBla')
    ).to.throw('Full name must include a maximum of 3 words');
  });
});
