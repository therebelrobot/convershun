  console.log('ready!')
  $('#url').on('keyup', function () {
    console.log('changed!' + new Date().toString())
    var url = $(this).val()
    console.log(url)
    try {
      urlObject = URIUtil.parse(url)
      console.log(urlObject)
      var urlJSON = JSON.stringify(urlObject)
      $('.url-output').text('')
      _.forEach(urlObject, function(value, key){
        var thispush = $('<div>')
        thispush.append('<input class="form-control half" disabled value="'+key+'"/> : ')
        thispush.append('<input class="form-control half" disabled value="'+value+'"/>')
        $('.url-output').append(thispush)
      })
    } catch (e) {
      console.error(e)
      $('.url-output').text('invalid input')

    }
  })
