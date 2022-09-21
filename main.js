$(document).ready(() => {
  $(".todo-input").keydown((e) => {
    if ($(".todo-input").val() != "" && e.keyCode == 13) {
      let todoContainer = $("<div class='todo-container d-flex gap-3'></div>");

      let todo = $("<div class='todo'></div>").text($(".todo-input").val());

      let iconContainer = $("<div class='icon-container'></div>");

      let removeIcon = $("<i class='fas fa-minus-circle'></i>");

      let completeIcon = $("<i class='far fa-check-circle'></i>");

      // Delete and bin button
      let removeBtn = removeIcon.click(() => {
        todoContainer.fadeOut(() => {
          todoContainer.remove();
        });
      });

      // Complete button
      let comepleteBtn = completeIcon.click(() => {
        todoContainer.fadeOut(() => {
          iconContainer.addClass("d-flex justify-content-end");

          removeIcon
            .removeClass("fas fa-minus-circle")
            .addClass("fas fa-trash-alt");

          completeIcon.remove();

          $(".comp").append(todoContainer);

          todoContainer.fadeIn();
        });
      });

      todoContainer.append(todo, iconContainer);

      iconContainer.append(removeBtn, comepleteBtn);

      // by default the task will go to "not completed" area first
      $(".not-comp").append(todoContainer);

      // after the data is being transferred, clear the data from input field
      $(".todo-input").val("");
    }
  });
});
