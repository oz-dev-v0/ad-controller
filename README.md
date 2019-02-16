Ad Controller
=============
Ad Controller is simple use for publisher when controller your ad script.
Can use simply the probability and mobile detection.

Sample
----
```javascript
// When use something with 20% probability.
if( AdController().probability(20) ) {
    // something
}

// When use something simple mobile detection.
if( AdController().isMobile() ) {
    // something
}

// Get URL query string parameters.
// ex) example.com?utm_source=google&utm_medium=cpc
var queryString = AdController().getParams();
if ( queryString ) {
    var utm_source = queryString.utm_source;
    var utm_medium = queryString.utm_medium;
    // something
}

// Cache
var c = AdController().cache;
c.setItem("test-key-1", "test-value-1"); // Set cookie & localstorage
c.setCookie("test-key-2", "test-value-2"); // Set cookie
c.setLocalStorage("test-key-3", "test-value-3"); // Set localstorage

c.getItem("test-key-1"); // Get cookie & localstorage
c.getCookie("test-key-2"); // Get cookie
c.getLocalStorage("test-key-3"); // Get localstorage

c.removeItem("test-key-1"); // Remove cookie & localstorage
c.removeCookie("test-key-2"); // Remove cookie
c.removeLocalStorage("test-key-3"); // Remove localstorage

// Frequency
if ( AdController().frequency('test-ad-1', 3, 60) ) {
    // Show 'test-ad-1' 3 times in 60 sec.
}

// Timetable
// Setting the timetable in 1-hour increments.
if ( AdController().timetable([0, 0, 0, 0, 0, 1<<22 | 1<<23, 0, 0]) ) {
    // On Friday at 22h, 23h
}

if ( AdController().timetable(16777215, 0, 0, 0, 0, 0, 16777215) ) {
    // On Sunday and Saturday at every time.
}
```

Todo
----
- Unit test. (JEST)
- Plugin for "vue.js" and "react.js".
- Adblock detection.