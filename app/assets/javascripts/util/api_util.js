/* global ApiActions, FilterParamsStore */

window.ApiUtil = {
  fetchBenches: function () {
    var paramsArray = FilterParamsStore.getParams();
    $.ajax({
      url: 'api/benches',
      type: 'get',
      data: {
        bounds: paramsArray[0],
        minSeats: paramsArray[1],
        maxSeats: paramsArray[2]
      },
      success: function (benches) {
        ApiActions.receiveBenches(benches);
      }
    });
  },

  fetchBench: function (id) {
    $.ajax({
      url: 'api/benches/' + id,
      type: 'get',
      data: { id: id },
      success: function (bench) {
        ApiActions.receiveBench(bench);
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
