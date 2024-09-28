# Chemical Supplies Table - Web Application

# Overview
The Chemical Supplies Table web application is a dynamic and responsive tool designed to help users manage and organize chemical supply data. This application features functionalities such as adding, editing, deleting, sorting table rows, and persisting data across sessions using localStorage. The application is also Progressive Web App (PWA) compliant, ensuring it works seamlessly across different devices and screen sizes.

# Features
**Add New Rows:** Easily add new rows to the table with a unique ID.<br />
**Edit Existing Data:** Click on any cell to edit the chemical data directly.<br />
**Delete Rows:** Remove rows from the table and update the stored data.<br />
**Sorting:** Sort the table data by any column in ascending or descending order.<br />
**Row Selection:** Select rows using a ✔️ mark and highlight the selected row.<br />
**Data Persistence:** All changes are saved to localStorage, ensuring data is retained across browser sessions.<br />
**Mobile-Responsive:** The table is designed to be fully responsive, ensuring a seamless experience on mobile devices.<br />
**PWA Compliant:** The application is optimized for use as a Progressive Web App, making it accessible and performant on various platforms.<br />

# Getting Started

**Installation**
To get started with the project, follow these steps:<br />

* Clone the Repository<br />
  git clone https://github.com/abhay3495/Chemical-Supplies-Table.git
  
* Navigate to the Project Directory <br />
  cd chemical-supplies-table
  
* Open the Project in a Web Browser
 - You can open the index.html file directly in your web browser.<br />
 - Alternatively, you can serve the project using a local server (e.g., using VS Code's Live Server or http-server in Node.js).<br />

# Project Structure
* index.html - The main HTML file containing the table and toolbar.
* styles.css - The CSS file for styling the table and ensuring responsiveness.
* script.js - The JavaScript file containing all the logic for table manipulation, sorting, and data persistence.
* README.md - This file, containing information about the project.
  
# Usage

**Basic Usage** <br />
**1. Open the Application**<br />
   * Load the index.html file in your browser.
     
**2. Add a New Row**<br />
   * Click the "Add Row" button in the toolbar to insert a new row at the bottom of the table.<br />
**3. Edit Data**<br />
  * Click on any cell (except the ID column) to edit its contents. Make sure to enter valid numeric values where required.<br />
**4. Delete a Row** <br />
  * Select a row by clicking the ✔️ mark, then click "Delete Row" to remove it from the table.<br />
**5. Save Data** <br />
  * After making changes, click the "Save Data" button to save your work to localStorage.<br />
**6. Refresh Data** <br />
  * Click the "Refresh Data" button to reset the table to its default state.<br />
**7. Sorting** <br />
  * Click on any column header to sort the table by that column. Click again to toggle between ascending and descending order.<br />

# Advanced Usage <br />
    
**Using as a PWA** <br />
 * The application is PWA-ready. You can install it on your device by visiting the page in a browser that supports PWAs and following the prompt to "Install" or "Add to Home Screen." <br />
 
# Contributing
Contributions are welcome! To contribute to the project:

1. Fork the repository.<br />
2. Create a new branch (git checkout -b feature/YourFeature).<br />
3. Make your changes.<br />
4. Commit your changes (git commit -m 'Add some feature').<br />
5. Push to the branch (git push origin feature/YourFeature).<br />
6. Open a pull request.<br />

# License
This project is licensed under the MIT License. See the LICENSE file for more details.

# Contact
For any questions or issues, please open an issue on GitHub or contact the project maintainer at abhay3495.as@gmail.com.
