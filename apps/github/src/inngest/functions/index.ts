import { scheduleUsersSyncs } from './users/schedule-users-syncs';
import { syncUsersPage } from './users/sync-users-page';

export const inngestFunctions = [syncUsersPage, scheduleUsersSyncs];
