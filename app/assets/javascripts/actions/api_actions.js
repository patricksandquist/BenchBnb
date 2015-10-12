/* global AppDispatcher, BenchConstants */

window.ApiActions = {
  receiveBenches: function (benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  receiveBench: function (bench) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCH_ADDED,
      bench: bench
    });
  }
};
