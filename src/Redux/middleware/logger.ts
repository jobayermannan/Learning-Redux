const Logger = (state) => (next) => (action) => {
  console.log("current STate =>", state.getState());
  console.log("ACTION  =>", action);
  next(action);
  console.log("Next  STate =>", state.getState());
};

export default Logger;
