
extends Node2D
var stream = null


func _ready():
	stream = get_node('StreamPlayer')
	stream.play()

func _process(delta):
	pass