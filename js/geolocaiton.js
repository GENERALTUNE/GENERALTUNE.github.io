(function() {
      navigator.geolocation.getCurrentPosition(
    function(position) {
        alert("your position is: "
                + position.coords.latitude + ", "
                + position.coords.longitude);
    }
    ,
    function(errorObject) {
        alert("Error obtaining position");
    }
    ,
    {
      enableHighAccuracy : true,
      timeout    : 3000,
      maximumAge : 60000
    }
);

       
})()
