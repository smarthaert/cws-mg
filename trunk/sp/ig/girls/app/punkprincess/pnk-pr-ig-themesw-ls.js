/* jQuery plugin themeswitcher
---------------------------------------------------------------------*/
$.fn.themeswitcher = function(settings){
  var options = jQuery.extend({
    loadTheme: 'Redmond',
    initialText: 'Alterar o tema',
    width: 150,
    height: 200,
    buttonPreText: 'Tema: ',
    closeOnSelect: true,
    buttonHeight: 20,
    cookieName: 'jquery-ui-theme',
    cookieExpires: 365,
    onOpen: function(){},
    onClose: function(){},
    onSelect: function(){}
  }, settings);

  //markup 
    var button = $('<a href="#" class="jquery-ui-themeswitcher-trigger"><span class="jquery-ui-themeswitcher-icon"></span><span class="jquery-ui-themeswitcher-title">'+ options.initialText +'</span></a>');
    var switcherpane = $('<div class="jquery-ui-themeswitcher"><div id="themeGallery">  <ul>          <li><a href="http://madalin-games.googlecode.com/svn/trunk/css/themes/pink/jquery-ui-1.8.18.pink.css">      <img src="http://lh3.googleusercontent.com/-SXBwnPAZamA/TiQDrVI5GaI/AAAAAAAAOn4/pk8oH3jD0ws/s800/pink-theme-icon.png" alt="Pinkie" title="Pinkie" />      <span class="themeName">Pinkie</span>    </a></li>          <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/ui-lightness/jquery-ui.css">      <img src="http://lh5.ggpht.com/_dC0m17rI1Gc/TSTtcfMPPqI/AAAAAAAALRo/U8DMzM7WTB4/s800/theme_90_ui_light.gif" alt="UI Lightness" title="UI Lightness" />      <span class="themeName">UI lightness</span>    </a></li>                        <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/ui-darkness/jquery-ui.css">      <img src="http://lh4.ggpht.com/_dC0m17rI1Gc/TSTtcBw7sTI/AAAAAAAALRk/-1AiI4FHDlI/s800/theme_90_ui_dark.png" alt="UI Darkness" title="UI Darkness" />      <span class="themeName">UI darkness</span>    </a></li>                    <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/smoothness/jquery-ui.css">      <img src="http://lh3.ggpht.com/_dC0m17rI1Gc/TSTtWscUObI/AAAAAAAALRM/MqKAwlo2ANc/s800/theme_90_smoothness.png" alt="Smoothness" title="Smoothness" />      <span class="themeName">Smoothness</span>    </a></li>                      <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/start/jquery-ui.css">      <img src="http://lh4.ggpht.com/_dC0m17rI1Gc/TSTtWy4gNdI/AAAAAAAALRU/IPFWwSc-X1E/s800/theme_90_start_menu.png" alt="Start" title="Start" />      <span class="themeName">Start</span>    </a></li>                <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/redmond/jquery-ui.css">      <img src="http://lh5.ggpht.com/_dC0m17rI1Gc/TSTtcXWnnAI/AAAAAAAALRs/x8qV57aqk3Y/s800/theme_90_windoze.png" alt="Redmond" title="Redmond" />      <span class="themeName">Redmond</span>    </a></li>                  <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/sunny/jquery-ui.css">      <img src="http://lh6.ggpht.com/_dC0m17rI1Gc/TSTtW9QKKdI/AAAAAAAALRY/kB4N6vcg-tI/s800/theme_90_sunny.png" alt="Sunny" title="Sunny" />      <span class="themeName">Sunny</span>    </a></li>            <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/overcast/jquery-ui.css">      <img src="http://lh6.ggpht.com/_dC0m17rI1Gc/TSTtO8kCXsI/AAAAAAAALRE/95xld1MTZ9g/s800/theme_90_overcast.png" alt="Overcast" title="Overcast" />      <span class="themeName">Overcast</span>        </a></li>                    <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/le-frog/jquery-ui.css">      <img src="http://lh3.ggpht.com/_dC0m17rI1Gc/TSTtOsHk0yI/AAAAAAAALQ8/aJKSA_J4WUM/s800/theme_90_le_frog.png" alt="Le Frog" title="Le Frog" />      <span class="themeName">Le Frog</span>    </a></li>                    <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/flick/jquery-ui.css">      <img src="http://lh5.ggpht.com/_dC0m17rI1Gc/TSTtHxvBVcI/AAAAAAAALQw/3QusN0MsxdI/s800/theme_90_flick.png" alt="Flick" title="Flick" />      <span class="themeName">Flick</span>        </a></li>                <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/pepper-grinder/jquery-ui.css">      <img src="http://lh4.ggpht.com/_dC0m17rI1Gc/TSTtOwp4_CI/AAAAAAAALRI/95az3D-Cgms/s800/theme_90_pepper_grinder.png" alt="Pepper Grinder" title="Pepper Grinder" />      <span class="themeName">Pepper Grinder</span>        </a></li>                    <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/eggplant/jquery-ui.css">      <img src="http://lh5.ggpht.com/_dC0m17rI1Gc/TSTtH55ZwTI/AAAAAAAALQo/Hfd7jy1R60E/s800/theme_90_eggplant.png" alt="Eggplant" title="Eggplant" />      <span class="themeName">Eggplant</span>        </a></li>                  <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/dark-hive/jquery-ui.css">      <img src="http://lh6.ggpht.com/_dC0m17rI1Gc/TSTs9cJAViI/AAAAAAAALQg/3wUZZFxPGM8/s800/theme_90_dark_hive.png" alt="Dark Hive" title="Dark Hive" />      <span class="themeName">Dark Hive</span>    </a></li>                    <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/cupertino/jquery-ui.css">      <img src="http://lh3.ggpht.com/_dC0m17rI1Gc/TSTs9YANwCI/AAAAAAAALQc/Z9y2RI1j3zc/s800/theme_90_cupertino.png" alt="Cupertino" title="Cupertino" />      <span class="themeName">Cupertino</span>        </a></li>                <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/south-street/jquery-ui.css">      <img src="http://lh5.ggpht.com/_dC0m17rI1Gc/TSTtW6wlu0I/AAAAAAAALRQ/HtWLR7479L0/s800/theme_90_south_street.png" alt="South St" title="South St" />      <span class="themeName">South Street</span>        </a></li>              <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/blitzer/jquery-ui.css">      <img src="http://lh4.ggpht.com/_dC0m17rI1Gc/TSTs9TV-fcI/AAAAAAAALQY/QnPtS8NpOSI/s800/theme_90_blitzer.png" alt="Blitzer" title="Blitzer" />      <span class="themeName">Blitzer</span>    </a></li>            <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/humanity/jquery-ui.css">      <img src="http://lh4.ggpht.com/_dC0m17rI1Gc/TSTtOtW9UOI/AAAAAAAALQ4/7wAEjaHsxj8/s800/theme_90_humanity.png" alt="Humanity" title="Humanity" />      <span class="themeName">Humanity</span>    </a></li>              <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/hot-sneaks/jquery-ui.css">    <img src="http://lh5.ggpht.com/_dC0m17rI1Gc/TSTtIIeI_fI/AAAAAAAALQ0/ck0lK3rcn7Y/s800/theme_90_hot_sneaks.png" alt="Hot Sneaks" title="Hot Sneaks" />      <span class="themeName">Hot sneaks</span>    </a></li>              <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/excite-bike/jquery-ui.css">      <img src="http://lh6.ggpht.com/_dC0m17rI1Gc/TSTtHxPGD7I/AAAAAAAALQs/CR7k6CQTjq8/s800/theme_90_excite_bike.png" alt="Excite Bike" title="Excite Bike" />      <span class="themeName">Excite Bike</span>      </a></li>              <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/vader/jquery-ui.css">      <img src="http://lh4.ggpht.com/_dC0m17rI1Gc/TSTs9J-Ha2I/AAAAAAAALQQ/4rZYVWle2NY/s800/theme_90_black_matte.png" alt="Vader" title="Vader" />      <span class="themeName">Vader</span>      </a></li>                <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/dot-luv/jquery-ui.css">      <img src="http://lh4.ggpht.com/_dC0m17rI1Gc/TSTtH65IEhI/AAAAAAAALQk/pKl2GhY99-I/s800/theme_90_dot_luv.png" alt="Dot Luv" title="Dot Luv" />      <span class="themeName">Dot Luv</span>      </a></li>              <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/mint-choc/jquery-ui.css">      <img src="http://lh6.ggpht.com/_dC0m17rI1Gc/TSTtO_DiNWI/AAAAAAAALRA/gS6uP_C4LJo/s800/theme_90_mint_choco.png" alt="Mint Choc" title="Mint Choc" />      <span class="themeName">Mint Choc</span>    </a></li>          <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/black-tie/jquery-ui.css">      <img src="http://lh3.ggpht.com/_dC0m17rI1Gc/TSTs9Ovy6FI/AAAAAAAALQU/kjFbZy0WGJ4/s800/theme_90_black_tie.png" alt="Black Tie" title="Black Tie" />      <span class="themeName">Black Tie</span>    </a></li>          <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/trontastic/jquery-ui.css">      <img src="http://lh4.ggpht.com/_dC0m17rI1Gc/TSTtcHUDyBI/AAAAAAAALRg/nUdCnt1Qhq4/s800/theme_90_trontastic.png" alt="Trontastic" title="Trontastic" />      <span class="themeName">Trontastic</span>      </a></li>          <li><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/swanky-purse/jquery-ui.css">      <img src="http://lh6.ggpht.com/_dC0m17rI1Gc/TSTtWwte8II/AAAAAAAALRc/Uoav70WSzuI/s800/theme_90_swanky_purse.png" alt="Swanky Purse" title="Swanky Purse" />      <span class="themeName">Swanky Purse</span>      </a></li>          </ul></div></div>').find('div').removeAttr('id');
  //
  
  //button events
  button.click(
    function(){
      if(switcherpane.is(':visible')){ switcherpane.spHide(); }
      else{ switcherpane.spShow(); }
          return false;
    }
  );
  
  //menu events (mouseout didn't work...)
  switcherpane.hover(
    function(){},
    function(){if(switcherpane.is(':visible')){$(this).spHide();}}
  );

  //show/hide panel functions
  $.fn.spShow = function(){ $(this).css({top: button.offset().top + options.buttonHeight + 6, left: button.offset().left}).slideDown(50); button.css(button_active); options.onOpen(); }
  
  $.fn.spHide = function(){ $(this).slideUp(50, function(){options.onClose();}); button.css(button_default); }
  
    
  /* Theme Loading
  ---------------------------------------------------------------------*/

  switcherpane.find('a').click(function(){
    updateCSS( $(this).attr('href') );
    var themeName = $(this).find('span').text();
    button.find('.jquery-ui-themeswitcher-title').text( options.buttonPreText + themeName );
    
    var urlParams = gadgets.util.getUrlParameters();
    var gadgetId = urlParams['gadgetId'];
    
    localStorage.setItem("themeName-"+gadgetId, themeName);
	
    options.onSelect();
    if(options.closeOnSelect && switcherpane.is(':visible')){ switcherpane.spHide(); }
    return false;
  });
  
  function appendCss() {
    var curLinkURL = $('#app-css').attr('href');
      
    var appendCssLink = $('<link href="'+curLinkURL+'" type="text/css" rel="Stylesheet" class="appended-css" />');
    $("head").append(appendCssLink);
    
    if( $("link.appended-css").size() > 2){
        $("link.appended-css:first").remove();
    }
  }
  
  //function to append a new theme stylesheet with the new style changes
  function updateCSS(locStr){
    var cssLink = $('<link href="'+locStr+'" type="text/css" rel="Stylesheet" class="ui-theme" />');
    $("head").append(cssLink);
    
    
    if( $("link.ui-theme").size() > 2){
      $("link.ui-theme:first").remove();
    }
    appendCss();
  }  
  
  /* Inline CSS 
  ---------------------------------------------------------------------*/
  var button_default = {
    fontFamily: 'Trebuchet MS, Verdana, sans-serif',
    fontSize: '11px',
	background: 'transparent',
    border: '1px solid transparent',
    '-moz-border-radius': '6px',
    '-webkit-border-radius': '6px',
    textDecoration: 'none',
    padding: '5px 3px 3px 8px',
    width: options.width - 11,//minus must match left and right padding 
    display: 'block',
    height: options.buttonHeight,
    outline: '0'
  };
  var button_hover = {
    cursor: 'pointer'
  };
  var button_active = {
    background: '#000',
    border: '1px solid #ccc',
    borderBottom: 0,
    '-moz-border-radius-bottomleft': 0,
    '-webkit-border-bottom-left-radius': 0,
    '-moz-border-radius-bottomright': 0,
    '-webkit-border-bottom-right-radius': 0,
    outline: '0'
  };
  
  //button css
  button.css(button_default)
  .hover(
    function(){ 
      $(this).css(button_hover); 
    },
    function(){ 
     if( !switcherpane.is(':animated') && switcherpane.is(':hidden') ){  $(this).css(button_default);  }
    }  
  )
  .find('.jquery-ui-themeswitcher-icon').css({
    float: 'right',
    width: '16px',
    height: '16px',
    background: 'url(http://jqueryui.com/themeroller/themeswitchertool/images/icon_color_arrow.gif) 50% 50% no-repeat'
  });  
  //pane css
  switcherpane.css({
    position: 'absolute',
    float: 'left',
    fontFamily: 'Trebuchet MS, Verdana, sans-serif',
    fontSize: '12px',
    background: '#000',
    color: '#fff',
    padding: '8px 3px 3px',
    border: '1px solid #ccc',
    '-moz-border-radius-bottomleft': '6px',
    '-webkit-border-bottom-left-radius': '6px',
    '-moz-border-radius-bottomright': '6px',
    '-webkit-border-bottom-right-radius': '6px',
    borderTop: 0,
    zIndex: 999999,
    width: options.width-6//minus must match left and right padding
  })
  .find('ul').css({
    listStyle: 'none',
    margin: '0',
    padding: '0',
    overflow: 'auto',
    height: options.height
  }).end()
  .find('li').hover(
    function(){ 
      $(this).css({
        'borderColor':'#555',
        'background': 'url(http://jqueryui.com/themeroller/themeswitchertool/images/menuhoverbg.png) 50% 50% repeat-x',
        cursor: 'pointer'
      }); 
    },
    function(){ 
      $(this).css({
        'borderColor':'#111',
        'background': '#000',
        cursor: 'auto'
      }); 
    }
  ).css({
    width: options.width-30,
    height: '',
    padding: '2px',
    margin: '1px',
    border: '1px solid #111',
    '-moz-border-radius': '4px',
    clear: 'left',
    float: 'left'
  }).end()
  .find('a').css({
    color: '#aaa',
    textDecoration: 'none',
    float: 'left',
    width: '100%',
    outline: '0'
  }).end()
  .find('img').css({
    float: 'left',
    border: '1px solid #333',
    margin: '0 2px'
  }).end()
  .find('.themeName').css({
    float: 'left',
    margin: '3px 0'
  }).end();
  

  $(this).append(button);
  $('body').append(switcherpane);
  switcherpane.hide();
  
  var urlParams = gadgets.util.getUrlParameters();
  var gadgetId = urlParams['gadgetId'];
    
  if( localStorage.getItem("themeName-"+gadgetId) || options.loadTheme ){
    var themeName = localStorage.getItem("themeName-"+gadgetId) || options.loadTheme;
    switcherpane.find('a:contains('+ themeName +')').trigger('click');
  }
    
    


  return this;
};

