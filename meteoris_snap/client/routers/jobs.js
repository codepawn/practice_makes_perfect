/* Jobs */
Router.route('jobs', function() {
    Router.go('jobsIndex');
});
Router.route('jobs/index/:limit?/', {
    name: 'jobsIndex',
    controller: JobsController,
    action: 'index',
});
Router.route('jobs/insert/', {
    name: 'jobsInsert',
    controller: JobsController,
    action: 'insert',
});
Router.route('jobs/update/:_id?', {
    name: 'jobsUpdate',
    controller: JobsController,
    action: 'update',
});
Router.route('jobs/view/:_id?', {
    name: 'jobsView',
    controller: JobsController,
    action: 'view',
});
/* EOF Jobs */