$.ajax({
    type: "POST",
    url: "./process/login.php",
    dataType: "html",
    success: function (e) {
        if (e === 'log_y') {
            openOrders();
        }
        if (e === 'log_n') {
            loginAdmin();
        }
    }
});

function loginAdmin() {
    let password = prompt('Send Password');
    $.ajax({
        type: "POST",
        url: "./process/login.php",
        data: {
            password: password
        },
        dataType: "html",
        success: function (res) {
            if (res == 'log_y') {
                openOrders();
            }
            if (res == 'log_n') {
                $('body').html('');
                location.replace('/');
            }
        }
    });
}

function openOrders() {
    $.ajax({
        type: "POST",
        url: "./process/view_order_hom_page.php",
        dataType: "html",
        success: function (e) {
            $('body').css('opacity', '1');
            $('#order_contener').html(e);
        }
    });
}





// click Ready
function get(id,res,page){
    if(res === 'ready' && page === 'home'){
        clickReady(id);
    }
    if(res === 'delete' && page === 'ready'){
        delteOreders(id);
        PageReady();
    }
    if(res === 'archive' && page === 'home'){
        addArchive(id);
    }
    if(res === 'delete' && page === 'archive'){
        delteOreders(id);
        pageArchive();
    }
    if(res === 'ready' && page === 'archive'){
        clickReady(id);
    }
    if(res === 'archive' && page === 'ready'){
        addArchive(id);
    }
    if(res === 'delete' && page === 'home'){
        delteOreders(id);
        openOrders();
    }
};




// ready page   
function Page(page){
    if(page === 'ready'){
        PageReady();
    }
    if(page === 'home'){
        openOrders();
        $('.title').text('Новые Заказы');
    }
    if(page === 'archive'){
        pageArchive();
    }
    if(page === 'Exit'){
        exit();
    }
}

// for exit 
function exit(){
    $.ajax({
        type: "post",
        url: "./process/exit.php",
        dataType: "json",
        success: function (e) {
            if(e === 1){
                $('body').html('');
                location.replace('/');
            }
        }
    });
}
// add order archive page
function addArchive(id){
    $.ajax({
        type: "POST",
        url: "./process/add_order_archive.php",
        data: {
            id: id,
        },
        dataType: "json",
        success: function (e) {
            if(e === 1){
                $('#archiv'+id+'').val('Добавлено');
                $('#archiv'+id+'').attr('disabled','true');
            }
            if(e === 0){
                alert('Произошла ошибка повторите опять');
            }
        }
    });
}
// page archive
function pageArchive(){
    $('.title').text('Архивы');
        $.ajax({
            type: "POST",
            url: "./process/archive_page.php",
            dataType: "html",
            success: function (e) {
                $('body').css('opacity', '1');
                $('#order_contener').html(e);
            }
        });
}

// delete orders
function delteOreders(id){
    $.ajax({
        type: "post",
        url: "./process/delete_order.php",
        data: {
            id: id
        },
        dataType: "json",
        success: function (e) {
            if(e === 1){
                alert('Удалено');
            }
            if(e === 0){
                alert('Произошла ошибка повторите опять');
            }
        }
    });
}




// for click buttons
function clickReady(id){
    $.ajax({
        type: "POST",
        url: "./process/ready.php",
        data: {
            id: id,
        },
        dataType: "json",
        success: function (e) {
            if(e === 1){
                $('#'+id+'').val('Добавлено');
                $('#'+id+'').attr('disabled','true');
            }
            if(e === 0){
                alert('Произошла ошибка повторите опять');
            }
            
        }
    });
}

















function PageReady(){
    $('.title').text('Готовые Заказы');
    $.ajax({
        type: "POST",
        url: "./process/ready_page.php",
        dataType: "html",
        success: function (e) {
            $('body').css('opacity', '1');
            $('#order_contener').html(e);
        }
    });
}
