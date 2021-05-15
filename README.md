Dinoparks Application

Have Nodejs installed to run this application.
Codebase was developed in Visual Studio Code.

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


If I had an opportunity to do this over again I would change a few things.
    1 - Add an input to import data as json or add backend so I can pull data    from database

    2 - Add filters to so I can easily filter table based on anything for example filter based on dates or the feed kind. I think we have enough data to play around with filters.

    3 - I would also make the layout/UI more responsive if I had more time.

    4 - Requirements were a bit tricky so I would try understand them better or get some clarification on certain things.

What I learnt the most is the simple process of creating an excel like table in code without using the buld in table that can be added as packages. I also got to analyze the requirements and I honestly got to say they were confusing at first :).

I think this challenge can be improved by making it a full stack challenge, get the candidate to create a database and insert mock data. Use that database to retreive the data and test the candidates skills in API's. Also maybe it can be a mini assessment that can be deployed and hosted anywhere to test the candidates skills in building an application from scratch and deploying it.

Also just being abit clearer in terms of the requirements

This was a very interesting assessment, I really enjoyed it.

Thank you very much for the opportunity, looking forward to hearing feedback.