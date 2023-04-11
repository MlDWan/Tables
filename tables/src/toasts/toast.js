import { toast } from "react-toastify";

export const errorToast = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    limit: 3,
  });
};

export const successToast = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    limit: 3,
  });
};
