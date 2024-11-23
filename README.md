Check src/templates folder for templates

-- Subjected to change once backend is added --

## Information on adding new games

- Copy gameTemplate.json
- Add in all game information as shown in template: (gameTemplate.json) and place into src/data
- Copy template.tsx and create new gameComponent with naming: (gameNameContent.tsx)
- Import necessary files into new game content tsx file (requires characterInfo templates explained below)
- Above requires assets for character images, as well as filling in characters array
- Add game to components/Section.tsx case statement

## Information on adding new characters

- Copy characterTemplate.json
- Add in all character info
- Import file into game content tsx file created when adding a new game
- Make sure that characters match up with characters array in game content tsx file

## Additional information

- Assets have to be in src for javascript
