/* global ApiActions */

window.ApiUtil = {
  fetchBenches: function (bounds) {
    $.ajax({
      url: 'api/benches',
      type: 'get',
      data: {bounds: bounds},
      success: function (benches) {
        ApiActions.receiveBenches(benches);
      }
    });
  },

  createBench: function (bench) {
    $.ajax({
      url: 'api/benches',
      type: 'post',
      data: {bench: bench},
      success: function (bench) {
        ApiActions.receiveBench(bench);
      }
    });
  }
};
