// Game Data
const gameData = {
    "exploding-kittens": {
        title: "Exploding Kittens",
        rules: `
            <section id="goal">
                <h2>The Goal</h2>
                <p>We’re playing a game where you **don’t** want to find a BOOM! (an Exploding Kitten). If you explode, you’re **out!**</p>
                <p>Be the last player standing to **win** the game!</p>
            </section>
            <section id="setup">
                <h2>Setup (Quick & Easy!)</h2>
                <ul>
                    <li>Each player starts with **7 random cards** + **1 Save Me (Defuse) card.**</li>
                    <li>Shuffle **BOOM! (Exploding Kitten)** cards into the deck (not too many!).</li>
                    <li>Place the deck in the center—**ready to play!**</li>
                </ul>
            </section>
            <section id="gameplay">
                <h2>How to Play (Step by Step)</h2>
                <ul>
                    <li>Play a card if you want, then draw a card from the deck.</li>
                    <li>If you get a BOOM! (Exploding Kitten), use a **Save Me (Defuse) card** or you're **out!**</li>
                    <li>Last player standing **wins!**</li>
                </ul>
            </section>
            <section id="fun-cards">
                <h2>Fun Cards</h2>
                <ul>
                    <li><strong>Skip!</strong> – Avoid drawing a card this turn.</li>
                    <li><strong>See the Future!</strong> – Peek at the next 3 cards.</li>
                    <li><strong>Shuffle!</strong> – Mix the deck.</li>
                    <li><strong>Nope!</strong> – Stop another player’s action!</li>
                </ul>
            </section>
        `
    },
    "unstable-unicorns": {
        title: "Unstable Unicorns",
        rules: `
            <section id="goal">
                <h2>The Goal</h2>
                <p>Build a stable of unicorns before your opponents do!</p>
            </section>
            <section id="setup">
                <h2>Setup</h2>
                <ul>
                    <li>Each player starts with **1 Baby Unicorn** and **5 random cards**.</li>
                    <li>Shuffle the deck and place it in the center.</li>
                </ul>
            </section>
            <section id="gameplay">
                <h2>How to Play</h2>
                <ul>
                    <li>Draw a card, then play a card from your hand.</li>
                    <li>Use **Magic**, **Instant**, or **Upgrade/Downgrade** cards to control the game!</li>
                    <li>Collect the required number of unicorns to **win!**</li>
                </ul>
            </section>
            <section id="fun-cards">
                <h2>Fun Cards</h2>
                <ul>
                    <li><strong>Neigh!</strong> – Stop any action card from being played.</li>
                    <li><strong>Upgrade!</strong> – Improve your stable.</li>
                    <li><strong>Downgrade!</strong> – Mess with your opponents.</li>
                </ul>
            </section>
        `
    }
};

// Load game data based on URL
const urlParams = new URLSearchParams(window.location.search);
const gameKey = urlParams.get("game");

if (gameData[gameKey]) {
    document.getElementById("game-title").innerText = gameData[gameKey].title;
    document.getElementById("game-content").innerHTML = gameData[gameKey].rules;
} else {
    document.getElementById("game-title").innerText = "Game Not Found";
    document.getElementById("game-content").innerHTML = "<p>Oops! The game you selected does not exist.</p>";
}