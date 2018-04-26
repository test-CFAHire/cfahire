cfa = {
    nav:{
        base:'/cfahire/',
        //base:'/',
        
        init: function(){
            $('[data-page]').on('click', cfa.nav.relocate);
        },
        
        relocate: function(e){
            var target = $(e.target).attr('data-page');
            
            if(target || target === ''){
                window.location.href = cfa.nav.base + $(e.currentTarget).attr('data-page');
            }
        }
    },
    // functions for home page of cfa site
    home: {
        // functions for deciding which overlay to display
        hexover1: function() { $('div.description.mid').css('opacity','1'); },
        hexover2: function() { $('div.description.left').css('opacity','1'); },
        hexover3: function() { $('div.description.right').css('opacity','1'); },
        hexleave1: function() { $('div.description.mid').css('opacity','0'); },
        hexleave2: function() { $('div.description.left').css('opacity','0'); },
        hexleave3: function() { $('div.description.right').css('opacity','0'); },
        
        // init function 
        init: function() {            
            // on mouse over of hexagon
            $('article.landing-banner').on('mouseover', function(e) {
                var functions = [ cfa.home.hexover1, cfa.home.hexover2, cfa.home.hexover3 ];

                var selhex = parseInt($(this).attr('data-id'));
                functions[selhex - 1]();
            });
            // on mouse leave of hexagon
            $('article.landing-banner').on('mouseleave', function(e) {
                var functions = [ cfa.home.hexleave1, cfa.home.hexleave2, cfa.home.hexleave3 ];

                var selhex = parseInt($(this).attr('data-id'));
                functions[selhex - 1]();
            });
            // on click of hexagon
            /*$('article.landing-banner').on('click', function(e){
                var page = $(e.currentTarget).attr('data-page');;

                window.location.href = cfa.nav.base + page + '.html';
            });*/
            
            // center all components on page
            var center = function() {
                var container = $('div.container');
                container.css('margin-top', ((window.innerHeight - container.height()) / 2) - 80);

                var descriptionarea = $('div.description');
                descriptionarea.css('width', (window.innerWidth - container.width()) / 2)
            };
            // center on resize
            center();
            window.onresize = center;
        }
    },
    rig:{
        init:function(){}
    },
    drum:{
        init:function(){}
    },
    pump:{
        init:function(){}
    },
    staff:{
        init:function(){}
    },
    contact:{
        init:function(){}
    },
    about:{
        init:function(){}
    }
}

$(function(){ cfa.nav.init(); });

