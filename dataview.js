(function () {

  var nav = document.getElementById( "nav" );

  var activeTab = null;



  function selectTab( e ) {

    if( e.target === activeTab ) {
      activeTab = null;
      e.target.classList.remove( "selected" );
    } else {
      if( activeTab !== null ) activeTab.classList.remove( "selected" );
      activeTab = e.target;
      activeTab.classList.add( "selected" );
    }
  }

  for( var i = 0; i < data[ "color-sets" ].size; i++ ) {

    var navElem = document.createElement( "button" );
    navElem.className = "nav-element";
    navElem.innerHTML = i + 1;

    navElem.addEventListener( "click", selectTab );

    nav.appendChild( navElem );

  }
})();