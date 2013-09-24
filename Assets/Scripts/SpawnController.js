#pragma strict
public var enemyPrefab:GameObject;

function Start () {

}

function Update () {
	SpawnEnemy();
}

function SpawnEnemy () {
	Debug.Log("Spawning enemy...");

	var spawnArea:Vector3 = this.renderer.bounds.size;
	spawnArea.x *= Random.Range(-1.0,1.0)/2;
	spawnArea.y *= Random.Range(-1.0,1.0)/2;
	spawnArea.z *= Random.Range(-1.0,1.0)/2;
	Debug.Log(spawnArea);
		
    var tempEnemy:GameObject = Instantiate(enemyPrefab, Vector3(spawnArea.x,spawnArea.y,transform.position.z), transform.rotation);
}