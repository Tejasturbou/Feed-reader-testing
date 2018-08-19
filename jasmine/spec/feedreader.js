
$(function() {

    describe('RSS Feeds', function() {
        /*First test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URL defined and not empty', function(){
            allFeeds.forEach(function(element){
                expect(element.url).toBeDefined();
                expect(element.url.length).not.toBe(0);
            });
         });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('name defined and not empty', function(){
            allFeeds.forEach(function(element){
                expect(element.name).toBeDefined();
                expect(element.name.length).not.toBe(0);
            });
         });
    });


    /* New test suite named "The menu" */
    describe('The menu', function(){

        /* A test that ensures the menu element is
         * hidden by default.
         */
         let menuIcon, body
         beforeEach(function(){
            menuIcon = $('.menu-icon-link');
            body = $('body');
         });

         it('menu element is hidden by default', function(){
            expect(body.hasClass("menu-hidden")).toBe(true);
         });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
          it('menu changes visibility when the menu icon is clicked', function(){
            menuIcon.trigger('click');
            expect(body.hasClass("menu-hidden")).toBe(false);

            menuIcon.trigger('click');
            expect(body.hasClass("menu-hidden")).toBe(true);
          });
    });

    /* A test suite named "Initial Entries" */
    describe('Initial Entries', function(){

        /* A test that ensures when the loadFeed
         * function is called and completes its work.
         */

        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('atleast a single .entry element within the .feed container', function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });


    /* A test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){

        let before, after;
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        beforeEach(function(done){

            $('.feed').empty();
            loadFeed(0, function(){
                before = $('.feed').html();
                // console.log($('.feed').html());
                loadFeed(1, done);
            });
        });


        it('When new feed is loaded the content changes', function(){
            // console.log($('.feed').html());
            expect($('.feed').html()).not.toEqual(before);
        });

    });

}());
