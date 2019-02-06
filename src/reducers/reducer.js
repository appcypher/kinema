const initial = {
  message: '', values: [],
};

export default (state = initial, { type, payload }) => {
  switch (type) {
    case 'VALUES_GET_SUCCESSFUL': {
      const { message, values } = payload;
      return {
        ...state, values,
      };
    }
    default: return state;
  }
};
