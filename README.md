# App Title: Marvel Super-Hero Comic Library

### An application that allows you to search and view comics for any super-hero from the Marvel Comics Universe.

#### API: I am using the Marvel Deveoper Portal API and I plan to use character details, thumbnail images, and comic book collections for each character.

#### API Snippet: https://gateway.marvel.com/v1/public/characters?ts={{ts}}&name=hulk&apikey={{apikey}}&hash={{hash}}

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

### Wireframes: 

### Desktop view of application
![Marvel_wireframe_desktop](https://media.git.generalassemb.ly/user/34504/files/96e85d80-8003-11eb-9992-e9b4c584dc68)

### Mobile view of application
![Marvel_wireframe_mobile](https://media.git.generalassemb.ly/user/34504/files/99e34e00-8003-11eb-8f0f-ebb2946c7a66)


| MVP | Goals                                                                                                                           |
|-----|---------------------------------------------------------------------------------------------------------------------------------|
| 1   | Project will be built fully with HTML, CSS, and JavaScript.                                                                     |
| 2   | I will style the project layout using flexbox to display content in blocks shown on wireframe.                                  |
| 3   | I will make API requests to Marvel's official server using Axios to pull character information.                                 |
| 4   | Project will br responsive so it shows well on both desktops and mobile.                                                        |
| 5   | Results will include character details that shows description of character and grid of comics for that character.               |
| 6   | Return search results for first character in response.                                                                          |
                                                                                                                                       

| Post-MVP | Goals                                                                                                                                           
|----------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| 1        | I would like to add the ability to click each comic and display additional details like other characters who also appear in the selected comic. |
| 2        | Add the ability to show list of movie along with movie trailers for the selected characters.                                                    |
| 3        | Implement more design details to input fields and buttons on the page.                                                                          |
| 4        | Add hover effects to comics after results populate.                                                                                             |
| 5        | Add dropdown to include the extra search results for name searched.                                                                             |


#### Goals:  
| Day            | Goal                                                                            |
|----------------|---------------------------------------------------------------------------------|
| Monday 3/8     | Finish README and start with HTML/CSS.                                          |
| Tuesday 3/9    | Start working on my JavaScript and make sure all fields/buttons are functional. |
| Wednesday 3/10 | Complete my JavaScript and make sure the application is functional.             |
| Thursday 3/11  | Testing / tweaks to my CSS. Look into post-MVP goals.                           |
| Friday 3/12    | Deployment!                                                                     |

#### Priority Matrix: 
![295E7CC1-92D3-4018-B0F6-44C63183749F](https://media.git.generalassemb.ly/user/34504/files/1df00280-8011-11eb-8955-9a0fcc1ab315)


#### Timeframes:
|            | Development Task    | Expected time | Actual time |
|------------|---------------------|---------------|-------------|
| Day 1      | HTML                | 2 hours       | 3 hours     |
|            | CSS                 | 2 hours       | 2 hours     |
|            | JavaScript          | 3 hours       | 2 hours     |
|            |                     |               |             |
| Day 2      | HTML                | 2 hours       | 3 hours     |
|            | JavaScript          | 3 hours       | 3 hours     |
|            | CSS                 | 2 hours       | 1 hour      |
|            | Javascript          | 3 hours       | 4 hours     |
|            |                     |               |             |
| Day 3      | JavaScript          | 3 hours       | 2 hours     |
|            | CSS                 | 3 hours       | 3 hours     |
|            | HTML                | 1 hour        | 1 hour      |
|            | JavaScript          | 3 hours       | 3 hours     |
|            |                     |               |             |
| Day 4      | HTML                | 1 hour        | 1 hour      |
|            | CSS                 | 2 hours       | 3 hours     |
|            | JavaScript          | 3 hours       | 2 hours     |
|            | CSS                 | 3 hours       | 2 hours     |
|            | Testing             | 2 hours       | 2 hours     |
|            |                     |               |             |
| Day 5      | Present application |               |             |
| Total Time |                     | 38 hours      | 37 hours    |
