$(document).ready(function() {

  function createFoodInfoBar(food) {
    let li = $('<li>');
    $('#infobars').append(li);
    let header = $('<div>').addClass("collapsible-header").text(food.name);
    li.append(header);
    let body = $('<div>').addClass("collapsible-body");
    li.append(body);
    for (let dataType in food) {
      if (dataType === "id" || dataType === "name") {
        continue;
      }
      if (dataType === "options") {
        console.log(dataType);
      }
      body.append($('<span>').text(dataType + ': ' + food[dataType]));
      body.append($('<br>'));
    }
  }

  function populateInfoBars() {
    $.ajax({
      method: 'GET',
      url: 'foods.json',
      dataType: 'json',
      success: (data) => {
        for (let food of data) {
          createFoodInfoBar(food);
        }
      },
      error: function() {
        console.log('error');
      }
    })
  }

  populateInfoBars();

})
