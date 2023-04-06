import { METHODS, URLs } from "../consts";
import { wrapper } from "../wrapper";

export const requestAllFlats = async (body) => {
  const url = URLs.flat.all;

  const { data } = await wrapper({
    method: METHODS.POST,
    url,
    data: body,
  });
  return data;
};
export const requestFlat = async (id) => {
  const url = `${URLs.flat.one}/${id}`;
  const { data } = await wrapper({
    method: METHODS.GET,
    url,
  });
  return data;
};

export const requestCreateFlat = async (body) => {
  const url = URLs.flat.create;
  const { data } = await wrapper({
    method: METHODS.POST,
    url,
    data: body,
  });
  return data;
};

export const requestToDeleteFlat = async (Id) => {
  const url = `${URLs.flat.delete}/${Id}`;
  const { data } = await wrapper({
    method: METHODS.DELETE,
    url,
  });
  return data;
};

export const requestToChangeFlat = async (body) => {
  const url = URLs.flat.update;
  const { data } = await wrapper({
    method: METHODS.PATCH,
    url,
    data: body,
  });
  return data;
};
