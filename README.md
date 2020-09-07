## Pokemon Card Backup App

This web application manages a backup for Pokémon cards using the [Pokémon TCG API](https://docs.pokemontcg.io/).

To run this application, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To view that the data is in the local storage, you can:

- Right click
- Select 'inspect'
- Go to the 'Application' tab and view local storage

When you click 'Create Backup,' you will see data in the local storage section. When you click 'Purge Backup,' the data should disappear.

### Assumptions

'Create Backup' and 'Purge Backup' buttons were built based on all the cards being backed up locally. 

### Future improvements
- improve the search functionality 
- add in a navigation component for the user to be able to go to back to the home page
- improve security of the data (for example, rather than having all the data shown on local storage, hide the sensitive information for each card)
