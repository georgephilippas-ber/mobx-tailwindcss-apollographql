import {faker} from "@faker-js/faker";

export class Authentication
{
    agentDetails: {
        agentId: number;
        username: string;
        email: string;
    } | null;

    authenticationServerUrl: string;

    constructor(authenticationServerUrl: string = "http://localhost:4000")
    {
        this.agentDetails = null;

        this.authenticationServerUrl = authenticationServerUrl;
    }

    async login(dummy: boolean = false): Promise<boolean>
    {
        if (dummy)
        {
            this.agentDetails = {
                agentId: -1,
                username: faker.internet.userName().toLowerCase(),
                email: faker.internet.email().toLowerCase()
            }

            return true;
        } else
        {
            return true;
        }
    }

    async logout(dummy: boolean = false): Promise<boolean>
    {
        if (dummy)
        {
            this.agentDetails = null;

            return true;
        } else
        {
            return true;
        }
    }

    isAuthenticated(): boolean
    {
        return Boolean(this.agentDetails);
    }
}
