$(function ()
{
    const namaRegex =/^[a-zA-Z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const kodePosRegex = /^\d{5}(-\d{4})?$/;
    const teleponRegex = /^\d{10,12}$/;
    const alamatRegex = /^[a-zA-Z0-9\s.,#-]+$/;

    $('input').each(function ()
    {

        $(this).on('input', function ()
        {
            const pElement = $(this).parent().siblings().filter('p');

            if ($(this).attr('id') == "nama-regex")
            {
                if (namaRegex.test($(this).val()))
                {
                    $(this).removeClass('focus:ring-indigo-500 focus:ring-rose-400')
                    $(this).addClass("focus:ring-emerald-400")

                    pElement.html('Valid nama')
                    pElement.removeClass('text-rose-300')
                    pElement.addClass('text-emerald-300')
                }
                else
                {
                    $(this).removeClass('focus:ring-indigo-500 focus:ring-emerald-400')
                    $(this).addClass("focus:ring-rose-400")

                    pElement.html('Invalid name!')
                    pElement.removeClass('text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
            }
            else if ($(this).attr('id') == "email-regex")
            {
                if (emailRegex.test($(this).val()))
                {
                    $(this).removeClass('focus:ring-indigo-500 focus:ring-rose-400')
                    $(this).addClass("focus:ring-emerald-400")

                    pElement.html('email is strong 💪')
                    pElement.removeClass(' text-rose-300')
                    pElement.addClass('text-emerald-300')
                }
                else
                {
                    $(this).removeClass('focus:ring-indigo-500 focus:ring-emerald-400')
                    $(this).addClass("focus:ring-rose-400")

                    pElement.html('emailis not strong enough')
                    pElement.removeClass(' text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
            }
            else if ($(this).attr('id') == "kode-regex")
            {
                if (kodePosRegex.test($(this).val()))
                {
                    $(this).removeClass('focus:ring-indigo-500 focus:ring-rose-400')
                    $(this).addClass("focus:ring-emerald-400")

                    pElement.html('Valid code')
                    pElement.removeClass(' text-rose-300')
                    pElement.addClass('text-emerald-300')
                }
                else
                {
                    $(this).removeClass('focus:ring-indigo-500 focus:ring-emerald-400')
                    $(this).addClass("focus:ring-rose-400")

                    pElement.html('Invalid code')
                    pElement.removeClass(' text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
            }
            else if ($(this).attr('id') == "telepon-regex")
            {
                if (teleponRegex.test($(this).val()))
                {
                    $(this).removeClass('focus:ring-indigo-500 focus:ring-rose-400')
                    $(this).addClass("focus:ring-emerald-400")

                    pElement.html('Valid phone number')
                    pElement.removeClass(' text-rose-300')
                    pElement.addClass('text-emerald-300')
                }
                else
                {
                    $(this).removeClass('focus:ring-indigo-500 focus:ring-emerald-400')
                    $(this).addClass("focus:ring-rose-400")

                    pElement.html('Invalid phone number')
                    pElement.removeClass(' text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
            }
            else if ($(this).attr('id') == "alamat-regex")
            {
                if (alamatRegex.test($(this).val()))
                {
                    $(this).removeClass('focus:ring-indigo-500 focus:ring-rose-400')
                    $(this).addClass("focus:ring-emerald-400")

                    pElement.html('Valid address')
                    pElement.removeClass(' text-rose-300')
                    pElement.addClass('text-emerald-300')
                }
                else
                {
                    $(this).removeClass('focus:ring-indigo-500 focus:ring-emerald-400')
                    $(this).addClass("focus:ring-rose-400")

                    pElement.html('Invalid address! ')
                    pElement.removeClass(' text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
            }
        })
    })
})

// // Regex untuk validasi input
// const namaRegex = /^[a-zA-Z\s]+$/;
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const kodePosRegex = /^\d{5}(-\d{4})?$/;
// const teleponRegex = /^\d{10,12}$/;
// const alamatRegex = /^[a-zA-Z0-9\s.,#-]+$/;

// // Event listener untuk form submission
// document.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Menghentikan pengiriman form default

//     // Mendapatkan nilai input dari form
//     const nama = document.getElementById('nama').value;
//     const email = document.getElementById('email').value;
//     const kodePos = document.getElementById('kodePos').value;
//     const telepon = document.getElementById('telepon').value;
//     const alamat = document.getElementById('alamat').value;

//     // Memeriksa nilai input dengan regex
//     if (!namaRegex.test(nama)) {
//         alert('Nama tidak valid!');
//         return;
//     }
//     if (!emailRegex.test(email)) {
//         alert('Email tidak valid!');
//         return;
//     }
//     if (!kodePosRegex.test(kodePos)) {
//         alert('Kode Pos tidak valid!');
//         return;
//     }
//     if (!teleponRegex.test(telepon)) {
//         alert('Nomor Telepon tidak valid!');
//         return;
//     }
//     if (!alamatRegex.test(alamat)) {
//         alert('Alamat tidak valid!');
//         return;
//     }

//     // Jika semuanya valid, kirim data ke server atau lakukan tindakan lainnya
//     // this.submit(); // Ini akan mengirimkan form jika semua input valid
// });