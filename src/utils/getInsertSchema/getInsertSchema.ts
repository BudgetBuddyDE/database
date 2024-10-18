import {
  Tables,
  ZInsertAccount,
  ZInsertCategory,
  ZInsertNewsletter,
  ZInsertNewsletterSubscription,
  ZInsertPaymentMethod,
  ZInsertSession,
  ZInsertStockExchange,
  ZInsertStockPosition,
  ZInsertStockWatchlist,
  ZInsertSubscription,
  ZInsertTransaction,
  ZInsertUser,
  ZInsertVerification,
} from '../../schemas';
import {getTable} from '../getTable';

/**
 * Retrieves the appropriate insert schema for a given table name.
 *
 * @param name - The name of the table for which to get the insert schema.
 * @returns The corresponding insert schema for the specified table.
 * @throws Will throw an error if the table name is not found.
 */
export function getInsertSchema(name: string) {
  const tbl: Tables = getTable(name);

  switch (tbl) {
    case Tables.CATEGORIES:
      return ZInsertCategory;
    case Tables.PAYMENT_METHODS:
      return ZInsertPaymentMethod;
    case Tables.TRANSACTIONS:
      return ZInsertTransaction;
    case Tables.SUBSCRIPTIONS:
      return ZInsertSubscription;
    case Tables.NEWSLETTERS:
      return ZInsertNewsletter;
    case Tables.NEWSLETTER_SUBSCRIPTIONS:
      return ZInsertNewsletterSubscription;
    case Tables.STOCK_EXCHANGES:
      return ZInsertStockExchange;
    case Tables.STOCK_POSITIONS:
      return ZInsertStockPosition;
    case Tables.STOCK_WATCHLISTS:
      return ZInsertStockWatchlist;
    case Tables.USERS:
      return ZInsertUser;
    case Tables.ACCOUNTS:
      return ZInsertAccount;
    case Tables.SESSIONS:
      return ZInsertSession;
    case Tables.VERIFICATIONS:
      return ZInsertVerification;

    default:
      throw new Error(`Table ${name} not found`);
  }
}
