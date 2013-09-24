#pragma strict
public var speed:Number = 2;

function Start () {
	Debug.Log("START");
	transform.rigidbody.velocity = Vector3(0,0,-speed);
}

function Update () {

}