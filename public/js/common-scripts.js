/*
* Author: Lexx YungCarter
* Twitter: @UnderscoreLexx
* Github: https://github.com/lexxyungcarter
*/
$(document).ready(function(e) {
	// get token
    var _token = $('meta[name="csrf-token"]').attr('content');
    if (! _token) {
        _token = $('input[name="csrf-token"]').val();
    }
    // attach to window
    window.token = _token;

	// tweaks for laracast generators
	$('#flash-overlay-modal').modal();
	$('div.alert').not('.alert-important').delay(3000).fadeOut(350);

	// configure axios
    axios.defaults.headers.common['X-CSRF-TOKEN'] = _token;
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    // configure toastr
    toastr.options = {
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    if ($('table.enable-data-table').length) {
        // activate datatables
        $('table.enable-data-table').dataTable({
            processing: true
        });
    }

    if ($('.select2').length) {
        // activate select2
        $('.select2').select2();
    }

    if ($('.enable-tinymce').length) {
        // activate tinymce
        tinymce.init({
            selector: '.enable-tinymce',
            height: 450,
            theme: 'modern',
            plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media table charmap hr pagebreak nonbreaking anchor toc insertdatetime lists textcolor wordcount imagetools  contextmenu colorpicker textpattern help',
            toolbar1: 'formatselect | undo redo | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat',
            content_css: [
                '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
                '//www.tinymce.com/css/codepen.min.css'
            ]
        });
    }

    if ($('.enable-tinymce-minimal').length) {
        // activate tinymce
        tinymce.init({
            selector: '.enable-tinymce-minimal',
            height: 150,
            theme: 'modern',
            plugins: 'textcolor spellchecker lists advlist',
            toolbar : "undo redo | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat",
            content_css: [
                '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
                '//www.tinymce.com/css/codepen.min.css'
            ],
            menubar: false,
            statusbar: false
        });
    }

    if ($('.enable-ckeditor').length) {
        // activate ckeditor
        CKEDITOR.replace( '.enable-ckeditor', {
        });
    }

    // global swal before delete button
    $('body').on('click', '.global-delete-btn', function(e) {
        var item = $(this).data('item');
        if (! item) {
            item = 'item'; // make sure item is not null
        }

        swal({
            title: "Are you sure?",
            text: "Are you sure you want to delete the " + item + "?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: 'Yes, I am sure.'
        })
        .then((result) => {
            if (result.value) {
                swal("Processing...", {
                    type: "success",
                });
            } else {
                e.preventDefault();
                // swal("Operation Cancelled!");
            }
        });
    });

    // global swal before delete form
    $('.global-delete-form').submit(function(e) {
        e.preventDefault();
        var item = $(this).data('item');
        var form = $(this);
        if (! item) {
            item = 'item'; // make sure item is not null
        }

        swal({
            title: "Are you sure?",
            text: "Are you sure you want to delete the " + item + "?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: 'Yes, I am sure.'
        })
        .then((result) => {
            if (result.value) {
                form.unbind('submit').submit();
            } else {
                // swal("Operation Cancelled!");
            }
        });
    });


    // flatpickr
    if ($('.flatpickr').length) {
        // activate flatpickr
        $(".flatpickr").flatpickr();
    }
    if ($('.flatpickr-friendly').length) {
        // activate flatpickr
        $(".flatpickr-friendly").flatpickr({
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
        });
    }
    if ($('.flatpickr-friendly-min-today').length) {
        // activate flatpickr
        $(".flatpickr-friendly-min-today").flatpickr({
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
            minDate: "today"
        });
    }
    if ($('.flatpickr-friendly-max-today').length) {
        // activate flatpickr
        $(".flatpickr-friendly-max-today").flatpickr({
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
            maxDate: "today"
        });
    }
    if ($('.flatpickr-datetime').length) {
        $(".flatpickr-datetime").flatpickr({
            enableTime: true,
        });
    }
    if ($('.flatpickr-time').length) {
        $(".flatpickr-time").flatpickr({
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
        });
    }
    if ($('.flatpickr-range').length) {
        $(".flatpickr-range").flatpickr({
            mode: "range",
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
        });
    }
    if ($('.flatpickr-range-minimum-today').length) {
        $(".flatpickr-range-minimum-today").flatpickr({
            mode: "range",
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
            minDate: "today"
        });
    }

    // tooltip by popper.js
    if ($('.popper-tooltip').length) {
        var referenceElement = $('.popper-tooltip');
        var title = referenceElement.data('title');
        const instance = new Tooltip(referenceElement, {
            title: title,
            trigger: "hover",
        });
        instance.show();
    }

    // tooltip by tippy.js
    if ($('.tippy').length) {
        tippy('.tippy', {
            delay: 100,
            arrow: true,
            arrowType: 'round',
            duration: 500,
            animation: 'scale'
        });
    }

    // dropzone
    if ($('.enable-dropzone').length) {
        Dropzone.autoDiscover = false;
        $('.enable-dropzone').addClass('dropzone');

        var dropzoneElement = $('.enable-dropzone');
        var dropzoneUrl = dropzoneElement.data('url');
        var dropzoneAcceptedFiles = dropzoneElement.data('accepted-files');
        var myDropzone = new Dropzone('.enable-dropzone' ,{
            url: dropzoneUrl,
            method: "POST",
            maxFilesize: 8,
            acceptedFiles: dropzoneAcceptedFiles
        });

        myDropzone.on("success", function (file, response) {
            myDropzone.removeFile(file);
            toastr.success("File Uploaded.");
            // refresh page
            location.reload(true);
        });
    }


});

/**
 * Return a progress bar
 * @param int percent
 * @param string color
 * @param boolean show_percentage
 * @return string html_progress_bar
 */
function load_progress_bar(percent = 45, color = 'primary', show_percentage = false)
{
    // create progress bar 'component'
    var progress_bar = '<div class="progress">';
    progress_bar += '<div class="progress-bar progress-bar-striped progress-bar-' + color + ' active" role="progressbar" aria-valuenow="' + percent +'" aria-valuemin="0" aria-valuemax="100" style="width: ' + percent + '%">';
    progress_bar += '<span class="';
    progress_bar += show_percentage ? '' : 'sr-only';
    progress_bar += '">' + percent + '% Complete</span>';
    progress_bar += '</div></div>';
    return progress_bar;
}