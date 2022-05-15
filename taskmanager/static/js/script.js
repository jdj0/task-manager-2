document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialization
    let sidenav = document.querySelectorAll('.sidenav');
     M.Sidenav.init(sidenav);

     // datepicker initialization    
     let datepicker = document.querySelectorAll('.datepicker');
     M.Datepicker.init(datepicker, {
         format: "dd mmmm, yyyy"
     });
     
     // select initialization
    var selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

});