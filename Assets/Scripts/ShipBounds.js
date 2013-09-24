#pragma strict
public var forceScale:float = 0.1;
public var forceDirection:Vector3 = Vector3(0,0,0);
internal var totalForce:Vector3;

function Start () {
	totalForce = forceDirection * forceScale;
}

function Update () {

}

function OnTriggerStay (other : Collider) {
	if ((other.attachedRigidbody) && (other.transform.tag == "Player")) {
		other.rigidbody.velocity += totalForce;
	}
}

function OnTriggerExit (other:Collider) {
	if (other.transform.tag == "Player"){
		other.rigidbody.velocity = Vector3(0,0,0);
	}
}