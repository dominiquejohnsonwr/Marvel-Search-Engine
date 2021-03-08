App Title: Marvel Character Lookup

App Description: An application that allows you to search and view detailed information about any character from the Marvel Comics Universe.

API: I am using the Marvel Deveoper Portal API and I plan to use character details, thumbnail images, and comic book collections for each character.

API Snippet: https://gateway.marvel.com/v1/public/characters?ts={{ts}}&name=hulk&apikey={{apikey}}&hash={{hash}}

```{
    "code": 200,
    "status": "Ok",
    "copyright": "© 2021 MARVEL",
    "attributionText": "Data provided by Marvel. © 2021 MARVEL",
    "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2021 MARVEL</a>",
    "etag": "8daadaad517c9f7e56356ba3085e75a05734e6e4",
    "data": {
        "offset": 0,
        "limit": 20,
        "total": 1,
        "count": 1,
        "results": [
            {
                "id": 1009351,
                "name": "Hulk",
                "description": "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.",
                "modified": "2020-07-21T10:35:15-0400",
                "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0",
                    "extension": "jpg"
                },

```

Wireframes: The proposed layout and design of your app. Create mockups for your views. If your are creating multiple views including both desktop and mobile formats, and consider whether or not you need to account for landscape and portrait orientations. Please use a digital tool to complete your wireframe.

![alt text](https://ibb.co/KXBXh2p)


MVP:  1. Project will be built fully with HTML, CSS, and JavaScript.
      2. I will style the project layout using both flexbox and grid to display content in an organized way.
      3. I will make API requests to Marvel's official server using Axios to pull character data.
      4. Project will have individual layouts for both desktop and mobile view to display search results.
      5. Results will include character details that shows description of character and grid of comics that the character appears in.
      6. I will add hover effects to comics after results populate.

Post-MVP: 1. I would like to add the ability to click each comic and display additional details like other characters who also appear in the selected comic.
          2. Add the ability to show list of movie along with movie trailers for the selected characters.
          3. Implement more design details to input fields and buttons on the page.
          

Goals:  | Day             | Goal          | 
        | :-------------: |:-------------:| 
        | Monday          | right-aligned | 
        | Tuesday         | centered      | 
        | Wednesday       | are neat      |  
        | Thursday        | right-aligned | 
        | Friday          | centered      | 

Priority Matrix: A graph of your intended areas of development (Pseudocoding, Design, HTML, CSS, JavaScript, Testing, etc) plotted on an X/Y axis where X represents time to completion and Y represents priority. Use a professional tool or upload a well drawn image using an image hosting site such as Cloudinary or a similar hosting service.
Timeframes: How long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day. Components should be broken down into a maximum of 3 hours time blocks.
