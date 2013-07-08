        // OMG global vars. Whatevs... WIP nuggz
        var deviceReadyDeferred = $.Deferred(),
            jqmReadyDeferred = $.Deferred(),
            toPageId = null,

            app = {

                init: function(){                  
                    this.bindEvents();
                },

                bindEvents: function(){
                    document.addEventListener("deviceReady", this.onDeviceReady, false);
                    $(document).bind('pagechange', this.onPageChange);
                    $(document).one("mobileinit", this.onMobileInit);
                    console.log('events bound');
                },

                onDeviceReady: function(){
                    console.log('device readyd!');
                    deviceReadyDeferred.resolve();
                },

                onMobileInit: function(){
                    console.log('mobile initd!');
                    jqmReadyDeferred.resolve();
                    $.extend(  $.mobile , {
                        defaultPageTransition : 'slide'
                    });
                },

                onPageChange: function(e,data){
                    toPageId = data.toPage.attr("id");
                    console.log('Page: '+toPageId+' opened!');
                    $('#'+toPageId+' .iosSlider').iosSlider({
                        snapToChildren: true,
                        desktopClickDrag: true
                    });
                }

            };