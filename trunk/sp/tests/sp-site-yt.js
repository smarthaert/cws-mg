

//    functions


    var idspec_string = opensocial.IdSpec.PersonId.VIEWER;
    var idspec_object = opensocial.newIdSpec( { 'userId': 'VIEWER' } );
    var page = gadgets.views.getParams()["page"];
    var title, description, gameSource;
    var checkbox01State, checkbox02State, checkbox03State, checkbox04State;
    
    var urlParams = gadgets.util.getUrlParameters();
    var language = urlParams['lang'];
    var appParent = urlParams['parent'];
    
    var __MSG_sendmessage__ , __MSG_messageTitle__ , __MSG_messageBody__;
    var __LANG_initialText__ , __LANG_buttonPreText__ , __LANG_settings__;

    if (language === 'pt') {
        __LANG_initialText__ = "Alterar o Tema";
        __LANG_buttonPreText__ = "Tema: ";
        __LANG_settings__ = " configurações";
    } else {
        __LANG_initialText__ = "Switch Theme";
        __LANG_buttonPreText__ = "Theme: ";
        __LANG_settings__ = " settings";
    }

    
    function updateSettings(){
        var checkbox01State, checkbox02State, checkbox03State;
        if ( $('#checkbox-01').is(':checked') ) {
            checkbox01State = "is_checked";
        } else if ( !$('#checkbox-01').is(':checked') ) {
            checkbox01State = "not_checked";
        }
        if ( $('#checkbox-02').is(':checked') ) {
            checkbox02State = "is_checked";
        } else if ( !$('#checkbox-02').is(':checked') ) {
            checkbox02State = "not_checked";
        }
        if ( $('#checkbox-03').is(':checked') ) {
            checkbox03State = "is_checked";
        } else if ( !$('#checkbox-03').is(':checked') ) {
            checkbox03State = "not_checked";
        }
    
        var req = opensocial.newDataRequest();
        req.add(req.newUpdatePersonAppDataRequest(idspec_string, "checkbox01", checkbox01State));
        req.add(req.newUpdatePersonAppDataRequest(idspec_string, "checkbox02", checkbox02State));
        req.add(req.newUpdatePersonAppDataRequest(idspec_string, "checkbox03", checkbox03State));
        req.send();
    }
    function adjustHeight(){ 
        window.setTimeout( function () { gadgets.window.adjustHeight( document.getElementById('app-container').value ); } , 10);
        window.setTimeout( function () { gadgets.window.adjustHeight( document.getElementById('app-container').value ); } , 1000);
        window.setTimeout( function () { gadgets.window.adjustHeight( document.getElementById('app-container').value ); } , 3100);
        window.setTimeout( function () { gadgets.window.adjustHeight( document.getElementById('app-container').value ); } , 5000);
        window.setTimeout( function () { gadgets.window.adjustHeight( document.getElementById('app-container').value ); } , 10000);
    }
    function gameNewwinPlusAnchorVisible() {
        $( this ).children('.game-newwin, .plus-anchor, .title-div').css({ visibility:'visible' });
    }
    function gameNewwinPlusAnchorHidden() {
        $( this ).children('.game-newwin, .plus-anchor, .title-div').css({ visibility:'hidden' });
    }
    function makeLiDraggable() {
        $( "li.games-li" ).draggable({
                appendTo: "body",
                helper: "clone",
                opacity: 0.8,
                cursorAt: { top: 10 , left: 20 },
                distance: 8
            });
        var config = {    
                over: gameNewwinPlusAnchorVisible,
                out: gameNewwinPlusAnchorHidden
        };
        $('.games-li, .fav-li').hoverIntent( config );
    }
    function loadHtmlInnertabs01() {
        var $tabs = $('#tabs').tabs();
        var selected = $tabs.tabs('option', 'selected');
    
        var $innertabs01 = $('#innertabs01').tabs();
        var selected01 = $innertabs01.tabs('option', 'selected');
    
        if((selected === 0)&&(selected01 === 0)){	Innertabs011();	}
        else if((selected === 0)&&(selected01 === 1)){	Innertabs012();	}
        else if((selected === 0)&&(selected01 === 2)){	Innertabs013();	}
        else if((selected === 0)&&(selected01 === 3)){	Innertabs014();	}
        else if((selected === 0)&&(selected01 === 4)){	Innertabs015();	}
        else if((selected === 0)&&(selected01 === 5)){	Innertabs016();	}
        else if((selected === 0)&&(selected01 === 6)){	Innertabs017();	}
        else if((selected === 0)&&(selected01 === 7)){	Innertabs0171();	}
        else if((selected === 0)&&(selected01 === 8)){	Innertabs018();	}
        else if((selected === 0)&&(selected01 === 9)){	Innertabs019();	}
        else if((selected === 0)&&(selected01 === 10)){	Innertabs0110();	}
        else if((selected === 0)&&(selected01 === 11)){	Innertabs0111();	}
        else if((selected === 0)&&(selected01 === 12)){	Innertabs0112();	}
        else if((selected === 0)&&(selected01 === 13)){	Innertabs0113();	}
    
        $('#innertabs01 ul li a:eq(0)').one('click', function() {	Innertabs011();	});
        $('#innertabs01 ul li a:eq(1)').one('click', function() {	Innertabs012();	});
        $('#innertabs01 ul li a:eq(2)').one('click', function() {	Innertabs013();	});
        $('#innertabs01 ul li a:eq(3)').one('click', function() {	Innertabs014();	});
        $('#innertabs01 ul li a:eq(4)').one('click', function() {	Innertabs015();	});
        $('#innertabs01 ul li a:eq(5)').one('click', function() {	Innertabs016();	});
        $('#innertabs01 ul li a:eq(6)').one('click', function() {	Innertabs017();	});
        $('#innertabs01 ul li a:eq(7)').one('click', function() {	Innertabs0171();	});
        $('#innertabs01 ul li a:eq(8)').one('click', function() {	Innertabs018();	});
        $('#innertabs01 ul li a:eq(9)').one('click', function() {	Innertabs019();	});
        $('#innertabs01 ul li a:eq(10)').one('click', function() {	Innertabs0110();	});
        $('#innertabs01 ul li a:eq(11)').one('click', function() {	Innertabs0111();	});
        $('#innertabs01 ul li a:eq(12)').one('click', function() {	Innertabs0112();	});
        $('#innertabs01 ul li a:eq(13)').one('click', function() {	Innertabs0113();	});
    }
    function loadHtmlInnertabs02() {
        var $tabs = $('#tabs').tabs();
        var selected = $tabs.tabs('option', 'selected');
        var $innertabs02 = $('#innertabs02').tabs();
        var selected02 = $innertabs02.tabs('option', 'selected');
    
        if((selected === 1)&&(selected02 === 0)){	Innertabs021();	}
        else if((selected === 1)&&(selected02 === 1)){	Innertabs022();	}
        else if((selected === 1)&&(selected02 === 2)){	Innertabs023();	}
        else if((selected === 1)&&(selected02 === 3)){	Innertabs024();	}
        else if((selected === 1)&&(selected02 === 4)){	Innertabs025();	}
        else if((selected === 1)&&(selected02 === 5)){	Innertabs026();	}
        else if((selected === 1)&&(selected02 === 6)){	Innertabs027();	}
        else if((selected === 1)&&(selected02 === 7)){	Innertabs028();	}
        else if((selected === 1)&&(selected02 === 8)){	Innertabs029();	}
        else if((selected === 1)&&(selected02 === 9)){	Innertabs0210();	}
        
        $('#innertabs02 ul li a:eq(0)').one('click', function() {	Innertabs021();	});
        $('#innertabs02 ul li a:eq(1)').one('click', function() {	Innertabs022();	});
        $('#innertabs02 ul li a:eq(2)').one('click', function() {	Innertabs023();	});
        $('#innertabs02 ul li a:eq(3)').one('click', function() {	Innertabs024();	});
        $('#innertabs02 ul li a:eq(4)').one('click', function() {	Innertabs025();	});
        $('#innertabs02 ul li a:eq(5)').one('click', function() {	Innertabs026();	});
        $('#innertabs02 ul li a:eq(6)').one('click', function() {	Innertabs027();	});
        $('#innertabs02 ul li a:eq(7)').one('click', function() {	Innertabs028();	});
        $('#innertabs02 ul li a:eq(8)').one('click', function() {	Innertabs029();	});
        $('#innertabs02 ul li a:eq(9)').one('click', function() {	Innertabs0210();	});
    }
    function loadHtmlInnertabs03() {
        var $tabs = $('#tabs').tabs();
        var selected = $tabs.tabs('option', 'selected');
        var $innertabs03 = $('#innertabs03').tabs();
        var selected03 = $innertabs03.tabs('option', 'selected');
    
        if((selected === 2)&&(selected03 === 0)){	Innertabs031();	}
        else if((selected === 2)&&(selected03 === 1)){	Innertabs032();	}
        else if((selected === 2)&&(selected03 === 2)){	Innertabs033();	}
        else if((selected === 2)&&(selected03 === 3)){	Innertabs034();	}
        else if((selected === 2)&&(selected03 === 4)){	Innertabs035();	}
        else if((selected === 2)&&(selected03 === 5)){	Innertabs036();	}
        
        $('#innertabs03 ul li a:eq(0)').one('click', function() {	Innertabs031();	});
        $('#innertabs03 ul li a:eq(1)').one('click', function() {	Innertabs032();	});
        $('#innertabs03 ul li a:eq(2)').one('click', function() {	Innertabs033();	});
        $('#innertabs03 ul li a:eq(3)').one('click', function() {	Innertabs034();	});
        $('#innertabs03 ul li a:eq(4)').one('click', function() {	Innertabs035();	});
        $('#innertabs03 ul li a:eq(5)').one('click', function() {	Innertabs036();	});
    }
    function loadHtmlInnertabs04() {
        var $tabs = $('#tabs').tabs();
        var selected = $tabs.tabs('option', 'selected');
        var $innertabs04 = $('#innertabs04').tabs();
        var selected04 = $innertabs04.tabs('option', 'selected');
    
        if((selected === 3)&&(selected04 === 0)){	Innertabs041();	}
        else if((selected === 3)&&(selected04 === 1)){	Innertabs042();	}
        else if((selected === 3)&&(selected04 === 2)){	Innertabs043();	}
        else if((selected === 3)&&(selected04 === 3)){	Innertabs044();	}
        else if((selected === 3)&&(selected04 === 4)){	Innertabs045();	}
        else if((selected === 3)&&(selected04 === 5)){	Innertabs046();	}
        else if((selected === 3)&&(selected04 === 6)){	Innertabs047();	}
        else if((selected === 3)&&(selected04 === 7)){	Innertabs048();	}
        else if((selected === 3)&&(selected04 === 8)){	Innertabs049();	}
        
        $('#innertabs04 ul li a:eq(0)').one('click', function() {	Innertabs041();	});
        $('#innertabs04 ul li a:eq(1)').one('click', function() {	Innertabs042();	});
        $('#innertabs04 ul li a:eq(2)').one('click', function() {	Innertabs043();	});
        $('#innertabs04 ul li a:eq(3)').one('click', function() {	Innertabs044();	});
        $('#innertabs04 ul li a:eq(4)').one('click', function() {	Innertabs045();	});
        $('#innertabs04 ul li a:eq(5)').one('click', function() {	Innertabs046();	});
        $('#innertabs04 ul li a:eq(6)').one('click', function() {	Innertabs047();	});
        $('#innertabs04 ul li a:eq(7)').one('click', function() {	Innertabs048();	});
        $('#innertabs04 ul li a:eq(8)').one('click', function() {	Innertabs049();	});
    }
    function loadHtmlInnertabs05() {
        var $tabs = $('#tabs').tabs();
        var selected = $tabs.tabs('option', 'selected');
        var $innertabs05 = $('#innertabs05').tabs();
        var selected05 = $innertabs05.tabs('option', 'selected');
    
        if((selected === 4)&&(selected05 === 0)){	Innertabs051();	}
        else if((selected === 4)&&(selected05 === 1)){	Innertabs052();	}
        else if((selected === 4)&&(selected05 === 2)){	Innertabs053();	}
        else if((selected === 4)&&(selected05 === 3)){	Innertabs054();	}
        else if((selected === 4)&&(selected05 === 4)){	Innertabs055();	}
        else if((selected === 4)&&(selected05 === 5)){	Innertabs056();	}
        else if((selected === 4)&&(selected05 === 6)){	Innertabs057();	}
        
        $('#innertabs05 ul li a:eq(0)').one('click', function() {	Innertabs051();	});
        $('#innertabs05 ul li a:eq(1)').one('click', function() {	Innertabs052();	});
        $('#innertabs05 ul li a:eq(2)').one('click', function() {	Innertabs053();	});
        $('#innertabs05 ul li a:eq(3)').one('click', function() {	Innertabs054();	});
        $('#innertabs05 ul li a:eq(4)').one('click', function() {	Innertabs055();	});
        $('#innertabs05 ul li a:eq(5)').one('click', function() {	Innertabs056();	});
        $('#innertabs05 ul li a:eq(6)').one('click', function() {	Innertabs057();	});
    }
    function loadHtmlInnertabs06() {
        var $tabs = $('#tabs').tabs();
        var selected = $tabs.tabs('option', 'selected');
        var $innertabs06 = $('#innertabs06').tabs();
        var selected06 = $innertabs06.tabs('option', 'selected');
    
        if((selected === 5)&&(selected06 === 0)){	Innertabs061();	}
        else if((selected === 5)&&(selected06 === 1)){	Innertabs062();	}
        else if((selected === 5)&&(selected06 === 2)){	Innertabs063();	}
        else if((selected === 5)&&(selected06 === 3)){	Innertabs064();	}
        else if((selected === 5)&&(selected06 === 4)){	Innertabs065();	}
        else if((selected === 5)&&(selected06 === 5)){	Innertabs066();	}
        else if((selected === 5)&&(selected06 === 6)){	Innertabs067();	}
        
        $('#innertabs06 ul li a:eq(0)').one('click', function() {	Innertabs061();	});
        $('#innertabs06 ul li a:eq(1)').one('click', function() {	Innertabs062();	});
        $('#innertabs06 ul li a:eq(2)').one('click', function() {	Innertabs063();	});
        $('#innertabs06 ul li a:eq(3)').one('click', function() {	Innertabs064();	});
        $('#innertabs06 ul li a:eq(4)').one('click', function() {	Innertabs065();	});
        $('#innertabs06 ul li a:eq(5)').one('click', function() {	Innertabs066();	});
        $('#innertabs06 ul li a:eq(6)').one('click', function() {	Innertabs067();	});
    }
    function loadHtmlInnertabs07() {
        var $tabs = $('#tabs').tabs();
        var selected = $tabs.tabs('option', 'selected');
        var $innertabs07 = $('#innertabs07').tabs();
        var selected07 = $innertabs07.tabs('option', 'selected');
    
        if((selected === 6)&&(selected07 === 0)){	Innertabs071();	}
        else if((selected === 6)&&(selected07 === 1)){	Innertabs072();	}
        else if((selected === 6)&&(selected07 === 2)){	Innertabs073();	}
        else if((selected === 6)&&(selected07 === 3)){	Innertabs074();	}
        else if((selected === 6)&&(selected07 === 4)){	Innertabs075();	}
        else if((selected === 6)&&(selected07 === 5)){	Innertabs076();	}
        else if((selected === 6)&&(selected07 === 6)){	Innertabs077();	}
        else if((selected === 6)&&(selected07 === 7)){	Innertabs078();	}
        else if((selected === 6)&&(selected07 === 8)){	Innertabs079();	}
        else if((selected === 6)&&(selected07 === 9)){	Innertabs0710();	}
        else if((selected === 6)&&(selected07 === 10)){	Innertabs0711();	}
    
        $('#innertabs07 ul li a:eq(0)').one('click', function() {	Innertabs071();	});
        $('#innertabs07 ul li a:eq(1)').one('click', function() {	Innertabs072();	});
        $('#innertabs07 ul li a:eq(2)').one('click', function() {	Innertabs073();	});
        $('#innertabs07 ul li a:eq(3)').one('click', function() {	Innertabs074();	});
        $('#innertabs07 ul li a:eq(4)').one('click', function() {	Innertabs075();	});
        $('#innertabs07 ul li a:eq(5)').one('click', function() {	Innertabs076();	});
        $('#innertabs07 ul li a:eq(6)').one('click', function() {	Innertabs077();	});
        $('#innertabs07 ul li a:eq(7)').one('click', function() {	Innertabs078();	});
        $('#innertabs07 ul li a:eq(8)').one('click', function() {	Innertabs079();	});
        $('#innertabs07 ul li a:eq(9)').one('click', function() {	Innertabs0710();	});
        $('#innertabs07 ul li a:eq(10)').one('click', function() {	Innertabs0711();	});
    }
    function openSettingsDialog() {
            $('#gamediv-wrapper').css({ visibility: 'hidden' });
            
            $( "#settings-dialog" ).dialog({
                title: '<span class="ui-icon ui-icon-gear" style="float:left;position:relative;top:-1px;"></span>&nbsp;' +__LANG_settings__,
                resizable: false,
                width: 500,
                position: ['center',100],
                buttons: {
                    "Save": function() {
                        updateSettings();
                        $( this ).dialog( "close" );
                        window.setTimeout( function () { window.location.reload(); } , 2000);
                    },
                    Cancel: function() {
                        $( this ).dialog( "close" );
                    }
                },
                close: function() {
                    $('#gamediv-wrapper').css({ visibility: 'visible' });
                }
            });
    }
    function gamePageSettings() {
        var gameSource;
        
        gameSource = $("#game").attr("src");

        var req = opensocial.newDataRequest();
        req.add(req.newUpdatePersonAppDataRequest(idspec_string, "gameSrc", gameSource));
        req.send();
    }
    function toogleDescription() {
        var options = {};
        $( "#game-description" ).toggle( "blind", options, 400 );
    }
    function loadThatGame(gameurl) {
        $('#gametd').html('<embed class="embedgame" id="game" src="'+ gameurl +'" type="application/x-shockwave-flash" width="100%" height="100%"></embed>');
        saveLastGame();
    }

    
//

//

    function myGameUpdate() {
        
        var myGameURL = $('#gameswf').val();
        
        var req = opensocial.newDataRequest();
        req.add(req.newUpdatePersonAppDataRequest(idspec_string, "mygame", myGameURL));
        req.send();
        

    }
    function saveLastGame() {
        
        var gameSource = $("#game").attr("src");
        
        var req = opensocial.newDataRequest();
        req.add(req.newUpdatePersonAppDataRequest(idspec_string, "gameSWF", gameSource));
        req.send();
        
    }
    function loadMyGameAppdata() {
            
        var fields = [ "mygame" ];
            
        var req = opensocial.newDataRequest();
        req.add(req.newFetchPersonRequest(idspec_string), "viewer");
        req.add(req.newFetchPersonAppDataRequest(idspec_object,  fields),  "myGameURLAppdata");
        req.send(myGameURL_callback);
        
    }
    function myGameURL_callback(data) {
        if (data.hadError()) {
            return;
        }
        var viewer = data.get("viewer").getData();
        var myGameURLAppdata = data.get("myGameURLAppdata").getData();
        
            if (!myGameURLAppdata) {
                return;
            }
        var viewerData = myGameURLAppdata[viewer.getId()];
            if (!viewerData) {
                return;
            }
            
        var mySavedGameURL = viewerData["mygame"];
        
        $('#gametd').html('<embed class="embedgame" id="game" src="'+ mySavedGameURL +'" type="application/x-shockwave-flash" width="100%" height="100%"></embed>');
        
        saveLastGame();
            
        $('#game-info').css({ visibility:'hidden' });
        
    };
    function loadMyGame() {
        
        var myGameURL = $('#gameswf').val();
        
        $('#gametd').html('<embed class="embedgame" id="game" src="'+ myGameURL +'" type="application/x-shockwave-flash" width="100%" height="100%"></embed>');

        saveLastGame();
        
        $('#game-info').css({ visibility:'hidden' });
        
    }
    function openMyGameDialog() {
        $('#gamediv-wrapper').css({ visibility: 'hidden' });
        $('#gameswf').val("");
        
        $( "#dialog-form" ).dialog({
            height: 200,
            width: 450,
            modal: true,
            resizable: false,
            position: ['center', 100],
            buttons: {
                "Save": function() {
                        myGameUpdate();
                        loadMyGame();
                        $( this ).dialog( "close" );
                },
                Cancel: function() {
                    $( this ).dialog( "close" );
                }
            },
			close: function() {
			    $('#gamediv-wrapper').css({ visibility: 'visible' });
			}
        });
    }

    
//


//  addAppUrl function
function addAppUrl() {
    var urlParams = gadgets.util.getUrlParameters();
    var appParent = urlParams['parent'];
        
    var str1 = "<a class='plus-anchor' href='";
    var str2 = "/Application?appId=";
    var str3 = "' target='_blank'><span class='ui-icon ui-icon-plus'></span></a>";

}

//	*****Innertabs01*****

    // dress up

function Innertabs011(){
    $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=3c4940df8a19885edd02093d98e6028d&_render=json&_callback=?", function(data) {
        
        var html = "";
        html += "<ul class='games-ul'>";
        
        for (var i = 0; i < 30 ; i++) {
            var gametitle = data.value.items[i].title;
            var gameurl = data.value.items[i].player.url;
            var gamethumb = data.value.items[i].thumbnails[0].url;
            var gameid = data.value.items[i].id;
            var gamedescription = data.value.items[i].description;
            
            html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
            
        }
        html += "</ul>";
        
        $('#innertabs01-1').html(html);

        addAppUrl();
        makeLiDraggable();
        adjustHeight();
    });
}
function Innertabs012(){
    $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=3c4940df8a19885edd02093d98e6028d&_render=json&_callback=?", function(data) {
        var html = "";
        html += "<ul class='games-ul'>";
        for (var i = 30; i < 60 ; i++) {
            var gametitle = data.value.items[i].title;
            var gameurl = data.value.items[i].player.url;
            var gamethumb = data.value.items[i].thumbnails[0].url;
            var gameid = data.value.items[i].id;
            var gamedescription = data.value.items[i].description;
            html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";

        }
        html += "</ul>";
        $('#innertabs01-2').html(html);
        addAppUrl();
        makeLiDraggable();
        adjustHeight();
    });
    }
    function Innertabs013(){
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=3c4940df8a19885edd02093d98e6028d&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 60; i < 90 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs01-3').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs014(){
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=3c4940df8a19885edd02093d98e6028d&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 90; i < 120 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs01-4').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs015(){
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=3c4940df8a19885edd02093d98e6028d&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 120; i < 150 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs01-5').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs016(){
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=3c4940df8a19885edd02093d98e6028d&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 150; i < 180 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs01-6').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs017(){
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=3c4940df8a19885edd02093d98e6028d&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 180; i < 210 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs01-7').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs0171(){
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=3c4940df8a19885edd02093d98e6028d&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 210; i < data.value.items.length ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs01-7-1').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    //
    
    //	make-up
    
    function Innertabs018(){
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=152382f727ed6e87b8aa3ab0e1ccba1b&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 0; i < 30 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs01-8').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs019(){
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=152382f727ed6e87b8aa3ab0e1ccba1b&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 30; i < 60 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs01-9').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs0110(){
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=152382f727ed6e87b8aa3ab0e1ccba1b&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 60; i < data.value.items.length ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs01-10').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    //
    
    //	makeover
    
    function Innertabs0111(){
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=2d87c548e9e478842912b480fdef4542&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 0; i < 30 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs01-11').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs0112(){
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=2d87c548e9e478842912b480fdef4542&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 30; i < 60 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs01-12').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs0113(){
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=2d87c548e9e478842912b480fdef4542&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 60; i < data.value.items.length ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs01-13').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    //
    
    
    
    //	*****Innertabs02*****
    
    // girls games
    
    function Innertabs021(){
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=78ae28a3478346b60e2bd861c4425ee8&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 0; i < 30 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs02-1').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs022(){
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=78ae28a3478346b60e2bd861c4425ee8&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 30; i < 60 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs02-2').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs023(){
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=78ae28a3478346b60e2bd861c4425ee8&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 60; i < 90 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs02-3').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs024(){
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=78ae28a3478346b60e2bd861c4425ee8&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 90; i < 120 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs02-4').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs025(){
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=78ae28a3478346b60e2bd861c4425ee8&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 120; i < 150 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs02-5').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs026(){
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=78ae28a3478346b60e2bd861c4425ee8&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 150; i < 180 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs02-6').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs027(){
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=78ae28a3478346b60e2bd861c4425ee8&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 180; i < 210 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
                
            }
            html += "</ul>";
            $('#innertabs02-7').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs028(){
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=78ae28a3478346b60e2bd861c4425ee8&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 210; i < 240 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
                
            }
            html += "</ul>";
            $('#innertabs02-8').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs029(){
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=78ae28a3478346b60e2bd861c4425ee8&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 240; i < 270 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
                
            }
            html += "</ul>";
            $('#innertabs02-9').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs0210(){
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=78ae28a3478346b60e2bd861c4425ee8&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 270; i < data.value.items.length ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
                
            }
            html += "</ul>";
            $('#innertabs02-10').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    //
    
    
    
    //	*****Innertabs03*****
    
    //  puzzle
    
    function Innertabs031() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=9544ab8c88c3c38f079eec1fc01252ee&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 0; i < 30 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
                
            }
            html += "</ul>";
            $('#innertabs03-1').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs032() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=9544ab8c88c3c38f079eec1fc01252ee&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 30; i < 60 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
                
            }
            html += "</ul>";
            $('#innertabs03-2').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs033() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=9544ab8c88c3c38f079eec1fc01252ee&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 60; i < 90 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
                
            }
            html += "</ul>";
            $('#innertabs03-3').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs034() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=9544ab8c88c3c38f079eec1fc01252ee&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 90; i < 120 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
                
            }
            html += "</ul>";
            $('#innertabs03-4').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs035() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=9544ab8c88c3c38f079eec1fc01252ee&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 120; i < 150 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
                
            }
            html += "</ul>";
            $('#innertabs03-5').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs036() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=9544ab8c88c3c38f079eec1fc01252ee&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 150; i < data.value.items.length ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
                
            }
            html += "</ul>";
            $('#innertabs03-6').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    //
    
    
    //	*****Innertabs04*****
    
    // skill
    
    function Innertabs041() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=31c1b2500bb16f373ff1ddfc715d8c1c&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 0; i < 30 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
                
            }
            html += "</ul>";
            $('#innertabs04-1').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs042() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=31c1b2500bb16f373ff1ddfc715d8c1c&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 30; i < 60 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
                
            }
            html += "</ul>";
            $('#innertabs04-2').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs043() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=31c1b2500bb16f373ff1ddfc715d8c1c&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 60; i < 90 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
                
            }
            html += "</ul>";
            $('#innertabs04-3').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs044() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=31c1b2500bb16f373ff1ddfc715d8c1c&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 90; i < 120 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
                
            }
            html += "</ul>";
            $('#innertabs04-4').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs045() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=31c1b2500bb16f373ff1ddfc715d8c1c&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 120; i < 150 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
                
            }
            html += "</ul>";
            $('#innertabs04-5').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs046() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=31c1b2500bb16f373ff1ddfc715d8c1c&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 150; i < 180 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
                
            }
            html += "</ul>";
            $('#innertabs04-6').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs047() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=31c1b2500bb16f373ff1ddfc715d8c1c&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 180; i < 210 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs04-7').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs048() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=31c1b2500bb16f373ff1ddfc715d8c1c&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 210; i < 240 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs04-8').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs049() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=31c1b2500bb16f373ff1ddfc715d8c1c&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 240; i < data.value.items.length ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs04-9').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    //
    
    
    
    //  *****Innertabs05*****
    
    // action
    
    function Innertabs051() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=41d27f9577a43b0f30edd8f03d53d6b5&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 0; i < 30 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs05-1').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs052() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=41d27f9577a43b0f30edd8f03d53d6b5&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 30; i < 60 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs05-2').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs053() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=41d27f9577a43b0f30edd8f03d53d6b5&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 60; i < 90 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs05-3').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs054() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=41d27f9577a43b0f30edd8f03d53d6b5&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 90; i < data.value.items.length ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs05-4').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    //
    
    // adventure
    
    function Innertabs055() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=6162aec9ba3a40b9c3fde7039f7618ff&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 0; i < 30 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs05-5').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs056() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=6162aec9ba3a40b9c3fde7039f7618ff&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 30; i < 60 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs05-6').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs057() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=6162aec9ba3a40b9c3fde7039f7618ff&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 60; i < data.value.items.length ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs05-7').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    //
    
    
    
    //  *****Innertabs06*****
    
    // racing
    
    function Innertabs061() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=e68ee31a27d4df67243dfa7a0d6789b3&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 0; i < 30 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs06-1').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs062() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=e68ee31a27d4df67243dfa7a0d6789b3&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 30; i < 60 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs06-2').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    //
    
    // shooting
    
    function Innertabs063() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=1481a14dd4991184fb73b86e0fe93fd2&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 0; i < 30 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs06-3').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    //
    
    // sports
    
    function Innertabs064() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=6165ca3d80a9ed9b78efd64816530219&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 0; i < data.value.items.length ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs06-4').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    //
    
    // tower defense
    
    function Innertabs065() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=2d7a4a07f2b1f437c9e8ee25ffb5c4b3&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 0; i < data.value.items.length ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs06-5').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    //
    
    // uphill racing
    
    function Innertabs066() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=1de60d536f9c9524aa5d3ee9b7b8620b&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 0; i < data.value.items.length ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs06-6').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    //
    
    // physics games
    
    function Innertabs067() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=5a87a25ca285bb40676dfa39e947c5c3&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 0; i < 30 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs06-7').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    //
    
    
    
    //  *****Innertabs07 *****
    
    // animal games
    
    //
    
    function Innertabs071() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=84f4036aaeba4bd42f636068d808de9f&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 0; i < data.value.items.length ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs07-1').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    //
    
    // bubble shooter
    
    function Innertabs072() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=16a58283b999f5b164810cf941160bf4&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 0; i < data.value.items.length ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs07-2').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    //
    
    // Celebrity Games
    
    function Innertabs073() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=16f7674211977a1ec543abfd0d096c90&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 0; i < data.value.items.length ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs07-3').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    //
    
    // Fun Games
    
    function Innertabs074() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=4f7136fc4e5254b75125dc63b5df8a7c&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 0; i < 30 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs07-4').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs075() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=4f7136fc4e5254b75125dc63b5df8a7c&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 30; i < data.value.items.length ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs07-5').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    //
    
    // Hidden Objects
    
    function Innertabs076() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=71f065dc7f362e56f694e5dcee31f116&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 0; i < data.value.items.length ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs07-6').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    //
    
    // Mahjong Games
    
    function Innertabs077() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=a80e7299b93104b625beb975ad620bee&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 0; i < data.value.items.length ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs07-7').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    //
    
    // Simulation Games
    
    function Innertabs078() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=5de0a83275e40d0740ce90363c7512ed&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 0; i < 30 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs07-8').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs079() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=5de0a83275e40d0740ce90363c7512ed&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 30; i < 60 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs07-9').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    //
    
    // Time Management
    
    function Innertabs0710() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=418f841610f973295636ff5bff4cbeee&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 0; i < 30 ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs07-10').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    function Innertabs0711() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=418f841610f973295636ff5bff4cbeee&_render=json&_callback=?", function(data) {
            var html = "";
            html += "<ul class='games-ul'>";
            for (var i = 30; i < data.value.items.length ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
                html += "<li class='games-li'><a class='game-newwin' href='" + gameurl + "' target='_blank'><span class='ui-icon ui-icon-newwin'></span></a><img class='thumb' src='" + gamethumb + "' id='" + gameid + "' onclick='loadThatGame(\"" + gameurl + "\");' /><div class='title-div'>" + gametitle + "</div></li>";
    
            }
            html += "</ul>";
            $('#innertabs07-11').html(html);
            addAppUrl();
            makeLiDraggable();
            adjustHeight();
        });
    }
    //
    
    //  *****Favorites*****
    
    // favorites
    
    function favoriteGames() {
        $.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=1a9c87cf938ec4fe28d3482c9dd80b28&_render=json&_callback=?", function(data) {
            for (var i = 0; i < data.value.items.length ; i++) {
                var gametitle = data.value.items[i].title;
                var gameurl = data.value.items[i].player.url;
                var gamethumb = data.value.items[i].thumbnails[0].url;
                var gameid = data.value.items[i].id;
                var gamedescription = data.value.items[i].description;
    
            }
            adjustHeight();
        });
    }
    //
//



// document.ready


$(function () {
  //

    $(document).on('mouseenter', '.thumb', function () {
            $( this ).stop(true, true).animate({
                    borderTopColor: '#9b9a98',
                    borderRightColor: '#9b9a98',
                    borderBottomColor: '#9b9a98',
                    borderLeftColor: '#9b9a98'
            }, 1000);
        });
    $(document).on('mouseleave', '.thumb', function () {
            $( this ).stop(true, true).animate({
                    borderTopColor: '#e6e6e6',
                    borderRightColor: '#e6e6e6',
                    borderBottomColor: '#e6e6e6',
                    borderLeftColor: '#e6e6e6'
            }, 400);
        });
    
    
    $(document).on('click', '.thumb', function () {
        $("#scroll-nav-game").trigger('click');
        $('#game-description').css({ display:'none' });
        $('#game-info').css({ visibility:'hidden' });
    });
    
    $("ul.sf-menu").prepend("<li><a href='"+ appParent +"/Application?appId=711537312067' target='_blank'><span class='ui-icon ui-icon-newwin' style='float:left;position:relative;top:-1px;'></span>&nbsp;<span>madalin jogos</span></a></li>");

    $('button, .scroll-nav').button();
    
    
    $('#app-container').append('<div id="yt-video-dialog"></div>');
    $('.sf-menu').append('<li><a class="ret-false" id="open-yt-video-dialog" href="#">&nbsp;video</a></li>');
    $( "#yt-video-dialog" ).dialog({
            draggable: false,
            resizable: false,
            autoOpen: false,
            modal: true,
            show: 'fade',
            hide: 'slide',
            width: 840,
            position: [ 'center', 50 ],
			close: function() {
                var embedStateHTMLlStorage = localStorage.getItem("embedStateHTML");
                $('#gametd').html(embedStateHTMLlStorage);
			}
         });
    $("#open-yt-video-dialog").on('click', function () {
        
            $('#yt-video-dialog').dialog('open');
            
            $('#yt-video-dialog').html('<div id="yt-video"><iframe frameborder="0" height="720px" src="http://cws-mg.googlecode.com/svn/trunk/yt/1/yt-app.html" width="100%"></iframe></div>');
            
            var embedStateHTML = $('#gametd').html();
            localStorage.setItem("embedStateHTML", embedStateHTML);
            
            $('#gametd').empty();
        });
    //
    
    
    $('#appwidth').click( function () { $("#checkbox-01").trigger('click'); });
    $('#lastgame').click( function () { $("#checkbox-03").trigger('click'); });
    
    $('#game-description').hide();
    $('#info-icon-game').click(function() {
        toogleDescription();
        adjustHeight();
    });

    $('.scroll-nav').bind('click',function(event){
        var $anchor = $(this);
        
    $('#container-wrapper').stop().animate({
        scrollLeft: $($anchor.attr('href')).offset().left
    }, 800);

        event.preventDefault();
    });

    $("#my-friends").click( function () {
            $('#friends-div-wrapper').toggle('slow', function() {
                    adjustHeight();
            });
        } );

    $('#app-settings').bind('click' , function(){
            openSettingsDialog();
    });

	$('span.trash-span').live('click' , function () {
			$( this ).parent().remove();
			
			window.setTimeout ( function () {
					var idspec_string = opensocial.IdSpec.PersonId.VIEWER;
					var droppableHTML = $('#favorites-ul').html();
					
					var req = opensocial.newDataRequest();
					req.add(req.newUpdatePersonAppDataRequest(idspec_string, "droppableHTML", droppableHTML));
					req.send();
				} , 2000);
			});
	$("ul.sf-menu").supersubs({
								minWidth:    10,
								maxWidth:    25,
								extraWidth:  0
							}).superfish();
	//
		
	$("#tabs, .ui-tabs .innertabs").tabs({ fx: {opacity:'toggle'}, cookie:{expires: 365},select: function(event, ui) {
			makeLiDraggable();
			adjustHeight();
		}	
	});
	
	$('.ui-tabs-panel').css({padding:'0.2em', paddingTop:'0.7em' });

    $('#game-tab').css({ padding:'0.5em' });
    
    

    var $tabs = $('#tabs').tabs();
    var selected = $tabs.tabs('option', 'selected');
    
        var $innertabs01 = $('#innertabs01').tabs();
        var selected01 = $innertabs01.tabs('option', 'selected');
            loadHtmlInnertabs01();
    
        var $innertabs02 = $('#innertabs02').tabs();
        var selected02 = $innertabs02.tabs('option', 'selected');
            loadHtmlInnertabs02();
    
        var $innertabs03 = $('#innertabs03').tabs();
        var selected03 = $innertabs03.tabs('option', 'selected');
            loadHtmlInnertabs03();
    
        var $innertabs04 = $('#innertabs04').tabs();
        var selected04 = $innertabs04.tabs('option', 'selected');
            loadHtmlInnertabs04();
    
        var $innertabs05 = $('#innertabs05').tabs();
        var selected05 = $innertabs05.tabs('option', 'selected');
            loadHtmlInnertabs05();
    
        var $innertabs06 = $('#innertabs06').tabs();
        var selected06 = $innertabs06.tabs('option', 'selected');
            loadHtmlInnertabs06();
    
        var $innertabs07 = $('#innertabs07').tabs();
        var selected07 = $innertabs07.tabs('option', 'selected');
            loadHtmlInnertabs07();
    //
        
        
	$('#tabs').tabs({
		select: function(event, ui) {
		
			if(selected01 === 0){Innertabs011();}
			if(selected01 === 1){Innertabs012();}
			if(selected01 === 2){Innertabs013();}
			if(selected01 === 3){Innertabs014();}
			if(selected01 === 4){Innertabs015();}
			if(selected01 === 5){Innertabs016();}
			if(selected01 === 6){Innertabs017();}
			if(selected01 === 7){Innertabs0171();}
			if(selected01 === 8){Innertabs018();}
			if(selected01 === 9){Innertabs019();}
			if(selected01 === 10){Innertabs0110();}
			if(selected01 === 11){Innertabs0111();}
			if(selected01 === 12){Innertabs0112();}
			if(selected01 === 13){Innertabs0113();}
			
	
			if(selected02 === 0){Innertabs021();}
			if(selected02 === 1){Innertabs022();}
			if(selected02 === 2){Innertabs023();}
			if(selected02 === 3){Innertabs024();}
			if(selected02 === 4){Innertabs025();}
			if(selected02 === 5){Innertabs026();}
			if(selected02 === 6){Innertabs027();}
			if(selected02 === 7){Innertabs028();}
			if(selected02 === 8){Innertabs029();}
			if(selected02 === 9){Innertabs0210();}
			
			
			if(selected03 === 0){Innertabs031();}
			if(selected03 === 1){Innertabs032();}
			if(selected03 === 2){Innertabs033();}
			if(selected03 === 3){Innertabs034();}
			if(selected03 === 4){Innertabs035();}
			if(selected03 === 5){Innertabs036();}
			
			if(selected04 === 0){Innertabs041();}
			if(selected04 === 1){Innertabs042();}
			if(selected04 === 2){Innertabs043();}
			if(selected04 === 3){Innertabs044();}
			if(selected04 === 4){Innertabs045();}
			if(selected04 === 5){Innertabs046();}
			if(selected04 === 6){Innertabs047();}
			if(selected04 === 7){Innertabs048();}
			if(selected04 === 8){Innertabs049();}
			
			if(selected05 === 0){Innertabs051();}
			if(selected05 === 1){Innertabs052();}
			if(selected05 === 2){Innertabs053();}
			if(selected05 === 3){Innertabs054();}
			if(selected05 === 4){Innertabs055();}
			if(selected05 === 5){Innertabs056();}                
			if(selected05 === 6){Innertabs057();}


			if(selected06 === 0){Innertabs061();}
			if(selected06 === 1){Innertabs062();}
			if(selected06 === 2){Innertabs063();}
			if(selected06 === 3){Innertabs064();}
			if(selected06 === 4){Innertabs065();}
			if(selected06 === 5){Innertabs066();}                
			if(selected06 === 6){Innertabs067();}
	
			if(selected07 === 0){Innertabs071();}
			if(selected07 === 1){Innertabs072();}
			if(selected07 === 2){Innertabs073();}
			if(selected07 === 3){Innertabs074();}
			if(selected07 === 4){Innertabs075();}
			if(selected07 === 5){Innertabs076();}
			if(selected07 === 6){Innertabs077();}
			if(selected07 === 7){Innertabs078();}
			if(selected07 === 8){Innertabs079();}
			if(selected07 === 9){Innertabs0710();}
			if(selected07 === 10){Innertabs0711();}
	
	
			makeLiDraggable();
			adjustHeight();
		}
	});
	
	$('div.ui-tabs-panel').height(550).css({ overflow: 'hidden' });
	$('#tabs > .ui-tabs-panel').height(590).css({ overflow: 'hidden' });
	
	
	$('#fav-help, #help').on('click' , function () {
			$( "#fav-help-dialog" ).dialog( "open" );
			$( "#fav-help-dialog" ).html('<div style="width:854px;margin:auto;margin-top:8px;"><iframe width="853" height="510" src="http://www.youtube.com/embed/sSVQu3TDD58?rel=0" frameborder="0" allowfullscreen></iframe></div>');
		});
	
	$('#favorites-ul').sortable({
				distance: 8,
	            stop: function (event, ui) {
						window.setTimeout ( function () {
								var idspec_string = opensocial.IdSpec.PersonId.VIEWER;
								var droppableHTML = $('#favorites-ul').html();
								
								var req = opensocial.newDataRequest();
								req.add(req.newUpdatePersonAppDataRequest(idspec_string, "droppableHTML", droppableHTML));
								req.send();
							} , 2000);
						}
			});
	//		
	
	var $tab_items = $( "ul:first li", $tabs ).droppable({
		hoverClass: "ui-state-hover",
		tolerance: 'pointer',
		drop: function( event, ui ) {
			var $item = $( this );
			var $list = $( $item.find( "a" ).attr( "href" ) )
				.find( ".connectedSortable" );
				
			$('.placeholder').remove();
			
			ui.draggable.hide( "slow", function() {
				
				$( this ).appendTo( $list ).show( "slow" );
				
				$( this ).removeClass('games-li').addClass('fav-li').draggable( 'destroy' );
				
				$( '.fav-li' ).children('.plus-anchor').remove();
	
				$( this ).hover(
					function () {
						$( this ).prepend('<span class="trash-span"><span class="ui-icon ui-icon-trash"></span></span>');
					},
					function () {
						$('.trash-span').remove();
					}
				);
				
				var obj = $('#favorites-ul > li');
				var liArray = $.makeArray(obj);
	
				if ( liArray.length > 25 ) {
					$('#favorites-ul > li:last').remove();
					$( "#please-remove-dialog" ).dialog( "open" );
				}
			});
			
			window.setTimeout ( function () {
					var idspec_string = opensocial.IdSpec.PersonId.VIEWER;
					var droppableHTML = $('#favorites-ul').html();
					
					var req = opensocial.newDataRequest();
					req.add(req.newUpdatePersonAppDataRequest(idspec_string, "droppableHTML", droppableHTML));
					req.send();
				} , 3000);
				
	
		}
	});
	
	$( "#game-tab" ).resizable({
			alsoResize: "#gametd", 
			stop: function(event, ui) {
					gadgets.window.adjustHeight();
					
					var gametabHeight = $("#game-tab").height().toString();
	
					var req = opensocial.newDataRequest();
					req.add(req.newUpdatePersonAppDataRequest(idspec_string, "gametab", gametabHeight));
					req.send();
					},
			distance: 2,
			helper: "ui-resizable-helper",
			handles: 's'
			});
	$( "#gametd" ).resizable({
			containment: "#game-tab",
			distance: 20,
			handles: 's'
			});
	
	$( "#update-confirm-dialog" ).dialog({
			title: '<span class="ui-icon ui-icon-info" style="float:left;position:relative;top:-1px;"></span>',
			resizable: false,
			autoOpen: false,
			width: 300,
			height:90,
			hide: 'fade',
			position: [ 'center', 'top' ]
		 });
	$( "#please-remove-dialog" ).dialog({
			title: '<span class="ui-icon ui-icon-info" style="float:left;position:relative;top:-1px;"></span>',
			resizable: false,
			autoOpen: false,
			width: 300,
			hide: 'fade',
			position: [ 'center', 100 ],
			buttons: {
				Ok: function() {
					$( this ).dialog( "close" );
					}
				}
		});
	$( "#message-confirm-dialog" ).dialog({
			title: '<span class="ui-icon ui-icon-info" style="float:left;position:relative;top:-1px;"></span>',
			resizable: false,
			autoOpen: false,
			width: 300,
			height:90,
			hide: 'fade',
			position: [ 'center', 100 ]
		 });
	$( "#fav-help-dialog" ).dialog({
			title: '<span class="ui-icon ui-icon-help" style="float:left;position:relative;top:-1px;"></span>',
			resizable: false,
			autoOpen: false,
			width: 890,
			hide: 'clip',
			position: [ 'center', 70 ],
			buttons: {
				Ok: function() {
						$( this ).dialog( "close" );
					}
				}
		});
	
	$('.ret-false').click(function(){
							return false;
						});
    $('.app-refresh').bind('click' , function () {
            window.location.reload();
    });
    
    $("#play-my-game").on('click', function () {
            loadMyGameAppdata();
    });
    $("#open-dialog-form").on('click', function () {
            openMyGameDialog();
    });
    
    
    adjustHeight();
    makeLiDraggable();
    
  //

    








});


//   appdata-viewer-friends

$(function(){
	var fields = [ "gameSWF","checkbox01","checkbox02","checkbox03","gametab" ];
	
	var req = opensocial.newDataRequest();
	req.add(req.newFetchPersonRequest(idspec_string), "viewer");
	
	var opt_params = {};

	req.add(req.newFetchPersonAppDataRequest(idspec_object,  fields),  "appdata");
	req.send(appdata_callback);
});

function appdata_callback(data) {
	if (data.hadError()) {
		loadDefaultGame();
	    return;
	}
	var viewer = data.get("viewer").getData();
	
	var urlParams = gadgets.util.getUrlParameters();
	var language = urlParams['lang'];
	var __MSG_sendmessage__ , __MSG_visitprofile__;

	if (language === 'pt') {
		__MSG_sendmessage__ = "Enviar uma mensagem";
		__MSG_visitprofile__ = "Visite o perfil";
	} else {
			__MSG_sendmessage__ = "Send message";
			__MSG_visitprofile__ = "Visit profile";
		}

	var appdata = data.get("appdata").getData();
		if ( !appdata ) {
		loadDefaultGame();
        $('#game-tab').height(600);
        $('#gametd').height(600);
		updateSettings();
		return;
	}
	var viewerData = appdata[viewer.getId()];
		if ( !viewerData ) {
		loadDefaultGame();
        $('#game-tab').height(600);
        $('#gametd').height(600);
		updateSettings();
		return;
	}

	var checkbox01Appdata = viewerData["checkbox01"];
		if (( checkbox01Appdata )&&(checkbox01Appdata === "is_checked")) {
               $("#checkbox-01").prop("checked", true);
               $('#app-container').width(950);
               $('.friend-div').width(155);
            } else if (( checkbox01Appdata )&&(checkbox01Appdata === "not_checked")) {
                $("#checkbox-01").prop("checked", false);
                $('#app-container').width(835);
                $('.friend-div').width(130);
            }
    //


	var gameSrcAppdata = viewerData["gameSWF"];
	
	var checkbox03Appdata = viewerData["checkbox03"];
		
		if (( !gameSrcAppdata )&&(checkbox03Appdata === "is_checked")) {
		    
            loadDefaultGame();
            $("#checkbox-03").prop("checked", true);
            
		} else if (( gameSrcAppdata )&&(checkbox03Appdata === "is_checked")) {
			
			$('#gametd').html('<embed class="embedgame" src="'+ gameSrcAppdata +'" type="application/x-shockwave-flash" width="100%" height="100%"></embed>');
			
			$("#checkbox-03").prop("checked", true);
			$('#game-info').css({ visibility:'hidden' });
			
            }
            
            
        if (( !gameSrcAppdata )&&(checkbox03Appdata === "not_checked")) {
            
            loadDefaultGame();
            $("#checkbox-03").prop("checked", false);
            
        } else if (( gameSrcAppdata )&&(checkbox03Appdata === "not_checked")) {
            
			loadDefaultGame();
			$("#checkbox-03").prop("checked", false);
			
            }


	var gametabHeightAppdata = viewerData["gametab"];
	
	    var tointHeightAppdata = parseInt(gametabHeightAppdata);
	
        if ( gametabHeightAppdata ) {
            $('#game-tab').height(tointHeightAppdata);
            $('#gametd').height(tointHeightAppdata);
        } else if ( !gametabHeightAppdata ) {
                $('#game-tab').height(600);
                $('#gametd').height(600);
            }
    //
		adjustHeight();
};


// favorites appdata

$(function(){
	var fields = [ "droppableHTML" ];
		
	var req = opensocial.newDataRequest();
	req.add(req.newFetchPersonRequest(idspec_string), "viewer");
	req.add(req.newFetchPersonAppDataRequest(idspec_object,  fields),  "favAppdata");
	req.send(fav_callback);
});
function fav_callback(data) {
	if (data.hadError()) {
		return;
	}
	var viewer = data.get("viewer").getData();
	var favAppdata = data.get("favAppdata").getData();
		if (typeof favAppdata == 'undefined' || favAppdata == null) {
		return;
	}
	var viewerData = favAppdata[viewer.getId()];
		if (typeof viewerData == 'undefined' || viewerData == null) {
		return;
	}
	var droppableHTMLAppdata = viewerData["droppableHTML"];
	var unescapedString = gadgets.util.unescapeString(droppableHTMLAppdata);
		
	if ( droppableHTMLAppdata ) {
		$('#favorites-ul').html(unescapedString);
		$('.trash-span').remove();
		
		$('.game-newwin').css({ visibility:'hidden' });
		
		favoriteGames();
		
        $( '.fav-li' ).children('.plus-anchor').remove();
        
        $('#favorites-ul > li').hover(
            function () {
                $( this ).children('.game-newwin, .plus-anchor, .title-div').css({ visibility:'visible' });
                $( this ).prepend('<span class="trash-span"><span class="ui-icon ui-icon-trash"></span></span>');
            },
            function () {
                $( this ).children('.game-newwin, .plus-anchor, .title-div').css({ visibility:'hidden' });
                $('.trash-span').remove();
            }
        );
		
	}
	

    
    $('.thumb').css({ border: '3px solid #e6e6e6' });
};

function deleteAllAppdata() {
	var req = opensocial.newDataRequest();
	req.add(req.newRemovePersonAppDataRequest(
		idspec_string, "*"), 'data');
	req.send(delete_callback);
}
function delete_callback(data) {
	var deleteMessage = data.hadError()	?	'Not deleted !!'  : 'Appdata deleted';
	$( "#message-confirm-dialog" ).html(deleteMessage);
		$( "#message-confirm-dialog" ).dialog( "open" );
	setTimeout( function () { $( "#message-confirm-dialog" ).dialog( "close" ); } , 3000);
}








