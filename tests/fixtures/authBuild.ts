import { AuthPayload } from './interfaces/interfaces.ts';

export class AuthFixture {
    private _sender: AuthPayload;

    constructor() {
        // Inicializa _sender
        this._sender = {
            username: '',
            password: ''
        };
    }

    setUsername(username: string) {
        this._sender.username = username;
        return this;
    }

    setPassword(password: string) {
        this._sender.password = password;
        return this;
    }

    buildPayload(): AuthPayload {
        return this._sender;
    }
}