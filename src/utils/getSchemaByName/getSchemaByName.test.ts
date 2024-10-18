import {
  Accounts,
  Categories,
  NewsletterSubscriptions,
  Newsletters,
  PaymentMethods,
  Sessions,
  StockExchanges,
  StockPositions,
  StockWatchlists,
  Subscriptions,
  Tables,
  Transactions,
  Users,
  Verifications,
} from '../../schemas';
import {getSchemaByName} from './getSchemaByName';

describe('getSchemaByName', () => {
  it('should return the correct schema for each table name in the Tables enum', () => {
    const tableSchemaMap = {
      [Tables.CATEGORIES]: Categories,
      [Tables.PAYMENT_METHODS]: PaymentMethods,
      [Tables.TRANSACTIONS]: Transactions,
      [Tables.SUBSCRIPTIONS]: Subscriptions,
      [Tables.NEWSLETTERS]: Newsletters,
      [Tables.NEWSLETTER_SUBSCRIPTIONS]: NewsletterSubscriptions,
      [Tables.STOCK_EXCHANGES]: StockExchanges,
      [Tables.STOCK_POSITIONS]: StockPositions,
      [Tables.STOCK_WATCHLISTS]: StockWatchlists,
      [Tables.USERS]: Users,
      [Tables.ACCOUNTS]: Accounts,
      [Tables.SESSIONS]: Sessions,
      [Tables.VERIFICATIONS]: Verifications,
    };

    for (const [tableName, schema] of Object.entries(tableSchemaMap)) {
      const result = getSchemaByName(tableName);
      expect(result).toBe(schema);
    }
  });

  it('should throw an error when an invalid table name is provided', () => {
    const invalidTableName = 'INVALID_TABLE';
    expect(() => getSchemaByName(invalidTableName)).toThrow('Table not found');
  });
});
