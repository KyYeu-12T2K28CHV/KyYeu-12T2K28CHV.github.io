const students=[
{name:"Bùi Hồng Anh",                birthDate:"20/12/2008", school:"DNU", major:"Sư phạm toán học", image:"../img/thanhvien/1/bhanh.png",        imggrad:"../img/thanhvien/1/grad.jpg"},
{name:"Ngô Huỳnh Gia Bảo",           birthDate:"28/02/2008", school:"USSH", major:"Nhật bản học", image:"../img/thanhvien/2/nhgbao.png",       imggrad:"../img/thanhvien/2/grad.jpg"},
{name:"Văn Minh Hiển Đạt",           birthDate:"20/01/2008", school:"UIT", major:"Kỹ thuật máy tính", image:"../img/thanhvien/3/vmhdat.png",       imggrad:"../img/thanhvien/3/grad.jpg"},
{name:"Lê Trần Anh Hào",             birthDate:"08/09/2008", school:"TDTU", major:"Tài chính ngân hàng", image:"../img/thanhvien/4/ltahao.png",         imggrad:"../img/thanhvien/4/grad.jpg"},
{name:"Trịnh Gia Hân",               birthDate:"20/07/2008", school:"FTU", major:"Kinh tế đối ngoại", image:"../img/thanhvien/5/ghan.png",       imggrad:"../img/thanhvien/5/grad.jpg"},
{name:"Lê Huy Hùng",                 birthDate:"22/04/2008", school:"UIT", major:"An toàn thông tin", image:"../img/thanhvien/6/lhhung.png",   imggrad:"../img/thanhvien/6/grad.jpg"},
{name:"Nguyễn Khắc Huy",             birthDate:"04/11/2008", school:"HCMUT", major:"Thiết kế vi mạch", image:"../img/thanhvien/7/nkhuy.png",   imggrad:"../img/thanhvien/7/grad.jpg"},
{name:"Đặng Đình Khôi",              birthDate:"11/05/2008", school:"T01", major:"An ninh mạng", image:"../img/thanhvien/8/ddkhoi.png",   imggrad:"../img/thanhvien/8/grad.jpg"},
{name:"Phạm Nguyễn Anh Khôi",        birthDate:"16/09/2008", school:"IUH", major:"Tự động hóa", image:"../img/thanhvien/9/pnakhoi.jpg",   imggrad:"../img/thanhvien/9/grad.jpg"},
{name:"Phạm Võ Hoàng Lan",           birthDate:"25/06/2008", school:"UEL", major:"Kế toán (Chuyên ngành kế toán và ptdl)", image:"../img/thanhvien/10/grad.jpg",   imggrad:"../img/thanhvien/10/grad.jpg"},
{name:"Nguyễn Hoàng Linh",           birthDate:"29/06/2008", school:"UTC2", major:"Logistics và Quản lý chuỗi cung ứng", image:"../img/thanhvien/11/grad.jpg",   imggrad:"../img/thanhvien/11/grad.jpg"},
{name:"Nguyễn Hoàng Long",           birthDate:"20/10/2008", school:"HCMUS", major:"Nhóm ngành Vật lý học", image:"../img/thanhvien/12/nhlong.png",  imggrad:"../img/thanhvien/12/grad.jpg"},
{name:"Trần Hải Minh",               birthDate:"15/01/2008", school:"HCMUT", major:"Kỹ thuật cơ khí", image:"../img/thanhvien/13/thminh.png",  imggrad:"../img/thanhvien/13/grad.jpg"},
{name:"Võ Minh Nga",                 birthDate:"11/02/2008", school:"UIT", major:"An toàn thông tin", image:"../img/thanhvien/14/vmnga.png",    imggrad:"../img/thanhvien/14/grad.jpg"},
{name:"Nguyễn Đặng Khánh Ngân",      birthDate:"16/01/2008", school:"DNU", major:"Sư phạm toán học", image:"../img/thanhvien/15/ndkngan.png",  imggrad:"../img/thanhvien/15/grad.jpg"},
{name:"Lê Xuân Nghi",                birthDate:"06/09/2008", school:"UEH", major:"Kinh doanh quốc tế", image:"../img/thanhvien/16/lxnghi.png",    imggrad:"../img/thanhvien/16/grad.jpg"},
{name:"Nguyễn Phạm Thị Quỳnh Như",   birthDate:"01/07/2008", school:"HUEdu", major:"Sư phạm toán học", image:"../img/thanhvien/17/nptqnhu.png",   imggrad:"../img/thanhvien/17/grad.jpg"},
{name:"Dương Thị Khánh Ninh",        birthDate:"23/07/2008", school:"HUEmed", major:"Y khoa", image:"../img/thanhvien/18/dtkninh.png",   imggrad:"../img/thanhvien/18/grad.jpg"},
{name:"Lâm Minh Tâm",                birthDate:"14/10/2008", school:"UIT", major:"AI", image:"../img/thanhvien/19/lmtam.png",       imggrad:"../img/thanhvien/19/grad.jpg"},
{name:"Đặng Trần Phước Thái",        birthDate:"03/03/2008", school:"HCMUT", major:"Hạt nhân", image:"../img/thanhvien/20/dtpthai.png",     imggrad:"../img/thanhvien/20/grad.jpg"},
{name:"Huỳnh Thị Thu Thảo",          birthDate:"18/02/2008", school:"SGU", major:"Sư phạm tiếng anh", image:"../img/thanhvien/21/httthao.png",     imggrad:"../img/thanhvien/21/grad.jpg"},
{name:"Hà Văn Mạnh Thắng",           birthDate:"19/08/2008", school:"UEL", major:"Toán kinh tế Chuyên ngành phân tích dữ liệu", image:"../img/thanhvien/22/hvmthang.png",    imggrad:"../img/thanhvien/22/grad.jpg"},
{name:"Trần Nhật Trường",            birthDate:"01/09/2008", school:"HCMUS", major:"Nhóm ngành Máy tính và CNTT", image:"../img/thanhvien/23/tntruong.png",    imggrad:"../img/thanhvien/23/grad.jpg"},
{name:"Nguyễn Hà An",                birthDate:"29/12/2008", school:"HCMUT", major:"Ngành Khoa học máy tính", image:"../img/thanhvien/24/nhan.jpg",           imggrad:"../img/thanhvien/24/grad.jpg"},
{name:"Nguyễn Hữu Đại",              birthDate:"18/03/2008", school:"HCMUS", major:"Nhóm ngành Máy tính và CNTT", image:"../img/thanhvien/25/ndai.png",          imggrad:"../img/thanhvien/25/grad.jpg"},
{name:"Trần Hữu Đạt",                birthDate:"15/12/2008", school:"UIT", major:"Mạng máy tính và An toàn thông tin", image:"../img/thanhvien/26/thdat.png",        imggrad:"../img/thanhvien/26/grad.jpg"},
{name:"Nguyễn Hải Đăng",             birthDate:"08/05/2008", school:"HCMUS", major:"Công nghệ thông tin CTTCTA", image:"../img/thanhvien/27/nhdang.jpg",      imggrad:"../img/thanhvien/27/grad.jpg"},
{name:"Bùi Nguyễn Khánh Đoan",       birthDate:"14/11/2008", school:"UEH", major:"Hệ thống thông tin quản lý", image:"../img/thanhvien/28/bnkdoan.png",    imggrad:"../img/thanhvien/28/grad.jpg"},
{name:"Nguyễn Duy Hoàng",            birthDate:"07/09/2008", school:"HCMUS", major:"Nhóm ngành Vật lý học", image:"../img/thanhvien/29/ndhoang.png",    imggrad:"../img/thanhvien/29/grad.jpg"},
{name:"Nguyễn Mạnh Hùng",            birthDate:"16/04/2008", school:"UIT", major:"Khoa học máy tính", image:"../img/thanhvien/30/nmhung.png",      imggrad:"../img/thanhvien/30/grad.jpg"},
{name:"Bùi Đình Lộc",                birthDate:"23/01/2008", school:"UIT", major:"Khoa học máy tính", image:"../img/thanhvien/31/bdloc.png",        imggrad:"../img/thanhvien/31/grad.jpg"},
{name:"Mai Đình Nhật",               birthDate:"04/11/2008", school:"UIT", major:"Khoa học máy tính", image:"../img/thanhvien/32/dmnhat.png",      imggrad:"../img/thanhvien/32/grad.jpg"},
{name:"Nguyễn Văn Hoàng Phát",       birthDate:"03/01/2008", school:"UIT", major:"Khoa học máy tính", image:"../img/thanhvien/33/nvhphat.jpg",      imggrad:"../img/thanhvien/33/grad.jpg"},
{name:"Trần Thiên Phúc",             birthDate:"24/04/2008", school:"HCMUS", major:"AI", image:"../img/thanhvien/34/ttphuc.png",      imggrad:"../img/thanhvien/34/grad.jpg"},
{name:"Lê Xuân Trọng",               birthDate:"14/06/2008", school:"HCMUS", major:"APCS", image:"../img/thanhvien/35/lxtrong.png",    imggrad:"../img/thanhvien/35/grad.jpg"},
];

const board=document.getElementById("board");
const popup=document.getElementById("popup");
const pimg=document.getElementById("pimg");
const pname=document.getElementById("pname");
const pschool=document.getElementById("pschool");
const pmajor=document.getElementById("pmajor");
const pbirthDate=document.getElementById("pbirthDate");
const memberSearch=document.getElementById("memberSearch");
const memberCount=document.getElementById("memberCount");
const emptyState=document.getElementById("emptyState");
const popupIndex=document.getElementById("popupIndex");
const closePopupButton=document.getElementById("closePopup");
const desktopLayout=window.matchMedia("(min-width: 1101px)");
const toolbar=document.getElementById("toolbar");

const CARD_W=100;
const CARD_H=150;
const MAX_OVERLAP=0.1;

const cards=[];
let selectedCard=null;
let lastFocusedElement=null;

function getVisibleCards(){
    return cards.filter(card=>!card.element.hidden);
}

function normalizeText(value){
    return value.normalize("NFD")
        .replace(/[\u0300-\u036f]/g,"")
        .replace(/đ/gi,"d")
        .toLocaleLowerCase("vi");
}

function filterCards(){
    const query=normalizeText(memberSearch.value.trim());
    let visibleCount=0;

    cards.forEach(card=>{
        const searchableText=normalizeText(card.data.name);
        card.element.hidden=query!==""&&!searchableText.includes(query);
        if(!card.element.hidden) visibleCount++;
    });

    memberCount.textContent=query
        ? `${visibleCount} kết quả`
        : `${visibleCount} thành viên`;
    emptyState.hidden=visibleCount!==0;

    if(selectedCard&&selectedCard.element.hidden){
        closePopup();
    }else if(!popup.classList.contains("hidden")){
        renderProfile();
    }
}

function overlapRect(a,b){
    const left=Math.max(a.x,b.x);
    const right=Math.min(a.x+a.w,b.x+b.w);
    const top=Math.max(a.y,b.y);
    const bottom=Math.min(a.y+a.h,b.y+b.h);
    return !(right<=left||bottom<=top);
}

function validPosition(rect,placed,toolbarRect){
    if(rect.bounds.x<0||rect.bounds.y<0
        ||rect.bounds.x+rect.bounds.w>window.innerWidth
        ||rect.bounds.y+rect.bounds.h>window.innerHeight
        ||overlapRect(rect.bounds,toolbarRect))
        return false;

    for(const position of placed){
        const area=getIntersectionArea(rect,position);
        if(area>CARD_W*CARD_H*MAX_OVERLAP) return false;
    }

    return true;
}

function getVisualBounds(rect){
    const radians=rect.angle*Math.PI/180;
    const width=Math.abs(CARD_W*Math.cos(radians))+Math.abs(CARD_H*Math.sin(radians));
    const height=Math.abs(CARD_W*Math.sin(radians))+Math.abs(CARD_H*Math.cos(radians));

    return{
        x:rect.x+(CARD_W-width)/2,
        y:rect.y+(CARD_H-height)/2,
        w:width,
        h:height
    };
}

function getCorners(rect){
    const radians=rect.angle*Math.PI/180;
    const cosine=Math.cos(radians);
    const sine=Math.sin(radians);
    const centerX=rect.x+CARD_W/2;
    const centerY=rect.y+CARD_H/2;

    return[
        [-CARD_W/2,-CARD_H/2],
        [CARD_W/2,-CARD_H/2],
        [CARD_W/2,CARD_H/2],
        [-CARD_W/2,CARD_H/2]
    ].map(([x,y])=>({
        x:centerX+x*cosine-y*sine,
        y:centerY+x*sine+y*cosine
    }));
}

function getIntersectionArea(first,second){
    let polygon=getCorners(first);
    const clip=getCorners(second);

    for(let edgeIndex=0;edgeIndex<clip.length;edgeIndex++){
        const edgeStart=clip[edgeIndex];
        const edgeEnd=clip[(edgeIndex+1)%clip.length];
        const input=polygon;
        polygon=[];
        if(input.length===0) return 0;

        let start=input[input.length-1];
        for(const end of input){
            const startCross=(edgeEnd.x-edgeStart.x)*(start.y-edgeStart.y)
                -(edgeEnd.y-edgeStart.y)*(start.x-edgeStart.x);
            const endCross=(edgeEnd.x-edgeStart.x)*(end.y-edgeStart.y)
                -(edgeEnd.y-edgeStart.y)*(end.x-edgeStart.x);
            const startInside=startCross>=-1e-8;
            const endInside=endCross>=-1e-8;

            if(endInside!==startInside){
                const dx=end.x-start.x;
                const dy=end.y-start.y;
                const edgeX=edgeEnd.x-edgeStart.x;
                const edgeY=edgeEnd.y-edgeStart.y;
                const denominator=dx*edgeY-dy*edgeX;
                if(Math.abs(denominator)>1e-10){
                    const t=((edgeStart.x-start.x)*edgeY-(edgeStart.y-start.y)*edgeX)
                        /denominator;
                    polygon.push({x:start.x+t*dx,y:start.y+t*dy});
                }
            }
            if(endInside) polygon.push(end);
            start=end;
        }
    }

    let area=0;
    for(let index=0;index<polygon.length;index++){
        const next=polygon[(index+1)%polygon.length];
        area+=polygon[index].x*next.y-next.x*polygon[index].y;
    }
    return Math.abs(area)/2;
}

function randomPosition(placed,toolbarRect){
    const maxX=Math.max(0,window.innerWidth-CARD_W);
    const maxY=Math.max(0,window.innerHeight-CARD_H);

    for(let attempt=0;attempt<25000;attempt++){
        const rect={
            x:Math.random()*maxX,
            y:Math.random()*maxY,
            w:CARD_W,
            h:CARD_H,
            angle:Math.random()*50-25
        };
        rect.bounds=getVisualBounds(rect);
        if(validPosition(rect,placed,toolbarRect)) return rect;
    }

    return null;
}

function layoutCards(animate=false){
    if(!desktopLayout.matches) return;

    const visibleCards=getVisibleCards();
    if(visibleCards.length===0) return;

    const toolbarBounds=toolbar.getBoundingClientRect();
    const toolbarRect={
        x:toolbarBounds.left-12,
        y:toolbarBounds.top-12,
        w:toolbarBounds.width+24,
        h:toolbarBounds.height+24
    };
    const placementOrder=[...visibleCards];
    const placements=[];
    const placed=[];

    for(let index=placementOrder.length-1;index>0;index--){
        const randomIndex=Math.floor(Math.random()*(index+1));
        [placementOrder[index],placementOrder[randomIndex]]=
            [placementOrder[randomIndex],placementOrder[index]];
    }

    for(const card of placementOrder){
        const position=randomPosition(placed,toolbarRect);
        if(!position){
            document.body.classList.add("grid-layout");
            return;
        }
        placed.push(position);
        placements.push({card,position});
    }

    document.body.classList.remove("grid-layout");
    placements.forEach(({card,position},index)=>{
        const element=card.element;
        card.element.classList.add("is-positioned");

        if(animate){
            element.style.transition=
                "left .75s cubic-bezier(.2,.8,.2,1), top .75s cubic-bezier(.2,.8,.2,1), transform .75s cubic-bezier(.2,.8,.2,1)";
            element.style.transitionDelay=`${Math.min(index*18,360)}ms`;
            requestAnimationFrame(()=>{
                element.style.left=`${position.x}px`;
                element.style.top=`${position.y}px`;
                element.style.transform=`rotate(${position.angle}deg)`;
            });
        }else{
            element.style.transition="none";
            element.style.transitionDelay="0ms";
            element.style.left=`${position.x}px`;
            element.style.top=`${position.y}px`;
            element.style.transform=`rotate(${position.angle}deg)`;
            requestAnimationFrame(()=>{
                element.style.removeProperty("transition");
                element.style.removeProperty("transition-delay");
            });
        }
    });
}

function renderProfile(){
    if(!selectedCard) return;

    const visibleCards=getVisibleCards();
    const index=visibleCards.indexOf(selectedCard);
    if(index<0) return;

    const student=selectedCard.data;
    pimg.src=student.imggrad||student.image;
    pimg.alt=`Ảnh của ${student.name}`;
    pname.textContent=student.name;
    pschool.textContent=student.school||"Chưa cập nhật";
    pmajor.textContent=student.major||"Chưa cập nhật";
    pbirthDate.textContent=student.birthDate||"Chưa cập nhật";
    popupIndex.textContent=`${index+1} / ${visibleCards.length}`;
    document.getElementById("prevMember").disabled=visibleCards.length<2;
    document.getElementById("nextMember").disabled=visibleCards.length<2;
}

function openProfile(card){
    selectedCard=card;
    lastFocusedElement=document.activeElement;
    renderProfile();
    popup.classList.remove("hidden");
    document.body.classList.add("dialog-open");
    closePopupButton.focus();
}

function closePopup(){
    if(popup.classList.contains("hidden")) return;
    popup.classList.add("hidden");
    document.body.classList.remove("dialog-open");

    const focusTarget=lastFocusedElement&&!lastFocusedElement.hidden
        ?lastFocusedElement
        :memberSearch;
    focusTarget.focus();
    selectedCard=null;
}

function moveProfile(direction){
    const visibleCards=getVisibleCards();
    if(visibleCards.length<2||!selectedCard) return;

    const currentIndex=visibleCards.indexOf(selectedCard);
    const nextIndex=(currentIndex+direction+visibleCards.length)%visibleCards.length;
    selectedCard=visibleCards[nextIndex];
    renderProfile();
}

function shuffleCards(){
    const visibleCards=getVisibleCards();

    if(!desktopLayout.matches||document.body.classList.contains("grid-layout")){
        for(let index=visibleCards.length-1;index>0;index--){
            const randomIndex=Math.floor(Math.random()*(index+1));
            [visibleCards[index],visibleCards[randomIndex]]=
                [visibleCards[randomIndex],visibleCards[index]];
        }
        visibleCards.forEach(card=>board.appendChild(card.element));
        return;
    }

    layoutCards(true);
}

students.forEach((student,index)=>{
    const button=document.createElement("button");
    const image=document.createElement("img");
    const name=document.createElement("span");

    button.type="button";
    button.className="card";
    button.setAttribute("aria-label",`Mở hồ sơ của ${student.name}`);
    button.style.zIndex=index;
    button.style.left=`${window.innerWidth/2}px`;
    button.style.top=`${window.innerHeight/2}px`;
    image.src=student.image;
    image.alt="";
    name.className="card-name";
    name.textContent=student.name;
    button.append(image,name);
    const card={element:button,data:student};
    button.addEventListener("click",()=>openProfile(card));
    board.appendChild(button);
    cards.push(card);
});

document.getElementById("shuffleBtn").addEventListener("click",shuffleCards);
memberSearch.addEventListener("input",filterCards);
closePopupButton.addEventListener("click",closePopup);
document.getElementById("prevMember").addEventListener("click",()=>moveProfile(-1));
document.getElementById("nextMember").addEventListener("click",()=>moveProfile(1));
popup.addEventListener("click",event=>{
    if(event.target===popup) closePopup();
});

document.addEventListener("keydown",event=>{
    if(!popup.classList.contains("hidden")){
        if(event.key==="Escape"){
            closePopup();
        }else if(event.key==="ArrowLeft"){
            moveProfile(-1);
        }else if(event.key==="ArrowRight"){
            moveProfile(1);
        }
        return;
    }

    const activeElement=document.activeElement;
    if(event.key==="/"&&activeElement.tagName!=="INPUT"&&activeElement.tagName!=="TEXTAREA"){
        event.preventDefault();
        memberSearch.focus();
    }else if(event.key==="Escape"&&memberSearch.value){
        memberSearch.value="";
        filterCards();
    }
});

window.addEventListener("resize",layoutCards);
layoutCards();