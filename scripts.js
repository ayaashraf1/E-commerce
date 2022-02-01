//change language
$('#language span').on('click', (e) => {
    let current_lang = e.target.id;
    if (current_lang === 'AR') {
        $('html').attr('dir','rtl');
        $('body').addClass('AR-lang').removeClass('EN-lang');
        $('.EN').removeClass('disable');
        $('.AR').addClass('disable');
        $('.AR-lang').css('display','block');
        $('.EN-lang').css('display','none');
        //[to-do] till separate english and arabic
        $('#menu-section.AR-lang').css('display','flex');
        $('#footer.AR-lang').css('display','flex');

    } else {
        $('html').attr('dir','ltr');
        $('body').addClass('EN-lang').removeClass('AR-lang');
        $('.AR').removeClass('disable');
        $('.EN').addClass('disable');
        $('.EN-lang').css('display','block');
        $('.AR-lang').css('display','none');
        //[to-do] till separate english and arabic
        $('#menu-section.EN-lang').css('display','flex');
        $('#footer.EN-lang').css('display','flex');


    }
});

//show and hide password
$('.passwordIcon').on('click',(e)=>{
    if( e.target.className.includes('fa-eye-slash')){
        e.target.className ='fas fa-eye';
        e.target.parentElement.previousElementSibling.type  = 'text';
    }else {
        e.target.className ='fas fa-eye-slash';
        e.target.parentElement.previousElementSibling.type  = 'password';
    }
});
//range component functionality
const setLabel = (lbl, val) => {
    const label = $(`#slider-${lbl}-label`);
    label.val(val);
    const slider = $(`#slider-div .${lbl}-slider-handle`);
    const rect = slider[0].getBoundingClientRect();
  }
  
  const setLabels = (values) => {
        setLabel("min", values[0]);
        setLabel("max", values[1]);
  }
  
  if ($('#ex2').length ){
      $('#ex2').slider().on('slide', function(ev) {
        setLabels(ev.value);
      });
      setLabels($('#ex2').attr("data-value").split(","));
  }

//change view of grid
$('#icon-box .fas').on('click',(e)=>{
  if( e.target.className.includes('fa-server')){
      $('#icon-box .fas').removeClass('selected')
      e.target.classList.add('selected')
      $('#row-view').show();
      $('#grid-view').hide();
  }else {
      $('#icon-box .fas').removeClass('selected');
      e.target.classList.add('selected')
      $('#row-view').hide();
      $('#grid-view').show();
  }
});

//dropDown Functionality
  $('.dropbtn').click((e)=>{
    if (e.target.nextElementSibling.style.display ==='' || e.target.nextElementSibling.style.display ==='none') {
        e.target.children[0].classList.remove('fa-chevron-down');
        e.target.children[0].classList.add('fa-chevron-up');
        e.target.nextElementSibling.style.display = 'block';
    }else {
        e.target.children[0].classList.remove('fa-chevron-up');
        e.target.children[0].classList.add('fa-chevron-down');
        e.target.nextElementSibling.style.display =  'none';
    }
});
$('#grid-view').hide();

//https://www.jumia.com.eg/phones-tablets/