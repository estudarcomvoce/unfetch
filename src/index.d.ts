import {
  Body as NodeBody,
  Headers as NodeHeaders,
  Request as NodeRequest,
  Response as NodeResponse
} from "node-fetch";

declare namespace unfetch {
  export type IsomorphicHeaders = Headers | NodeHeaders;
  export type IsomorphicBody = Body | NodeBody;
  export type IsomorphicResponse = Response | NodeResponse;
  export type IsomorphicRequest = Request | NodeRequest
}

declare class TypedResponse<T> extends Response {
  json(): Promise<T>
}

declare function unfetch<T = any>(input: RequestInfo, init?: RequestInit): Promise<TypedResponse<T>>;

export default unfetch;
