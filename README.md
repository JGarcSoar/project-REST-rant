# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## Routes Table

| Method | Path                     | Purpose                                           |
| ------ | ------------------------ | ------------------------------------------------- |
| GET    | /                        | Home Page                                         |
| GET    | /places                  | Places index page                                 |
| POST   | /places                  | Create new place                                  |
| GET    | /places/new              | Form page for creating a new place                |
| GET    | /places/:id              | Details about a particular place                  |
| PUT    | /places/:id              | Updates a particular place                        |
| GET    | /places/:id/edit         | Form for editing an existing place                |
| DELETE | /places/:id              | Deletes a particular place                        |
| POST   | /places/:id/rant         | Create a rant (comment) about a particular place  |
| DELETE | /places/:id/rant/:rantId | Deletes a rant (comment) about a particular place |
| GET    | \*                       | 404 page (matches any route not defined above)    |

## Data Info to be stored on the places

| Info    | Info     |
| ------- | -------- |
| Name    | (string) |
| City    | (string) |
| State   | (string) |
| Cuisine | (string) |
| Picture | (string) |
