$(document).ready(function() {

  function createFoodInfoBar() {

  }

  function getFoodInfo() {
    $.ajax({
      method: 'GET',
      url: 'foods.json',
      dataType: 'json',
      success: (data) => {
        console.log(data);
      },
      error: function() {
        console.log('error');
      }
    })
  }

  getFoodInfo();
  console.log("hello");

})
