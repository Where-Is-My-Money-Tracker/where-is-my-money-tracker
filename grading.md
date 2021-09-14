# Grading Notes
Great job everyone! Way to push through a week where curveballs were thrown at you. You also were dealing with two of my least favorite things to work with in web development -- dates and currency! Definitely not easy and you should be very proud.

## Front End
-   I would consider updating your frontend routes to be a little more RESTful, for example:
    -   `/addpurchaseitem` => `/purchases/new`
    -   `/modifyrecurringpurchaseitem` => `recurring/:id/edit`
-   I added some inline notes but keeping your currency as a number for as long as possible and then only formatting it as a currency when you're displaying it would probably simplify things for you (storing as an integer on the backend would help with this -- see below)
-   Dates and timezones are notoriously tricky to deal with on the front end -- I think your solution of storing ms is pretty clever. I have used [date-fns](https://date-fns.org/) in the past and found it really helpful. People also use [moment.js](https://momentjs.com/) but its pretty heavy-weight.
-   I don't think your recursive sum is quite working -- if I add an additional level of subcategories to groceries for example, the chart isn't including them at the top level -- happy to talk through this if you want. I added some more simplified sample data to illustrate.

## Back End
-   I think you may be making your life a little more difficult on the front end by not doing joins on the backend -- you're doing a lot of data manipulation where you're connecting category information with purchase information -- let the database do that for you!

## Database
-   You can use postgres [date types](https://www.postgresql.org/docs/current/datatype-datetime.html) rather than BIGINT which _might_ make your date situation a little easier
-   Its generally a good idea to store currency as an integer (i.e. store it as cents) in the database -- this prevents rounding errors and you can just format it on the front end

## Other Notes
-   README looks good but adding some diagrams or pictures from your Miro would be nice
-   Adding a customized domain for your backend is a nice-to-have
-   Don't forget to add a README to your backend code also - it can be simpler but should include instructions on starting up the app

|                                                                                                         | Possible Points | Where's My Money? |
| ------------------------------------------------------------------------------------------------------- | --------------- | ----------------- |
| **Good & Proper Use of HTML / CSS**                                                                     | 5               | 5                 |
| **Good and proper use of JavaScript and Reat Components**                                               |                 |                   |
| Clear / readable code                                                                                   | 5               | 5                 |
| Uses async JS properly                                                                                  | 5               | 5                 |
| Uses react components to "compose" the UI and follows data-down/events-up                               | 5               | 5                 |
| Contains no unnecessary or commented-out code                                                           | 5               | 5                 |
| **React Router List / Detail pages**                                                                    | 10              | 10                |
| Third Party API                                                                                         |                 |                   |
| Project incorporates API                                                                                | 3               | 3                 |
| Project stores API info in database & associates with users                                             | 2               | 2                 |
| **Server Side Code**                                                                                    |                 |                   |
| **Routes should follow standard REST conventions**                                                      | 5               | 5                 |
| /get list                                                                                               | 3               | 3                 |
| /get detail                                                                                             | 3               | 3                 |
| /post create single item                                                                                | 3               | 3                 |
| /delete destroy single item                                                                             | 3               | 3                 |
| Proxy route                                                                                             | 3               | 0                 |
| **Database**                                                                                            |                 |                   |
| PostgreSQL database provisioned on the Heroku instance                                                  | 1               | 1                 |
| Logical schemas with appropriate data types                                                             | 1               | 1                 |
| Data model that maps to the problem domain and uses relational connections, such as joins, as necessary | 2               | 2                 |
| Ability to read, create, update resources and persist them in database                                  | 6               | 6                 |
| **Testing**                                                                                             | 5               | 5                 |
| **Documentation**                                                                                       | 5               | 5                 |
| **General Functionality**                                                                               | 10              | 8                |
| Team Score (Out of 90)                                                                                  | 90              | 85                |