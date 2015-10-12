/* global FilterParamsStore, EventEmitter, AppDispatcher, BenchConstants */

(function(root){
  var filterParams = {bounds: "bounds", minSeating: "min", maxSeating: "max"};
  var CHANGE_EVENT = "change";

  var resetBounds = function (bounds) {
    filterParams.bounds = bounds;
  };

  var resetSeatingRange = function (min, max) {
    filterParams.minSeating = min;
    filterParams.maxSeating = max;
  };

  root.FilterParamsStore = $.extend({}, EventEmitter.prototype, {
    getParams: function () {
      console.log("Getting params!");
      return [
        filterParams.bounds,
        filterParams.minSeating,
        filterParams.maxSeating
      ];
    },

    addChangeListener: function (callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case BenchConstants.BOUNDARIES_CHANGED:
          resetBounds(payload.bounds);
          FilterParamsStore.emit(CHANGE_EVENT);
          break;
        case BenchConstants.RANGE_CHANGED:
          resetSeatingRange(payload.minSeating, payload.maxSeating);
          FilterParamsStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
