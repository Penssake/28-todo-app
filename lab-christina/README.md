### Lab 28 & 29 401 JavaScript

```
App
  Landing
  Dashboard
    NoteForm
    NoteList
      Noteitem
```

### Components
#### App

```
The App component manages the front end routes.
  '/' route displays the landing component.
  '/dashboard' route displays the Dashboard component.
```

#### Landing

```
The Landing component gives a description of the Notes app.
```

#### Dashboard

```
The Dashboard component manages the application state. The initial state of the application is an empty notes array. The are three bound methods that alter the state of the application:
  addNote(note)
  removeNote(note)
  updateNote(note)
```

#### NoteForm

```
The note form adds a note to the note array with the `onComplete` method.
```

#### NoteList

```
Displays an unordered list of note components from the notes array.
```
#### NoteItem
```
Displays the notes content and title as well as a delete button. The onclick method removes a note from the aaplication state by click event.
```
#### Test
```
The testing for this app tests the initial state of both the dashboard and the NoteForm.
```
