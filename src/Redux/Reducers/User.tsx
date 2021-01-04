import { IAction, IMockUserPayload, MOCK_USER } from "../actionTypes";

interface IUserState {
  userId: string,
  userAlias: string
}

const initialState: IUserState = {
  userId: "",
  userAlias: ""
}

function UserReducer(state = initialState, action: IAction): IUserState {
  switch (action.type) {
    case MOCK_USER: {
      const userId: string = (action.payload as IMockUserPayload).userId;
      const userAlias: string = (action.payload as IMockUserPayload).userAlias;
      return {
        userAlias: userAlias,
        userId: userId
      };
    }
    default:
      return state;
  }
}

export default UserReducer;
