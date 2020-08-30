    # HLTV App

    ## What's that?

    - It's simple app for scrapping CS:GO incoming/archive matches
    - Will allow you to be up to date with your favorite teams
    - You'd be able to calculate probability of win specific match by team X or team Y #longtermtodo
    - Lot more #todo

    ## What do you need to install before run?

    - Node.js installed
    - MongoDB community server installed

    ## How to install?

    ```bash
        npm run install:all
    ```

    ## How to run

    ```bash
        npm run dev
    ```

    - You'll have to provide secret env variable to decrypt keys. **_not done yet_**
    - Just clone "\_env" file and rename it into ".env" and change "SECRET=xxx" into secret key which you can get via contact with me **_not done yet_**
    - If you'd like to just run a project on test/local database, change SECRET into "SECRET=TEST" **_not done yet_**

    ## Technologies and tools used

    - React.js with hooks
    - Redux with thunk
    - Node.js & Express.js
    - Axios for simplify HTTP requests instead of fetch API
    - JWT

    ## Known bugs and todos

    - Redux should be moved one layer above to restrain amount of requests
    - RWD doesn't exists yet
    - You have to provide "SKIP\*PREFLIGHT_CHECK=true" into \*\*\*.env\_\*\* file to run app

    ## API Endpoints

    # /api

    | ENDPOINT   | TYPE |                                DESCRIPTION |
    | ---------- | :--: | -----------------------------------------: |
    | /login     | POST |                 Login mocked user with JWT |
    | /test-auth | POST | Endpoint for testing that /api/login works |

    # /matches

    | ENDPOINT          |  TYPE  |                                              DESCRIPTION |
    | ----------------- | :----: | -------------------------------------------------------: |
    | /                 |  GET   |                   Return all available matches from HLTV |
    | /user-matches     |  GET   | Return matches added to favourites by user from database |
    | /user-matches     |  POST  |                                  Add match to favourites |
    | /user-matches/:id | DELETE |                       Delete match from favourites by id |
    | /user-matches-all | DELETE |                            "DROP" user favourite matches |

    # /teams

    | ENDPOINT | TYPE |                   DESCRIPTION |
    | -------- | :--: | ----------------------------: |
    | /:id     | GET  |   Return team from HLTV by id |
    | /ranking | GET  | Return top 30 teams from HLTV |

    # /users

    | ENDPOINT    |  TYPE  |               DESCRIPTION |
    | ----------- | :----: | ------------------------: |
    | /           |  GET   |                     #todo |
    | /register   |  POST  | Register user in database |
    | /login      |  POST  |                Login user |
    | /delete-all | DELETE |              "DROP" users |
