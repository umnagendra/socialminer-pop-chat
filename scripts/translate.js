/**
 * Cisco SocialMiner Pop-up Chat Example
 *
 * Copyright (c) 2016 by Cisco Systems, Inc.
 * All rights reserved.
 *
 * The code included in this example is intended to provide guidance to the
 * developer on best practices and usage of the SocialMiner Chat RESTful
 * APIs and is not intended for production use “as is”.
 *
 * Cisco's responsibility and liability on this code is limited ONLY to the
 * correctness and accuracy on the usage of the Chat RESTful API interface and
 * the quality of the Chat RESTful API interface itself. Any omissions from this
 * example are not to be considered capabilities that are supported or not
 * supported by the product.
 *
 * For specific capabilities refer to the documentation that accompanies the latest
 * Cisco SocialMiner release and/or request help from the Cisco Developer Network
 * (http://developer.cisco.com) or the Cisco Technical Assistance Center
 */

var translator = {
    translate : function (text, targetLang) {

        // if translation is not enabled, just return back the original message itself
        if (!config.translate.api_key) {
            return text;
        }
        
        var translatedMsg = null;
    
        var url = 'https://www.googleapis.com/language/translate/v2?key=' + config.translate.api_key + '&target=' + targetLang + '&format=text' + '&q=' + text;
    
        $.ajax({
            url: url,
            type: 'GET',
            data: 'json',
            async: false
        }).done(function(result) {
            console.log("Original Message [" + text + "] translated to [" + result.data.translations[0].translatedText + "]");
            translatedMsg = result.data.translations[0].translatedText;
        }).fail(function(error) {
            console.log("Error [" + error + "] while trying to translate original message [" + text + "]");
        });
    
        return translatedMsg;
    }
};