ApiUtil = {
  fetchBenches: function () {
    $.ajax({
      url: 'api/benches',
      type: 'get',
      success: function (benches) {
        ApiActions.receiveBenches(benches);
      }
    });
  }
};
