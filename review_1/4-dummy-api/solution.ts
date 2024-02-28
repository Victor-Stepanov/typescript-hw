import { IUsersResponse, IUser } from './interfaces';

const URL_SITE = 'https://dummyjson.com/users';

enum Statuses {
  Pending = 'pending',
  Success = 'success',
  Failed = 'failed',
}

interface InitialState {
  data: IUser[] | null;
  loading: Statuses;
  error: string | Error;
}

const fetchData = async (
  url: string,
  method: string = 'GET'
): Promise<IUsersResponse> => {
  const response = await fetch(url, {
    method,
  });
  if (!response.ok) {
    throw new Error(`Can not fetch data from ${url}`);
  }
  return response.json();
};

const useFetch = async (
  url: string,
  method?: string
): Promise<InitialState> => {
  const data: InitialState = {
    data: [],
    loading: Statuses.Pending,
    error: '',
  };
  try {
    const response = await fetchData(url, method);
    return {
      ...data,
      data: response.users,
      loading: Statuses.Success,
      error: '',
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        ...data,
        data: null,
        loading: Statuses.Failed,
        error: error.message,
      };
    }
    return {
      ...data,
      data: null,
      loading: Statuses.Failed,
      error: new Error('Unknown error'),
    };
  }
};

useFetch(URL_SITE).then((data) => console.log(data));
