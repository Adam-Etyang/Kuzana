export declare class UsersController {
    register(body: {
        email: string;
        password: string;
        name: string;
    }): Promise<Response>;
    login(body: {
        email: string;
        password: string;
    }): Promise<Response>;
    me(req: any): Promise<Response>;
}
