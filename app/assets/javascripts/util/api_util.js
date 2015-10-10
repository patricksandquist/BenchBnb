ApiUtil = {
  fetchBenches: function (bounds) {
    $.ajax({
      url: 'api/benches',
      type: 'get',
      data: {bounds: bounds},
      success: function (benches) {
        ApiActions.receiveBenches(benches);
      }
    });
  }
};
