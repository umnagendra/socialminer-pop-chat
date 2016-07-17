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

// Based on an open-source jQuery-UI based chatbox plugin
// See https://github.com/dexterpu/jquery.ui.chatbox

var options = {
    id: 'popup_chat_div',
    title: 'How may I help you?',
    user: 'Rosie',
    hidden: false,
    width: 250,
    offset: 20,
    messageSent: function (id, user, msg) {
                    alert('ID = ' + id + ', user = ' + user + 'msg = ' + msg);
                 },
    boxClosed: function (id) {
        alert('Box closed. ID = ' + id);
    }
};


