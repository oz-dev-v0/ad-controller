Ad Controller
=============
Ad Controller is simple use for publisher when controller your ad script.
Can use simply the probability and mobile detection.

Sample
----
```javascript
// When use something with 20% probability.
if( Adcontroller().probability(20) ) {
    // something
}

// When use something simple mobile detection.
if( Adcontroller().isMobile() ) {
    // something
}
```

Todo
----
- Frequency capping.
- Query string detection.
- Adblock detection.
- Data setter and getter with cookie and localstroage.