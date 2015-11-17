<<<<<<< HEAD
ApiUtil = {
  fetchBenches: function (bounds) {
    $.ajax({
      url: 'api/benches',
      type: 'get',
      data: {bounds: bounds},
=======
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
>>>>>>> 78378beb0b0fb842a069bf038ea60d53fc094357
      success: function (benches) {
        ApiActions.receiveBenches(benches);
      }
    });
<<<<<<< HEAD
=======
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
>>>>>>> 78378beb0b0fb842a069bf038ea60d53fc094357
  }
};
