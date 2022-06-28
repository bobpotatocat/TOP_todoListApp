const { Project } = require("./project");
const { Task } = require("./task");
const { Todo } = require("./todo");

function createProject() {
  loadNewProjectInputField();

  let newProject = new Project();
  let createButton = document.getElementById("create-project-button");
  let clearButton = document.getElementById("clear-project-button");
  clearButton.addEventListener("click", () => {
    closeNewProjectInput();
    return -1;
  });
  createButton.addEventListener("click", () => {
    newTitle = document.getElementById("new-project-title-input").value;
    if (newTitle.length < 1) {
      alert("Please enter project name");
    } else {
      newProject.setTitle(newTitle);
      newProject.setDescription(
        document.getElementById("new-project-description-input").value
      );

      console.log("project created of title: ", newProject.getTitle());
      closeNewProjectInput();
      return newProject;
    }
  });
}

let myTodo = new Todo();
let newProjectButton = document.getElementById("newProjectButton");
newProjectButton.addEventListener("click", createProject);

function test() {
  let thing = 123;
  console.log("test function called");
  return thing;
}
let button = document.createElement("button");
button.textContent = " TESTING  ";
document.body.appendChild(button);
let returnVal = button.addEventListener("click", test);
console.log("returnVal: ", returnVal);

function OpenNewProjectInput() {
  let newProjectFieldContainer = document.createElement("div");
  newProjectFieldContainer.id = "newProjectPopup";
  newProjectFieldContainer.classList.add("popup");
  let header = document.createElement("h2");
  header.textContent = "Create new project";
  // let newTitleFieldContainer = document.createElement('div')
  let newTitleInput = document.createElement("input");
  newTitleInput.id = "new-project-title-input";
  newTitleInput.placeholder = "Enter Project Title";
  let newDescriptionInput = document.createElement("input");
  newDescriptionInput.id = "new-project-description-input";
  newDescriptionInput.placeholder = "Enter Notes (optional)";

  let createButton = document.createElement("button");
  createButton.id = "create-project-button";
  createButton.textContent = "Create";

  let clearButton = document.createElement("button");
  clearButton.id = "clear-project-button";
  clearButton.textContent = "Clear";

  newProjectFieldContainer.appendChild(header);
  newProjectFieldContainer.appendChild(newTitleInput);
  newProjectFieldContainer.appendChild(newDescriptionInput);
  newProjectFieldContainer.appendChild(createButton);
  newProjectFieldContainer.appendChild(clearButton);
  return newProjectFieldContainer;
}

function closeNewProjectInput() {
  console.log("close function called");
  document.getElementById("newProjectPopup").remove();
}

function loadNewProjectInputField() {
  newProjectFieldContainer = OpenNewProjectInput();
  document.body.appendChild(newProjectFieldContainer);
}

function loadProject(project) {
  //clear panel
  clearProjectPanel();
  let projectPanel = document.getElementById("projects-panel");
  if (project.getAllTasks.length == 0) {
    let noCardsNotice = createNoCardsNotice();
    projectPanel.appendChild(noCardsNotice);
  }
  //append all tasks
  for (let i = 0; i < project.getAllTasks().length; i++) {
    //create card
    let newTaskCard = createTaskCard(project.getAllTasks()[i]);
    projectPanel.appendChild(newTaskCard);
  }
  return projectPanel;
}

function createNoCardsNotice() {
  let messageContainer = document.createElement("div");
  messageContainer.classList.add("empty");
  let message = document.createElement("h2");
  message.textContent = "nothing to display here";
  let line2 = document.createElement("p");
  line2.textContent = "create something to get started.";
  messageContainer.appendChild(message);
  messageContainer.appendChild(line2);
  return messageContainer;
}

function createTaskCard(task) {
  let newTaskCard = document.createElement("div");
  newTaskCard.classList.add("taskCard");
  let newName = document.createElement("h2");
  newName.textContent = task.getName();
  let newDescription = document.createElement("p");
  newDescription.textContent = task.getDescription();
  newTaskCard.appendChild(newName);
  newTaskCard.appendChild(newDescription);
  if (task.getDone()) {
    newTaskCard.classList.add("done");
  }
  return newTaskCard;
}

function clearProjectPanel() {
  let projectPanel = document.getElementById("projects-panel");
  projectPanel.remove();
  let newprojectPanel = document.createElement("div");
  newprojectPanel.id = "projects-panel";
  document.body.appendChild(newprojectPanel);
}

let myProj = new Project("daily gym goals", "2022 goal to get swol");
let t1 = new Task("50x pushups", "some description");
let t2 = new Task("20x dumbbell row");
let t3 = new Task("10x curl and push");
myProj.addTask(t1);
myProj.addTask(t2);
myProj.addTask(t3);
console.log("number of tasks in proj: ", myProj.getAllTasks().length);
loadProject(myProj);
// console.log(myProj.getAllTasks()[0].getName());
