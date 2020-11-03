let popup = $('.popup');
let massange_popup = $('.massange_page_popup');
function inESializeMask(mask) {
    $('[name=phone]').inputmask(mask);
}
inESializeMask('+7 (999) 999-99-99');


let body = $('body')[0];
if(body.clientWidth < 991 && body.clientWidth > 767){
    $('.contet').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
    });
}
if(body.clientWidth < 767){
    $('.contet').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    });
}
if(body.clientWidth > 991){
    $('.contet').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    });
}

// for scroll
let openMaps = false;
$(window).scroll(function () { 
    let scrollTop = $(window).scrollTop();
    if(scrollTop > 250){
        $('.menu').addClass('men_scrolling');
        $('.text_site').hide();
        $('.logo').addClass('for_scroll_logo');
        $('.name_site').addClass('nameSite');
        $('.body_menu').css('height','75px');
    }else{
        $('.menu').removeClass('men_scrolling');
        $('.text_site').show();
        $('.logo').removeClass('for_scroll_logo');
        $('.name_site').removeClass('nameSite');
        $('.body_menu').css('height','125px');
    }
    if(scrollTop > 300 && openMaps === false){
        openMaps = true;
        AddMaps();
    }
});


//add maps 
let maps = $('.maps_company');
function AddMaps(){
    if(openMaps === true){
        maps.html('<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A83ff49eaf417b2f1d71ca44d665d12ddcc248def932c771f97600235a2d96266&amp;source=constructor" width="100%" height="500" frameborder="0"></iframe>');    
    }
    
}
// for menu

function Plumbing(num){
        var anchor = $('.plumbing');
        clickMenu();
        if(num === '1'){
            $('html, body').stop().animate({
                scrollTop: anchor[0].offsetTop-50
            }, 777);
            return false;
        }
        if(num === '2'){
            $('html, body').stop().animate({
                scrollTop: anchor[1].offsetTop-50
            }, 777);
            return false;
        }
        if(num === 'maps'){
            let maps = $('.maps_company');
            $('html, body').stop().animate({
                scrollTop: maps[0].offsetTop
            }, 777);
            return false;
        }
        if(num === '0'){
            $('html, body').stop().animate({
                scrollTop: 0
            }, 777);
            return false;
        }
        if(num === 'contact'){
            let form_site = $('.form_site');
            $('html, body').stop().animate({
                scrollTop: form_site[0].offsetTop-60
            }, 777);
            return false;
        }
        
}
let plumbing = $('.plumbing');
let service = $('.service');
let wind_ = window.outerHeight/1.5;
setTimeout(()=>{
    openSelector();
},1000)

$(window).scroll(function () { 
    openSelector();

})

function openSelector(){
    let scrollTop = $(window).scrollTop();

    // for santexnika
    if(scrollTop > plumbing[0].offsetTop - wind_ ){
        $('.plumbing_body').css('opacity','1');
    }else{
        $('.plumbing_body').css('opacity','0');
    }
    // for sertifikate
    if(scrollTop > service[0].offsetTop - wind_){
        $('.info_sel').css('transform','scale(1)');
    }else{
        $('.info_sel').css('transform','scale(0)');
    }

    // for elektronika
    if(scrollTop > plumbing[1].offsetTop - wind_ ){
        $('.electronik').css('opacity','1');
    }else{
        $('.electronik').css('opacity','0');
    }
}
$('.popup_close').on('click', function (){
    popup.css('opacity','0');
    setTimeout(()=>{
        popup.css('display','none');
    },400)
})
// function open popup
function openPopUp(text){
    popup.css('opacity','1');
    popup.css('display','flex');
    massange_popup.html(text);
}
// open mobile menu

let opening_menu = false;
$('.mob_menu').on('click', function (){
    if(opening_menu == false){
        opening_menu = true;
        $(this).css('opacity','0');
        $('.menu_mobile_page').css('transform','translateX(0%)');
        setTimeout(()=>{
            $('.menu_mobile_page_close').css('opacity','1');
        },500)
    }
})
$('.menu_mobile_page_close').on('click', function (){
    if(opening_menu == true){
        opening_menu = false;
        $('.menu_mobile_page_close').css('opacity','0');
        setTimeout(()=>{
            $('.menu_mobile_page').css('transform','translateX(-100%)');
            setTimeout(()=>{
                $('.mob_menu').css('opacity','1');
            },500)
        },500)
    }
})
function clickMenu(){
    opening_menu = false;
        $('.menu_mobile_page_close').css('opacity','0');
        setTimeout(()=>{
            $('.menu_mobile_page').css('transform','translateX(-100%)');
            setTimeout(()=>{
                $('.mob_menu').css('opacity','1');
            },500)
        },500)
}
// send order 
function sendMass(e){
    let tel;
    let data = new Date();
    let time = data.getHours()+ ':' + data.getMinutes();
    let cat = '';
    
    if(e === 'one_form'){
        let phone = $('.f_inp_num');
        let number_tel = phone.val();
        let clean_num = '';
        for (let i = 0; i < number_tel.length; i++) {
            if(number_tel[i] !== ' ' && number_tel[i] !== ')' && number_tel[i] !== '(' && number_tel[i] !== '-' && number_tel[i] !== '_'){
                clean_num += number_tel[i];
            }
                
        }
        if(clean_num.length !== 12){
            openPopUp('Пожалуйста, правильно заполните поле телефонного номера');
        }else{
            let title = $('.module_page_body_title > .title').text();
            

            sendOrder(number_tel,title,time);
        }
        
    }
    if(e === 'two_form'){
        let phone = $('.phone');
        let number_tel = phone.val();
        let clean_num = '';
        for (let i = 0; i < number_tel.length; i++) {
            if(number_tel[i] !== ' ' && number_tel[i] !== ')' && number_tel[i] !== '(' && number_tel[i] !== '-' && number_tel[i] !== '_'){
                clean_num += number_tel[i];
            }
                
        }
        if(clean_num.length !== 12){
            openPopUp('Пожалуйста, правильно заполните поле телефонного номера');
        }else{
            let title = $('.module_page_body_title > .title').text();
            

            sendOrder(number_tel,title,time);
        }
    }
    
}
function sendOrder(tel,cat,time){
    $.ajax({
        type: "POST",
        url: "../admin/process/send_order.php",
        data: {
            number: tel,
            categorie: cat,
            time: time
        },
        dataType: "json",
        success: function (res) {
            if(res === 1){
                openPopUp('<p>Спасибо, ваша заявка принята</p><p>Наши сотрудники свяжутся с вами через несколько минут</p>');
                $('[name=phone]').val('');
            }
            if(res === 0){
                openPopUp('Произошла ошибка. Пожалуйста, попробуйте еще раз');
            }
        }
    });
}
let op_plumbing_one = false;
// open services santexnika
function openModuleServices(res){
    if(res === 'one'){
        $('.heading_module_page').css('display','flex');
        $('.send_massange_text').text('Заказать '+ 'Вызов сантехника');
        $('.send_massange_sub_text').text('490');
        $('#orders_name_one').css('display','block');
        $('#orders_name_two').css('display','none');
    }
    if(res === 'two'){
        $('.heading_module_page').css('display','flex');
        $('.send_massange_text').text('Услуги электрика');
        $('.send_massange_sub_text').text('от 30 Р/м');
        $('#orders_name_one').css('display','none');
        $('#orders_name_two').css('display','block');
    }
}
let plumbing_sel = $('.plumbing_prod');
plumbing_sel.map((e,index)=>{
    plumbing_sel[e].onclick = function (){
        $('.heading_module_page').css('display','flex');
            let title = $(this).children('.title').text();
            let price = $(this).children('.price').text();
            $('.module_page_body_title > .title').text(title);
            $('.send_massange_text').text('Заказать '+ title);
            $('.send_massange_sub_text').text(price);
        if(e >= 6){
            $('#orders_name_one').css('display','none');
            $('#orders_name_two').css('display','block');
        }else{
            $('#orders_name_one').css('display','block');
            $('#orders_name_two').css('display','none'); 
        }
        
    }
})
$('.close').on('click', function (){
    $('.heading_module_page').css('display','none');
})
$('.for_closing_module').on('click', function (){
    $('.heading_module_page').css('display','none');
})
let to_order = $('.orders_row > button');
to_order.map((e)=>{
    to_order[e].addEventListener("click", function (){
        to_order.css('background','#8dc63f82');
        to_order.text('Заказать');
        let text = to_order[e].parentElement.innerText;
        let new_text = text.replace('Заказать','');
        let s_num = /\d+/;
        let price = new_text.match(s_num);
        let full_text = '';
        for (let i = 0; i < new_text.length; i++) {
            if(i === new_text.search(price) - 4){
                break;
            }else{
                full_text += new_text[i];
            }
        }
        console.log(full_text)
        $('.send_massange_text').text('Заказать '+ full_text);
        $('.orders_row_title').text(full_text);
        $('.send_massange_sub_text').text('от ' + price[0] + ' Р');
        to_order[e].style.background = '#8dc63f';
        to_order[e].innerText = 'Выбрано';
    })
})


function formModule(){
    let phone = $('.phone_module');
    let number_tel = phone.val();
    let clean_num = '';
    for (let i = 0; i < number_tel.length; i++) {
        if(number_tel[i] !== ' ' && number_tel[i] !== ')' && number_tel[i] !== '(' && number_tel[i] !== '-' && number_tel[i] !== '_'){
            clean_num += number_tel[i];
        }
            
    }
    if(clean_num.length !== 12){
        openPopUp('Пожалуйста, правильно заполните поле телефонного номера');
    }else{
        let title = $('.module_page_body_title > .title').text();
        let data = new Date();
        let time = data.getHours()+ ':' + data.getMinutes();

        sendOrder(number_tel,title,time);
    }

}
let data_com = $('.data_com');
data_com.map((e)=>{
    console.log(data_com[e].innerText)
    let day_number = Number(data_com[e].innerText);
    let full_month = ['Январь‎','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
    
    let data = new Date();
    let day = data.getDate() + day_number;
    let month = data.getMonth();
    if(day_number < 0){
        day = 31 + day_number;
        data_com[e].innerText =  day+' '+full_month[month-1]; 
    }else{
        day = data.getDate() + day_number;
        data_com[e].innerText = day+' '+full_month[month]; 
    }
    
})















