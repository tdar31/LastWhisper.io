# fyre.gg

To-do

- Swap to single color schema
- Build out and parse rest of match history data returned from account API call
- Buy domain (done)
- Have region be linked to part of the query so you can toggle (done)
- Relink MongoDB and setup model structure
- Swapping font to a local import

/////////

- Parsing match data

ParticipantIdentites -> arr -> player.accountId = accountId -> finds specific player and returns participantId

participants[i].stats.participantId

-> stats
    - win
    - spell1Id
    - spell2Id
    - item1 through item6
    - kills
    - deaths
    - assists
    - champLevel
    - role

//////////

Home Page -> search -> API call for basic info (done) -> checks account Id against cached accountId's in DB

if found -> return existing save profile data and match history and populate profile page -> Only update if update button is hit

if not found -> 2nd API call using accountId to search for match data -> create new profile with account data + match history as push to mongoDB -> return new profile and populate profile page

when update button is hit repeat 'if not found' but overwrite existing profile with newly returned data

- All api calls have to match region searched
- Input sanitization needs to be setup (Riot has restrictios on usernames but still should have something)
- Remove mulitple themes and just go with one (red)

isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc. 
