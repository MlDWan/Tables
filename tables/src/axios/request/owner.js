import { METHODS, URLs } from "../consts";
import { wrapper } from "../wrapper";

export const requestAllOwners = async () => {
  const url = URLs.owner.all;
  const { data } = await wrapper({
    method: METHODS.GET,
    url,
  });
  return data;
};

export const requestCreateOwner = async (body) => {
  const url = URLs.owner.create;
  const { data } = await wrapper({
    method: METHODS.POST,
    url,
    data: body,
  });
  return data;
};

export const requestToDeleteOwner = async (ownerId) => {
  const url = `${URLs.owner.delete}/${ownerId}`;
  const { data } = await wrapper({
    method: METHODS.DELETE,
    url,
  });
  return data;
};

export const requestToChangeOwner = async (body) => {
  const url = URLs.owner.update;
  const { data } = await wrapper({
    method: METHODS.PATCH,
    url,
    data: body,
  });
  return data;
};

export const requestOwner = async (id) => {
  const url = `${URLs.owner.one}/${id}`;
  const { data } = await wrapper({
    method: METHODS.GET,
    url,
  });
  return data;
};
