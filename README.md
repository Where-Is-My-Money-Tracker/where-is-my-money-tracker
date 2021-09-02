# Where is my money tracker

# Team members
Tanner Meck, Paul Brubaker, Greg Gilliam, Alan Willoughby, Pete Hamrick

# About our Project
1. Designed as a method to view where your money goes and to what cause.
1. Allows for dynamic changes based on user input, forming a pie chart for each specific user.
1. Each item is category based, along with a specialty sub-category that corresponds to how the information is inserted for optimized viewing.

# Problem domain
1. Tired of looking at a bank statement and calculating each item spent within a week, month, or year's time? Look no further as our app is designed to calculate and organize expenses into a viable and viewable design.

# User Instructions:
Create a profile by clicking the signUp link. From there, users can navigate to their profile to see chart data, home to pick up a new dad joke, look at the developers, and logout, all within the header. To add more data, users can add a single purchase item, found at the bottom of the profile, and then will be redirected back to the profile page to see a succinct chart. Within the single purchase item, users will want to add a category that the item description belongs to. Furthermore, a subcategory can be added if the user deems necessary for a more specific chart experience. Also, users should add recurring/expenses, such as rent or utilities, within the recurring purchases link and state the number of days between the billing due date. You can then modify a recurring purchase by pressing stop if you still want to see the data within the yearly, 6 month, 3 month, and weekly layout on the pie chart. You can even delete a purchase by viewing the link as described. 

# Semantic versioning
* version 1.0.0

# List of technologies our application uses
1. React
1. Postgresql
1. chartJS


# Defined API endpoints/responses
1. getToken
1. getPurchases
1. getRecurring
1. getCategories
1. postPurchase
1. postRecurring
1. postCategories
1. putRecurring
1. deletePurchase
1. deleteRecurring
1. getDadJoke

# Defined database schemas
1. Categories {id, parent_id, description, user_id}
1. Recurring Purchase Items {id, user_id, description, cost, category_id, start, stop}
1. Purchase Items {id, user_id, description, cost, category_id, timestamp}