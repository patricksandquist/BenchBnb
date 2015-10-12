/* global AppDispatcher, BenchConstants */

window.FilterParamsActions = {
  receiveBounds: function (bounds) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BOUNDARIES_CHANGED,
      bounds: bounds
    });
  },

  receiveSeatingRange: function (min, max) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.RANGE_CHANGED,
      minSeating: min,
      maxSeating: max
    });
  }
};
