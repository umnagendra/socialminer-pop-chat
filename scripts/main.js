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

// globals
var config;
var session = {};

/**
 * Executes on page load
 */
$(document).ready(function () {
        loadConfig();

        // auto-initiate a chat to SocialMiner after a fixed duration
        setTimeout(initiateChatToSocialMiner, config.popup.initdelay);
    }
);

/**
 * Loads configs from config/config.json
 */
function loadConfig () {
    console.log('Loading config...');
    $.get({
        url     : 'config/config.json',
        async   : false,
        success : function(configJson) {
                    console.log('Loaded config: ' + JSON.stringify(configJson));
                    config = configJson;
                  },
        error   : function(err) {
                    console.log('Failed to load config. Error = ' + err);
                  }
        });
}

/**
 * Initiates (POST) a chat request to SocialMiner
 */
function initiateChatToSocialMiner () {
    console.log("Initiating chat request to SocialMiner " + config.socialminer.host);
    restUtil.postChatRequest().done(function (data, textStatus, jqXHR) {
        // update session
        session.scRefURL = jqXHR.getResponseHeader(constants.locationHeader);
        console.log("Injection of chat successful. SC RefURL = " + session.scRefURL);
    });
}

function launchChatSession() {
        console.log('launching chat session...');
        $('#popup_chat_div').chatbox(options);
        $('#popup_chat_div').chatbox('option', 'boxManager').addMsg('Rosie', 'Welcome to our web page! How may I help you?');
}
