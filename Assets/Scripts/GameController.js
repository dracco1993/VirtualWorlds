#pragma strict
//Container variables
public var spawnerPrefab:GameObject;
public var enemySpawner:GameObject;
internal var enemyScript:SpawnController;

//Setting variables
private var wave:int = 1;
private var waveLength:float = 20;
private var difficulty:float = 1;

function Start () {
	MakeSpawner();
	enemyScript = enemySpawner.GetComponent(SpawnController);
	enemyScript.isActive = true;
	//enemyScript.SpawnEnemy();
}

function Update () {
	//enemyScript.SpawnEnemy();
}

function MakeSpawner () {
	var tempSpawner:GameObject = Instantiate(enemyPrefab, Vector3(spawnArea.x,spawnArea.y,transform.position.z), transform.rotation);
}