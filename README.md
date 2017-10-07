# Unified CCX Live Chat Sample (via Cisco SocialMiner)
Example illustrating a proactive customer-side pop-up live chat with Cisco Unified CCX web chat via Cisco SocialMiner

![image](https://user-images.githubusercontent.com/990210/30850967-e7be3a9c-a2c4-11e7-962b-072797a3661b.png)

## DISCLAIMER
The Proactive customer-side pop-up live chat sample is intended to serve as an example
of using SocialMiner REST APIs (specifically, the `chat` APIs) using a simple static web
application which can be hosted and served from any web server.

This is only a sample and is NOT intended to be a production quality application and
will not be supported as such. It is NOT guaranteed to be bug free. It is merely provided
as a guide for 3rd-party developers on best practices and usage of the SocialMiner RESTful
APIs and is not intended for production use "as is".

Cisco's responsibility and liability on this code is limited ONLY to the correctness and
accuracy on the usage of the RESTful API interface and the quality of the RESTful API
interface itself. Any omissions from this example are not to be considered capabilities
that are supported or not supported by the product.

For specific capabilities refer to the documentation that accompanies the latest Cisco SocialMiner
release and/or request help from the Cisco Developer Network (http://developer.cisco.com)
or the Cisco Technical Assistance Center.


## OVERVIEW
This sample does the following:

*  Provides a basic example web page with a built-in logic to inject a web chat request into Cisco SocialMiner
   based on a simple time delay.

*  Implements a __pop-up live chat chat bubble__ which serves as a customer chat client to send and receive chat
   messages from CCX chat agents.

*  Thereby illustrates usage of SocialMiner chat feed APIs, and abilities to customize and extend Unified CCX
   web chat capabilities.

![image](https://user-images.githubusercontent.com/990210/31310748-540c99d8-abbb-11e7-848d-67e6f03a2234.png)

## PREREQUISITES
* Your favorite static web server
* Cisco SocialMiner 11.5 SU (and future releases)
* Cisco Unified CCX 11.5 (and future releases) with all chat configurations in place


## CONFIGURATION
The `config/config.json` allows you to customize important details required to run this sample.
Modify it with details such as:
 * Cisco SocialMiner IP / Hostname
 * Chat feed ID, Chat Contact Service Queue ID
 * misc. configurations


## RUNNING
* Modify `config/config.json` (see above section)

* Host the entire code in this project (`index.html`, `config/`, `scripts/` and `styles/` directories) to be served
from your favorite static web server.

* Login chat agents into the Finesse desktop, and move them to __READY__ state for Chat and Email.

* Access `index.html` via web server, and a chat will be injected into the CCX system (via SocialMiner) and routed to the right available chat agent, who can then accept, join and start the chat conversation. This will pop-up the chat bubble on the customer web page.


## UNDERSTANDING THE CODE
This sample has been created with the intention that the code be read, understood and re-used. Comments in code call attention to key aspects of the RESTful APIs and other relevant stuff.

Reach out via Cisco DevNet community forums for any support questions.
