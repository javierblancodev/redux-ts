interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: RepositoriesState, action: any) => {
  switch (action.type) {
    // send new request :
    case 'search_repositories':
      // set loading state on, and reset error and data from previous request
      return { loading: true, error: null, data: [] };
    // get succcesful response from npm API
    case 'search_repositories_success':
      // set loading state off, and set error to null and data to info about npm repos
      return { loading: false, error: null, data: action.payload };
    // get error response from npm API
    case 'search_repositories_error':
      // set loading state off, and set error to error message from npm API and reset data
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
