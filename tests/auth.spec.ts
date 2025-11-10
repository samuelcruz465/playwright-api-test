// import { test, expect } from '@playwright/test';
import { authFixture, sendRequest } from '../globalSetup.ts';
import { test } from './fixtures/fixture_auth/fix_auth.ts';
import { expect } from '@playwright/test';

// test('Auth Create token', async () => {

//   let body = authFixture.setPassword('password123')
//     .setUsername('admin')
//     .buildPayload();

//   console.log(body)
//   const req = await sendRequest.apiPost('/auth', 'POST', body);
//   const response = await req.json();

//   console.log(response);
//   //assert response structure


test.use({
  createdUser: async ({}, use: any) => {
    const res = await sendRequest.apiPost('/auth', 'POST', {username: 'asdwa' , password: 'adaw'});

    const responseBody = await res.json();
    await use(responseBody); 
}})

test('test fixture', async ({createdUser}) => {

  console.log(createdUser.token);
    expect(createdUser).toEqual(expect.objectContaining({
      token: expect.any(String)
  }));

  // assert token is not empty
  expect(createdUser.token).toBeTruthy();
  expect(createdUser.token.length).toBeGreaterThan(0);
});
