import {doublePrecision, integer, pgTable, timestamp, varchar} from 'drizzle-orm/pg-core';
import {createInsertSchema, createSelectSchema} from 'drizzle-zod';
import {z} from 'zod';

import {Categories} from './Category.schema';
import {PaymentMethods} from './PaymentMethod.schema';
import {BaseColumns, DescriptionColumn, OwnerColumn, Tables} from './general';

export const Transactions = pgTable(Tables.TRANSACTIONS, {
  ...BaseColumns,
  ...OwnerColumn,
  category: integer('categoryId')
    .references(() => Categories.id)
    .notNull(),
  paymentMethod: integer('paymentMethodId')
    .references(() => PaymentMethods.id)
    .notNull(),
  processedAt: timestamp('processedAt').notNull(),
  receiver: varchar('receiver', {length: 120}).notNull(),
  transferAmount: doublePrecision('transferAmount').notNull(),
  ...DescriptionColumn,
});

export const ZTransaction = createSelectSchema(Transactions);
export type TTransaction = z.infer<typeof ZTransaction>;

export const ZInsertTransaction = createInsertSchema(Transactions, {
  category: s => s.category,
  paymentMethod: s => s.paymentMethod,
  processedAt: s => s.processedAt,
  receiver: s => s.receiver,
  transferAmount: s => s.transferAmount,
  description: s => s.description.optional(),
});
export type TInsertTransaction = z.infer<typeof ZInsertTransaction>;
