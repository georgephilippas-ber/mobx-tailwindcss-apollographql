import urlJoin from "url-join"

export type backendConfiguration_type =
    {
        baseUrl: string;
        authorizationHeader: string;
        router:
            {
                [router_ in string]:
                {
                    router_endpoint: string;
                    endpoints:
                        {
                            [endpoint_ in string]: string;
                        }
                }
            }
    }

export const backendConfiguration: backendConfiguration_type =
    {
        baseUrl: "http://localhost:4000",
        authorizationHeader: "Authorization",
        router:
            {
                authentication:
                    {
                        router_endpoint: "authorization",
                        endpoints:
                            {
                                login: "login",
                                logout: "logout"
                            }
                    }
            }
    }

export class Backend
{
    static getLoginUrl(): string
    {
        return urlJoin(backendConfiguration.baseUrl, backendConfiguration.router["authentication"].router_endpoint, backendConfiguration.router["authentication"].endpoints["login"]);
    }

    static getLogoutUrl(): string
    {
        return urlJoin(backendConfiguration.baseUrl, backendConfiguration.router["authentication"].router_endpoint, backendConfiguration.router["authentication"].endpoints["logout"]);
    }

    static getAuthorizationHeader(): string
    {
        return backendConfiguration.authorizationHeader;
    }
}
