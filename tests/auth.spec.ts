// import { test, expect } from '@playwright/test';
<<<<<<< HEAD
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
=======
import { sendRequest } from '../globalSetup.ts';
import { test as base } from './fixtures/fixture_auth/fix_auth.ts';
import { expect } from '@playwright/test';

type TestFixtures = {
  InvalidCreatedUser: object;
};

const test = base.extend<TestFixtures>({
  InvalidCreatedUser: async ({}, use: any) => {
    const res = await sendRequest.apiPost('/auth', 'POST',
    { username: null, password: null });

    const responseBody = await res.json();
    await use(responseBody);
  }
});

test('Validar credencial inválida', async ({ InvalidCreatedUser }) => {

  console.log(InvalidCreatedUser);
  // assert token is not empty
  expect(InvalidCreatedUser).toBeTruthy();

});

test('Validar credencial válida', async ({ createdUser })=>{
  console.log(createdUser)

  expect(createdUser).not.toBeNull()
})
>>>>>>> 8686bd7 (criação novos cenários autenticação)
