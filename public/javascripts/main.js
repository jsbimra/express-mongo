/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function () {

    var editBtn = document.getElementById('editQuoteBtn');
    
    if(editBtn)
        editBtn.addEventListener('click', function (e) {

            e.preventDefault();

            // Send PUT Request here
            //console.log('put request here');
            //console.log( 'name', document.getElementById('formQuotes')['name'].value);
            //console.log('quote', document.getElementById('formQuotes')['quote'].value);
            
            var usp = new URLSearchParams(location.search);
            var queryNameVal = usp.get('name');
            
            var nameVal = document.getElementById('formQuotes')['name'].value;
            var quoteVal = document.getElementById('formQuotes')['quote'].value;
            
            if(queryNameVal){

                fetch('quotes', {
                    method: 'put',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        'queryName': queryNameVal,
                        'name': nameVal,
                        'quote': quoteVal
                    })
                }).then(response => {
                    if (response.ok)
                        return response.json();
                }).then(data => {
                    //console.log(data);
                    if(data.ok === 1){
                        location.href='/listQuotes';
                    }
                });
            }else{
                console.error('Query name value not found to update the put request!');
            }
        });
});