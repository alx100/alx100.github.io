import { stringify } from "querystring";

// The callApi method returns parsified result of the promise in case of typical call
// or custom data, in case the mock was provided. The type of response must be equal to
// the type of mock.
//
// You can provide an error to the method. Use the mock errMsg field
// to throw the custom error with the provided message.

interface Mock<R> {
    data: R;
    errMsg?: string;
}

interface Request<T, R> extends RequestInit {
    // You can't use body in the request. Use data field instead.
    data?: T;
    mock?: Mock<R>;
}

async function callApi<Req, Resp>(
    url: string,
    requestOptions: Request<Req, Resp>,
    method?: string
): Promise<Resp> {
    const ReqData = requestOptions.data
        ? stringify(requestOptions.data)
        : undefined;

    let Result: Promise<Resp>;

    if (!requestOptions.mock) {
        Result = await fetch(url, {
            ...requestOptions,
            method: method ? method : "GET",
            body: ReqData
        }).then(res => res.json());
    } else if (requestOptions.mock.errMsg) {
        throw new Error(requestOptions.mock.errMsg);
    } else {
        Result = Promise.resolve(requestOptions.mock.data);
    }

    return Result;
}

export default callApi;
