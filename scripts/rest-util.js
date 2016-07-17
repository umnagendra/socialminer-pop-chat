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

var restUtil = {
    postChatRequest : function () {
        console.log('Got request to post a chat request to SocialMiner ' + config.socialminer.host);
        return $.post({
            url         : constants.scheme + config.socialminer.host + constants.chatURI,
            data        : constructPostPayload(),
            contentType : constants.xmlMIMEType
        });
    }
};

function constructPostPayload () {
    var feedRefURL = constants.scheme + config.socialminer.host + constants.feedRefURL + config.chat.feedid;
    var chatPostPayload =   '<SocialContact>' +
                                '<feedRefURL>' + feedRefURL + '</feedRefURL>' +
                                '<author>' + config.chat.author  + '</author>' +
                                '<title>' + config.chat.title  + '</title>' +
                            '</SocialContact>';

    console.log ('Chat request (POST) : ' + chatPostPayload);
    return chatPostPayload;
}