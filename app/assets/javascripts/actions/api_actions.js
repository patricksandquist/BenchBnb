<<<<<<< HEAD
ApiActions = {
=======
/* global AppDispatcher, BenchConstants */

window.ApiActions = {
>>>>>>> 78378beb0b0fb842a069bf038ea60d53fc094357
  receiveBenches: function (benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
<<<<<<< HEAD
=======
  },

  receiveBench: function (bench) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCH_ADDED,
      bench: bench
    });
>>>>>>> 78378beb0b0fb842a069bf038ea60d53fc094357
  }
};
