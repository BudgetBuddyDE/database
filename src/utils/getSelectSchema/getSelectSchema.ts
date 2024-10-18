import {
  Tables,
  ZAccount,
  ZCategory,
  ZNewsletter,
  ZNewsletterSubscription,
  ZPaymentMethod,
  ZSession,
  ZStockExchange,
  ZStockPosition,
  ZStockWatchlist,
  ZSubscription,
  ZTransaction,
  ZUser,
  ZVerification,
} from '../../schemas';
import {getTable} from '../getTable';

/**
 * Retrieves the schema for the specified table name.
 *
 * @param name - The name of the table for which to get the schema.
 * @returns The schema corresponding to the specified table name.
 * @throws Will throw an error if the table name is not found.
 */
export function getSelectSchema(name: string) {
  const tbl: Tables = getTable(name);

  switch (tbl) {
    case Tables.CATEGORIES:
      return ZCategory;
    case Tables.PAYMENT_METHODS:
      return ZPaymentMethod;
    case Tables.TRANSACTIONS:
      return ZTransaction;
    case Tables.SUBSCRIPTIONS:
      return ZSubscription;
    case Tables.NEWSLETTERS:
      return ZNewsletter;
    case Tables.NEWSLETTER_SUBSCRIPTIONS:
      return ZNewsletterSubscription;
    case Tables.STOCK_EXCHANGES:
      return ZStockExchange;
    case Tables.STOCK_POSITIONS:
      return ZStockPosition;
    case Tables.STOCK_WATCHLISTS:
      return ZStockWatchlist;
    case Tables.USERS:
      return ZUser;
    case Tables.ACCOUNTS:
      return ZAccount;
    case Tables.SESSIONS:
      return ZSession;
    case Tables.VERIFICATIONS:
      return ZVerification;
    default:
      throw new Error(`Table ${name} not found`);
  }
}
