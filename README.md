# Assignment3INFR3120
![image](https://github.com/Pythongirl74/Assignment3INFR3120/assets/96861009/0139f232-40c7-4c8a-93cc-242a309c4b2e)
Assignment Management Flowchart
1. Initial Page Load
Input: User visits the assignment management page.
Output: The server renders the initial assignment list.
2. Adding an Assignment
Input: User submits a new assignment form.
Output: Server captures form data, creates a new assignment, and saves it to the database.
Error Handling: If any errors occur (e.g., invalid data), an error message is displayed to the user.
3. Editing an Assignment
Input: User selects the "Edit" option for a specific assignment.
Output: Server retrieves assignment details, populates the edit form, and allows the user to modify assignment information.
Error Handling: Similar to adding, errors are handled gracefully.
4. Deleting an Assignment
Input: User selects the "Delete" option for a specific assignment.
Output: Server removes the selected assignment from the database.
Confirmation: A confirmation message might be displayed to prevent accidental deletions.
5. Displaying Assignment List
Input: Throughout the process, the server retrieves the assignment list to display.
Output: The server renders the updated assignment list after each operation.
6. Error Handling
Input: Any errors occurring during the process.
Output: The server renders error messages to inform the user of issues and prevent unexpected behavior.
