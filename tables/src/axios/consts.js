const base = process.env.REACT_APP_CHACKRA_API;

export const URLs = {
  flat: {
    all: `${base}/flat/getAll`,
    delete: `${base}/flat`,
    create: `${base}/flat`,
    update: `${base}/flat`,
    one: `${base}/flat`,
  },
  owner: {
    all: `${base}/owner`,
    delete: `${base}/owner`,
    create: `${base}/owner`,
    update: `${base}/owner`,
    one: `${base}/owner`,
  },
  worker: {
    all: `${base}/worker`,
    delete: `${base}/worker`,
    create: `${base}/worker`,
    update: `${base}/worker`,
    one: `${base}/worker`,
  },
  opt: {
    all: `${base}/opt`,
    delete: `${base}/opt`,
    create: `${base}/opt`,
    update: `${base}/opt`,
    one: `${base}/opt`,
  },
  op: {
    all: `${base}/op/getAll`,
    delete: `${base}/op`,
    create: `${base}/op`,
    update: `${base}/op`,
    one: `${base}/op`,
  },
};

export const METHODS = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
};
