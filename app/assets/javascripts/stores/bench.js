<<<<<<< HEAD
=======
/* global EventEmitter, AppDispatcher, BenchConstants, BenchStore */

>>>>>>> 78378beb0b0fb842a069bf038ea60d53fc094357
(function(root){
  var _benches = [], CHANGE_EVENT = 'change';

  var resetBenches = function (benches) {
    _benches = benches;
  };

<<<<<<< HEAD
=======
  var addBench = function (bench) {
    _benches.push(bench);
  };

>>>>>>> 78378beb0b0fb842a069bf038ea60d53fc094357
  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _benches.slice(0);
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case BenchConstants.BENCHES_RECEIVED:
          resetBenches(payload.benches);
          BenchStore.emit(CHANGE_EVENT);
          break;
        case BenchConstants.BENCHES_CHANGED:
          resetBenches(payload.benches);
          BenchStore.emit(CHANGE_EVENT);
          break;
<<<<<<< HEAD
=======
        case BenchConstants.BENCH_ADDED:
          addBench(payload.bench);
          BenchStore.emit(CHANGE_EVENT);
          break;
>>>>>>> 78378beb0b0fb842a069bf038ea60d53fc094357
      }
    })
  });

})(this);
