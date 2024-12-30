package router

import (
	"todolist/controller"

	"github.com/gin-gonic/gin"
)

func InitRoutes(router *gin.Engine) *gin.Engine {
	router.GET("/api/todos", controller.GetAllTodos)
	router.POST("/api/todos", controller.CreateTodo)
	router.GET("/api/todos/:id", controller.GetTodoByID)
	router.PUT("/api/todos/:id", controller.UpdateTodo)
	router.DELETE("/api/todos/:id", controller.DeleteTodo)

	return router
}
