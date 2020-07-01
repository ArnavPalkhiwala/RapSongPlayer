const songs = [
    "Blinding Lights - The Weeknd",
    "Drip Too Hard - Lil Baby (feat. Gunna)",
    "Emotionally Scarred - Lil Baby",
    "Heartless - Polo G (feat. Mustard)",
    "High Fashion - Roddy Ricch",
    "Pop Out - Polo G (feat. Lil Tjay)",
    "P2 - Lil Uzi Vert",
    "Sum 2 Prove - Lil Baby"
  ]



  const makeSongList = () => {
    const songList = document.createElement('ol');
  
    for (let i = 0; i <songs.length; i++) {
      const song = document.createElement('li');
      song.appendChild(document.createTextNode(songs[i]));
      
      songList.appendChild(song)
    }
    return songList;
  }
  
  document.getElementById('songsList').appendChild(makeSongList())
  
  songsList.onclick = (e) => {
    const clickedItem = e.target
    const source = document.getElementById('source')
      source.src = 'songs/' + clickedItem.innerText + ".mp3"

      document.getElementById('currentlyPlaying').innerText = "Currently Playing: "
      document.getElementById('currentSong').innerText = clickedItem.innerText

      player.load()
      player.play()
    

  }

  const playSong = () => {
    if(player.readyState){
      player.play()
    }
  }

  const pauseSong = () => {
    player.pause()
  }

  const slider = document.getElementById('volumeSlider')
    slider.oninput = (e) => {
    const volume = e.target.value
    player.volume = volume
  }

  const updateProgressInSong = () => {

    if(player.currentTime > 0){
      const progressBar = document.getElementById('progress')
      progressBar.value = (player.currentTime / player.duration) * 100
    }
    
  }
 