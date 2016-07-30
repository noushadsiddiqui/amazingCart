$(function(){
(function(d, m){var s, h;
  s = document.createElement("script");
  s.type = "text/javascript";
  s.async=true;
  s.src="https://apps.applozic.com/sidebox.app";
  h=document.getElementsByTagName('head')[0];
  h.appendChild(s);
  window.applozic=m;
  m.init=function(t){m._globals=t;}})(document, window.applozic || {}  );

 window.applozic.init({appId: 'a66494a8ebe79ccedf010a1eb',     // obtained from Step 1 (required)
                       userId: 'srjkhanduri@gmail.com',             // loggedIn user Id (required)
                       userName: 'Suraj',  // loggedIn user name (optional)
                       imageLink : 'https://yt3.ggpht.com/-VdxQEXkXEWQ/AAAAAAAAAAI/AAAAAAAAAAA/wamkYnqwrqY/s100-c-k-no-rj-c0xffffff/photo.jpg',        // loggedIn user image url (optional)
                       email: 'srjkhanduri@gmail.com',      // optional
                       // contactNumber: 'CONTACT_NUMBER_WITH_INTERNATIONAL_CODE eg: +919535008745', //optional
                       // accessToken: 'PUT_USER_AUTHENTICATION_TOKEN_HERE',   // optional
                       // authenticationTypeId : 'PUT_AUTHENTICATION_TYPE_ID_HERE',
                                                       // 1 for password verification from Applozic server  (optional)
                                                       // 0 for access Token verification from client server (optional)
                       desktopNotification: true,           // optional
                       // notificationIconLink: 'PUT_LOGO_IMAGE_LINK_HERE',    // required for desktop notification (optional)
                       // maxGroupSize: 'MAX NUMBER OF USERS ALLOWED PER GROUP WHILE CREATING GROUP', // max limit is 100 (optional)
                       contactDisplayName: function(userId) {},   //Function should return USER_DISPLAY_NAME by taking USERID as input parameter (optional).
                       contactDisplayImage: function(userId) {},  // Function should return USER_IMAGE_URL by taking USERID as a input parameter (optional).
                       onInit : function(response) {}  // Callback function which gets triggered on plugin initialized. You can write your own logic inside this function to execute on plugin initialization (optional).

                       });
});