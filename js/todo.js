$(document).on('click', '#btnadd', function () {
    var self = $(this);
    var taskValue = $('#task').val();
    var targetError = self.parent().parent().find('.error');
    if (taskValue !== '') {
        var task = taskList(taskValue);
        $('.card').append(task)
        $('#task').val('');
        if (!targetError.hasClass('hide')) {
            targetError.addClass('hide')
        }
    } else {
        targetError.removeClass('hide')
    }
});
$(document).on('click', '#btndelt', function () {
    var self = $(this);
    self.parent().parent().remove()
});
$(document).on('click', '#btndeltall', function () {
    $('.tasklist').remove()
});
$(document).on('click', '#btnedit', function () {
    var self = $(this);
    self.parent().parent().find('.task').focus();
    self.parent().parent().find('.task').removeAttr('readonly');
    self.parent().parent().find('.task').select();
});
$(document).on('focusout', '.task', function () {
    var self = $(this);
    var targetError = self.parent().parent().find('.error');
    if (self.val() != '') {
        if(!targetError.hasClass('hide')){
            targetError.addClass('hide')
        }
        self.attr('readonly', true);
    }else{
        targetError.removeClass('hide');
        self.focus();
    }
});
function taskList(inputValue) {
    var todo = "";
    todo += '<div class="row mt-24 tasklist">';
    todo += '<div class="col-sm-12 col-md-12 col-lg-7">';
    todo += '<input type="text" readonly class="w-100 task" value="' + inputValue + '">';
    todo += '</div>';
    todo += '<div class="col-sm-12 col-md-12 col-lg-2 mt-1">';
    todo += '<button id="btnedit" class="btn w-100">Edit</button>';
    todo += '</div>';
    todo += '<div class="col-sm-12 col-md-12 col-lg-2 mt-1">';
    todo += '<button id="btndelt" class="btn w-100">Delete</button>';
    todo += '</div>';
    // todo += '</div>';
    // todo += '<div class="row">';
    todo += '<div class="col-sm-12">';
    todo += '<p class="error hide">Enter task</p>';
    todo += '</div>';
    todo += '</div>';

    //     <div class="row">
    //     <div class="col-sm-12">
    //         <p class="error hide">Enter task</p>
    //     </div>
    // </div>
    return todo;
}