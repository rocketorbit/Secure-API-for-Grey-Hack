# Secure-API-for-Grey-Hack

An API demo for the game Grey Hack that is secure for both the developer and the user.

You first need to find a lib that has a guest shell exploit, and is secure enough that wont get you hacked.

Then you put your root password in interface, compile it and put it on the server.

You then put the guest exploit in wrapper, and release the wrapper and the client both as their source code format.

Congrats! You have a service that doesnt require the user to run ANY binary on their machines.(Sadly this service only contain one feature that checks if the server is online.)
