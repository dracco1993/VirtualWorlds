#pragma strict
public var speed:Number = 2;
private var playerShip:GameObject;

function Start () {
	//Debug.Log("START");
	playerShip = GameObject.Find("MainShip");
	transform.rigidbody.velocity = Vector3(0,0,-speed);
}

function FixedUpdate () {
	//Simple "move toward the player"
	var distance:Vector3 = playerShip.transform.position - transform.transform.position;
	transform.rigidbody.velocity = Vector3(distance.x, distance.y, -speed);
	
}