import { request, APIResponse } from '@playwright/test';

export class Requests {

    async apiPost(endpoint: string, method: string, body: object){

        const APIcontext = await request.newContext();
        const response: APIResponse = await
            APIcontext.post(endpoint, {
                data: body,
            });

        return response;
    }

}