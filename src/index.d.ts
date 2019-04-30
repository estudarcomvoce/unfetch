import {
  Body as NodeBody,
  Headers as NodeHeaders,
  Request as NodeRequest,
  Response as NodeResponse
} from "node-fetch";

declare namespace unfetch {
  export interface UnfetchResponse extends Response {
    blob(type?: string): Promise<Blob>;
  }
  export type IsomorphicHeaders = Headers | NodeHeaders;
  export type IsomorphicBody = Body | NodeBody;
  export type IsomorphicResponse = Response | NodeResponse;
  export type IsomorphicRequest = Request | NodeRequest

}

declare function unfetch(input: RequestInfo, init?: RequestInit): Promise<unfetch.UnfetchResponse>;

export default unfetch;
