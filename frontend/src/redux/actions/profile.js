import * as types from "../constants";
import store from "../store";

const REACT_APP_BASE_API = process.env.REACT_APP_BASE_URL;

export async function getAvatar(resolve = () => {}) {
  store.dispatch({
    type: types.GET_AVATAR,
  });
  try {
    const response = await fetch(
      `${REACT_APP_BASE_API}account/change-avatar/`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    resolve(data);
    store.dispatch({
      payload: data,
      type: types.GET_AVATAR_SUCCEED,
    });
  } catch (error) {
    store.dispatch({
      payload: error,
      type: types.GET_AVATAR_FAIL,
    });
  }
}

export async function changeAvatar(file, resolve = () => {}) {
  store.dispatch({
    type: types.UPDATE_AVATAR,
  });
  try {
    const response = await fetch(
      `${REACT_APP_BASE_API}account/change-avatar/`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
        body: file,
      }
    );
    const data = await response.json();
    resolve(data);
    store.dispatch({
      payload: data,
      type: types.UPDATE_AVATAR_SUCCEED,
    });
  } catch (error) {
    store.dispatch({
      payload: error,
      type: types.UPDATE_AVATAR_FAIL,
    });
  }
}

export async function profile(resolve = () => {}) {
  store.dispatch({
    type: types.GET_PROFILE_API,
  });
  try {
    const response = await fetch(
      `${REACT_APP_BASE_API}account/get-user-profile/`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    resolve(data);
    store.dispatch({
      payload: data,
      type: types.GET_PROFILE_API_SUCCEED,
    });
  } catch (error) {
    store.dispatch({
      payload: error,
      type: types.GET_PROFILE_API_FAIL,
    });
  }
}

export async function faculty(resolve = () => {}) {
  store.dispatch({
    type: types.GET_FACULTIES_API,
  });
  try {
    const response = await fetch(`${REACT_APP_BASE_API}faculty/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    resolve(data);
    store.dispatch({
      payload: data,
      type: types.GET_FACULATIES_API_SUCCEED,
    });
  } catch (error) {
    store.dispatch({
      payload: error,
      type: types.GET_FACULATIE_API_FAIL,
    });
  }
}
export async function grade(resolve = () => {}) {
  store.dispatch({
    type: types.GET_GRADE_API,
  });
  try {
    const response = await fetch(`${REACT_APP_BASE_API}class/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    resolve(data);
    store.dispatch({
      payload: data,
      type: types.GET_GRADE_API_SUCCEED,
    });
  } catch (error) {
    store.dispatch({
      payload: error,
      type: types.GET_GRADE_API_FAIL,
    });
  }
}

export async function getSchedule(params, resolve = () => {}) {
  store.dispatch({
    type: types.GET_MY_SCHEDULE_API,
  });
  try {
    const response = await fetch(
      `${REACT_APP_BASE_API}daily-schedules/?${params}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    resolve(data);
    store.dispatch({
      payload: data,
      type: types.GET_MY_SCHEDULE_API_SUCCEED,
    });
  } catch (error) {
    store.dispatch({
      payload: error,
      type: types.GET_MY_SCHEDULE_API_FAIL,
    });
  }
}

export async function updateProfile(profile, resolve = () => {}) {
  store.dispatch({
    type: types.POST_UPDATE_MY_PROFILE_API,
  });
  try {
    const response = await fetch(
      `${REACT_APP_BASE_API}account/update-user-profile/`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(profile),
      }
    );
    const data = await response.json();
    resolve(data);
    store.dispatch({
      payload: data,
      type: types.POST_UPDATE_MY_PROFILE_API_SUCCEED,
    });
  } catch (error) {
    store.dispatch({
      payload: error,
      type: types.POST_UPDATE_MY_PROFILE_API_FAIL,
    });
  }
}

export const actFetchUserNavigation = (user) => {
  return {
    type: types.FETCH_NAV_USER,
    user,
  };
};

export const actFetchAvatarUserNavigation = (user) => {
  return {
    type: types.FETCH_NAV_USER_AVATAR,
    user,
  };
};
