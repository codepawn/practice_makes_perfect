/* Blog */
Router.route('blog', function() {
    Router.go('blogIndex');
});
Router.route('blog/index/:limit?/', {
    name: 'blogIndex',
    controller: BlogController,
    action: 'index',
});
Router.route('blog/insert/', {
    name: 'blogInsert',
    controller: BlogController,
    action: 'insert',
});
Router.route('blog/update/:_id?', {
    name: 'blogUpdate',
    controller: BlogController,
    action: 'update',
});
Router.route('blog/view/:_id?', {
    name: 'blogView',
    controller: BlogController,
    action: 'view',
});
/* EOF Blog */