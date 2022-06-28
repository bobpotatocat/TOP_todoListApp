class Task {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.done = false;
  }

  getName() {
    return this.name;
  }
  setName(newName) {
    this.name = newName;
  }
  getDescription() {
    return this.description;
  }
  setDescription(newDescription) {
    this.description = newDescription;
  }
  flipDone() {
    this.done = !this.done;
  }
  getDone() {
    return this.done;
  }
}

export { Task };
