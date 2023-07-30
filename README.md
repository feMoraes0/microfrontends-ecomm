# Microfrontends Ecommerce

## Objective

Documents what was learned during the first project at the course [Microfrontends with React: A Complete Developer's Guide by Stephen Grider](https://www.udemy.com/course/microfrontend-course/) at Udemy.

## Topics

- What is a microfrontend?
- Build-time vs. run-time integration.
- How to build a run-time integration microfrontend architecture with VanillaJS and ReactJS (or any other framerwork/library) modules.
- Webpack Module Federation.
  - Properties:
    - Name:
      - not necessary on hosts, but add by convention.
      - used to identify remotes, used before '@' at remotes list on host
    - remotes:
      - where the project will check additional codes.
      - if 'import' is not found at node_modules, will be checked inside the rmotes object keys.
    - filename:
      - sets the name of the manifest file, means the file that says what other files need to be loaded.
      - no reason to change the name from 'remoteEntry.js'
    - exposes:
      - aliases filenames
      - which files will be exposed externally, filenames used when imported on host container or other external
- Host and Remote applications
- Shared Modules
  - Sharing dependencies between microfrontends.

## Contact

- [Linkedin](https://www.linkedin.com/in/fernando-moraes-dev/)
