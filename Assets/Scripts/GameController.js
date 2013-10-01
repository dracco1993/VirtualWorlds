#pragma strict
//Container variables
public var spawnerPrefab:GameObject;
public var playerShip:GameObject;
public var playerBounds:GameObject;
private var currentSpawner:GameObject;
internal var enemyScript:SpawnController;

//Setting variables
private var wave:int = 1;
private var waveLength:float = 20;
private var difficulty:float = 1;
private var eSpawnRate:int = 50;

function Start () {
	MakeSpawner();
	//enemyScript = currentSpawner.GetComponent(SpawnController);
	//enemyScript.isActive = true;
	//enemyScript.SpawnEnemy();
}

function FixedUpdate () {
	playerBounds.transform.position.z += 0.05;
	
	//Check to see is the player is past the current spawner
	if(playerShip.transform.position.z > currentSpawner.transform.position.z){
		//If they are, destroy the previous wave and spawn the next wave
		UnityEngine.Object.Destroy(currentSpawner);
		wave++;
		//eSpawnRate = 100 - (wave*10);
		MakeSpawner();
	}
	//enemyScript.SpawnEnemy();
}

function MakeSpawner () {
	var tempSpawner:GameObject = Instantiate(spawnerPrefab);
	tempSpawner.transform.position = Vector3(0,0,wave*waveLength);
	
	enemyScript = tempSpawner.GetComponent(SpawnController);
	enemyScript.spawnRate = eSpawnRate;
	enemyScript.isActive = true;
	currentSpawner = tempSpawner;
}