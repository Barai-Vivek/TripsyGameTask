**Tasks covered:**

- **Create a RN Rummy app:**
  - On launch, it should open the 2-player game table in landscape mode and show:
    - Hand cards opening up.
    - Closed and open deck.
    - Sort button.
  
- **Gameplay:**
  1. Start the timer of your turn for 60 sec.
  2. A person can pick a card and then can discard.
  3. Once done or timer ends, the turn should move to the opponent. Once the opponent's timer ends, it should be your turn again. Repeat the above steps.

- **User Interaction:**
  - Provide a "Leave" button to exit the game at any point in time.

- **Structure:**
```
project-root/
|-- src/
|   |-- components/
|   |   |-- CardDeck.tsx
|   |   |-- CircularProgressBar.tsx
|   |   |-- Footer.tsx
|   |   |-- Header.tsx
|   |   |-- Table.tsx
|   |   |-- UserProfile.tsx
|   |   |-- index.ts
|   |   |-- types.ts
|   |-- asset/
|   |   |-- icons/
|   |   |   |-- [icon files]
|   |   |-- images.ts
|   |   |-- index.ts
|   |-- Constants.ts
|   |-- index.ts
|-- node_modules/
|-- package.json
|-- [other project files]
```

- **Dependencies Used:**
  - react-native-circular-progress-indicator
  - react-native-exit-app
  - react-native-reanimated
  - react-native-svg
  - react-native-svg-charts
