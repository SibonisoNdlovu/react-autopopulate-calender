### `npm install`

run npm install to install node_modules.

cd to the dinopark folder to run dev
### `cd dinopark`

### `npm run dev`

Open [http://localhost:3000]

The project will reload if you make edits.\
You will also see any lint errors in the console.

The approach taken was to basically try and have a smooth way of doing this.
Tried to mimic what Excel has because it is similar to it.

The implementation is a process of creating an APP, in the app I then create a header and dashboard just so I can have a different component as header(could have used a single page).

The dashboard is where the Sheet is called and is created, in the sheet we then create the rows and assign the row header e.g 1,2,3,4,5 etc. We take that data and pass it to the row itself.

We then have the row class which adds the headers of the columns and also creates the combination e.g A1,A16 etc which is passed down to the cell and is created. In the Row Class we also loop through all the data from the api and create data that will be passed onto the cell.

The cell is the brain of the layout which add the required data for the cell.
