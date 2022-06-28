class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.tasks = [];
    this.done = false;
  }
  getTitle() {
    return this.title;
  }
  setTitle(newTitle) {
    this.title = newTitle;
  }
  getDescription() {
    return this.description;
  }
  setDescription(newDescription) {
    this.description = newDescription;
  }
  hasTask(task) {
    return this.tasks.includes(task);
  }
  addTask(task) {
    this.tasks.push(task);
  }
  removeTask(task) {
    this.tasks = this.task.filter((e) => e !== task);
  }
  getAllTasks() {
    return this.tasks;
  }
  flipDone() {
    this.done = !this.done;
  }
  getDone() {
    return this.done;
  }
}

export { Project };
