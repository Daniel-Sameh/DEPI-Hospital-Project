//  $(document).ready(()=>{
//      $("#navIcon").click(()=>{
//          $("#contacts").toggle(500);
//         $("#links").toggle(500);
//      });
// });

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
