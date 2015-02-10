Meteor.publishComposite('employees', function(doc, sort) {
    doc.appId = App.id;
    console.log("subscribing some Employees with it's relation in App Id = " + App.id);
    return{
        find: function() {
            return Employees.find(doc, sort);
        },
        children: [
            /* return all related Users */
            {
                find: function(collection) {
                    return Meteor.users.find({
                        $or: [
                            {_id: collection.createdUserId},
                            {_id: collection.updatedUserId},
                        ]
                    });
                }
            },
            /* return all related Jobs */
{
find: function(collection) {
return Jobs.find(collection.jobid);}
},

        ],
    }
});


Meteor.methods({
    "Employees.insert": function(doc) {
        var _id = Employees.insert(doc);
        return {
            _id: _id,
        }
    },
});

/* observing collection */
/* uncomment to use
 var query = Employees.find({});
 var handle = query.observe({
 removed: function(model) {
 //removing related image, when post removed
 Images.remove(model.imageId);
 }
 });
 */