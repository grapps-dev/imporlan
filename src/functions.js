import $ from 'jquery';

export function expand(el, btn){

    $('#' + el).toggleClass('show');
    $('#minus' + btn).toggleClass('d-none');
    $('#more' + btn).toggleClass('d-none');

}