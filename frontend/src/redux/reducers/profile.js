import { getAuth } from "../../utilities/helper";
import * as types from "../constants";

const initialState = {
  personalProfile: {},
  faculty: {},
  grade: {},
  error: {},
  loading: false,
  schedule: [],
  user: getAuth(),
  avatarUrl: "",
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case types.GET_PROFILE_API:
    case types.GET_AVATAR:
    case types.UPDATE_AVATAR:
    case types.GET_FACULTIES_API:
    case types.GET_GRADE_API:
    case types.GET_MY_SCHEDULE_API:
    case types.POST_UPDATE_MY_PROFILE_API:
      return {
        ...state,
        loading: true,
        error: {},
      };
    case types.GET_PROFILE_API_SUCCEED:
      return {
        ...state,
        personalProfile: actions.payload,
        loading: false,
      };
    case types.GET_PROFILE_API_FAIL:
    case types.GET_AVATAR_FAIL:
    case types.UPDATE_AVATAR_SUCCEED:
    case types.UPDATE_AVATAR_FAIL:
    case types.GET_FACULATIE_API_FAIL:
    case types.GET_GRADE_API_FAIL:
    case types.GET_MY_SCHEDULE_API_FAIL:
    case types.POST_UPDATE_MY_PROFILE_API_FAIL:
      return {
        ...state,
        error: actions.payload,
        loading: false,
      };
    case types.GET_FACULATIES_API_SUCCEED:
      return {
        ...state,
        faculty: actions.payload,
        loading: false,
      };
    case types.GET_AVATAR_SUCCEED:
      return {
        ...state,
        avatarUrl: actions.payload,
        loading: false,
      };
    case types.GET_GRADE_API_SUCCEED:
      return {
        ...state,
        grade: actions.payload,
        loading: false,
      };
    case types.GET_MY_SCHEDULE_API_SUCCEED:
      return {
        ...state,
        schedule: actions.payload,
        loading: false,
      };
    case types.FETCH_NAV_USER: {
      return { ...state, user: actions.user };
    }
    case types.FETCH_NAV_USER_AVATAR: {
      return { ...state, avatarUrl: actions.user };
    }
    case types.POST_UPDATE_MY_PROFILE_API_SUCCEED:
      return {
        ...state,
        error: actions.payload,
        loading: false,
      };
    default:
      return state;
  }
}
