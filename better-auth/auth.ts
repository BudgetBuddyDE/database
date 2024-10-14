import {betterAuth} from 'better-auth';
import {drizzleAdapter} from 'better-auth/adapters/drizzle';
import type {BetterAuthOptions} from 'better-auth/types';

import {db} from './db';

const options: BetterAuthOptions = {
  database: drizzleAdapter(db, {provider: 'pg'}),
  baseURL: 'http://localhost:3000',
};

export const auth = betterAuth(options);
