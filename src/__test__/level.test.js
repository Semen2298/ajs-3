import fetchData from '../http';
import { getLevel } from '../level';

jest.mock('../http');

describe('getLevel', () => {
  test('returns level when response status is ok', () => {
    fetchData.mockReturnValue({ status: 'ok', level: 5 });
    expect(getLevel(1)).toBe('Ваш текущий уровень: 5');
  });

  test('returns error message when response status is not ok', () => {
    fetchData.mockReturnValue({ status: 'error' });
    expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
  });

  test('returns server error message on exception', () => {
    fetchData.mockImplementation(() => {
      throw new Error('Server is down');
    });
    expect(getLevel(1)).toBe('Ошибка сервера');
  });
});
