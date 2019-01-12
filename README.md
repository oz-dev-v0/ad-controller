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
    // somthing
}
```

Todo
----
- Frequency capping.
- Adblock detection.
- Data setter and getter with cookie and localstroage.
