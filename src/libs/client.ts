import type { EndPoints } from '@/types/cms-types';
import { MicroCMS } from 'microcms-lib';

export const microCMSClient = new MicroCMS<EndPoints>({
  service: 'fust-gaming',
  apiKey: process.env.API_KEY,
  // apiWriteKey: process.env.APIKEY_WRITE,
  // apiGlobalKey: process.env.APIKEY_GLOBAL,
});

