export const Dropdown = () => {
    // let btn = document.querySelector('#btn')
    let dropdown = document.querySelector('.drop-down')
    // let searchBtn = document.querySelector('#btn')

    dropdown.classList.toggle('active');
}
export const PlayPause1 = () => {
    const myVideo = document.getElementById("demo-video1"); 
    const playBtn = document.getElementById("playCircle1");
    const pauseBtn = document.getElementById("pauseCircle1");

    if (myVideo.paused) {
        myVideo.play(); 
        playBtn.style.display = "none";
        pauseBtn.style.display = "block";
    }else {
        myVideo.pause(); 
        pauseBtn.style.display = "none";
        playBtn.style.display = "block";
    } 
}

export const PlayPause2 = () => {
    const myVideo = document.getElementById("demo-video2"); 
    const playBtn = document.getElementById("playCircle2");
    const pauseBtn = document.getElementById("pauseCircle2");

    if (myVideo.paused) {
        myVideo.play(); 
        playBtn.style.display = "none";
        pauseBtn.style.display = "block";
    }else {
        myVideo.pause(); 
        pauseBtn.style.display = "none";
        playBtn.style.display = "block";
    } 
} 

export const PlayPause3 = () => {
    const myVideo = document.getElementById("demo-video3"); 
    const playBtn = document.getElementById("playCircle3");
    const pauseBtn = document.getElementById("pauseCircle3");

    if (myVideo.paused) {
        myVideo.play(); 
        playBtn.style.display = "none";
        pauseBtn.style.display = "block";
    }else {
        myVideo.pause(); 
        pauseBtn.style.display = "none";
        playBtn.style.display = "block";
    } 
} 

export const toggleDropdown = () => {
    const dropdownDiv = document.getElementById("dropdownDiv");
    const arrowDiv = document.getElementById("arrowDiv");
    if (dropdownDiv.classList.contains("open")) {
        dropdownDiv.classList.remove("open");
        arrowDiv.classList.remove("arrow-down");
        arrowDiv.classList.add("arrow-up");
    } else {
        dropdownDiv.classList.add("open");
        
        arrowDiv.classList.remove("arrow-up");
        arrowDiv.classList.add("arrow-down");
    }
}