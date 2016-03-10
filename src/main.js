  console.log('ready!')
  $('#url').on('keyup', function () {
    console.log('changed!' + new Date().toString())
    $('.url-output').text('changed!' + new Date().toString())
  })
