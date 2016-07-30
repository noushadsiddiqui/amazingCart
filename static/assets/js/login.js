function onSuccess(googleUser) {
	var profile = googleUser.getBasicProfile();
	console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	console.log('Name: ' + profile.getName());
	console.log('Image URL: ' + profile.getImageUrl());
	console.log('Email: ' + profile.getEmail());

	// send user's ID token to backend server
	var id_token = googleUser.getAuthResponse().id_token;
	$("#token").val(profile.getEmail());
	$("#google_login").submit();
return false;
  }
  function onFailure(error) {
    console.log(error);
  }
  function renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 200,
      'height': 48,
      'longtitle': true,
      'theme': 'light',
      'onsuccess': onSuccess,
      'onfailure': onFailure
    });
  }
