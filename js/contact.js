$(document).ready(function() {

    (function($) {
        "use strict";



        // jquery validation plugin to validate contactForm form
        $(function() {
            $('#contactForm').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },

                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 20
                    }
                },
                messages: {
                    name: {
                        required: "<span style='color:red'>* Field required</span>",
                        minlength: "<span style='color:red'>* your name must consist of at least 3 characters</span>"
                    },
                    email: {
                        required: "<span style='color:red'>* Field required</span>",
                    },
                    message: {
                        required: "<span style='color:red'>* Field required</span>",
                        minlength: "<span style='color:red'>* your message must consist of at least 20 characters</span>"
                    }
                },
                submitHandler: function(form) {
                    swal({
                        title: "Thank You!",
                        text: "Will contact you soon!",
                        icon: "success",
                    });
                    //sweet alert to display to popup instead of simple alert
                }
            })
        })

    })(jQuery)
})