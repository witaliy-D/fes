// $('[data-mask]').each((index, $mask)=>{
//     //*
//     $($mask).mask($mask.dataset.mask);
//     //*
// })

$('input[type="tel"]').each((index, $mask) => {
  $($mask).mask('+7 (999) 999-99-99');
});
