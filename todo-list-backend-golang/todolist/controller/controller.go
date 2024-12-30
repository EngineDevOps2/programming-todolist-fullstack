package controller

import (
	"todolist/config"
	"todolist/model"
	"net/http"

	"github.com/gin-gonic/gin"
)

var db = config.Connection_DB()

func GetAllTodos(c *gin.Context) {
	var todos []model.Todo
	db.Find(&todos)
	c.JSON(http.StatusOK, todos)
}

func GetTodoByID(c *gin.Context) {
	id := c.Param("id")
	var todo model.Todo

	if err := db.First(&todo, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Task NOT FOUND"})
		return
	}
	c.JSON(http.StatusOK, todo)

}

func CreateTodo(c *gin.Context) {
	var todo model.Todo

	if err := c.ShouldBindJSON(&todo); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"Error": err.Error()})
		return
	}
	db.Create(&todo)
	c.JSON(http.StatusOK, todo)
}

func UpdateTodo(c *gin.Context) {

	id := c.Param("id")
	var todo model.Todo
	if err := db.First(&todo, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Task Not Found"})
		return
	}
	if err := c.ShouldBindJSON(&todo); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	db.Save(&todo)
	c.JSON(http.StatusOK, todo)

}

func DeleteTodo(c *gin.Context) {

	id := c.Param("id")
	var todo model.Todo
	if err := db.First(&todo, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"Error": "Task Not Found"})
		return
	}

	db.Delete(&todo)

	c.JSON(http.StatusOK, gin.H{"Message": "Task Deleting ....."})
	return

}
