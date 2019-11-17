import { LinearChartData } from "../../components/LineChart/index";
import callApi from "../callApi";

interface RestorePasswordRequest {
    user_id: number;
    user_email: string;
    user_password: string;
}

interface RestorePasswordResponse {
    allowRestore: boolean;
}

export const restoreForgottenPassword = () =>
    callApi<RestorePasswordRequest, RestorePasswordResponse>("testUrl", {
        data: {
            user_id: 0,
            user_email: "test@email.com",
            user_password: "qwerty"
        },
        mock: {
            data: {
                allowRestore: true
            }
        }
    });

interface EmailConfirmatiomResponse {
    linkRecieved: boolean;
}

export const getEmailConfirmation = () =>
    callApi<never, EmailConfirmatiomResponse>("testUrl", {
        mock: {
            data: {
                linkRecieved: true
            }
        }
    });

interface NewsArticle {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

interface NewsResponse {
    articles: NewsArticle[];
    status: string;
    totalResults: number;
}

export const getNews = (): Promise<NewsResponse> =>
    callApi<never, NewsResponse>(
        "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=85bf79c5aabd430fb5495bffd48b4b21",
        {}
    );

export interface Operation {
    type: "deposit" | "withdrawal" | "investment";
    date: Date;
    amount: number;
    additionalFields: Array<{
        name: string;
        value: string;
    }>;
}

export interface ListForMonth {
    month: string;
    data: Operation[];
}

export interface OperationsResponse {
    list: ListForMonth[];
}

export const fetchActivitiesOperations = (): Promise<OperationsResponse> =>
    callApi<never, OperationsResponse>("testUrl", {
        mock: {
            data: {
                list: [
                    {
                        month: "Today",
                        data: [
                            {
                                type: "investment",
                                date: "Mon Jan 15 2018",
                                amount: 43.5,
                                additionalFields: [
                                    {
                                        name: "Number of Shares Bold bought",
                                        value: "13.15"
                                    },
                                    {
                                        name: "Price per Share",
                                        value: "230.70 €"
                                    },
                                    {
                                        name: "Trade admin Cost",
                                        value: "1.70 €"
                                    },
                                    {
                                        name: "Total Fees",
                                        value: "7.40 €"
                                    },
                                    {
                                        name: "Souscription Fees",
                                        value: "3.70 €"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        month: "This Week",
                        data: [
                            {
                                type: "investment",
                                date: "Mon Jan 15 2018",
                                amount: 43.5,
                                additionalFields: [
                                    {
                                        name: "Test",
                                        value: "value"
                                    },
                                    {
                                        name: "Test",
                                        value: "value"
                                    }
                                ]
                            },
                            {
                                type: "deposit",
                                date: "Tue Jan 16 2018",
                                amount: 25,
                                additionalFields: [
                                    {
                                        name: "Test",
                                        value: "value"
                                    },
                                    {
                                        name: "Test",
                                        value: "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        month: "This Month",
                        data: [
                            {
                                type: "investment",
                                date: "Mon Jan 15 2018",
                                amount: 43.5,
                                additionalFields: [
                                    {
                                        name: "Test",
                                        value: "value"
                                    },
                                    {
                                        name: "Test",
                                        value: "value"
                                    }
                                ]
                            },
                            {
                                type: "deposit",
                                date: "Tue Jan 16 2018",
                                amount: 25,
                                additionalFields: [
                                    {
                                        name: "Test",
                                        value: "value"
                                    },
                                    {
                                        name: "Test",
                                        value: "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        month: "January",
                        data: [
                            {
                                type: "investment",
                                date: "Mon Jan 15 2018",
                                amount: 43.5,
                                additionalFields: [
                                    {
                                        name: "Test",
                                        value: "value"
                                    },
                                    {
                                        name: "Test",
                                        value: "value"
                                    }
                                ]
                            },
                            {
                                type: "deposit",
                                date: "Tue Jan 16 2018",
                                amount: 25,
                                additionalFields: [
                                    {
                                        name: "Test",
                                        value: "value"
                                    },
                                    {
                                        name: "Test",
                                        value: "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        month: "December",
                        data: [
                            {
                                type: "investment",
                                date: "Mon Jan 15 2018",
                                amount: 43.5,
                                additionalFields: [
                                    {
                                        name: "Test",
                                        value: "value"
                                    },
                                    {
                                        name: "Test",
                                        value: "value"
                                    }
                                ]
                            },
                            {
                                type: "deposit",
                                date: "Tue Jan 16 2018",
                                amount: 25,
                                additionalFields: [
                                    {
                                        name: "Test",
                                        value: "value"
                                    },
                                    {
                                        name: "Test",
                                        value: "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        month: "November",
                        data: [
                            {
                                type: "investment",
                                date: "Mon Jan 15 2018",
                                amount: 43.5,
                                additionalFields: [
                                    {
                                        name: "Test",
                                        value: "value"
                                    },
                                    {
                                        name: "Test",
                                        value: "value"
                                    }
                                ]
                            },
                            {
                                type: "deposit",
                                date: "Tue Jan 16 2018",
                                amount: 25,
                                additionalFields: [
                                    {
                                        name: "Test",
                                        value: "value"
                                    },
                                    {
                                        name: "Test",
                                        value: "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        month: "October",
                        data: [
                            {
                                type: "investment",
                                date: "Mon Jan 15 2018",
                                amount: 43.5,
                                additionalFields: [
                                    {
                                        name: "Test",
                                        value: "value"
                                    },
                                    {
                                        name: "Test",
                                        value: "value"
                                    }
                                ]
                            },
                            {
                                type: "deposit",
                                date: "Tue Jan 16 2018",
                                amount: 25,
                                additionalFields: [
                                    {
                                        name: "Test",
                                        value: "value"
                                    },
                                    {
                                        name: "Test",
                                        value: "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        month: "September",
                        data: [
                            {
                                type: "investment",
                                date: "Mon Jan 15 2018",
                                amount: 43.5,
                                additionalFields: [
                                    {
                                        name: "Test",
                                        value: "value"
                                    },
                                    {
                                        name: "Test",
                                        value: "value"
                                    }
                                ]
                            },
                            {
                                type: "deposit",
                                date: "Tue Jan 16 2018",
                                amount: 25,
                                additionalFields: [
                                    {
                                        name: "Test",
                                        value: "value"
                                    },
                                    {
                                        name: "Test",
                                        value: "value"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    });

export const fetchSafeChartData = (range: number): Promise<LinearChartData> => {
    let mockedData: LinearChartData;
    switch (range) {
        case 1:
            mockedData = {
                data: [1, 2, 3, 4],
                XAxisContent: ["W1", "W2", "W3", "W4"]
            };
            break;
        case 3:
            mockedData = {
                data: [5, 10, 4],
                XAxisContent: ["Jul", "Aug", "Sep"]
            };
            break;
        case 6:
            mockedData = {
                data: [5, 10, 4, 0, 10, 20],
                XAxisContent: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            };
            break;
        case 12:
            mockedData = {
                data: [10, 5, 15, 20],
                XAxisContent: ["Spr", "Sum", "Aut", "Win"]
            };
            break;
        case 60:
            mockedData = {
                data: [1, 5, 0, 8, 4],
                XAxisContent: ["2014", "2015", "2016", "2017", "2018"]
            };
            break;
        default:
            mockedData = {
                data: [8, 12, 50, 6],
                XAxisContent: ["W1", "W2", "W3", "W4"]
            };
            break;
    }
    return callApi<never, LinearChartData>(
        "testUrl",
        {
            mock: {
                data: mockedData
            }
        },
        "GET"
    );
};

export const fetchBoldChartData = (range: number): Promise<LinearChartData> => {
    let mockedData: LinearChartData;
    switch (range) {
        case 1:
            mockedData = {
                data: [1, 2, 3, 4],
                XAxisContent: ["W1", "W2", "W3", "W4"]
            };
            break;
        case 3:
            mockedData = {
                data: [5, 10, 4],
                XAxisContent: ["Jul", "Aug", "Sep"]
            };
            break;
        case 6:
            mockedData = {
                data: [5, 10, 4, 0, 10, 20],
                XAxisContent: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            };
            break;
        case 12:
            mockedData = {
                data: [10, 5, 15, 20],
                XAxisContent: ["Spr", "Sum", "Aut", "Win"]
            };
            break;
        case 60:
            mockedData = {
                data: [1, 5, 0, 8, 4],
                XAxisContent: ["2014", "2015", "2016", "2017", "2018"]
            };
            break;
        default:
            mockedData = {
                data: [8, 12, 50, 6],
                XAxisContent: ["W1", "W2", "W3", "W4"]
            };
            break;
    }
    return callApi<never, LinearChartData>(
        "testUrl",
        {
            mock: {
                data: mockedData
            }
        },
        "GET"
    );
};

export const fetchDynamicChartData = (
    range: number
): Promise<LinearChartData> => {
    let mockedData: LinearChartData;
    switch (range) {
        case 1:
            mockedData = {
                data: [1, 2, 3, 4],
                XAxisContent: ["W1", "W2", "W3", "W4"]
            };
            break;
        case 3:
            mockedData = {
                data: [5, 10, 4],
                XAxisContent: ["Jul", "Aug", "Sep"]
            };
            break;
        case 6:
            mockedData = {
                data: [5, 10, 4, 0, 10, 20],
                XAxisContent: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            };
            break;
        case 12:
            mockedData = {
                data: [10, 5, 15, 20],
                XAxisContent: ["Spr", "Sum", "Aut", "Win"]
            };
            break;
        case 60:
            mockedData = {
                data: [1, 5, 0, 8, 4],
                XAxisContent: ["2014", "2015", "2016", "2017", "2018"]
            };
            break;
        default:
            mockedData = {
                data: [8, 12, 50, 6],
                XAxisContent: ["W1", "W2", "W3", "W4"]
            };
            break;
    }
    return callApi<never, LinearChartData>(
        "testUrl",
        {
            mock: {
                data: mockedData
            }
        },
        "GET"
    );
};

interface SmsRequest {
    phoneNumber: string;
}

interface SmsResponse {
    isProved: boolean;
}

export const sendSmsRequest = (phoneNumber: string): Promise<SmsResponse> =>
    callApi<SmsRequest, SmsResponse>(
        "test",
        {
            data: {
                phoneNumber
            },
            mock: {
                data: {
                    isProved: true
                }
            }
        },
        "POST"
    );

interface CheckSmsRequest {
    smsCode: string;
}

interface CheckSmsResponse {
    isEquals: boolean;
}

export const checkSmsCode = (smsCode: string): Promise<CheckSmsResponse> =>
    callApi<CheckSmsRequest, CheckSmsResponse>(
        "test",
        {
            data: {
                smsCode
            },
            mock: {
                data: {
                    isEquals: true
                }
            }
        },
        "POST"
    );

interface RegisterUserRequest {
    email: string;
    password: string;
}

export const registerUser = (
    registerData: RegisterUserRequest
): Promise<void> =>
    callApi<RegisterUserRequest, void>(
        "test",
        {
            data: {
                ...registerData
            },
            mock: {
                data: undefined
            }
        },
        "POST"
    );

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    user_id: string;
}

export const login = (loginData: LoginRequest): Promise<LoginResponse> =>
    callApi<LoginRequest, LoginResponse>(
        "test",
        {
            data: { ...loginData },
            mock: {
                data: {
                    user_id: "test_id"
                }
            }
        },
        "POST"
    );

export interface ProfileBalanceRequest {
    user_id: string;
}

export interface ProfileBalanceResponse {
    balance: number;
}

export const fetchProfileBalance = (
    balanceRequest: ProfileBalanceRequest
): Promise<ProfileBalanceResponse> =>
    callApi<ProfileBalanceRequest, ProfileBalanceResponse>("test", {
        data: {
            ...balanceRequest
        },
        mock: {
            data: {
                balance: 2000.0
            }
        }
    });
