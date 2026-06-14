const students=[
{name:"Bùi Hồng Anh",                image:"../img/thanhvien/1/bhanh.png",        imggrad:"../img/thanhvien/1/grad.jpg"},
{name:"Ngô Huỳnh Gia Bảo",           image:"../img/thanhvien/2/nhgbao.png",       imggrad:"../img/thanhvien/2/grad.jpg"},
{name:"Văn Minh Hiển Đạt",           image:"../img/thanhvien/3/vmhdat.png",       imggrad:"../img/thanhvien/3/grad.jpg"},
{name:"Lê Trần Anh Hào",             image:"../img/thanhvien/4/ltahao.png",         imggrad:"../img/thanhvien/4/grad.jpg"},
{name:"Trịnh Gia Hân",               image:"../img/thanhvien/5/ghan.png",       imggrad:"../img/thanhvien/5/grad.jpg"},
{name:"Lê Huy Hùng",                 image:"../img/thanhvien/6/lhhung.png",   imggrad:"../img/thanhvien/6/grad.jpg"},
{name:"Nguyễn Khắc Huy",             image:"../img/thanhvien/7/nkhuy.png",   imggrad:"../img/thanhvien/7/grad.jpg"},
{name:"Đặng Đình Khôi",              image:"../img/thanhvien/8/ddkhoi.png",   imggrad:"../img/thanhvien/8/grad.jpg"},
{name:"Phạm Nguyễn Anh Khôi",        image:"../img/thanhvien/9/pnakhoi.jpg",   imggrad:"../img/thanhvien/9/grad.jpg"},
{name:"Phạm Võ Hoàng Lan",           image:"../img/thanhvien/10/grad.jpg",   imggrad:"../img/thanhvien/10/grad.jpg"},
{name:"Nguyễn Hoàng Linh",           image:"../img/thanhvien/11/grad.jpg",   imggrad:"../img/thanhvien/11/grad.jpg"},
{name:"Nguyễn Hoàng Long",           image:"../img/thanhvien/12/nhlong.png",  imggrad:"../img/thanhvien/12/grad.jpg"},
{name:"Trần Hải Minh",               image:"../img/thanhvien/13/thminh.png",  imggrad:"../img/thanhvien/13/grad.jpg"},
{name:"Võ Minh Nga",                 image:"../img/thanhvien/14/vmnga.png",    imggrad:"../img/thanhvien/14/grad.jpg"},
{name:"Nguyễn Đặng Khánh Ngân",      image:"../img/thanhvien/15/ndkngan.png",  imggrad:"../img/thanhvien/15/grad.jpg"},
{name:"Lê Xuân Nghi",                image:"../img/thanhvien/16/lxnghi.png",    imggrad:"../img/thanhvien/16/grad.jpg"},
{name:"Nguyễn Phạm Thị Quỳnh Như",   image:"../img/thanhvien/17/nptqnhu.png",   imggrad:"../img/thanhvien/17/grad.jpg"},
{name:"Dương Thị Khánh Ninh",        image:"../img/thanhvien/18/dtkninh.png",   imggrad:"../img/thanhvien/18/grad.jpg"},
{name:"Lâm Minh Tâm",                image:"../img/thanhvien/19/lmtam.png",       imggrad:"../img/thanhvien/19/grad.jpg"},
{name:"Đặng Trần Phước Thái",        image:"../img/thanhvien/20/dtpthai.png",     imggrad:"../img/thanhvien/20/grad.jpg"},
{name:"Huỳnh Thị Thu Thảo",          image:"../img/thanhvien/21/httthao.png",     imggrad:"../img/thanhvien/21/grad.jpg"},
{name:"Hà Văn Mạnh Thắng",           image:"../img/thanhvien/22/hvmthang.png",    imggrad:"../img/thanhvien/22/grad.jpg"},
{name:"Trần Nhật Trường",            image:"../img/thanhvien/23/tntruong.png",    imggrad:"../img/thanhvien/23/grad.jpg"},
{name:"Nguyễn Hà An",                image:"../img/thanhvien/24/nhan.jpg",           imggrad:"../img/thanhvien/24/grad.jpg"},
{name:"Nguyễn Hữu Đại",              image:"../img/thanhvien/25/ndai.png",          imggrad:"../img/thanhvien/25/grad.jpg"},
{name:"Trần Hữu Đạt",                image:"../img/thanhvien/26/thdat.png",        imggrad:"../img/thanhvien/26/grad.jpg"},
{name:"Nguyễn Hải Đăng",             image:"../img/thanhvien/27/nhdang.jpg",      imggrad:"../img/thanhvien/27/grad.jpg"},
{name:"Bùi Nguyễn Khánh Đoan",       image:"../img/thanhvien/28/bnkdoan.png",    imggrad:"../img/thanhvien/28/grad.jpg"},
{name:"Nguyễn Duy Hoàng",            image:"../img/thanhvien/29/ndhoang.png",    imggrad:"../img/thanhvien/29/grad.jpg"},
{name:"Nguyễn Mạnh Hùng",            image:"../img/thanhvien/30/nmhung.png",      imggrad:"../img/thanhvien/30/grad.jpg"},
{name:"Bùi Đình Lộc",                image:"../img/thanhvien/31/bdloc.png",        imggrad:"../img/thanhvien/31/grad.jpg"},
{name:"Mai Đình Nhật",               image:"../img/thanhvien/32/dmnhat.png",      imggrad:"../img/thanhvien/32/grad.jpg"},
{name:"Nguyễn Văn Hoàng Phát",       image:"../img/thanhvien/33/grad.jpg",      imggrad:"../img/thanhvien/33/grad.jpg"},
{name:"Trần Thiên Phúc",             image:"../img/thanhvien/34/ttphuc.png",      imggrad:"../img/thanhvien/34/grad.jpg"},
{name:"Lê Xuân Trọng",               image:"../img/thanhvien/35/lxtrong.png",    imggrad:"../img/thanhvien/35/grad.jpg"},
];

const board=document.getElementById("board");
const popup=document.getElementById("popup");

const CARD_W=100;
const CARD_H=150;
const MAX_OVERLAP=0.3;


const RESERVE_W=700;
const RESERVE_H=450;

function getReserveRect(){
    return{
        x:(window.innerWidth-RESERVE_W)/2,
        y:(window.innerHeight-RESERVE_H)/2,
        w:RESERVE_W,
        h:RESERVE_H
    };
}

function overlapRect(a,b){
    const l=Math.max(a.x,b.x);
    const r=Math.min(a.x+a.w,b.x+b.w);
    const t=Math.max(a.y,b.y);
    const d=Math.min(a.y+a.h,b.y+b.h);

    return !(r<=l||d<=t);
}

function overlapArea(a,b){
    const l=Math.max(a.x,b.x);
    const r=Math.min(a.x+a.w,b.x+b.w);
    const t=Math.max(a.y,b.y);
    const d=Math.min(a.y+a.h,b.y+b.h);

    if(r<=l||d<=t) return 0;

    return (r-l)*(d-t);
}

function validPosition(rect,placed){

    if(overlapRect(rect,getReserveRect()))
        return false;

    for(const p of placed){

        const area=overlapArea(rect,p);

        if(area>rect.w*rect.h*MAX_OVERLAP)
            return false;

        if(area>p.w*p.h*MAX_OVERLAP)
            return false;
    }

    return true;
}

function randomPosition(placed){

    for(let i=0;i<5000;i++){

        const rect={
            x:Math.random()*(window.innerWidth-CARD_W),
            y:Math.random()*(window.innerHeight-CARD_H),
            w:CARD_W,
            h:CARD_H
        };

        if(validPosition(rect,placed))
            return rect;
    }

    return null;
}

const cards=[];

students.forEach((s,index)=>{

    const div=document.createElement("div");

    div.className="card";
    div.style.left=window.innerWidth/2+"px";
    div.style.top=window.innerHeight/2+"px";
    div.style.zIndex=index;

    div.innerHTML=`<img src="${s.image}">`;

    board.appendChild(div);

    cards.push({
        element:div,
        data:s
    });

    div.onclick=()=>{

        popup.classList.remove("hidden");

        pimg.src=s.imggrad||s.image;
        pname.textContent=s.name;
    };
});

function layoutCards(animated=true){

    const placed=[];

    cards.forEach((card,index)=>{

        const pos=randomPosition(placed);

        if(!pos) return;

        placed.push(pos);

        if(!animated){
            card.element.style.transition="none";
        }else{
            card.element.style.transition="all .8s";
        }

        setTimeout(()=>{

            card.element.style.left=pos.x+"px";
            card.element.style.top=pos.y+"px";

            card.element.style.transform=
                `rotate(${Math.random()*60-30}deg)`;

        },animated?index*80:0);
    });
}

function shuffleCards(){

    cards.forEach(card=>{

        card.element.style.left=
            window.innerWidth/2+"px";

        card.element.style.top=
            window.innerHeight/2+"px";
    });

    setTimeout(()=>{

        const placed=[];

        cards.forEach(card=>{

            const pos=randomPosition(placed);

            if(!pos) return;

            placed.push(pos);

            card.element.style.left=pos.x+"px";
            card.element.style.top=pos.y+"px";
            card.element.style.transform=
                `rotate(${Math.random()*60-30}deg)`;
        });

    },400);
}
function closePopup(){
    popup.classList.add("hidden");
}

document.getElementById("shuffleBtn")
        .addEventListener("click",shuffleCards);

window.addEventListener("resize",()=>{
    layoutCards(false);
});

layoutCards(true);