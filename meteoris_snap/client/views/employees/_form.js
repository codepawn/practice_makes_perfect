Template.employees_form.rendered = function(){
    $('#birthdate').datepicker();
};

Template.employees_form.helpers({
    /* show error message on view */
    error: function(field) {
        return MeteorisSimpleSchema.error(Employees, field);
    },
});