class Todo {
  constructor() {
    this.projects = [];
  }

  addProject(project) {
    this.projects.push(project);
  }
  removeProject(project) {
    this.projects = this.projects.filter((e) => e !== project);
  }

  getAllProjects() {
    return this.projects;
  }
  hasProject(project) {
    return this.projects.includes(project);
  }
}

export { Todo };
