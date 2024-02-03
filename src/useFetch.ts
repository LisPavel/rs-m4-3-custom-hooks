import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect((): void => {
    const fetchData = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const result = await axios.get<T>(url);
        if (result.status === 200) {
          setData(result.data);
        }
      } catch (error) {
        setError(error as AxiosError);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
}
