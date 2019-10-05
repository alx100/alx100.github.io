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
            allowRestore: true
        }
    });

interface EmailConfirmatiomResponse {
    linkRecieved: boolean;
}

export const getEmailConfirmation = () =>
    callApi<never, EmailConfirmatiomResponse>("testUrl", {
        mock: {
            linkRecieved: true
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

export const getNews = () =>
    callApi<never, NewsResponse>(
        "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=85bf79c5aabd430fb5495bffd48b4b21",
        {}
    );

export interface Operation {
    type: "deposit" | "withdrawal" | "investment";
    date: Date;
    amount: number;
}

export interface ListForMonth {
    month: string;
    data: Operation[];
}

export interface OperationsResponse {
    list: ListForMonth[];
}

export const fetchActivitiesOperations = () =>
    callApi<never, OperationsResponse>("testUrl", {
        mock: {
            list: [
                {
                    month: "January",
                    data: [
                        {
                            type: "investment",
                            date: "Mon Jan 15 2018",
                            amount: 43.5
                        },
                        {
                            type: "deposit",
                            date: "Tue Jan 16 2018",
                            amount: 25
                        }
                    ]
                },
                {
                    month: "February",
                    data: [
                        {
                            type: "withdrawal",
                            date: "Mon Feb 15 2018",
                            amount: 43.5
                        },
                        {
                            type: "deposit",
                            date: "Tue Feb 16 2018",
                            amount: 44.23
                        },
                        {
                            type: "investment",
                            date: "Tue Feb 16 2018",
                            amount: 10
                        }
                    ]
                },
                {
                    month: "March",
                    data: [
                        {
                            type: "withdrawal",
                            date: "Mon Mar 15 2018",
                            amount: 43.5
                        },
                        {
                            type: "deposit",
                            date: "Tue Mar 16 2018",
                            amount: 44.23
                        },
                        {
                            type: "investment",
                            date: "Tue Mar 16 2018",
                            amount: 10
                        }
                    ]
                }
            ]
        }
    });

export const fetchSafeChartData = (range: number) => {
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
            mock: mockedData
        },
        "GET"
    );
};

export const fetchBoldChartData = (range: number) => {
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
            mock: mockedData
        },
        "GET"
    );
};

export const fetchDynamicChartData = (range: number) => {
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
            mock: mockedData
        },
        "GET"
    );
};
