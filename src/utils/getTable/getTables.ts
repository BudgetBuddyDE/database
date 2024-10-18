import {Tables} from '../../schemas/general';

/**
 * Retrieves a table from the `Tables` enum based on the provided table name.
 *
 * @param table - The name of the table to retrieve.
 * @returns The corresponding table from the `Tables` enum.
 * @throws Will throw an error if the table is not found in the `Tables` enum.
 */
export function getTable(table: string): Tables {
  const values = Object.values(Tables);

  if (values.find(t => t === table)) {
    return table as Tables;
  }
  throw new Error('Table not found');
}
