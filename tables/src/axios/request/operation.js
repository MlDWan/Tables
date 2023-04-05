import { METHODS, URLs } from "../consts";
import { wrapper } from "../wrapper";

export const requestAllOperations = async (body) => {
  const url = URLs.op.all;
  const { data } = await wrapper({
    method: METHODS.POST,
    url,
    data: body,
  });
  return data;
};

export const requestCreateOperation = async (body) => {
  const url = URLs.op.create;
  const { data } = await wrapper({
    method: METHODS.POST,
    url,
    data: body,
  });
  return data;
};

export const requestToDeleteOperation = async (operationId) => {
  const url = `${URLs.op.delete}/${operationId}`;
  const { data } = await wrapper({
    method: METHODS.DELETE,
    url,
  });
  return data;
};

export const requestOperation = async (operationId) => {
  const url = `${URLs.op.one}/${operationId}`;
  const { data } = await wrapper({
    method: METHODS.GET,
    url,
  });
  return data;
};

export const requestToChangeOperation = async (body) => {
  const url = URLs.op.update;
  const { data } = await wrapper({
    method: METHODS.PATCH,
    url,
    data: body,
  });
  return data;
};
