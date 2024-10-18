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
import {getTable} from '../getTable';

/**
 * Retrieves the schema associated with the given table name.
 *
 * @param name - The name of the table for which to retrieve the schema.
 * @returns The schema corresponding to the specified table name.
 * @throws Will throw an error if the table name is not found.
 */
export function getSchemaByName(name: string) {
  const tbl: Tables = getTable(name);

  switch (tbl) {
    case Tables.CATEGORIES:
      return Categories;
    case Tables.PAYMENT_METHODS:
      return PaymentMethods;
    case Tables.TRANSACTIONS:
      return Transactions;
    case Tables.SUBSCRIPTIONS:
      return Subscriptions;
    case Tables.NEWSLETTERS:
      return Newsletters;
    case Tables.NEWSLETTER_SUBSCRIPTIONS:
      return NewsletterSubscriptions;
    case Tables.STOCK_EXCHANGES:
      return StockExchanges;
    case Tables.STOCK_POSITIONS:
      return StockPositions;
    case Tables.STOCK_WATCHLISTS:
      return StockWatchlists;
    case Tables.USERS:
      return Users;
    case Tables.ACCOUNTS:
      return Accounts;
    case Tables.SESSIONS:
      return Sessions;
    case Tables.VERIFICATIONS:
      return Verifications;
    default:
      throw new Error(`Table ${name} not found`);
  }
}
