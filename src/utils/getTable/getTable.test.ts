import {Tables} from '../../schemas/general';
import {getTable} from './getTables';

describe('getTable', () => {
  it('should return the correct table when a valid table name is provided', () => {
    const tableName = Tables.CATEGORIES;
    const result = getTable(tableName);
    expect(result).toBe(tableName);
  });

  it('should throw an error when an invalid table name is provided', () => {
    const invalidTableName = 'INVALID_TABLE';
    expect(() => getTable(invalidTableName)).toThrow('Table not found');
  });
});
