let sections = document.querySelectorAll('section');
//menu
let btns = document.querySelectorAll('.menu button');
btns.forEach((item,index)=>{
    item.addEventListener('click',e=>{
        sections[index].className = 'ActivePress';
        sections[index].style.animation = ('fadeInSport 1s');
    });
});

// go back buttons
let slider_pointers = Array(sections.length).fill(0);
let goBackBtn = document.querySelectorAll('.goBack');
goBackBtn.forEach((item,index)=>{
    item.addEventListener('click',e=>{
        stop_video(index);
        sections[index].style.animation = ('fadeOutSport 1s');
        setTimeout(()=>{
            sections[index].className = 'unActivePress';
        },1000);

    });
});

//slider
let prevs = document.querySelectorAll('.prev');
let nexts = document.querySelectorAll('.next');

prevs.forEach((item,index)=>{
    let photos = document.querySelectorAll(`#${sections[index].id} .press_photo .slider_element`);
    item.addEventListener('click',e=>{
        photos[slider_pointers[index]].classList.remove('show');
        if(slider_pointers[index] == photos.length-1){
            stop_video(index);
        }
        let new_pointer = slider_pointers[index] - 1;
        if(new_pointer<0){
            new_pointer = photos.length - 1;
        }
        photos[new_pointer].classList.add('show');
        slider_pointers[index] = new_pointer;
    });
});

nexts.forEach((item,index)=>{
    let photos = document.querySelectorAll(`#${sections[index].id} .press_photo .slider_element`);
    item.addEventListener('click',e=>{
        photos[slider_pointers[index]].classList.remove('show');
        if(slider_pointers[index] == photos.length-1){
            stop_video(index);
        }
        let new_pointer = slider_pointers[index] + 1;
        if(new_pointer>photos.length - 1){
            new_pointer = 0;
        }
        photos[new_pointer].classList.add('show');
        slider_pointers[index] = new_pointer;
    });
});

function stop_video(section_index){
    iframe = document.querySelector(`#${sections[section_index].id} iframe`);
    let src = iframe.src;
    iframe.src = src;
}