Template.jobs_form.rendered = function(){
    
};

Template.jobs_form.helpers({
    /* show error message on view */
    error: function(field) {
        return MeteorisSimpleSchema.error(Jobs, field);
    },
});