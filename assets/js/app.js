
            // WIP nuggz...
            var app = {

                deviceReadyDeferred : $.Deferred(),
                jqmReadyDeferred : $.Deferred(),
                toPageId : null,

                init: function(){                  
                    this.bindEvents();
                },

                bindEvents: function(){
                    document.addEventListener('deviceReady', this.onDeviceReady, false);
                    $(document).bind('pagechange', this.onPageChange);
                    $(window).bind('orientationchange resize', this.onOrientationChange);
                    $(document).one('mobileinit', this.onMobileInit);
                    console.log('events bound');
                },

                onDeviceReady: function(){
                    console.log('device readyd!');
                    app.deviceReadyDeferred.resolve();
                },

                onMobileInit: function(){
                    console.log('mobile initd!');
                    app.jqmReadyDeferred.resolve();
                    $.extend(  $.mobile , {
                        defaultPageTransition : 'slide'
                    });
                },

                onPageChange: function(e,data){
                    app.toPageId = data.toPage.attr('id');
                    console.log('Page: '+app.toPageId+' opened!');
                    app.initIosSlider(app.toPageId);
                },

                onOrientationChange: function(e){
                    app.initIosSlider(this.toPageId);
                },

                initIosSlider: function(pageId){
                    var that =  $('#'+pageId+' .iosSlider');
                    that.iosSlider('update');
                    that.iosSlider({
                        snapToChildren: true,
                        desktopClickDrag: true
                    });
                }

            };