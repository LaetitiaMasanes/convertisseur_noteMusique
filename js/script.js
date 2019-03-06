(function()
{
    var exemple1 =
    {
        init: function()
        {
            window.addEventListener('load', function(event)
            {
                var form=document.getElementById('form1');
                form.addEventListener('submit', function(event)
                {
                    event.preventDefault();
                    if(!form.note_classique.value)
                    {
                        var div = document.getElementById('resultat');
                        div.innerHTML="Aucune note choisie !";
                        return;
                    }
                    var xmlhttp=new XMLHttpRequest();
                    xmlhttp.addEventListener('readystatechange', function(event)
                    {
                        if (xmlhttp.readyState==4)
                        {
                            if (xmlhttp.status == "200")
                            {
                                var div = document.getElementById('resultat');
                                div.innerHTML = xmlhttp.responseText;
                            }
                            else
                            {
                                alert('error code' + xmlhttp.status + ' : ' + xmlhttp.statusText);
                            }
                        }
                    });
                    xmlhttp.open("POST", form.action, true);
                    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8");
                    xmlhttp.send("note_classique=" + form.note_classique.value);
                });

                var element=document.getElementById('link1');
                element.addEventListener('click', function(event)
                {
                    event.preventDefault ? event.preventDefault() : event.returnValue = false;
                    var xmlhttp=new XMLHttpRequest();
                    xmlhttp.addEventListener('readystatechange', function(event)
                    {
                        if (xmlhttp.readyState==4)
                        {
                            if (xmlhttp.status == "200")
                            {
                                var div = document.getElementById('result1');
                                div.innerHTML = xmlhttp.responseText;
                            }
                            else
                            {
                                alert('error code ' + xmlhttp.status + ' : ' + xmlhttp.statusText);
                            }
                        }
                    });
                    xmlhttp.open("GET", element.href, true);
                    xmlhttp.send();
                });
            });
        }
    };
    exemple1.init();
})();
