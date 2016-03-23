var solid = require('solid')

// Calls the init() function when the page loads
document.addEventListener('DOMContentLoaded', function () { init() })

function init () {
  document.getElementById('login').addEventListener('click', function () {
    login()
  })
}

function login () {
  var webId = document.getElementById('webIdUri').value
  if (webId) {
    solid.login(webId).then(function (loggedInWebId) {
      console.log('Welcome user: %s', loggedInWebId)
    }).catch(function (reason) {
      console.log('Unable to make a HEAD request for login: %o', reason)
    })
  }
}
