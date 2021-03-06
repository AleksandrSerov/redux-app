import _ from "lodash";
import * as types from "../../actions";
import redditService from "../../../services/redditService";

export const fetchTopics = () => {
  return async (dispatch, getState) => {
    try {
      const subredditArray = await redditService.getDefaultSubreddits();
      const topicsByUrl = _.keyBy(subredditArray, subreddit => subreddit.url);
      dispatch({ type: types.TOPICS_FETCHED, topicsByUrl });
    } catch (error) {
      console.log(error);
    }
  };
};
