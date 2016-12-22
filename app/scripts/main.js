'use strict';
jQuery(document).ready(function(t) {
    function i(i, e, s) {
        e = e ;
        i.attr({
                width: t(window).width(),
                height:  e
            }),
            i.css({
                // 'top': '-' + (s * e).toFixed(2) - 200 + 'px'
                'top': '-' + e   + 'px'
            })
    }

    function e(i) {
        var e = t('#' + i),
            o = e.height(),
            a = t(window).scrollTop() + 100,
            h = e.prev();
        if (h.is('section') && e.has('canvas')) {
            var r = h.offset().top;
            if (a >= r && r + o >= a) {
                var c = e.offset().top - a;
                //console.log(t(window).height() - c);
                n(i.toString(), t(window).height() - c)
            }
            1
        }
    }



    function n(e, n) {
        if (t('#' + e).has('canvas') === !1) return !1;
        var o = t('#' + e + ' canvas:first'),
            a = o.get(0).getContext('2d');
        var p = t('#' + e + '> .canvas_help');
        var spin = o.height() / t(window).height() < 1 ? o.height() / t(window).height() : 1;

        if (!p.find('div').length) {
            //p.append('<div></div>');

        }  
        n = n > 100 ? n :100;     
        n = n < t(window).height() ? n : t(window).height();
        //var p1 = p.find('div');
        //var p2 = p.next();
        //console.log(p2)
        //p1.css('background', o.attr('data-color'));
        if (i(o, n, Math.pow(spin, 5)),
           // p.height(((1 - Math.pow(spin, 5)) * n).toFixed(2)),
            //p.height(n.toFixed(2)),
            //p1.height(p2.offset().top - (o.offset().top + o.height())),
            a.clearRect(0, 0, o.width(), o.height()),
            a.beginPath(),
            a.moveTo(0, o.height()),
            a.lineTo(o.width(),
                o.height()),
            a.lineTo(o.width(), 0),
            a.lineTo(o.width(),
                t(window).height - 0.8 * n),
   
            a.bezierCurveTo(.9 * (t(window).height() - o.height()), 0, t(window).height() - o.height(), n, .1 * -n, o.height()),
            a.closePath(), 'undefined' != typeof o.data('image')) {
            var h = new Image;
            h.src = o.data('image');
            var r = a.createPattern(h, 'no-repeat');
            a.fillStyle = r, a.fill()
        } else 'undefined' != typeof o.data('color') && (a.fillStyle = o.data('color'), a.fill())
    }
    t(document).ready(function() {
        t.each(t('section.hascanvas'), function() {
            e(t(this).attr('id'));
        })
        t(window).on('scroll', function() {
            t.each(t('section.hascanvas'), function() {
                e(t(this).attr('id'));
            })
        })
    })
});

$(document).ready(function() {
    //css Animation scroll
    AOS.init({
        disable: 'mobile',
        //once: true,
        ease: 'ease-in-out'
    });

    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });
    // if ($('#main_banner').length){
    // var bradio = $('#main_banner').attr('data-height')/$('#main_banner').attr('data-width');
    // $('#main_banner').height($(window).width()*bradio)
    // }


});


// gslider
$(document).ready(function() {




    gSlider();

    function gSlider() {
        var gLeft = $('#g-slider-control-left'),
            gRight = $('#g-slider-control-right'),
            gSliderNumber = $('#g-slider-images > ul > li').length,
            gActiveSlide = $('#g-slider-images > ul > li.g-image-active').index(),
            gDescription = $('#g-slider-desriptions > ul > li'),
            gImages = $('#g-slider-images > ul > li'),
            gInterval,
            sliderPoused,
            haveBeenPoused = false,
            playButton = $('#g-slider-control-play'),
            pauseButton = $('#g-slider-control-pause');

        gDescriptionHeight();

        $('#g-slider-images > ul > li').each(function() {
            $(this).addClass('g-slider-image-' + $(this).index());
            $(this).attr('g-data-index', $(this).index() + 1);
        });
        $('#g-slider-desriptions > ul > li').each(function() {
            $(this).addClass('g-slider-desription-' + $(this).index());
            $(this).attr('g-data-index', $(this).index() + 1);
        })


        gInterval = setInterval(function() {
            gNext()
        }, 5000);
        playSlider();
        gLeft.on('click', function() {
            gPrev();
            clearInterval(gInterval);

        });

        gRight.on('click', function() {
            gNext();
            clearInterval(gInterval);
        });

        pauseButton.on('click', function() {
            haveBeenPoused = false;
            pouseButtonAnimation();
            clearInterval(gInterval);
        });

        playButton.on('click', function() {
            gNext();
            playSlider();
        });

        gDescription.on('mouseover', function() {
            clearInterval(gInterval);
            pouseButtonAnimation();
        });

        gImages.on('mouseover', function() {
            clearInterval(gInterval);
            pouseButtonAnimation();
        });

        function gDescriptionHeight() {

            var height = 0;
            gDescription.each(function() {
                $(this).removeAttr('style');
                $(this).width($('#g-slider-desriptions').width());
                if ($(this).height() > height) {
                    height = $(this).height();
                }
            });
            $('#g-slider-desriptions').height(height);
        }

        function playSlider() {
            clearInterval(gInterval);
            gInterval = setInterval(function() {
                gNext()
            }, 5000);
            haveBeenPoused = false;
        }

        function pouseButtonAnimation() {
            //  console.log(haveBeenPoused)
            if (!haveBeenPoused) {
                $('#g-slider-control-pouse').addClass('slider-poused')
                sliderPoused = setInterval(function() {
                    $('#g-slider-control-pouse').removeClass('slider-poused')
                }, 4000);
                haveBeenPoused = true;
            }
        }

        function gPrev() {
            gImages.eq((gActiveSlide + 1) % gSliderNumber).removeClass('g-image-next-active');
            gImages.eq((gActiveSlide - 1) % gSliderNumber).addClass('g-image-active').removeClass('g-image-next-active');
            gImages.eq(gActiveSlide).removeClass('g-image-active').addClass('g-image-next-active');
            // descrition index
            gDescription.eq((gActiveSlide - 1) % gSliderNumber).addClass('g-description-active');
            gDescription.eq(gActiveSlide).removeClass('g-description-active');
            gActiveSlide = gActiveSlide - 1 > 0 ? (gActiveSlide - 1) % gSliderNumber : (gActiveSlide + gSliderNumber - 1) % gSliderNumber;
            gSliderCount(gActiveSlide, gSliderNumber);
            //console.log(gActiveSlide)
        }

        function gNext() {
            gImages.eq((gActiveSlide + 1) % gSliderNumber).addClass('g-image-active').removeClass('g-image-next-active');
            gImages.eq((gActiveSlide + 2) % gSliderNumber).addClass('g-image-next-active');
            gImages.eq(gActiveSlide).removeClass('g-image-active');
            // descrition index
            gDescription.eq((gActiveSlide + 1) % gSliderNumber).addClass('g-description-active');
            gDescription.eq(gActiveSlide).removeClass('g-description-active');
            gActiveSlide = (gActiveSlide + 1) % gSliderNumber;
            gSliderCount(gActiveSlide, gSliderNumber);
        }

        function gSliderCount(nr, of) {
            $('#g-slider-nr').html(nr + 1);
            $('#g-slider-of').html('/0' + of);
        }
    }
});

// numbs

$(document).ready(function() {
    var bp_numbObj = {
        bp_dot_1: {
            'bp_num_box_1': {
                title: 'Web Development',
                num: 122,
                symbol: '%'
            },
            'bp_num_box_2': {
                title: 'Graphic Design',
                num: 144,
                symbol: 'h'
            },
            'bp_num_box_3': {
                title: 'JavaSript',
                num: 34,
                symbol: 'kmm'
            }
        },
        bp_dot_2: {
            'bp_num_box_1': {
                title: 'PHP',
                num: 89,
                symbol: '%'
            },
            'bp_num_box_2': {
                title: 'CSS',
                num: 19,
                symbol: 'h'
            },
            'bp_num_box_3': {
                title: 'HTML',
                num: 44,
                symbol: 'km'
            }
        },
        bp_dot_3: {
            'bp_num_box_1': {
                title: 'Gulp',
                num: 77,
                symbol: '%'
            },
            'bp_num_box_2': {
                title: 'Bower',
                num: 37,
                symbol: 'h'
            },
            'bp_num_box_3': {
                title: 'Json',
                num: 44,
                symbol: 'km'
            }
        },
        bp_dot_4: {
            'bp_num_box_1': {
                title: 'Sass',
                num: 65,
                symbol: '%'
            },
            'bp_num_box_2': {
                title: 'Node.js',
                num: 23,
                symbol: 'h'
            },
            'bp_num_box_3': {
                title: 'Angular',
                num: 78,
                symbol: 'km'
            }
        },
        bp_dot_5: {
            'bp_num_box_1': {
                title: 'Flux',
                num: 77,
                symbol: '%'
            },
            'bp_num_box_2': {
                title: 'React',
                num: 67,
                symbol: 'h'
            },
            'bp_num_box_3': {
                title: 'Android',
                num: 44,
                symbol: 'km'
            }
        }
    }

    $('.bp_dot').tooltip();
    $('.bp_dot').on('click', function() {
        var objKey = $(this).attr('id');
        $(this).addClass('hvr-ripple-out');
        printBox(objKey);
    });
    $('.bp_dot').on('mouseleave', function() {
        $(this).removeClass('hvr-ripple-out');
    });

    function printBox(key) {
        $('#bp_num_box_1 .bp_num_title').html('');
        $('#bp_num_box_2 .bp_num_title').html('');
        $('#bp_num_box_3 .bp_num_title').html('');
        // Show text
        showText('#bp_num_box_1 .bp_num_title', bp_numbObj[key].bp_num_box_1.title, 0, 30);

        showText('#bp_num_box_2 .bp_num_title', bp_numbObj[key].bp_num_box_2.title, 0, 30);

        showText('#bp_num_box_3 .bp_num_title', bp_numbObj[key].bp_num_box_3.title, 0, 30);

        showNumber('#bp_num_box_1 .bp_num_percente', bp_numbObj[key].bp_num_box_1.num, bp_numbObj[key].bp_num_box_1.symbol, 0, 15);
        // $('#bp_num_box_1 .bp_num_percente').html(bp_numbObj[key].bp_num_box_1.num + bp_numbObj[key].bp_num_box_1.symbol);
        showNumber('#bp_num_box_2 .bp_num_percente', bp_numbObj[key].bp_num_box_2.num, bp_numbObj[key].bp_num_box_2.symbol, 0, 15);
        showNumber('#bp_num_box_3 .bp_num_percente', bp_numbObj[key].bp_num_box_3.num, bp_numbObj[key].bp_num_box_3.symbol, 0, 15);
        // $('#bp_num_box_2 .bp_num_percente').html(bp_numbObj[key].bp_num_box_2.num + bp_numbObj[key].bp_num_box_2.symbol);

        // $('#bp_num_box_3 .bp_num_percente').html(bp_numbObj[key].bp_num_box_3.num + bp_numbObj[key].bp_num_box_3.symbol);
    }
    var showText = function(target, message, index, interval) {
        if (index < message.length) {
            $(target).append(message[index++]);
            setTimeout(function() {
                showText(target, message, index, interval);
            }, interval);
        }
    }
    var showNumber = function(target, number, symbol, start, interval) {
        if (start < number) {
            $(target).html(start + symbol);
            start++;
            setTimeout(function() {
                showNumber(target, number, symbol, start, interval);
            }, interval);
        }
    }
})

// bp - clients //


$(document).ready(function() {
    var bpLeft = $('#bp_client_control_left:not(.stop)'),
        bpRight = $('#bp_client_control_right:not(.stop)'),
        bpClientObj = new Object(),
        bpHelpObj = new Object(),
        bpClientNumber = $('#bp_client_list > ul > li').length,
        bpClient = $('#bp_client_list > ul > li'),
        bpIndex = 6,
        bpRotate;

    $(bpClient).each(function() {
        $(this).attr('data-index', $(this).index());
        bpHelpObj.title = $(this).find('.bp_client_title').text();
        bpHelpObj.link = $(this).find('.bp_client_link').text();
        bpHelpObj.href = $(this).find('.bp_client_link').attr('href')
        bpHelpObj.coment = $(this).find('.bp_client_coment').text();
        bpHelpObj.logoSrc = $(this).find('.bp_main_logo_con img').attr('src');
        bpClientObj[$(this).index()] = bpHelpObj
        bpHelpObj = new Object();
        if ($(this).index() === bpClientNumber - 1) {
            printClient($('#bp_client_list > ul > li:nth-child(7)').attr('data-index'))
            bpRotate = setInterval(function() {
                bpClientRorate()
            }, 5000);
        }
    })

    function bpClientRorate() {
        $('div.bp_client_list ul').prepend($('div.bp_client_list ul li:last-child'));
        bpIndex = (bpIndex + bpClientNumber + 1) % bpClientNumber;
        printClient($('#bp_client_list > ul > li:nth-child(7)').attr('data-index'));
        $(bpLeft).addClass('stop');
        $(bpRight).addClass('stop');

        setTimeout(function() {
            $(bpLeft).removeClass('stop');
            $(bpRight).removeClass('stop');
        }, 600);
    }

    $(bpClient).on('click', function(e) {
        $(bpClient).addClass('fast');
        var rotate = 6 - $(this).index(),
            i = 0;
        clearInterval(bpRotate);
        e.preventDefault();
        for (i; i < rotate; i++) {
            setTimeout(function() {
                bpClientRorate();
            }, 200 + i * 200);
            if (i === rotate - 1) {
                $(bpClient).removeClass('fast');
                setTimeout(function() {
                    bpRotate = setInterval(function() {
                        bpClientRorate()
                    }, 5000);
                }, 7000);
            }
        }
    })


    $(bpRight).on('click', function(e) {
        if (!$(this).is('.stop')) {
            $('div.bp_client_list ul').prepend($('div.bp_client_list ul li:last-child'));
            $(this).addClass('stop');
            bpIndex = (bpIndex + bpClientNumber + 1) % bpClientNumber;
            printClient($('#bp_client_list > ul > li:nth-child(7)').attr('data-index'));
            setTimeout(function() {
                $(bpRight).removeClass('stop');
            }, 600);
        }
    });

    $(bpLeft).on('click', function(e) {
        if (!$(this).is('.stop')) {
            $('div.bp_client_list ul').append($('div.bp_client_list ul li:first-child'));
            $(this).addClass('stop');
            bpIndex = (bpIndex + bpClientNumber - 1) % bpClientNumber;
            printClient($('#bp_client_list > ul > li:nth-child(7)').attr('data-index'));
            setTimeout(function() {
                $(bpLeft).removeClass('stop');
            }, 600);
        }
    });

    function printClient(index) {
        $('#bp_client_nr').html(bpClientNumber - parseInt(index));
        $('#bp_client_of').html('/0' + bpClientNumber);
        $('#bp_client_title').html(bpClientObj[index].title);
        $('#bp_client_link').html(bpClientObj[index].link);
        $('#bp_client_link').attr('href', bpClientObj[index].link);
        $('#bp_client_coment').html(bpClientObj[index].coment);
        $('#bp_client_logo img').attr('src', bpClientObj[index].logoSrc);
    }
});
// jack-20
$(document).ready(function() {
    var n = !1;
    var t = $('#jack-v').length ? $('#jack-v') : !1;
    if (t)
        $(window).on('scroll load', function(i) {
            //console.log(s, e);
            if (n) $(this).unbind(i);
            else {
                var s = $(this).height() + $(this).scrollTop(),
                    e = t.offset().top;
                if (s >= e) {
                    n = !0;
                    jack20();
                }
            }
        });
    //;
});


function jack20() {
    var jformObj = {
        name: 'Jane',
        field: {
            '#jform-1': {
                html: '<div class="field" id="jform-1"><div class="jlabel">Cześć, nazywam się Robert i witam Cię na mojej stronie internetowej. Jak masz na Imię ?</div><div class="jinput"><input type="text" name="name" id="jname" autocomplete="off"/></div><div class="jbutton" data-next="#jform-1-1"><span>Zatwierdź</span></div></div>',
                next: {
                    'jbutton': '#jform-1-1'
                },
                nextType: 'jbutton'
            },
            '#jform-1-1': {
                html: '<div class="field" id="jform-1-1"><div class="jlabel">Miło Cię poznać <span class="jname">Jan</span>. Wybierz kategorię w której chciałbyś abym Ci pomógł.</div><div class="jinput-radio"><input type="radio" name="jinput-radio" value="sites" data-next="#jform-sites" autofocus><label for="jinput-radio">Stworzenie strony internetowej</label></div><div class="jinput-radio"><input type="radio" name="jinput-radio" value="position" data-next="#jform-position" /><label for="jinput-radio">Pozycjonowanie</label></div><div class="jinput-radio"><input type="radio" name="jinput-radio" value="diffrent" data-next="#jform-diffrent" /><label for="jinput-radio">Inne</label></div><div class="jbutton-centred"><div class="jbutton"><span>Zatwierdź</span></div></div></div>',
                next: {
                    'sites': '#jform-sites',
                    'position': '#jform-position',
                    'diffrent': '#jform-diffrent'
                },
                nextType: 'jinput-radio'
            },
            '#jform-sites': {
                html: '<div class="field" id="jform-sites"><div class="jlabel">Pomocne dla mnie będzie gdy opiszesz mi troszkę swój pomysł. Możesz także załączyć plik, z chęcią się z nim zapoznam.</div><div class="jinput-textarea"><textarea name="comment"form="jform" cols="30" rows="5"></textarea></div><div class="jinput-file"><input type="file" name="pic"></div><div class="jbutton-centred"><div class="jbutton" data-next="#jform-sites-1"><span>Zatwierdź</span></div></div></div>',
                next: {
                    'jbutton': '#jform-sites-1'
                },
                nextType: 'jbutton'
            },
            '#jform-sites-1': {
                html: '<div class="field" id="jform-sites-1"><div class="jlabel">Zostaw mi do siebie telefon lub e-mail, gdy tylko przeanalizuję Twój pomysł, odezwę się do Ciebie <span class="jname uppercase">JAN</span>!</div><div class="jinput"><input type="text" name="phoneemail"  autocomplete="off"/></div><div class="jbutton" data-next="#jform-end"><span>Zatwierdź</span></div></div>',
                next: {
                    'jbutton': '#jform-end'
                },
                nextType: 'jbutton'
            },
            '#jform-position': {
                html: '<div class="field" id="jform-position"><div class="jlabel">Czy pozycjonowanie dotyczy istniejącej strony?</div><div class="jinput-radio"><input type="radio" name="jinput-radio" value="tak" data-next="#jform-position-1"/><label for="jinput-radio">Tak</label></div><div class="jinput-radio"><input type="radio" name="jinput-radio" value="nie" data-next="#jform-position-2"/><label for="jinput-radio">Nie</label></div></div>',
                next: {
                    'tak': '#jform-position-1',
                    'nie': '#jform-position-2'
                },
                nextType: 'jinput-radio'
            },
            '#jform-position-1': {
                html: '<div class="field" id="jform-position-1"><div class="jlabel">Podaj adres strony / domeny:</div><div class="jinput"><input type="text" name="name"  autocomplete="off"/></div><div class="jbutton" data-next="#jform-position-2"><span>Zatwierdź</span></div></div>',
                next: {
                    'jbutton': '#jform-position-2'
                },
                nextType: 'jbutton'
            },
            '#jform-position-2': {
                html: '<div class="field" id="jform-position-2"><div class="jlabel">Czy masz słowa kluczowe na jakie chcesz pozycjonować lub liki stron Twojej konkurencji? </div><div class="jinput-radio"><input type="radio" name="jinput-radio" value="tak" data-next="#jform-position-2-1"/><label for="jinput-radio">Tak</label></div><div class="jinput-radio"><label for="jinput-radio">Nie</label><input type="radio" name="jinput-radio" value="nie" data-next="#jform-position-2-2"/></div></div>',
                next: {
                    'tak': '#jform-position-2-1',
                    'nie': '#jform-position-2-2'
                },
                nextType: 'jinput-radio'
            },
            '#jform-position-2-1': {
                html: '<div class="field" id="jform-position-2-1"><div class="jlabel">Wymień je proszę:</div><div class="jinput"><input type="text" name="name" autocomplete="off" /></div><div class="jbutton" data-next="#jform-position-2-1-2"><span>Zatwierdź</span></div></div>',
                next: {
                    'jbutton': '#jform-position-2-1-2'
                },
                nextType: 'jbutton'
            },
            '#jform-position-2-1-2': {
                html: '<div class="field" id="jform-position-2-1-2"><div class="jlabel">Zostaw telefon lub e-mail do siebie abym mógł się z Tobą skontaktować w tej sprawie</div><div class="jinput"><input type="text" name="phoneemail" autocomplete="off"/></div><div class="jbutton" data-next="#jform-end"><span>Zatwierdź</span></div></div>',
                next: {
                    'jbutton': '#jform-end'
                },
                nextType: 'jbutton'
            },
            '#jform-position-2-2': {
                html: '<div class="field" id="jform-position-2-2"><div class="jlabel">W takim razie zostaw telefon lub e-mail do siebie abym mógł się z Tobą skontaktować w tej sprawie</div><div class="jinput"><input type="text" name="phoneemail" autocomplete="off" /></div><div class="jbutton" data-next="#jform-end"><span>Zatwierdź</span></div></div>',
                next: {
                    'jbutton': '#jform-end'
                },
                nextType: 'jbutton'
            },
            '#jform-diffrent': {
                html: '<div class="field" id="jform-diffrent"><div class="jlabel">Możesz teraz napisać cokolwiek o swoim pomyśle ?</div><div class="jinput-radio"><input type="radio" name="jinput-radio" value="tak"data-next="#jform-diffrent-1"/><label for="jinput-radio">Tak</label></div><div class="jinput-radio"><input type="radio" name="jinput-radio" value="nie"data-next="jform-diffrent-2"/><label for="jinput-radio">Nie</label></div></div>',
                next: {
                    'tak': '#jform-diffrent-1',
                    'nie': '#jform-diffrent-2'
                },
                nextType: 'jinput-radio'
            },
            '#jform-diffrent-1': {
                html: '<div class="field" id="jform-diffrent-1"><div class="jlabel">Pomocne dla mnie będzie gdy opiszesz mi troszkę swój pomysł. Możesz także załączyć plik, z chęcią się z nim zapoznam.</div><div class="jinput-textarea"><textarea name="comment" form="jform" cols="30" rows="5"></textarea></div><div class="jbutton-centred"><div class="jbutton" data-next="#jform-diffrent-1-1"><span>Zatwierdź</span></div></div></div>',
                next: {
                    'jbutton': '#jform-diffrent-1-1'
                },
                nextType: 'jbutton'
            },
            '#jform-diffrent-1-1': {
                html: '<div class="field" id="jform-diffrent-1-1"><div class="jlabel">Zostaw telefon lub e-mail do siebie abym mógł się z Tobą skontaktować w tej sprawie</div><div class="jinput"><input type="text" name="phoneemail" autocomplete="off" /></div><div class="jbutton" data-next="#jform-end"><span>Zatwierdź</span></div></div>',
                next: {
                    'jbutton': '#jform-end'
                },
                nextType: 'jbutton'
            },
            '#jform-diffrent-2': {
                html: '<div class="field" id="jform-diffrent-2"><div class="jlabel">W takim razie zostaw telefon lub e-mail do siebie abym mógł się z Tobą skontaktować w tej sprawie</div><div class="jinput"><input type="text" name="phoneemail" autocomplete="off"/></div><div class="jbutton" data-next="#jform-end"><span>Zatwierdź</span></div></div>',
                next: {
                    'jbutton': '#jform-end'
                },
                nextType: 'jbutton'
            },
            '#jform-end': {
                html: '<div class="field" id="jform-end"><div class="jlabel">Dziękuję <span class="jname uppercase">JAN</span>, odezwę się w najbliższym możliwym czasie.</div></div>'
            }
        }
    }


    var current = '#jform-1',
        pathArr = [current],
        button,
        clickedPrev = false;

    $('#jform').html('');
    mapCurrent(current);

    function mapCurrent(current) {
        //console.log(pathArr);
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
                //  console.log(dataNext)
            })
        }
        if ($(current).find('.jinput-radio').length === 2) {
            $(current + ' .jinput-radio label').on('click', function() {
                $(this).siblings().prop('checked', true);
                dataNext = jformObj.field[current].next[$(this).siblings().prop('checked', true).val()];
                //console.log(dataNext);
                showNext(dataNext);
            })
        }

        $('#jform .jname').html(jformObj.name);

        button = $(current).find('div.jbutton').length > 0 ? $(current).find('div.jbutton') : $(current).find('div.jbutton');

        $(button).on('click', function() {
            //console.log(dataNext);
            if (dataNext === '#jform-end') {
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

            //$(current + ' .jinput input').focus();
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
        //console.log(current)
        $(current).addClass('stop')
        setTimeout(function() {

            $(pathArr[pathArr.length - 2]).removeClass('stop');
            current = e;
        }, 50)
        current = e;
        pathArr.push(e);
        mapCurrent(e);
        $('#jform').css('margin-top', -$('#jform').height() + $('#jform .field:last-child').height());
    }
};
// Zasob wiedzy;

// O nas;

$(document).ready(function() {
    if ($('#main_page').length) {
        var wcontroller = new ScrollMagic.Controller({
            globalSceneOptions: {
                //duration: 200 wwd_trigger1
            }
        });

        var trigger1 = new ScrollMagic.Scene({
                triggerElement: '#wwd_trigger1',
                duration: 900,
                offset: -100
            })
            //.setTween("#wwdh2",0.5,{scale:2.5})
            .addIndicators() // add indicators (requires plugin)           
            .on('progress', function(e) {
                $('#wwdh2').css({ 'transform': 'translate3d(0px, ' + (-e.progress.toFixed(2) * 300) + 'px, 0px)' })
                $('#wwd_slide').css({ 'transform': 'translate3d(0px, ' + (200 - e.progress.toFixed(2) * 600) + 'px, 0px)' })
                $('#wwb_button').css({ 'transform': 'translate3d(0px, ' + (400 - e.progress.toFixed(2) * 900) + 'px, 0px)' })
                 $('#wwb_button > a').css({ 'transform': 'scale(' +  (0.5 + (e.progress.toFixed(2) * 0.5)) +  ')' })
            })
            .addTo(wcontroller);

        var trigger2 = new ScrollMagic.Scene({
                triggerElement: '#baner_s',
                duration: $('#baner_s').height() - $(window).height() * .5 + 1,
                offset: $(window).height() * .5
            })
            .addIndicators()
            .setClassToggle('#mb-tittle', 'transition-reset')
            .setClassToggle('#mb-slider-count', 'transition-reset')
            .addTo(wcontroller)
            .on('progress', function(e) {
                $('#mb-tittle, #mb-slider-count').css({ 'transform': 'translate3d(0px, ' + (-e.progress.toFixed(2) * 250) + 'px, 0px)' })
            });

        var gsliderh = $('#canvas2').height();
        var trigger3 = new ScrollMagic.Scene({
                triggerElement: '#canvas2',
                duration: gsliderh
            })
            .addIndicators()
            .addTo(wcontroller)
            .on('progress', function(e) {
                var prog = gsliderh * (-0.3) + (e.progress.toFixed(2) * (.5) * gsliderh);
                prog = prog < 0 ? prog : 0;
                $('#g-slider-desriptions').css({ 'transform': 'translate3d(' + prog + 'px,0px, 0px)' })
                $('#g-slider-images').css({ 'transform': 'translate3d(' + -prog + 'px,0px, 0px)' })
            })
   
    var canvas3h = $('#canvas3').height();
    var trigger4 = new ScrollMagic.Scene({
            triggerElement: '#canvas3',
            offset: -200,
            duration: canvas3h - 400
        })
        .addIndicators()
        .addTo(wcontroller)
        .on('progress', function(e) {
            var prog = -canvas3h * .15 + (e.progress.toFixed(2) * (.8) * canvas3h);
            prog = prog < 0 ? prog : 0;
            $('#phonewrap').css({ 'transform': 'translate3d(0px,' + prog + 'px, 0px)' })

        })
        .on('enter', function(e) {
            $('#bp_technology').addClass('realative_mod');
        })
        .on('leave', function(e) {
            $('#bp_technology').removeClass('realative_mod');
        })

    var jackTrigger = new ScrollMagic.Scene({
            triggerElement: '#jack-v',
            duration: $('#jack-v').height()
        })
        .addIndicators()
        .addTo(wcontroller)
        .on('enter', function(e) {
            $('#jform').fadeIn(400);
            $('input#jname').focus();
        })
        .on('leave', function(e) {
            $('#jform').fadeOut(400)
        })
        }





    if ($('#aboutpath').length) {
        $('#pathline').height($('#aboutpath').height() - $('#aboutpath .row:last-child').height());
        $('#pathline').css('top', $('#aboutpath .row:first-child').height() / 2 - 11);
        var pathTop = -6;
        $('.pathdot').each(function() {
            $(this).css('top', pathTop);
            var hStart = $('#aboutpath .row:first-child').height() / 2 - 11;
            pathTop += $('#abouthpath_inner .row').eq($(this).index()).height() + 1;
            //console.log(pathTop);
        })



        var controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                //duration: 200
            }
        });

        var proggres = new ScrollMagic.Scene({
                triggerElement: '#pathline',
                duration: $('#pathline').height()
            })
            .setClassToggle('#pathdot_1', 'hvr-ripple-out-path')
            .addTo(controller).on('progress', function(e) {
                $('#progress').height((e.progress * 100).toFixed(1) + '%')
            })

        var trigger1 = new ScrollMagic.Scene({
                triggerElement: '#trigger1',
                duration: 300
            })
            .setClassToggle('#pathdot_1', 'hvr-ripple-out-path')
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller);

        new ScrollMagic.Scene({
                triggerElement: '#trigger2'
            })
            .setClassToggle('#pathdot_2', 'hvr-ripple-out-path') // add class toggle
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller);
        new ScrollMagic.Scene({
                triggerElement: '#trigger3'
            })
            .setClassToggle('#pathdot_3', 'hvr-ripple-out-path') // add class toggle
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller);
        new ScrollMagic.Scene({
                triggerElement: '#trigger4'
            })
            .setClassToggle('#pathdot_4', 'hvr-ripple-out-path') // add class toggle
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller);
        new ScrollMagic.Scene({
                triggerElement: '#trigger5'
            })
            .setClassToggle('#pathdot_5', 'hvr-ripple-out-path') // add class toggle
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller);
        new ScrollMagic.Scene({
                triggerElement: '#trigger5'
            })
            .setClassToggle('#pathdot_5', 'hvr-ripple-out-path') // add class toggle
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller);
        new ScrollMagic.Scene({
                triggerElement: '#trigger6'
            })
            .setClassToggle('#pathdot_6', 'hvr-ripple-out-path') // add class toggle
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller);
        new ScrollMagic.Scene({
                triggerElement: '#trigger7'
            })
            .setClassToggle('#pathdot_7', 'hvr-ripple-out-path') // add class toggle
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    }
});

// uslugi

var sObj = [];
var hObj = {};
$('.s_details').each(function() {
    hObj.type = $(this).attr('data-type');
    hObj.html = $(this).parent().html();
    sObj.push(hObj)
    hObj = {};
})

$(document).ready(function() {
    if ($('#servies1').length && $('.s_details').length) {

        $('.servies_chosen').on('click', function() {
            hObj = [];
            var type = $(this).attr('id');
            //console.log(type);
            if (type !== 'all')
                hObj = sObj.filter(function(e) {
                    if (e.type === type) {
                        return e.type;
                    }
                }).map(function(e) {
                    if (e.type === type) {
                        return e.html;
                    }
                });
            else hObj = sObj.map(function(e) {
                return e.html
            });
            $('.servises-detail').html('<div class="row">');
            for (var i = 0; i < hObj.length; i++) {
                printServies(i)
            }


            function printServies(ind) {
                setTimeout(function() {
                    //console.log(hObj[ind]);
                    $('.servises-detail  > .row').append('<div class="col-md-6 col-sm-12">' + hObj[ind] + '</div>')
                    if (ind === hObj.length) {

                        //$('.servises-detail').append('</div>');
                    }
                }, ind * 110)
            }
        });

        if ($(window).width() >= 992) {
            $('.col-md-3-trick').hover(function() {
                $('.col-md-3-trick').addClass('deactive');
                $(this).addClass('active');

            }, function() {
                $('.col-md-3-trick').removeClass('active deactive');
            })
        };


    }
});

// $(document).ready(function() {
//     if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
//     window.onmousewheel = document.onmousewheel = wheel;
//     var scrollCanPass = true;

//     function wheel(event) {
//         if (scrollCanPass) {
//             var delta = 0;
//             if (event.wheelDelta) delta = event.wheelDelta / Math.abs(event.wheelDelta) * 120 ;
//             else if (event.detail) delta = -event.detail / Math.abs(event.detail) * 3;

//             console.log(scrollCanPass);

//             handle(delta);
//             scrollCanPass = false;
//             setTimeout(function() {
//                 scrollCanPass = true;
//             }, 300)
//         }
//         event.preventDefault();
//         event.returnValue = false;
//     }

//     function handle(delta) {
//         var time = 500;
//         var distance = 100;
//         //console.log(delta)
//         $('html, body').stop().animate({
//             scrollTop: $(window).scrollTop() - (distance * delta)
//         }, time);
//     }
// })


// if (window.location.href.indexOf('localhost') !== -1) {
// $('body').append('<div id="log"><div id="log1"></div><div id="log2"></div><div id="log3"></div><div id="log4"></div></div>')

// $( document ).on( "mousemove scroll load", function( event ) {
//   var ws = $(window).scrollTop(),
//       wh = $(window).height(),
//       sot,sh,sid,cSection ='dupa';



//   $( "#log1" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
//   $('#log2').text('');
//   $('section').each(function(){
//     sot = $(this).offset().top.toFixed(2);
//     sh =  $(this).height().toFixed(2);
//     sid =  $(this).attr('id');

//   if ( sot > ws && sot < ws + wh ) {
//       cSection = sid;
//   }  


//    $('#log2').append('<span id=o' + sid + '>' + sid.substring(0,7) + ' offset().top: ' + sot + '<br>');
//    $('#log2').append('<span id=h' + sid + '>' + sid.substring(0,7) + ' height: ' + sh + '<br>');
//    $('#log3').text(cSection);

//   });
//    $('#log4').text('');
//    $('#log4').append('$(window).scrollTop() : '+ ws +'<br>')
//    $('#log4').append('$(window).height() : '+ wh)
// });
// }
