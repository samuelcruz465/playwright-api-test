import { Requests } from './tests/services/requests.ts'
import { AuthFixture } from './tests/fixtures/authBuild.ts'

const sendRequest = new Requests();
const authFixture = new AuthFixture();

export { sendRequest, authFixture };