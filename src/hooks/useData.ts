import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

// ? means optional parameter
// to filter games by genre you have to pass the genre as a query string parameter
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig }) // spread the request config to add any additional properties here
      .then((res) => {setData(res.data.results); setLoading(false);}) //res.data to read body of the response
      .catch((err) => { if (err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false);
    });
    
      return () => controller.abort();
  }, deps ? [...deps]: []);

  return { data, error, isLoading };
}

export default useData;