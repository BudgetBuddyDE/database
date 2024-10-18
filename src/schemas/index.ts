import {createInsertSchema, createSelectSchema} from 'drizzle-zod';
import {z} from 'zod';

import {account, session, user, verification} from './Auth.schema';

export const Users = user;
export const ZUser = createSelectSchema(Users);
export type TUser = z.infer<typeof ZUser>;
export const ZInsertUser = createInsertSchema(Users);
export type TInsertUser = z.infer<typeof ZInsertUser>;

export const Accounts = account;
export const ZAccount = createSelectSchema(Accounts);
export type TAccount = z.infer<typeof ZAccount>;
export const ZInsertAccount = createInsertSchema(Accounts);
export type TInsertAccount = z.infer<typeof ZInsertAccount>;

export const Sessions = session;
export const ZSession = createSelectSchema(Sessions);
export type TSession = z.infer<typeof ZSession>;
export const ZInsertSession = createInsertSchema(Sessions);
export type TInsertSession = z.infer<typeof ZInsertSession>;

export const Verifications = verification;
export const ZVerification = createSelectSchema(Verifications);
export type TVerification = z.infer<typeof ZVerification>;
export const ZInsertVerification = createInsertSchema(Verifications);
export type TInsertVerification = z.infer<typeof ZInsertVerification>;

export * from './general';
export * from './Category.schema';
export * from './Newsletter.schema';
export * from './PaymentMethod.schema';
export * from './Stock.schema';
export * from './Subscription.schema';
export * from './Transaction.schema';
