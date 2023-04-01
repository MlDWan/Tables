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

export const requestCreateFlat = async (body) => {
  const url = URLs.flat.create;
  const { data } = await wrapper({
    method: METHODS.POST,
    url,
    data: body,
  });
  // console.log(123, body);
  return data;
};

export const requestToDeleteFlat = async (userId) => {
  const url = `${URLs.flat.delete}/${userId}`;
  const { data } = await wrapper({
    method: METHODS.DELETE,
    url,
  });
  return data;
}

// export const requestToChangeStatus = async (userId, active) => {
//   const url = `${URLs.matter.changeStatus}/${userId}`;
//   const { data } = await axiosWrapper<null, { active: boolean }, null>({
//     method: METHODS.PATCH,
//     url,
//     query: {
//       active
//     }
//   });
//   return data;
// }


// export const requestToCreate = async (matter: MatterCreation) => {
//   const url = URLs.matter.create;
//   const { data } = await axiosWrapper<MatterCreation, null, null>({
//     method: METHODS.POST,
//     url,
//     data: matter
//   });
//   return data;
// }

// export const requestToChange = async (matter: MatterChanging) => {
//   const url = URLs.matter.update;
//   const { data } = await axiosWrapper<MatterChanging, null, null>({
//     method: METHODS.PUT,
//     url,
//     data: matter
//   });
//   return data;
// }
