import { METHODS, URLs } from "../consts";
import { wrapper } from "../wrapper";

export const requestAllWorkers = async () => {
  const url = URLs.worker.all;
  const { data } = await wrapper({
    method: METHODS.GET,
    url,
  });
  return data;
};

export const requestWorker = async (workerId) => {
  const url = `${URLs.worker.one}/${workerId}`;
  const { data } = await wrapper({
    method: METHODS.GET,
    url,
  });
  return data;
};

export const requestCreateWorker = async (body) => {
  const url = URLs.worker.create;
  const { data } = await wrapper({
    method: METHODS.POST,
    url,
    data: body,
  });
  return data;
};

export const requestToDeleteWorker = async (workerId) => {
  const url = `${URLs.worker.delete}/${workerId}`;
  const { data } = await wrapper({
    method: METHODS.DELETE,
    url,
  });
  return data;
};

export const requestToChangeWorker = async (body) => {
  const url = URLs.worker.update;
  const { data } = await wrapper({
    method: METHODS.PATCH,
    url,
    data: body,
  });
  return data;
};
