
    function decodeEmail(encodedEmail) {
        var email = "";
        for (var i = 0; i < encodedEmail.length; i++) {
            email += String.fromCharCode(encodedEmail.charCodeAt(i) - 1);
        }
        return email;
    }

    document.getElementById("email").innerHTML = decodeEmail("ifz@nzepo.dpn");

