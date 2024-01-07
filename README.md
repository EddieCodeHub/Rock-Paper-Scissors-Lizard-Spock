# Rock Paper Scissors Lizard Spock - Retro Edition

Rock Paper Scissors Lizard Spock - Retro Edition, is a site made to provide the user a fun game to play against the computer. The site is a game of chance, inspired by "Rock Paper Scissors Lizard Spock" from the popular tv show "The Big Bang Theory", with a retro twist. 

The project has been made using HTML, CSS and will display Javascript functionality.

## Table of Contents

- [Rock Paper Scissors Lizard Spock](#rock-paper-scissors-lizard-spock)
    - [Table of Contents](#table-of-contents)
    - [UX](#ux)
        - [Project Goals](#project-goals)
            - [User Goals](#user-goals)
            - [Colour Sceme](#colour-scheme)
            - [Typography](#typography)
    - [Features](#features)
        - [Existing Features](#existing-features)
        - [Features Left To Impliment](#features-left-to-impliment)
    - [Testing](#testing)
        - [Fixed Bugs](#fixed-bugs)
        - [Unfixed Bugs](#unfixed-bugs)
        - [Validator Testing](#validator-testing)
            - [HTML](#html)
            - [CSS](#css)
            - [JavaScript](#javascript)
            - [Accessibility](#accessibility)
    - [Deployment](#deployment)
    - [Credits](#credits)
        - [Content](#content)
        - [Media](#media) 
        



## UX

### Project Goals

- The site will have a "Retro" colour scheme. This is to fioty with the retro theme of the site.

- The site will provide the user with a fun game of chance, in which the user will play against the computer.

#### User Goals

- As a user i want to be able to see the game clearly.

- As a user i would like the rules to the game provided to me on the site, to prevent me from needing to open another tab.

- As a user i would like to be able to see all elements of the game on my screen, without needing to scroll during the game.

- As a user i would like to feel like i am playing a fair game.


#### Colour Scheme

- #991f00 - I have chosen this dark maroon/orange colour as i thought it looked "retro". It also contrasts well with my lighter "section" colours.

- #ff8566 - I have Chosen this light peach colour as my "section" colour as i feel this colour also looks "retro". it also contrasts very well with my background colour, and black text.

- #0099cc - I have Chosen this blue colour for the background of my pop-up windows as is stands out very well from the rest of the page. Also has a retro look.

- #99e6ff - I chose this lighter blue colour as the colour for my buttons as it contrasts well with my other colours, especially the blue chosen for my popups which the buttons feature the most on. It also fits retro theme.

- #66ff66 - This colour was used for the background for my scoreboard, this makes the scoreboard stand out from other elements while still fitting the overall theme.

#### Typography

- I chose 'Press Start 2P' and 'Preahvihear' as my primary fonts for this site, with a backup of 'sans-serif' for browsers that dont support these fonts.

- I have used 'Press Start 2P' for all the text on the main page as it perfectly fits my retro theme.

- I decided to use 'Preahvihear' as the font for my "rules" pop up, as it is easier to read than my main font, which helps this element that has the only purpose of being read by the user. I still feel the font also keeps in theme as it isnt a very "formal" font.

## Features 

### Existing features

#### Score Board

- The score board for my game is located below the heading, near the top of the page. This is due to it being the most important element for the player too see, and allows the game to be played without scrolling.

#### Rules Modal

- My rules button is positioned just under the heading, and overlaying the scoreboard in some screen sizes. This is so the user can always see it if they need to check the rules, without taking up too much space on the page.

- The rules Modal takes up the center of the page when triggered. Allowing clear location and reading. The font is always big enough to read at any screen size.

- The Modal is a different colour to anything on the main page, to create a large contrast and easy differentiation.

#### Game Area

- The Game area is the last element on the page. This contains my players button area and the Choice board. the placement of these elements are chosen to allow the player to play the game with everything they need on screen, to prevent scrolling being needed to play.

- The colours of these areas contrast well with the background of the page and their contents.

#### Game End Screen

- The game end screen is the same colour as the rules modal, this keped all pop-ups in theme with each other and keeps consistancy in the site.

- This window is aimed to provide the user with the information on who won the game, and provide a means to "restart" the game if they wish to play again.

- This window is also styled to cover the buttons, so that the user cant keep playing the game once it is over.

### Features Left To Impliment

- I would have liked to have got the scores to reset, rather than using a "location.reload()" to restart the game. I did attempt to do this, but ran out of time trying to get it to work, so i had to settle for reloading the page.

- I also would have liked to remove the functionality of the buttons once the game had ended, then forcing the player to restart, but i also ran out of time trying to impliment this.

## Testing

### Fixed Bugs

- When creating my "decideWinner()" function, i accidently used an "=" instead of a "+" when trying to combine my strings. Causing the function to not work.

- When creating my "scoreUp()" functions, i used an "=" instead of "===" when trying to check the value of the scores to trigger my "player/cpuWins()" functions. This caused the function to not work.

### Unfixed Bugs

- I dont have any Un-fixed bugs on my page, only features i wish to impliment as described above. 

### Validator Testing

#### HTML

#### CSS

#### JavaScript

#### Accessibility

## Deployment

I deployed my site using 'GitHub Pages'. the following steps are how i did it

- enter the github repository and click on the settings tab.
- in the source section, select the dropdown menu, then select the master branch.
- Once the master branch is selected, github provided a link to the completed website.

A live link can be found here - 

## Credits

### Content

- I used code suggested by Co-pilot to help create my "decideWinner()" function.

### Media

- All images on the site are personal creations.