# Game Flow

## Landing Page

- **Step 1:** User enters the webpage.
- **Step 2:** User is shown a field to enter their name.
- **Step 3:** User (host) enters their name and hits submit.
  - Invited users enter their name, room code is autofilled, and they hit submit.
- **Step 4:** User is redirected to a game lobby.

## Lobby

- **Step 5:** User can invite other to join via room code.
- **Step 6:** Host is able to select music genre and specify # of rounds.
- **Step 7:** Host can select a ‘start game’ button when ready.
  -Host runs start game function.
  -Start game sends get request to server to get the playlist for selected genre
  -Once playlist is obtained, server emits the notification for everybody to switch to countdown and runs a setTimeout on serverside.
  -After setTimeout is completed, server then emits the start of the round and calls another setTimeout for 30s.

## Game Board (Per Round)

- **Step 8:** User(s) are shown a countdown from 5.
- **Step 9:** User(s) are played the first song for 30 seconds.
- **Step 10:** User(s) can submit song title guesses in an input field (no limit).
- **Step 11:** User guesses will appear in chat box in-real time.

  - Incorrect guesses are visible in chat.
  - Correct guesses are displayed as a confirmation and score increase.
  - Correct guesses disable the text field entry for that user.

- **Step 12:** Scores are updated on leaderboard in-real time.
- **Step 13:** Song finishes playing and artist and song title is revealed.
- **Step 14:** Small scoreboard showing how many points earned appears below.
- **Step 15:** If there are rounds remaining, they are brought to step 8. Else step 16.

## End of Game

- **Step 16:** Final scoreboard shows the winner.
- **Step 17:** Host is given options to change genre and total rounds played.
- **Step 18:** Host can select “Play Again” button when ready to start the game.
