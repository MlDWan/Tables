const base = process.env.REACT_APP_CHACKRA_API;

export const URLs = {
  flat: {
    all: `${base}/flat/getAll`,
    changeStatus: `${base}/deal/changeStatus`,
    delete: `${base}/deal/delete`,
    create: `${base}/flat`,
    update: `${base}/deal/change`,
  },
};

export const METHODS = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
};
