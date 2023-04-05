import { METHODS, URLs } from "../consts";
import { wrapper } from "../wrapper";

export const requestAllOperationsTypes = async () => {
  const url = URLs.opt.all;
  const { data } = await wrapper({
    method: METHODS.GET,
    url,
  });
  return data;
};

export const requestCreateOperationType = async (body) => {
  const url = URLs.opt.create;
  const { data } = await wrapper({
    method: METHODS.POST,
    url,
    data: body,
  });
  return data;
};

export const requestToDeleteOperationType = async (operationTypeId) => {
  const url = `${URLs.opt.delete}/${operationTypeId}`;
  const { data } = await wrapper({
    method: METHODS.DELETE,
    url,
  });
  return data;
};

export const requestOperationType = async (operationTypeId) => {
  const url = `${URLs.opt.one}/${operationTypeId}`;
  const { data } = await wrapper({
    method: METHODS.GET,
    url,
  });
  return data;
};

export const requestToChangeOperationType = async (body) => {
  const url = URLs.opt.update;
  const { data } = await wrapper({
    method: METHODS.PATCH,
    url,
    data: body,
  });
  return data;
};
