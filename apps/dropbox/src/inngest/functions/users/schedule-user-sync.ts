import { inngest } from '@/inngest/client';
import { getOrganisationsToSync } from '../common/data';

export const scheduleUserSync = inngest.createFunction(
  { id: 'schedule-user-sync-jobs' },
  { cron: '0 0 * * *' },
  async ({ step }) => {
    const organisations = await getOrganisationsToSync();
    const syncStartedAt = Date.now();
    if (organisations.length > 0) {
      await step.sendEvent(
        'run-user-sync-jobs',
        organisations.map(({ organisationId }) => ({
          name: 'dropbox/users.sync_page.triggered',
          data: { organisationId, isFirstSync: false, syncStartedAt },
        }))
      );
    }
    return { organisations };
  }
);