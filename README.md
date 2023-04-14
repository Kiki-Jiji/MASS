# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Plotly big, crashes node, run below before `npm start` or if you hit a `JavaScript heap out 
of memory` error.

```
export NODE_OPTIONS=--max_old_space_size=4096
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
