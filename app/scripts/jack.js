alert('ddd');

var jformObj = {
    name: 'Jane',
    field: {
        '#jform-1': {
            html: '<div class="field" id="jform-1"><div class="jlabel">Cześć, nazywam się Robert i witam Cię na mojej stronie internetowej. Jak masz na Imię ?</div><div class="jinput"><input type="text" name="name" id="jname" autocomplete="off"/></div><div class="jbutton" data-next="#jform-1-1"><span>Zatwierdź</span></div></div>',
            next: { 'jbutton': '#jform-1-1'},
            nextType: 'jbutton'
        },
        '#jform-1-1': {
            html: '<div class="field" id="jform-1-1"><div class="jlabel">Miło Cię poznać <span class="jname">Jan</span>. Wybierz kategorię w której chciałbyś abym Ci pomógł.</div><div class="jinput-radio"><input type="radio" name="jinput-radio" value="sites" data-next="#jform-sites" autofocus><label for="jinput-radio">Stworzenie strony internetowej</label></div><div class="jinput-radio"><input type="radio" name="jinput-radio" value="position" data-next="#jform-position" /><label for="jinput-radio">Pozycjonowanie</label></div><div class="jinput-radio"><input type="radio" name="jinput-radio" value="diffrent" data-next="#jform-diffrent" /><label for="jinput-radio">Inne</label></div><div class="jbutton-centred"><div class="jbutton"><span>Zatwierdź</span></div></div></div>',
            next: { 'sites': '#jform-sites', 'position': '#jform-position', 'diffrent': '#jform-diffrent' },
            nextType: 'jinput-radio'
        },
        '#jform-sites': {
            html: '<div class="field" id="jform-sites"><div class="jlabel">Pomocne dla mnie będzie gdy opiszesz mi troszkę swój pomysł. Możesz także załączyć plik, z chęcią się z nim zapoznam.</div><div class="jinput-textarea"><textarea name="comment"form="jform" cols="30" rows="5"></textarea></div><div class="jinput-file"><input type="file" name="pic"></div><div class="jbutton-centred"><div class="jbutton" data-next="#jform-sites-1"><span>Zatwierdź</span></div></div></div>',
            next: { 'jbutton': '#jform-sites-1' },
            nextType: 'jbutton'
        },
        '#jform-sites-1': {
            html: '<div class="field" id="jform-sites-1"><div class="jlabel">Zostaw mi do siebie telefon lub e-mail, gdy tylko przeanalizuję Twój pomysł, odezwę się do Ciebie <span class="jname uppercase">JAN</span>!</div><div class="jinput"><input type="text" name="phoneemail"  autocomplete="off"/></div><div class="jbutton" data-next="#jform-end"><span>Zatwierdź</span></div></div>',
            next: { 'jbutton': '#jform-end' },
            nextType: 'jbutton'
        },
        '#jform-position': {
            html: '<div class="field" id="jform-position"><div class="jlabel">Czy pozycjonowanie dotyczy istniejącej strony?</div><div class="jinput-radio"><input type="radio" name="jinput-radio" value="tak" data-next="#jform-position-1"/><label for="jinput-radio">Tak</label></div><div class="jinput-radio"><input type="radio" name="jinput-radio" value="nie" data-next="#jform-position-2"/><label for="jinput-radio">Nie</label></div></div>',
            next: { 'tak': '#jform-position-1', 'nie': '#jform-position-2' },
            nextType: 'jinput-radio'
        },
        '#jform-position-1': {
            html: '<div class="field" id="jform-position-1"><div class="jlabel">Podaj adres strony / domeny:</div><div class="jinput"><input type="text" name="name"  autocomplete="off"/></div><div class="jbutton" data-next="#jform-position-2"><span>Zatwierdź</span></div></div>',
            next: { 'jbutton': '#jform-position-2' },
            nextType: 'jbutton'
        },
        '#jform-position-2': {
            html: '<div class="field" id="jform-position-2"><div class="jlabel">Czy masz słowa kluczowe na jakie chcesz pozycjonować lub liki stron Twojej konkurencji? </div><div class="jinput-radio"><input type="radio" name="jinput-radio" value="tak" data-next="#jform-position-2-1"/><label for="jinput-radio">Tak</label></div><div class="jinput-radio"><label for="jinput-radio">Nie</label><input type="radio" name="jinput-radio" value="nie" data-next="#jform-position-2-2"/></div></div>',
            next: { 'tak': '#jform-position-2-1', 'nie': '#jform-position-2-2' },
            nextType: 'jinput-radio'
        },
        '#jform-position-2-1': {
            html: '<div class="field" id="jform-position-2-1"><div class="jlabel">Wymień je proszę:</div><div class="jinput"><input type="text" name="name" autocomplete="off" /></div><div class="jbutton" data-next="#jform-position-2-1-2"><span>Zatwierdź</span></div></div>',
            next: { 'jbutton': '#jform-position-2-1-2' },
            nextType: 'jbutton'
        },
        '#jform-position-2-1-2': {
            html: '<div class="field" id="jform-position-2-1-2"><div class="jlabel">Zostaw telefon lub e-mail do siebie abym mógł się z Tobą skontaktować w tej sprawie</div><div class="jinput"><input type="text" name="phoneemail" autocomplete="off"/></div><div class="jbutton" data-next="#jform-end"><span>Zatwierdź</span></div></div>',
            next: { 'jbutton': '#jform-end' },
            nextType: 'jbutton'
        },
        '#jform-position-2-2': {
            html: '<div class="field" id="jform-position-2-2"><div class="jlabel">W takim razie zostaw telefon lub e-mail do siebie abym mógł się z Tobą skontaktować w tej sprawie</div><div class="jinput"><input type="text" name="phoneemail" autocomplete="off" /></div><div class="jbutton" data-next="#jform-end"><span>Zatwierdź</span></div></div>',
            next: { 'jbutton': '#jform-end' },
            nextType: 'jbutton'
        },
        '#jform-diffrent': {
            html: '<div class="field" id="jform-diffrent"><div class="jlabel">Możesz teraz napisać cokolwiek o swoim pomyśle ?</div><div class="jinput-radio"><input type="radio" name="jinput-radio" value="tak"data-next="#jform-diffrent-1"/><label for="jinput-radio">Tak</label></div><div class="jinput-radio"><input type="radio" name="jinput-radio" value="nie"data-next="jform-diffrent-2"/><label for="jinput-radio">Nie</label></div></div>',
            next: { 'tak': '#jform-diffrent-1', 'nie': '#jform-diffrent-2' },
            nextType: 'jinput-radio'
        },
        '#jform-diffrent-1': {
            html: '<div class="field" id="jform-diffrent-1"><div class="jlabel">Pomocne dla mnie będzie gdy opiszesz mi troszkę swój pomysł. Możesz także załączyć plik, z chęcią się z nim zapoznam.</div><div class="jinput-textarea"><textarea name="comment" form="jform" cols="30" rows="5"></textarea></div><div class="jbutton-centred"><div class="jbutton" data-next="#jform-diffrent-1-1"><span>Zatwierdź</span></div></div></div>',
            next: { 'jbutton': '#jform-diffrent-1-1' },
            nextType: 'jbutton'
        },
        '#jform-diffrent-1-1': {
            html: '<div class="field" id="jform-diffrent-1-1"><div class="jlabel">Zostaw telefon lub e-mail do siebie abym mógł się z Tobą skontaktować w tej sprawie</div><div class="jinput"><input type="text" name="phoneemail" autocomplete="off" /></div><div class="jbutton" data-next="#jform-end"><span>Zatwierdź</span></div></div>',
            next: { 'jbutton': '#jform-end' },
            nextType: 'jbutton'
        },
        '#jform-diffrent-2': {
            html: '<div class="field" id="jform-diffrent-2"><div class="jlabel">W takim razie zostaw telefon lub e-mail do siebie abym mógł się z Tobą skontaktować w tej sprawie</div><div class="jinput"><input type="text" name="phoneemail" autocomplete="off"/></div><div class="jbutton" data-next="#jform-end"><span>Zatwierdź</span></div></div>',
            next: { 'jbutton': '#jform-end' },
            nextType: 'jbutton'
        },
        '#jform-end': {
            html: '<div class="field" id="jform-end"><div class="jlabel">Dziękuję <span class="jname uppercase">JAN</span>, odezwę się w najbliższym możliwym czasie.</div></div>'
        }
    }
}

$(document).ready(function() {
var current = '#jform-1',
    pathArr = [current],
    button,
    clickedPrev = false;

$('#jform').html('');
mapCurrent(current);

function mapCurrent(current) {
    console.log(pathArr);
    var dataNext = dataNext(current);
    $('#jform').append(jformObj.field[current].html);
    if (jformObj.field[current].html.indexOf('jname') !== -1) {
        $(current).find('.jname').append(jformObj.name);
    }

    // Wybór jednego z trzech
    if ($(current).find('.jinput-radio').length === 3) {
        $(current + ' .jinput-radio label').on('click', function() {
            $(this).siblings().prop('checked', true);
            $(current + ' .jbutton').addClass('activate');
            dataNext = jformObj.field[current].next[$(this).siblings().prop('checked', true).val()];
            console.log(dataNext)
        })
    }
    if ($(current).find('.jinput-radio').length === 2) {
        $(current + ' .jinput-radio label').on('click', function() {
            $(this).siblings().prop('checked', true);
            dataNext = jformObj.field[current].next[$(this).siblings().prop('checked', true).val()];
            console.log(dataNext);
            showNext(dataNext);
        })
    }


    $('#jform .jname').html(jformObj.name);

    button = $(current).find('div.jbutton').length > 0 ? $(current).find('div.jbutton') : $(current).find('div.jbutton');

    $(button).on('click', function() {
        console.log(dataNext);
        if (dataNext ==='#jform-end') {
        	//$('#jform').submit();
        }
        showNext(dataNext);
        $(this).unbind('click');
        $(this).parent().parent().find('.jinput-radio').unbind('click');
        if (current === '#jform-1') {

        };
    });

    function dataNext(current) {
        if (jformObj.field[current].nextType === 'jbutton') {
            return jformObj.field[current].next['jbutton']
        }
    }

    if (current === '#jform-1') {

        $(current + ' .jinput input').focus();
        $(current + ' .jinput input').on('change keyup keydown keypress', function() {
            $(button).addClass('activate');
            jformObj.name = $(this).val();
        });
    }
    if (current !== '#jform-1' && current !== '#jform-sites' && jformObj.field[current].nextType === 'jbutton') {
        $(button).addClass('activate');
    }
    if (current === '#jform-sites') {
        $(current + ' textarea').on('input propertychange', function() {
            $(this).parent().siblings('.jbutton-centred').find('div.jbutton').addClass('activate');
        });
    }
}



function showNext(e) {

    var i;
    console.log(current)
    $(current).addClass('stop')
    setTimeout(function() {

        $(pathArr[pathArr.length - 2]).removeClass('stop');
        current = e;
    }, 50)
    current = e;
    pathArr.push(e);

    mapCurrent(e);

    // $('.field').unbind('click');
    // $('.field').click(function() {
    //     if (!$(this).is(':last-child') && !$(this).is('.stop')) {
    //         var current = '#' + $(this).attr('id');
    //         console.log(pathArr.indexOf(current));
    //         for (i = pathArr.length - 1; i > pathArr.indexOf(current); i--) {
    //             console.log(pathArr)
    //             $(pathArr[i]).remove();
    //             pathArr.pop();
    //         }
    //         $('.jform').css('margin-top', -25 * (pathArr.length - 1) + 'vh');
    //     }
    // })

    // $('.jform').css('margin-top', -25 * (pathArr.length - 1) + 'vh');
    $('#jform').css('margin-top', -$('#jform').height() + $('#jform .field:last-child').height());
}

// });








// function showButton() {
//     $(this).parent().siblings('div.jbutton').addClass('activate');
//     console.log('ddd');
// }


// $('#jform-1 .jinput input').on('change keyup keydown keypress', function() {
//     $(this).parent().siblings('div.jbutton').addClass('activate');
// });



// function displayNext(cur, ne, pre) {
//     cur.css({ 'opacity': '0.1', 'margin-top': '-20vh' }).addClass('prev');
//     ne.show().css({ 'opacity': '1' });
//     pre.hide();
// }

// function hidePrev(e) {
//     e.css({ 'opacity': '0.1', 'margin-top': '-20vh' }).addClass('prev');
// }

// function showNext(e) {
//     e.show().css({ 'opacity': '1' });
// }

// prev.on('click', function() {
//     prev.css({ 'margin-top': 0 });
//     showNext(prev);
//     current.hide();
//     next = current;
//     current = prev;
// })

// $('.field').on('click', function(e) {
//     if ($(this).hasClass('prev')) {

//         // $('.field').removeClass('prev');
//         // prev.css({ 'margin-top': 0 });
//         // showNext(prev);
//         // current.hide();
//         // next = current;
//         // current = prev;

//     }
// })


// // $('#jform-1 .jbutton').on('click', function() {
// //     console.log('nexts');
// //     if ($('#jform-1 .jinput input').val() !== '') {
// //         $('#jform .jname').text($('#jform-1 .jinput input').val());
// //         hidePrev(current);
// //         showNext(next);
// //         prev = current;
// //         current = next;
// //     }
// // });

// $('#jform-1-1 .jbutton').on('click', function() {
//     $('#jform-1').hide();
//     $('#jform-1-1').css({ 'opacity': '0.1', 'margin-top': '-20vh' });
//     if ($('#jform-1-1 input:checked').val() === 'sites') {
//         $('#sites').show();
//         next = $('#jform-1-1-1-1');
//         displayNext(current, next, prev);
//         prev = current;
//         current = next;
//     } else if ($('#jform-1-1 input:checked').val() === 'position') {
//         $('#position').show();
//         next = $('#jform-1-1-2-1');
//         displayNext(current, next, prev);
//         prev = current;
//         current = next;
//     } else if ($('#jform-1-1 input:checked').val() === 'diffrent') {
//         $('#diffrent').show();
//         $('#jform-1-1').css({ 'opacity': '0.1', 'margin-top': '-30vh' });
//         $('#jform-1-1-2-2-1').show().css('opacity', '1');
//         next = $('#jform-1-1-2-2-1');
//         displayNext(current, next, prev);
//         prev = current;
//         current = next;
//     }
// });
// // Czy pozycjonowanie dotyczy istniejącej strony?
// $('#jform-1-1-2-1 .jinput-radio').on('click', function() {
//     if ($(this).val === 'tak') {
//         next = $('#jform-1-1-2-1-2');
//     } else {
//         next = $('#jform-1-1-2-2-1');
//     }
//     displayNext(current, next, prev);
//     prev = current;
//     current = next;
// });
// //>Podaj adres strony \ domeny:
// $('#jform-1-1-2-1-1 .jbutton').on('click', function() {
//     next = $('#jform-1-1-2-1-2');
//     displayNext(current, next, prev);
//     prev = current;
//     current = next;
// });

// //Czy masz słowa kluczowe na jakie chcesz pozycjonować lub liki stron Twojej konkurencji?
// $('#jform-1-1-2-1-2 .jinput-radio').on('click', function() {
//     if ($(this).val === 'tak') {
//         next = $('#jform-1-1-2-1-2-1');
//     } else {
//         next = $('#jform-1-1-2-1-2-2');
//     }
//     displayNext(current, next, prev);
//     prev = current;
//     current = next;
// });
// // Wymień je proszę:
// $('#jform-1-1-2-1-2-1 .jbutton').on('click', function() {
//     next = $('#jform-1-1-2-1-2-1-2');
//     displayNext(current, next, prev);
//     prev = current;
//     current = next;
// });

// // podaj telefont

// $('#jform-1-1-2-1-2-1-2 .jbutton, #jform-1-1-2-1-2-2 .jbutton').on('click', function() {
//     next = $('#jform-end');
//     displayNext(current, next, prev);
//     prev = current;
//     current = next;
// })

// //Pomocne dla mnie będzie gdy opiszesz mi troszkę swój pomysł. Możesz także załączyć plik, z chęcią się z nim zapoznam.
// $('#jform-1-1-1-1 .jbutton').on('click', function() {
//         // $('#jform-1-1').hide();
//         // $('#jform-1-1-1-1').css({ 'opacity': '0.1', 'margin-top': '-30vh' });
//         // $('#jform-1-1-1-2').show().css('opacity', '1');
//         next = $('#jform-1-1-1-2');
//         displayNext(current, next, prev);
//         prev = current;
//         current = next;
//     })
//     //Zostaw mi do siebie telefon lub e-mail, gdy tylko przeanalizuję Twój pomysł, odezwę się do Ciebie sdsd!
// $('#jform-1-1-1-2 .jbutton').on('click', function() {
//     // $('#jform-1-1-1-1').hide();
//     // $('#jform-1-1-1-2').css({ 'opacity': '0.1', 'margin-top': '-30vh' }).delay(300).hide();
//     // $('#jform-end').show().css('opacity', '1');
//     next = $('#jform-end');
//     displayNext(current, next, prev);
//     prev = current;
//     current = next;
// })


// $('.jinput-radio label').on('click', function() {
//     $(this).siblings().prop('checked', true);
//     $('#jform-1-1 .jbutton').addClass('activate');
// })

// $('.jinput-textarea textarea').on('input propertychange', function() {
//     $(this).attr('placeholder', '');
//     $(this).parent().siblings('.jbutton-centred').find('div.jbutton').addClass('activate');
// });

// $('#jform-1-1-1-2 .jinput input').on('change keyup keydown keypress', function() {
//     $(this).parent().siblings('div.jbutton').addClass('activate')

 });
