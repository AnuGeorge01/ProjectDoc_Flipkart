function changeMode(){
    let mybody = document.body;
    mybody.classList.toggle("mydark")
}

function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible'
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden'
    coupon.remove();
}
