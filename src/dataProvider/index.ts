import axios from "./axios";

const fetcher = () => {
  return {
    get: async <TResData = any>(
      url: string,
      params = {},
      version: string = "",
      headers: any = {}
    ) => {
      return axios
        .request<TResData>({
          url: version + url,
          method: "GET",
          params,
          headers,
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },
    /**
     * @function post To create a resource
     * @returns Promise
     */
    post: async <TReqData = any, TResData = any>(
      url: string,
      data: TReqData,
      params = {},
      version: string = "",
      headers: any = {}
    ) => {
      return axios
        .request<TResData>({
          url: version + url,
          method: "POST",
          data,
          params,
          headers,
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },
    /**
     * @function put To update a full data of resource
     * @returns Promise
     */
    put: async <TReqData = any, TResData = any>(
      url: string,
      data: TReqData,
      params = {},
      version: string = "",
      headers: any = {}
    ) => {
      return axios
        .request<TResData>({
          url: version + url,
          method: "PUT",
          data,
          params,
          headers,
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },
    /**
     * @function patch To update partial data of a resource
     * @returns Promise
     */
    patch: async <TReqData = any, TResData = any>(
      url: string,
      data: TReqData,
      params = {},
      version: string = "",
      headers: any = {}
    ) => {
      return axios
        .request<TResData>({
          url: version + url,
          method: "PATCH",
          data,
          params,
          headers,
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },
    /**
     *@function delete To delete the resource
     * @returns Promise
     */
    delete: async (url: string, params = {}, version: string = "") => {
      return axios
        .request({
          url: version + url,
          method: "DELETE",
          params: params,
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },
  };
};

export default fetcher;
