let task_name_input = document.querySelector('input[name=task]');
let add_button = document.querySelector('#add');
let main_div = document.querySelector("#main");
let output_div = document.querySelector('.output');
let remaining = document.querySelector(".remaining p");

main_div.addEventListener('click', function(e) {
    if (task_name_input.value && e.target.value === "+") {
        if (output_div.childNodes.length < 9) {
            addTask();
            task_name_input.value = "";
        } else {
            alert("You have reached the maximum amount of tasks!");
        }
    } else if (!task_name_input.value && e.target.value === "+") {
        alert('Please type task!');
    }

    if (e.target.nodeName === "BUTTON" && e.target.innerHTML === "") {
        e.target.innerHTML = "✔";
        e.target.classList.add("checked");
        e.target.parentElement.querySelector("p").style.textDecoration = "line-through";
    } else if (e.target.nodeName === "BUTTON" && e.target.innerHTML === "✔") {
        e.target.innerHTML = "";
        e.target.classList.remove("checked");
        e.target.parentElement.querySelector("p").style.textDecoration = "none";
    }

    if (e.target.innerHTML === "-") {
        output_div.removeChild(e.target.parentElement);
    }

    remained_tasks();

});


// Adding task to output_div
function addTask() {
    // Create div and add it into output_div
    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center";
    div.style.width = "105%";
    div.style.height = "10%";
    div.style.margin = "0 0 5%";
    div.style.padding = "5%";
    div.style.background = "#53B8BB";
    div.style.border = "5px solid #F3F2C9";
    div.style.borderRadius = "10px";
    output_div.appendChild(div);

    // Create Complate-Uncompleted button
    let check_box = document.createElement("button");
    check_box.style.backgroundColor = "#003638";
    check_box.style.color = "#F3F2C9";
    check_box.style.width = "27px";
    check_box.style.height = "27px";
    check_box.style.border = "3px solid #F3F2C9";
    check_box.style.borderRadius = "10px";
    div.appendChild(check_box);

    // Create p element for task
    let p = document.createElement("p");
    p.style.color = "#003638"
    p.innerHTML = `${capitalize_first_letters(task_name_input.value)}`;
    div.appendChild(p);


    // Create remove button for task
    let remove_button = document.createElement("button");
    remove_button.innerHTML = "-";
    remove_button.style.backgroundColor = "#003638";
    remove_button.style.borderRadius = "10px";
    remove_button.style.width = "30px";
    remove_button.style.height = "30px";
    remove_button.style.color = "#FFFFFF";
    remove_button.style.border = "0";
    div.appendChild(remove_button);

}

// Capitalize the first letter of each word
function capitalize_first_letters(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}

// Remained Tasks - bottom p
function remained_tasks() {
    let checked_boxes_arr = document.getElementsByClassName("checked");
    if (output_div.childElementCount - checked_boxes_arr.length === 1 && output_div.childElementCount === 1) {
        remaining.innerHTML = `${output_div.childElementCount - checked_boxes_arr.length} task out of ${output_div.childElementCount} task remained!`;
    } else if (output_div.childElementCount - checked_boxes_arr.length === 1) {
        remaining.innerHTML = `${output_div.childElementCount - checked_boxes_arr.length} task out of ${output_div.childElementCount} tasks remained!`;
    } else if (output_div.childElementCount === 1) {
        remaining.innerHTML = `${output_div.childElementCount - checked_boxes_arr.length} tasks out of ${output_div.childElementCount} task remained!`;
    } else {
        remaining.innerHTML = `${output_div.childElementCount - checked_boxes_arr.length} tasks out of ${output_div.childElementCount} tasks remained!`;
    }
}