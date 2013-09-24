#pragma strict

private var typeName:String = "com.iupui.virtualworlds";
private var gameName:String = "TestRoom";
private var hostList:HostData[];

function Start () {

}

function Update () {

}
 
function StartServer() {
    Network.InitializeServer(4, 25000, !Network.HavePublicAddress());
    MasterServer.RegisterHost(typeName, gameName);
}

function OnServerInitialized() {
    Debug.Log("Server Initializied");
}

function OnGUI() {
    if (!Network.isClient && !Network.isServer)
    {
        if (GUI.Button(new Rect(100, 100, 250, 100), "Start Server"))
            StartServer();
 
        if (GUI.Button(new Rect(100, 250, 250, 100), "Refresh Hosts"))
            RefreshHostList();
 
        if (hostList != null) {
			for (var i:int = 0; i < hostList.Length; i++) {
                if (GUI.Button(new Rect(400, 100 + (110 * i), 300, 100), hostList[i].gameName))
                    JoinServer(hostList[i]);
            }
        }
    }
}
 
function RefreshHostList() {
    MasterServer.RequestHostList(typeName);
}
 
function OnMasterServerEvent(msEvent:MasterServerEvent) {
    if (msEvent == MasterServerEvent.HostListReceived)
        hostList = MasterServer.PollHostList();
}

function JoinServer(hostData:HostData) {
    Network.Connect(hostData);
}
 
function OnConnectedToServer() {
    Debug.Log("Server Joined");
}