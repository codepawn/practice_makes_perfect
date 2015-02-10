/* Employees */
Router.route('employees', function() {
    Router.go('employeesIndex');
});
Router.route('employees/index/:limit?/', {
    name: 'employeesIndex',
    controller: EmployeesController,
    action: 'index',
});
Router.route('employees/insert/', {
    name: 'employeesInsert',
    controller: EmployeesController,
    action: 'insert',
});
Router.route('employees/update/:_id?', {
    name: 'employeesUpdate',
    controller: EmployeesController,
    action: 'update',
});
Router.route('employees/view/:_id?', {
    name: 'employeesView',
    controller: EmployeesController,
    action: 'view',
});
/* EOF Employees */