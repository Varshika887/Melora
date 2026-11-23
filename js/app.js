/* =========================
   MELORA APP JAVASCRIPT
========================= */


/* =========================
   MOOD SELECTION
========================= */

function selectMood(mood) {

    const title = document.getElementById("recommendationTitle");

    if (title) {
        title.textContent = mood + " music for you";
    }

    showToast(
        mood + " mood selected ✨"
    );

}


/* =========================
   SONG PLAYER
========================= */

let isPlaying = false;

function playSong(songName) {

    const songTitle =
        document.getElementById("currentSong");

    const artist =
        document.getElementById("currentArtist");

    const playButton =
        document.getElementById("mainPlayButton");

    if (songTitle) {
        songTitle.textContent = songName;
    }

    if (artist) {
        artist.textContent = "Melora Music";
    }

    isPlaying = true;

    if (playButton) {
        playButton.textContent = "Ⅱ";
    }

    showToast(
        "Now playing: " + songName
    );

}


/* =========================
   PLAY / PAUSE
========================= */

function togglePlay() {

    const button =
        document.getElementById("mainPlayButton");

    const song =
        document.getElementById("currentSong");

    if (song && song.textContent.trim() === "Choose a song") {

        playSong("Golden Hour");

        return;
    }

    isPlaying = !isPlaying;

    if (isPlaying) {

        if (button) {
            button.textContent = "Ⅱ";
        }

        showToast("Music playing 🎵");

    } else {

        if (button) {
            button.textContent = "▶";
        }

        showToast("Music paused");

    }

}


/* =========================
   FEATURED MUSIC
========================= */

function playFeatured() {

    playSong("Golden Hour");

}


/* =========================
   SEARCH
========================= */

const searchInput =
    document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const searchText =
                searchInput.value.toLowerCase();

            const songs =
                document.querySelectorAll(".song-card");

            songs.forEach(function (song) {

                const title =
                    song.querySelector("h3")
                        .textContent
                        .toLowerCase();

                const artist =
                    song.querySelector("p")
                        .textContent
                        .toLowerCase();

                if (
                    title.includes(searchText) ||
                    artist.includes(searchText)
                ) {

                    song.style.display = "block";

                } else {

                    song.style.display = "none";

                }

            });

        }
    );

}


/* =========================
   TOAST MESSAGE
========================= */

function showToast(message) {

    const toast =
        document.getElementById("toast");

    if (!toast) {
        return;
    }

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(function () {

        toast.classList.remove("show");

    }, 2000);

}


/* =========================
   LIKE BUTTON
========================= */

const likeButton =
    document.querySelector(".like-button");

if (likeButton) {

    likeButton.addEventListener(
        "click",
        function () {

            if (likeButton.textContent === "♡") {

                likeButton.textContent = "♥";

                showToast("Added to Liked Songs ♡");

            } else {

                likeButton.textContent = "♡";

                showToast("Removed from Liked Songs");

            }

        }
    );

}


/* =========================
   FRIEND LISTEN BUTTONS
========================= */

const listenButtons =
    document.querySelectorAll(".listen-button");


listenButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            showToast(
                "Joining their listening session 🎧"
            );

        }
    );

});


/* =========================
   FRIEND REQUESTS
========================= */

function acceptRequest(button, name) {

    const card = button.parentElement;

    card.remove();

    showToast(
        name + " is now your friend! 🎉"
    );
}


function removeRequest(button) {

    const card = button.parentElement;

    card.remove();

    showToast(
        "Friend request removed"
    );
}


/* =========================
   LISTEN TOGETHER
========================= */

function listenTogether(friendName, songName) {

    playSong(songName);

    showToast(
        "Listening together with " + friendName + " 🎧"
    );
}


/* =========================
   CHAT SHORTCUT
========================= */

function openChat(friendName) {

    showToast(
        "Opening chat with " + friendName + " 💬"
    );
}


/* =========================
   SEND FRIEND REQUEST
========================= */

function sendFriendRequest(button, name) {

    button.textContent = "Request Sent ✓";

    button.style.background = "var(--sage)";

    button.style.color = "white";

    showToast(
        "Friend request sent to " + name
    );
}


/* =========================
   ADD FRIEND
========================= */

function showAddFriend() {

    const name = prompt(
        "Enter your friend's username:"
    );

    if (name && name.trim() !== "") {

        showToast(
            "Friend request sent to " + name
        );

    }

}


/* =========================
   LISTEN TOGETHER (CHAT)
========================= */

function startListenTogether() {

    playSong("Until I Found You");

    showToast(
        "Listen Together started 🎧"
    );

}


/* ==============================
   LOGOUT
============================== */

function logoutUser() {

    localStorage.removeItem("meloraUser");

    window.location.href = "login.html";
}
