import axios from "axios";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./../../config/firebaseConfig";

export const getAllUser = (data) => {
  return {
    type: "GET_ALL_USER",
    payload: data,
  };
};

export const getAllUserRej = (msg) => {
  return {
    type: "GET_ALL_USER_REJ",
    payload: msg,
  };
};

export const addUserRej = (msg) => {
  return {
    type: "ADD_USER_REJ",
    payload: msg,
  };
};

export const addNewUser = () => {
  return {
    type: "ADD_USER",
  };
};
export const singleUser = (data) => {
  return {
    type: "SINGLE_USER",
    payload: data,
  };
};

export const updateUser = () => {
  return {
    type: "UPDATE_USER",
  };
};

export const deleteUSer = (name) => {
  return {
    type: "DELETE_USER",
    payload: name,
  };
};
export const deleteUserRej = (msg) => {
  return {
    type: "DELETE_USER_REJ",
    payload: msg,
  };
};

export const loading = () => {
  return {
    type: "LOADING",
  };
};

export const getAllUserAsync = () => {
  return  async(dispatch) => {
    dispatch(loading());

    // axios
    //   .get("http://localhost:4141/users")
    //   .then((res) => {
    //     // console.log(res.data);
    //     dispatch(getAllUser(res.data));
    //   })
    //   .catch((err) => {
    //     // console.log(err)
    //     dispatch(getAllUserRej(err.message));
    //   });

    try {
        let result = [];
        let res = await getDocs(collection(db, 'users'))
        // console.log(res);
        res.forEach(rec => {
            result.push({id: rec.id, ...rec.data()});
        })
        dispatch(getAllUser(result))
    } catch (error) {
        dispatch(getAllUserRej(err.message));
    }
  };
};
export const createUserAsync = (data) => {
  return async (dispatch) => {
    // axios.post("http://localhost:4141/users", data)
    // .then((res)=> {
    //     // console.log(res.data);
    //     dispatch(addNewUser())
    // })
    // .catch((err)=> {
    //     // console.log(err)
    //     dispatch(addUserRej(err.message))
    // })

    try {
      // let res = await setDoc(doc(db, "users", "123"), data);
      let res = await addDoc(collection(db, "users"), data);
      // console.log(res);
      dispatch(addNewUser());
    } catch (error) {
        // console.log(err)
        dispatch(addUserRej(err.message))
    }
  };
};

export const deleteUserAsync = (id) => {
  return async (dispatch) => {
    // axios
    //   .delete(`http://localhost:4141/users/${id}`)
    //   .then((res) => {
    //     dispatch(getAllUserAsync());
    //   })
    //   .catch((err) => {
    //     dispatch(deleteUserRej(err.message));
    //   });

    try {
      await deleteDoc(doc(db, "users", `${id}`))
      dispatch(getAllUserAsync());
    } catch (error) {
      dispatch(deleteUserRej(err.message));
    }
  };
};

export const singleUserAsync = (id) => {
  return async(dispatch) => {
    // axios
    //   .get(`http://localhost:4141/users/${id}`)
    //   .then((res) => {
    //     dispatch(singleUser(res.data));
    //   })
    //   .catch((err) => {
    //     dispatch(deleteUserRej(err.message));
    //   });

   try {
    let record = await getDoc(doc(db, "users", `${id}`));
    let rec = record.data();
    rec.id = record.id;
    // console.log("Record => ",rec);
    dispatch(singleUser(rec));
   } catch (error) {
    dispatch(deleteUserRej(err.message));
   }
  };
};

export const updateUserAsync = (data) => {
  return async(dispatch) => {
    // axios
    //   .put(`http://localhost:4141/users/${data.id}`, data)
    //   .then((res) => {
    //     dispatch(updateUser());
    //   })
    //   .catch((err) => {
    //     dispatch(deleteUserRej(err.message));
    //   });
    try {
      await updateDoc(doc(db, "users", `${data.id}`), data)
      dispatch(updateUser());
    } catch (error) {
      dispatch(deleteUserRej(err.message));
    }
  };
};
