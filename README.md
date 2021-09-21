# The Fellowship of Rings

## Getting Started

Clone this repository into your system.

In the project directory, you can run:
### `npm run compile:sass` 
Compiles your scss code into css and updates the styles.css file

## Folder Structure

📦puzzles-2.0 <br>
┣ 📂css : To save all the css files <br>
┣ 📂img : To save all images <br>
┣ 📂js : To save all the javascript files<br>
┣ 📂pages : To save various pages <br>
┣ 📂sass : To save all your scss files <br>
┃ ┗ 📂base : basic project definitions <br>
┃ ┃ ┣ 📜_base.scss : low level basics like resets and styles for HTML and body selectors<br>
┃ ┃ ┗ 📜_animations.scss: for animations <br>
┃ ┃ ┗ 📜_typography.scss: for typography <br>
┃ ┃ ┗ 📜_utilities.scss: for utilities <br>
┃ ┗ 📂abstract : code that's not going to output any css. <br>
┃ ┃ ┣ 📜_functions.scss :  <br>
┃ ┃ ┗ 📜_mixins.scss: <br>
┃ ┃ ┗ 📜_variables.scss: <br>
┃ ┗ 📂components : Reusable UI components <br>
┃ ┗ 📂layout : layout elements work on all pages <br>
┃ ┃ ┣ 📜_header.scss :  example<br>
┃ ┃ ┗ 📜_footer.scss: example <br>
┃ ┗ 📂pages : specific styles for a specific page,<br>
┃ ┃ ┣ 📜_home.scss :  example<br>
┃ ┣ 📜main.scss: to import all the files that are in these folders. <br>
┣ 📜index.html : Home Page <br>
