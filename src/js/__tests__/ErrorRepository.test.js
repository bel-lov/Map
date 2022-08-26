import ErrorRepository from '../ErrorRepository';

const error = new ErrorRepository();

test('400', () => {
  expect(error.translate(400)).toBe('некорректный запрос серверу');
});

test('Unknown error', () => {
  expect(error.translate(200)).toBe('Unknown error');
});
