import {faker} from "@faker-js/faker";
import {makeAutoObservable} from "mobx";
import axios from "axios";
import {Backend} from "../configuration/configuration";

export class Authentication
{
    agentDetails: {
        agentId: number;
        username: string;
        email: string;
        token: string;
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
                email: faker.internet.email().toLowerCase(),
                token: faker.datatype.uuid()
            }

            return true;
        } else
        {
            try
            {
                this.agentDetails = (await axios.post(Backend.getLoginUrl(), {credentials})).data;

                return true;
            } catch (e)
            {
                return false;
            }
        }
    }

    async logout(dummy: boolean = false): Promise<boolean>
    {
        console.log(this.agentDetails?.token);

        if (!dummy && this.agentDetails)
            await axios.post(Backend.getLogoutUrl(), {}, {
                headers:
                    {
                        [Backend.getAuthorizationHeader()]: ["Bearer", this.agentDetails.token].join(" ")
                    }
            });

        this.agentDetails = null;

        return true;
    }

    isAuthenticated(): boolean
    {
        return Boolean(this.agentDetails);
    }
}

export const globalAuthentication: Authentication = new Authentication("");
