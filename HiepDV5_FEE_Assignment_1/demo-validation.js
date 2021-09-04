$().ready(function() {
	$('#demoForm').validate({

		
        
        rules: {
            "namepoll": {
                required: true,
                minlength: 3,
                maxlength: 255
            },
            "question": {
                required: true,
                minlength: 3,
                maxlength: 255
            },
            "answer": {
                required: true,
                minlength: 3,
                maxlength: 200
                
            }
        },
        messages: {
            "namepoll": {
                required: "Bắt buộc nhập namepoll",
                minlength: "Hãy nhập ít nhất 3 ký tự",
                maxlength: "Hãy nhập tối đa 255 ký tự"
            },
            "question": {
                required: "Bắt buộc nhập question",
                minlength: "Hãy nhập ít nhất 3 ký tự",
                maxlength: "Hãy nhập tối đa 255 ký tự"
            },
            "answer": {
                required: "Bắt buộc nhập answer",
                minlength: "Hãy nhập ít nhất 3 ký tự",
                maxlength: "Hãy nhập tối đa 200 ký tự"
            }
        }
	});
});





