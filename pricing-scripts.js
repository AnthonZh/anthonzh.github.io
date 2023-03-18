const appeared = {
    "moon": false,
    "mars": false,
    "gas": false,
    "kuiper": false,
};

const ids = {
    "moon": 'moon-info',
    "mars": 'mars-info',
    "gas": 'gas-info',
    "kuiper": 'kuiper-info',
};

for(var x of document.getElementsByClassName('x-button')) {
    x.onclick = () => {
        disappearAllButId('');
    }
}

var moonContainer = document.getElementById('moon');
var marsContainer = document.getElementById('mars');
var gasContainer = document.getElementById('gas-giants');
var kuiperContainer = document.getElementById('kuiper-belt');

moonContainer.onclick = () => {
    if(appeared['moon'] == false) disappearAllButId(ids['moon']); 
    appeared['moon'] = !appeared['moon'];
    appear(ids['moon'], appeared['moon']); 
};

marsContainer.onclick = () => {
    if(appeared['mars'] == false) disappearAllButId(ids['mars']); 
    appeared['mars'] = !appeared['mars'];
    appear(ids['mars'], appeared['mars']); 
};

gasContainer.onclick = () => {
    if(appeared['gas'] == false) disappearAllButId(ids['gas']); 
    appeared['gas'] = !appeared['gas'];
    appear(ids['gas'], appeared['gas']); 
};

kuiperContainer.onclick = () => {
    if(appeared['kuiper'] == false) disappearAllButId(ids['kuiper']); 
    appeared['kuiper'] = !appeared['kuiper'];
    appear(ids['kuiper'], appeared['kuiper']); 
};

function appear(id, appeared) {
    let info = document.getElementById(id);

    if(appeared) {
        info.classList.remove('disappear');
        info.classList.add('appear'); 

        info.style.display = 'block';
        info.style.opacity = '1';
    }
    else {
        info.classList.remove('appear');
        info.classList.add('disappear');
        
        setTimeout(() => {
            info.style.display = 'none';
            info.style.opacity = '0';
        }, 950);
    }
    
}

function disappearAllButId(id) {
    for(const key in appeared) {
        if(key == id) continue;
        if(appeared[key] == true) {
            appeared[key] = !appeared[key];
            appear(ids[key], appeared[key]);
        }
    }
}