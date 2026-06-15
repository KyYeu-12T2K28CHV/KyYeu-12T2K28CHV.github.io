const images = [ 
    { file:"../img/fotoexhi/0.png", title:"Mây Trên Núi", date:"12/03/2026", info:"Bình minh tại Tà Xùa." }, 
    { file:"../img/fotoexhi/1.jpg", title:"Mây Trên Núi", date:"12/03/2026", info:"Bình minh tại Tà Xùa." }, 
    { file:"../img/fotoexhi/2.jpg", title:"Mây Trên Núi", date:"12/03/2026", info:"Bình minh tại Tà Xùa." }, 
    { file:"../img/fotoexhi/3.jpg", title:"Mây Trên Núi", date:"12/03/2026", info:"Bình minh tại Tà Xùa." }, 
    { file:"../img/fotoexhi/4.jpg", title:"Mây Trên Núi", date:"12/03/2026", info:"Bình minh tại Tà Xùa." }, 
    { file:"../img/fotoexhi/5.jpg", title:"Mây Trên Núi", date:"12/03/2026", info:"Bình minh tại Tà Xùa." }, 
    { file:"../img/fotoexhi/6.jpg", title:"Mây Trên Núi", date:"12/03/2026", info:"Bình minh tại Tà Xùa." }, 
    { file:"../img/fotoexhi/7.jpg", title:"Mây Trên Núi", date:"12/03/2026", info:"Bình minh tại Tà Xùa." }, 
    { file:"../img/fotoexhi/8.jpg", title:"Mây Trên Núi", date:"12/03/2026", info:"Bình minh tại Tà Xùa." }, 
    { file:"../img/fotoexhi/9.jpg", title:"Mây Trên Núi", date:"12/03/2026", info:"Bình minh tại Tà Xùa." }, 
    { file:"../img/fotoexhi/10.jpg", title:"Mây Trên Núi", date:"12/03/2026", info:"Bình minh tại Tà Xùa." }, 
    { file:"../img/fotoexhi/11.jpg", title:"Mây Trên Núi", date:"12/03/2026", info:"Bình minh tại Tà Xùa." }, 
    { file:"../img/fotoexhi/12.jpg", title:"Mây Trên Núi", date:"12/03/2026", info:"Bình minh tại Tà Xùa." }, 
    { file:"../img/fotoexhi/13.jpg", title:"Mây Trên Núi", date:"12/03/2026", info:"Bình minh tại Tà Xùa." }, 
    { file:"../img/fotoexhi/14.jpg", title:"Mây Trên Núi", date:"12/03/2026", info:"Bình minh tại Tà Xùa." }, 
    { file:"../img/fotoexhi/15.jpg", title:"Mây Trên Núi", date:"12/03/2026", info:"Bình minh tại Tà Xùa." }, 
    { file:"../img/fotoexhi/16.jpg", title:"Mây Trên Núi", date:"12/03/2026", info:"Bình minh tại Tà Xùa." } 
    // { file:"../img/fotoexhi/1.jpg", title:"Mây Trên Núi", date:"12/03/2026", info:"Bình minh tại Tà Xùa." }, 
]; 

const gallery = document.querySelector(".gallery"); 
const frames = []; 
const bg1 = document.querySelector(".bg1"); 
const bg2 = document.querySelector(".bg2"); 
const bg3 = document.querySelector(".bg3"); 
const BACKGROUNDS = [ bg1, bg2, bg3 ]; 
const GROUP_NAMES = [ "LỚP 10", "LỚP 11", "LỚP 12" ]; 
let totalWidth = 0; 
const BASE_HEIGHT = 480; 
const SPACING = 300; 
const MARGIN = 80; 
const GROUP_SIZES = [ 4, 8, 5 ]; 
const BREAKPOINT_GAP = 1000; 

function getGroupStart(groupIndex){ 
    let sum = 0; 
    for( let i = 0; i < groupIndex; i++ ){ sum += GROUP_SIZES[i]; } 
    return sum; 
} 
    
function getGroupIndex(imageIndex){ 
    let sum = 0; 
    for( let i = 0; i < GROUP_SIZES.length; i++ ){ 
        sum += GROUP_SIZES[i]; 
        if(imageIndex < sum){ return i; } 
    } 
    return GROUP_SIZES.length - 1; 
} 

function isGroupStart(imageIndex){ 
    let sum = 0; 
    for( let i = 0; i < GROUP_SIZES.length - 1; i++ ){ 
        sum += GROUP_SIZES[i]; 
        if(imageIndex === sum){ return i + 1; }
    } 
    return -1; 
} 

function createBreakpoint( x, label ){ 
    const bp = document.createElement("div"); 
    bp.className = "breakpoint"; 
    bp.style.left = `${x}px`; 
    bp.innerHTML = `
        <div class="breakpoint-line"></div> 
        <div class="breakpoint-label"> ${label} </div>
    `; 
    gallery.appendChild(bp); 
} 

function createGallery(){ 
    createBreakpoint(-300, GROUP_NAMES[0]);
    images.forEach((photo,i)=>{ 
        const frame = document.createElement("div"); 
        frame.className = "frame"; const img = document.createElement("img"); 
        img.src = `/${photo.file}`; 
        frame.appendChild(img); 
        gallery.appendChild(frame); 
        frames.push(frame); 
        img.onload = ()=>{ 
            const ratio = img.naturalWidth / img.naturalHeight; 
            const width = BASE_HEIGHT * ratio; 
            frame.style.width = `${width}px`; 
            frame.style.height = `${BASE_HEIGHT}px`; 
            const groupStart = isGroupStart(i); 
            if(groupStart !== -1){ 
                createBreakpoint( totalWidth + BREAKPOINT_GAP / 2, GROUP_NAMES[groupStart] ); 
                totalWidth += BREAKPOINT_GAP; 
            } 
            frame.style.left = `${totalWidth}px`; 
            const maxTop = window.innerHeight - BASE_HEIGHT - MARGIN; 
            const bands = [ maxTop * 0.10, maxTop * 0.45, maxTop * 0.80 ]; 
            let y = bands[i % 3] + (Math.random()-0.5)*60; 
            y = Math.max( MARGIN, Math.min( y, maxTop ) ); 
            frame.style.top = `${y}px`; 
            totalWidth += width + SPACING; updateScrollArea(); 
        }; 
        frame.addEventListener( "click", ()=>openViewer(photo) ); 
    }); 
} 
createGallery(); 

function updateScrollArea(){ 
    document.body.style.height = `${Math.max( totalWidth, window.innerWidth )}px`; 
} 
    
function updateGallery(){ 
    const maxScroll = document.body.scrollHeight - window.innerHeight; 
    const progress = maxScroll <= 0 ? 0 : window.scrollY / maxScroll; 
    const move = progress * Math.max( 0, totalWidth - window.innerWidth );
    gallery.style.transform = `translateX(${-move}px)`; 
    updateFocus(move); 
    updateBackground(move); 
} 

function updateFocus(move){ 
    const center = move + window.innerWidth / 2; 
    frames.forEach(frame=>{ 
        const x = parseFloat( frame.style.left || 0 ); 
        const middle = x + frame.offsetWidth / 2; 
        const dist = Math.abs( center - middle ); 
        const scale = Math.max( 0.9, 1.12 - dist / 2200 ); 
        frame.style.scale = scale; 
    }); 
} 

function updateBackground(move){ 
    const center = move + window.innerWidth / 2; 
    let currentIndex = 0; 
    let best = Infinity; 
    frames.forEach((frame,i)=>{ 
        const x = parseFloat( frame.style.left || 0 ); 
        const middle = x + frame.offsetWidth / 2; 
        const dist = Math.abs( center - middle ); 
        if(dist < best){ best = dist; currentIndex = i; } }
    ); 
    const currentGroup = getGroupIndex( currentIndex ); 
    BACKGROUNDS.forEach( bg => bg.style.opacity = 0 ); 
    if( currentGroup === 0 ){ bg1.style.opacity = 1; return; } 
    const prev = currentGroup - 1; 
    const transitionStart = getGroupStart( currentGroup ) - 1; 
    const t = Math.max( 0, Math.min( 1, ( currentIndex - transitionStart ) / 2 ) ); 
    if( BACKGROUNDS[prev] ){ BACKGROUNDS[prev] .style.opacity = 1 - t; } 
    if( BACKGROUNDS[currentGroup] ){ BACKGROUNDS[currentGroup] .style.opacity = t; } 
} 

window.addEventListener( "scroll", updateGallery ); 
window.addEventListener( "resize", ()=>{ location.reload(); } ); 
/* ====================== VIEWER ====================== */ 
const overlay = document.querySelector( ".overlay" ); 
const viewerImage = document.getElementById( "viewerImage" ); 
const viewerTitle = document.getElementById( "viewerTitle" ); 
const viewerDate = document.getElementById( "viewerDate" ); 
const viewerInfo = document.getElementById( "viewerInfo" ); 

function openViewer(photo){ 
    viewerImage.src = `/${photo.file}`; 
    viewerTitle.textContent = photo.title; 
    viewerDate.textContent = photo.date; 
    viewerInfo.textContent = photo.info; 
    overlay.classList.add( "active" ); 
} 

function closeViewer(){ 
    overlay.classList.remove( "active" ); 
} 

document .querySelector( ".close-btn" ) .addEventListener( "click", closeViewer ); 
overlay.addEventListener( "click", e=>{ if( e.target === overlay ){ closeViewer(); } } ); 
document.addEventListener( "keydown", e=>{ if( e.key === "Escape" ){ closeViewer(); } } ); 
updateGallery();