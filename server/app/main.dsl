context 
{
    // declare input variables here. phone must always be declared. name is optional 
    input phone: string;
    input name: string = ""; 

    // declare storage variables here 
    var1: string = "";

}

// lines 28-42 start node 
start node root 
{
    do //actions executed in this node 
    {
        #connectSafe($phone); // connecting to the phone number which is specified in index.js that it can also be in-terminal text chat
        #waitForSpeech(500); // give the person a second to start speaking 
        #say("greeting", {name: $name} ); // and greet them. Refer to phrasemap.json > "greeting" (line 12); note the variable $name for phrasemap use
        wait *;
        exit;
    }
}

