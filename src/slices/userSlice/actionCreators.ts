import axios from "axios";
import { AppDispatch } from "../../app/store";
import { IUser } from "../../interfaces/IUser";
import { userSlice } from "./userSlice";


export const fetchUser = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.postFetching())
    const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch(userSlice.actions.postFetchingSucces(response.data))
  } catch (e) {
    dispatch(userSlice.actions.postFetchingError((e as Error).message))
  }
}
