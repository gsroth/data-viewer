(function () {

  var nav = document.getElementById( "nav" );

  var activeTab = null;

  var dataPopulated = {};

  function showTabData( elem, old ) {

    if( old !== null ) {
      var shown = document.getElementById( "color-set-" + old.innerText );
      shown.style.display = "none";
    }

    if( elem === null ) return;

    var num = elem.innerText;
    
    if( dataPopulated[num] ) {
      var hidden = document.getElementById( "color-set-" + num );
      hidden.style.display = "block";
      return;
    }

    var box = document.createElement( "div" );
    box.className = "orderings-container";
    box.id = "color-set-" + num;

    var dataToShow = data.responses[ "set-" + num ];

    for( var key in dataToShow ) {
      var ordering = document.createElement( "div" );
      ordering.className = "color-ordering";

      var set = dataToShow[ key ].colors;

      for( var i = 0; i < set.length; i++ ) {

        var block = document.createElement( "div" );
        block.className = "block";
        block.style.backgroundColor = set[i];

        ordering.appendChild( block );

      }

      box.appendChild( ordering );

    }

    var container = document.getElementById( "colors" );
    container.appendChild( box );

    dataPopulated[num] = true;

  }

  function selectTab( e ) {

    var old = activeTab;

    if( e.target === activeTab ) {
      activeTab = null;
      e.target.classList.remove( "selected" );
      showTabData( null, old );
    } else {
      if( activeTab !== null ) activeTab.classList.remove( "selected" );
      activeTab = e.target;
      activeTab.classList.add( "selected" );
      showTabData( e.target, old );
    }
  }

  function buildHeader() {
    for( var i = 0; i < data[ "color-sets" ].size; i++ ) {

      var navElem = document.createElement( "button" );
      navElem.className = "nav-element";
      navElem.innerHTML = i + 1;

      navElem.addEventListener( "click", selectTab );

      nav.appendChild( navElem );

    }
  }

  buildHeader();


})();