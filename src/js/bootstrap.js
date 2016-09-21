// (function() {
//     var todoModel = new checkit.TodoModel();
//     todoModel.setContent('climb a mountain');
//
//     var view = new checkit.TodoView(todoModel);
//     document.body.appendChild(view.build());
// }());

maria.on(window, 'load', function() {

    var model = new checkit.TodosModel();

    var view = new checkit.TodosAppView(model);
    document.body.appendChild(view.build());
});
