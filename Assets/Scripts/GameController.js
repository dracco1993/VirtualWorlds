#pragma strict

public var enemySpawner:GameObject;
internal var enemyScript:SpawnController;

function Start () {
	 enemyScript = enemySpawner.GetComponent(SpawnController);
	 enemyScript.SpawnEnemy();
}

function Update () {
	//enemyScript.SpawnEnemy();
}