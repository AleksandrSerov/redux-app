import _ from "lodash";
import * as types from "../../actions";
const initialState = {
  topicsByUrl: undefined,
  selectedTopicUrls: []
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.TOPICS_FETCHED:
      return { ...state, topicsByUrl: action.topicsByUrl };
    default:
      return state;
  }
}

//селекторы
export const getTopicsByUrl = state => {
  console.log(state);
  return state.topics.topicsByUrl;
};

export const getTopicsUrlArray = state => {
  console.log(state);

  return _.keys(state.topics.topicsByUrl);
};
