$().ready(function() { 
    $("#demoForm").validate();

    $('.container-field-namepoll input[name="namepoll"]').each(function(){
        $(this).rules('add', {
            required: true,
            minlength: 3,
            maxlength: 255,
            messages: {
                required: "Bắt buộc nhập namepoll",
                minlength: "Hãy nhập ít nhất 3 ký tự",
                maxlength: "Hãy nhập tối đa 255 ký tự"
            }
        })

    });

    $('.container-abc .container-field1 input[name="question"]').each(function(){
        $(this).rules('add', {
            required: true,
            minlength: 3,
            maxlength: 255,
            messages: {
                required: "Bắt buộc nhập question",
                minlength: "Hãy nhập ít nhất 3 ký tự",
                maxlength: "Hãy nhập tối đa 255 ký tự"
            }
        })

    });


    $('.container-field2 .container-field-add-button-answer input[name="answer"]').each(function(){
        $(this).rules('add', {
            required: true,
            minlength: 3,
            maxlength: 200,
            messages: {
                required: "Bắt buộc nhập answer",
                 minlength: "Hãy nhập ít nhất 3 ký tự",
                 maxlength: "Hãy nhập tối đa 200 ký tự"
            }
        })

    });

    })