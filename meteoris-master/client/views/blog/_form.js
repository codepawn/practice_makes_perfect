Template.blog_form.rendered = function(){
    $('#date').datepicker();
};

Template.blog_form.helpers({
    /* show error message on view */
    error: function(field) {
        return MeteorisSimpleSchema.error(Blog, field);
    },
});