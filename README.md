# backBase

Run the following script

npm install
npm run dev -- runs the node server with the angular application

Weather report component flow

    app.component 

     ---   weather-report.compoennt lazy loaded in the router-outlet

    weather-report.component 

    --- added with data-grid.component (reusuable component used to list the city and hourly weather report)

    data-grid.component 

    --- has the following inputs 

            * dataToRender$ - an observable of data to be rendered
            * displayedColumns - list of columns to be rendered (from constant.ts)
            * showAction - to show or hide action button

    --- has the following event emitter

            * showHourlyDetails - to load the hourly weather report


Other details

    * server.js - Node server

    * proxy.config.json - Proxy settings

    * Ngrx - used for state maintenenace

    * app-state.model
        -- it contains the Appstate.
        -- it contains the selectors that filter out the details that are to be rendered in the reporting table

    * constants
        -- it consists of some details lile city names and the columns to render on the data-grid component