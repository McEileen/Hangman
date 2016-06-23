/* eslint-disable */

$(document).ready(init);

function init() {
  $('#new').click(newGame);
}

function newGame(){
  $('#firstLetter').text('');
  $('#secondLetter').text('');
  $('#thirdLetter').text('');
  $('#fourthLetter').text('');
}

function updateFirstLetter(game){
  const firstLetter = $('#firstLetter').val();
  $.ajax({
    url: '/games',
    method: 'post',
    dataType: 'json',
    data: { firstLetter },
    success: function(rsp){
      update(rsp);
    }
  });
}
