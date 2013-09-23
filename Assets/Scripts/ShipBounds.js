#pragma strict
public var forceScale:float = 0.1;
public var forceDirection:Vector3 = Vector3(0,0,0);
internal var totalForce:Vector3;

function Start () {
	totalForce = forceDirection * forceScale;
}

function Update () {
}

function OnTriggerEnter (other:Collider) {
	Debug.Log("ENTER");
	if (other.transform.tag == "Player"){
		Debug.Log("BAM!");
	}
}

function OnTriggerStay (other : Collider) {
	Debug.Log("STAY");
	if (other.attachedRigidbody) {
		Debug.Log("Has rigid body...");
		//other.attachedRigidbody.AddForce(Vector3.up * 100);
		//other.attachedRigidbody.velocity(new Vector3(0,0,5));
		other.rigidbody.velocity += totalForce;
	}
	Debug.Log(other.attachedRigidbody.velocity);
}

function OnTriggerExit (other:Collider) {
	Debug.Log("EXIT");
	if (other.transform.tag == "Player"){
		other.rigidbody.velocity = Vector3(0,0,0);
	}
}