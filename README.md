# Building Angular Application using Angular Concepts

“Film Store” is a small Angular application which used Angular concepts and it is built using Angular Material. The data of films is stored in a json file and displayed the data in the dashboard.

When clicking ‘View details’ link, the following UI is displaying.

In Users view, user data is coming from an API. (https://jsonplaceholder.typicode.com/users)
Angular Material table <mat-table> is used to display Users data and filtering, pagination, sorting is applied to the table data.

The app consists of login and signup form in addition to the dashboard. The forms are built using Reactive forms, FormGroup, FormArray with form validation.

Nested FormGroup is used for ‘address', and 'Nick names’ is made using FormArray, which can add more input fields for adding nick names.

