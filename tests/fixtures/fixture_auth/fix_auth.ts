import { test as base } from '@playwright/test';
import { sendRequest, authFixture } from '../../../globalSetup.ts';

type MyFixture = {
  createdUser: any;
};


export const test = base.extend<MyFixture>({
  createdUser: async ({}, use: any) => {
    const body = authFixture.setPassword('password123')
      .setUsername('admin')
      .buildPayload();

    const res = await sendRequest.apiPost('/auth', 'POST', body);

    const responseBody = await res.json();
    await use(responseBody); 
  }
});
