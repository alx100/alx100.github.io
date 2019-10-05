import { stringify } from "querystring";

// The callApi method returns parsified result of the promise in case of typical call
// or custom data, in case the mock was provided. The type of response must be equal to
// the type of mock.

interface Request<T, R> extends RequestInit {
    // You can't use body in the request. Use data field instead.
    data?: T;
    mock?: R;
}

async function callApi<Req, Resp>(
    url: string,
    requestOptions: Request<Req, Resp>,
    method?: string
): Promise<Resp> {
    const ReqData = requestOptions.data
        ? stringify(requestOptions.data)
        : undefined;

    const Result = (await !requestOptions.mock)
        ? fetch(url, {
              ...requestOptions,
              method: method ? method : "GET",
              body: ReqData
          }).then(res => res.json())
        : Promise.resolve(requestOptions.mock);

    return Result;
}

export default callApi;
