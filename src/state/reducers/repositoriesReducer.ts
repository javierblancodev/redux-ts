import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    // send new request :
    case ActionType.SEARCH_REPOSITORIES:
      // set loading state on, and reset error and data from previous request
      return { loading: true, error: null, data: [] };
    // get succcesful response from npm API
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      // set loading state off, and set error to null and data to info about npm repos
      return { loading: false, error: null, data: action.payload };
    // get error response from npm API
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      // set loading state off, and set error to error message from npm API and reset data
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
