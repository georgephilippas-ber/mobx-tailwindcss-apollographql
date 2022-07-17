import {faker} from "@faker-js/faker";
import {makeAutoObservable} from "mobx";
import axios from "axios";

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

        makeAutoObservable(this);
    }

    async login(credentials: string[], dummy?: "success" | "failure" | number): Promise<boolean>
    {
        if (dummy)
        {
            if (dummy === "failure")
                return false;

            if (typeof dummy === "number")
                if (Math.random() > dummy)
                    return false;

            this.agentDetails = {
                agentId: -1,
                username: faker.internet.userName().toLowerCase(),
                email: faker.internet.email().toLowerCase()
            }

            return true;
        } else
        {
            try
            {
                await axios.post("", {credentials});

                return true;
            } catch (e)
            {
                return false;
            }
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

export const globalAuthentication: Authentication = new Authentication("");
