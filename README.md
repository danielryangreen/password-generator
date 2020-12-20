# Password Generator
## Description
Application to generate a random password based on selected criteria. After the user clicks a button on the page, the application prompts the user to select the password length and the character types including lowercase, uppercase, numeric, and/or special. The application validates that the password length is at least 8 characters and no more than 128 characters and that at least one character type is selected.

The password is written to a text box on the page. If the validation fails, the application exits gracefully by displaying an alert message and clearing the text box. If the user clicks the button to run the application again, the previous password is overwritten.

The application does not guarantee that all of the selected character types will be present in the password, but the characters are chosen randomly from an array that contains all of the selected character types. A future enhancement to the application would be to automatically create another password if any of the selected character types are missing.

Deployed at [GitHub Pages](https://danielryangreen.github.io/password-generator/)

See the repo at [Github](https://github.com/danielryangreen/)
## Installation
Open __index.html__ in your favorite browser!

View the code in your favorite text editor. I suggest VS Code.
## Usage
Here is a mock-up of the user interface.

![Generate Password button](Assets/03-javascript-homework-demo.png)
## Credits
The list of special characters was taken from the [OWASP Foundation](https://owasp.org/www-community/password-special-characters)

Starter code and mock-up were provided by [Trilogy Education Services](https://trilogyed.com/)
## License
MIT License