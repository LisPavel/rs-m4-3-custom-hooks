import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useState } from "react";

type FetchCallback = (
  requestParams?: Pick<AxiosRequestConfig, "params">
) => Promise<void>;

export function useFetch<T>(url: string): {
  data: T | null;
  error: AxiosError | null;
  isLoading: boolean;
  refetch: FetchCallback;
} {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);

  const fetchData = useCallback<FetchCallback>(
    async (config?: AxiosRequestConfig): Promise<void> => {
      setIsLoading(true);
      try {
        const result = await axios.get<T>(url, config);
        if (result.status === 200) {
          setData(result.data);
        }
      } catch (error) {
        setError(error as AxiosError);
      } finally {
        setIsLoading(false);
      }
    },
    [url]
  );

  useEffect((): void => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
}
